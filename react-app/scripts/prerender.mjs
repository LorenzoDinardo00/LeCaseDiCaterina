// Post-build prerender: per ogni route nota genera build/<route>/index.html
// con title/meta/JSON-LD/noscript content pronti, mantenendo il bundle React
// per l'idratazione lato client. Niente puppeteer: si manipola l'HTML statico.

import { readFile, writeFile, mkdir, copyFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import {
    SITE,
    ROOMS,
    ATTRACTIONS,
    FAQ_DATA,
    PRERENDER_ROUTES,
    LANDING_ROUTES,
    defaultSiteJsonLd,
    roomJsonLd,
    breadcrumbJsonLd,
    faqJsonLd,
    absUrl,
    alternateUrlsForPath
} from '../src/siteMetadata.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const BUILD_DIR = path.resolve(__dirname, '..', 'build')

const escapeHtml = (s = '') =>
    String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

const safeJsonLd = (obj) =>
    JSON.stringify(obj).replace(/</g, '\\u003c')

function metaTags({ title, description, canonical, image, noindex, language, alternates = null }) {
    const ogLocale = language === 'en' ? 'en_US' : 'it_IT'
    const robots = noindex
        ? '<meta name="robots" content="noindex,nofollow">'
        : '<meta name="robots" content="index,follow,max-image-preview:large">'
    const alternateLinks = Object.entries(alternates || alternateUrlsForPath(new URL(canonical).pathname))
        .map(([hreflang, href]) => `<link rel="alternate" hreflang="${escapeHtml(hreflang)}" href="${escapeHtml(href)}">`)
        .join('\n    ')
    return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="canonical" href="${escapeHtml(canonical)}">
    ${alternateLinks}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${escapeHtml(SITE.name)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${escapeHtml(canonical)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="og:locale" content="${ogLocale}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    ${robots}`
}

function jsonLdScripts(blocks) {
    return blocks
        .filter(Boolean)
        .map((b) => `<script type="application/ld+json">${safeJsonLd(b)}</script>`)
        .join('\n    ')
}

function noscriptHomeBlock(lang = 'it') {
    if (lang === 'en') {
        return `<h1>Le Stanze di Caterina — luxury B&amp;B in Florence, 50 m from the Duomo</h1>
<p>Le Stanze di Caterina is a luxury property in the historic centre of Florence, at Via dello Studio 12, just 50 metres from the Duomo di Santa Maria del Fiore. Three themed suites — Spanish, Italian, French — combine Renaissance elegance with contemporary comfort.</p>
<h2>Our suites</h2>
<ul>
<li><strong>Spanish Suite</strong> (35 m²) — 15th-century brick walls, handcrafted golden headboard, rain shower.</li>
<li><strong>Italian Suite</strong> (30 m²) — Carrara marble bathroom, designer furniture, quiet courtyard room.</li>
<li><strong>French Suite</strong> (28 m²) — Renaissance-inspired interiors, fully renovated private bathroom.</li>
</ul>
<h2>Amenities</h2>
<p>Free ultra-fast Wi-Fi, air conditioning, Smart TV, minibar, safe, private bathroom in every suite. Flexible check-in and 24/7 support.</p>
<h2>Contact</h2>
<p>Email: ${SITE.email} — Phone / WhatsApp: ${SITE.phone} — Website: <a href="${SITE.baseUrl}">${SITE.baseUrl}</a></p>`
    }
    return `<h1>Le Stanze di Caterina — B&amp;B di lusso a Firenze, a 50 m dal Duomo</h1>
<p>Le Stanze di Caterina è un alloggio di lusso nel centro storico di Firenze, in Via dello Studio 12, a soli 50 metri dal Duomo di Santa Maria del Fiore. Tre suite a tema — Spagnola, Italiana, Francese — uniscono eleganza rinascimentale e comfort contemporaneo.</p>
<h2>Le nostre suite</h2>
<ul>
<li><strong>Suite Spagnola</strong> (35 m²) — muri in mattoni del XV secolo, testata dorata artigianale, doccia a pioggia.</li>
<li><strong>Suite Italiana</strong> (30 m²) — bagno in marmo di Carrara, design d’autore, camera silenziosa sul cortile interno.</li>
<li><strong>Suite Francese</strong> (28 m²) — arredi ispirati al Rinascimento, bagno privato completamente rinnovato.</li>
</ul>
<h2>Servizi</h2>
<p>Wi-Fi ultraveloce gratuito, aria condizionata, Smart TV, minibar, cassaforte e bagno privato in ogni suite. Check-in flessibile e assistenza 24/7.</p>
<h2>Contatti</h2>
<p>Email: ${SITE.email} — Telefono / WhatsApp: ${SITE.phone} — Sito ufficiale: <a href="${SITE.baseUrl}">${SITE.baseUrl}</a></p>`
}

function noscriptRoomBlock(slug, lang = 'it') {
    const r = ROOMS[slug]
    if (!r) return ''
    const name = lang === 'en' ? r.nameEn : r.nameIt
    const description = lang === 'en' ? r.descriptionEn : r.descriptionIt
    if (lang === 'en') {
        return `<h1>${escapeHtml(name)} — Le Stanze di Caterina, Florence</h1>
<p>${escapeHtml(description)}</p>
<ul>
<li>Size: ${r.size} m²</li>
<li>Max guests: ${r.guests}</li>
<li>Beds: ${r.beds} (double)</li>
<li>Private bathrooms: ${r.bathrooms}</li>
</ul>
<p>Amenities: ultra-fast Wi-Fi, air conditioning, Smart TV, minibar, safe, private bathroom.</p>
<p>Location: Via dello Studio 12, 50122 Florence — 50 m from the Florence Duomo (2 min on foot).</p>
<p>Book this room: <a href="${SITE.baseUrl}/prenota">${SITE.baseUrl}/prenota</a> (redirect to the external Xenion booking engine).</p>`
    }
    return `<h1>${escapeHtml(name)} — Le Stanze di Caterina, Firenze</h1>
<p>${escapeHtml(description)}</p>
<ul>
<li>Superficie: ${r.size} m²</li>
<li>Ospiti max: ${r.guests}</li>
<li>Letti: ${r.beds} (matrimoniale)</li>
<li>Bagni privati: ${r.bathrooms}</li>
</ul>
<p>Servizi: Wi-Fi ultraveloce, aria condizionata, Smart TV, minibar, cassaforte, bagno privato.</p>
<p>Posizione: Via dello Studio 12, 50122 Firenze — a 50 m dal Duomo di Firenze (2 minuti a piedi).</p>
<p>Prenota questa stanza: <a href="${SITE.baseUrl}/prenota">${SITE.baseUrl}/prenota</a> (reindirizzamento al motore di prenotazione esterno Xenion).</p>`
}

function noscriptFaqBlock(lang = 'it') {
    const items = FAQ_DATA[lang] || FAQ_DATA.it
    const heading = lang === 'en' ? 'Frequently Asked Questions' : 'Domande Frequenti'
    return `<h1>${heading} — Le Stanze di Caterina</h1>` +
        items.map((it) => `<h2>${escapeHtml(it.q)}</h2><p>${escapeHtml(it.a)}</p>`).join('\n')
}

function noscriptGalleryBlock(lang = 'it') {
    if (lang === 'en') {
        return `<h1>Gallery — Le Stanze di Caterina</h1>
<p>Photo gallery of the three suites (Spanish, Italian, French) and the historic interiors of Le Stanze di Caterina, in Via dello Studio 12, 50 m from the Florence Duomo.</p>`
    }
    return `<h1>Galleria — Le Stanze di Caterina</h1>
<p>Galleria fotografica delle tre suite (Spagnola, Italiana, Francese) e degli ambienti storici di Le Stanze di Caterina, in Via dello Studio 12, a 50 m dal Duomo di Firenze.</p>`
}

function noscriptAIKnowledgeBlock(lang = 'it') {
    const head = lang === 'en'
        ? 'AI Knowledge Base — Le Stanze di Caterina'
        : 'Knowledge base AI — Le Stanze di Caterina'
    const intro = lang === 'en'
        ? 'Structured knowledge base for AI assistants and answer engines about Le Stanze di Caterina.'
        : 'Knowledge base strutturata per assistenti AI e motori di risposta su Le Stanze di Caterina.'
    const rooms = Object.values(ROOMS).map((r) => {
        const name = lang === 'en' ? r.nameEn : r.nameIt
        const desc = lang === 'en' ? r.descriptionEn : r.descriptionIt
        return `<h3>${escapeHtml(name)}</h3><p>${escapeHtml(desc)}</p><p>${r.size} m² · ${r.guests} ${lang === 'en' ? 'guests' : 'ospiti'} · <a href="${SITE.baseUrl}/stanza/${r.slug}">${SITE.baseUrl}/stanza/${r.slug}</a></p>`
    }).join('\n')
    const attractions = ATTRACTIONS.map((a) => `<li>${escapeHtml(a.name)} — ${a.distanceMinutes} ${lang === 'en' ? 'min' : 'min'}${a.mode ? ' (' + a.mode + ')' : ''}${a.distanceMeters ? ' (~' + a.distanceMeters + ' m)' : ''}</li>`).join('')
    return `<h1>${head}</h1>
<p>${intro}</p>
<h2>${lang === 'en' ? 'Identity' : 'Identità'}</h2>
<ul>
<li>${SITE.name} · ${SITE.address.streetAddress}, ${SITE.address.postalCode} ${SITE.address.addressLocality}</li>
<li>${lang === 'en' ? 'Phone' : 'Telefono'}: ${SITE.phone} · Email: ${SITE.email}</li>
<li>${lang === 'en' ? 'Website' : 'Sito'}: <a href="${SITE.baseUrl}">${SITE.baseUrl}</a></li>
</ul>
<h2>${lang === 'en' ? 'Rooms' : 'Stanze'}</h2>
${rooms}
<h2>${lang === 'en' ? 'Distances' : 'Distanze'}</h2>
<ul>${attractions}</ul>
<h2>${lang === 'en' ? 'FAQ' : 'FAQ'}</h2>
${noscriptFaqBlock(lang).replace(/^<h1>[^<]+<\/h1>/, '')}`
}

function noscriptBookingBlock(lang = 'it') {
    if (lang === 'en') {
        return `<h1>Booking redirect — Le Stanze di Caterina</h1>
<p>This page redirects to the external Xenion booking engine (my.xenion.it). Xenion is a third-party provider, separate and independent from Le Stanze di Caterina. The domain my.xenion.it is not owned by the property.</p>
<p><a href="https://my.xenion.it/lestanzedicaterina/paginaprenotazione?idstructure=1&amp;lang=en">Proceed to Xenion booking site</a> · <a href="${SITE.baseUrl}">Back to ${SITE.baseUrl}</a></p>`
    }
    return `<h1>Reindirizzamento prenotazione — Le Stanze di Caterina</h1>
<p>Questa pagina reindirizza al motore di prenotazione esterno Xenion (my.xenion.it). Xenion è un fornitore terzo, autonomo e indipendente da Le Stanze di Caterina. Il dominio my.xenion.it non è di proprietà della struttura.</p>
<p><a href="https://my.xenion.it/lestanzedicaterina/paginaprenotazione?idstructure=1&amp;lang=it">Procedi al sito Xenion</a> · <a href="${SITE.baseUrl}">Torna a ${SITE.baseUrl}</a></p>`
}

function noscriptPolicyBlock(kind, lang = 'it') {
    const isPrivacy = kind === 'privacy'
    const titleIt = isPrivacy ? 'Privacy Policy — Le Stanze di Caterina' : 'Cookie Policy — Le Stanze di Caterina'
    const titleEn = isPrivacy ? 'Privacy Notice — Le Stanze di Caterina' : 'Cookie Policy — Le Stanze di Caterina'
    const title = lang === 'en' ? titleEn : titleIt
    const body = lang === 'en'
        ? 'See the live page for the complete notice. Controller: Ditta Individuale Marretti Giacomo — VAT 07282350482 — CIN IT048017B4UPQMRN5Z.'
        : 'Per il testo completo consulta la pagina interattiva. Titolare: Ditta Individuale Marretti Giacomo — P.IVA 07282350482 — CIN IT048017B4UPQMRN5Z.'
    return `<h1>${title}</h1><p>${body}</p>`
}

function buildJsonLdForRoute(route, lang = 'it') {
    const blocks = []
    if (route.path === '/') {
        blocks.push(defaultSiteJsonLd())
        blocks.push(breadcrumbJsonLd([{ name: 'Home', path: '/' }]))
        blocks.push(faqJsonLd(lang))
    } else if (route.isRoom) {
        blocks.push(roomJsonLd(route.slug, lang))
        blocks.push(breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: lang === 'en' ? 'Rooms' : 'Le Stanze', path: '/' },
            { name: lang === 'en' ? ROOMS[route.slug].nameEn : ROOMS[route.slug].nameIt, path: route.path }
        ]))
    } else if (route.path === '/faq' || route.path === '/ai/faq') {
        blocks.push(faqJsonLd(lang))
        blocks.push(breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: route.path }
        ]))
    } else if (route.path === '/ai/knowledge') {
        blocks.push(defaultSiteJsonLd())
        blocks.push(faqJsonLd(lang))
        blocks.push(breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'AI Knowledge', path: '/ai/knowledge' }
        ]))
    } else if (route.path === '/galleria') {
        blocks.push(breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: lang === 'en' ? 'Gallery' : 'Galleria', path: '/galleria' }
        ]))
    }
    return blocks
}

function noscriptForRoute(route, lang = 'it') {
    if (route.path === '/') return noscriptHomeBlock(lang)
    if (route.isRoom) return noscriptRoomBlock(route.slug, lang)
    if (route.path === '/galleria') return noscriptGalleryBlock(lang)
    if (route.path === '/faq' || route.path === '/ai/faq') return noscriptFaqBlock(lang)
    if (route.path === '/ai/knowledge') return noscriptAIKnowledgeBlock(lang)
    if (route.path === '/prenota') return noscriptBookingBlock(lang)
    if (route.path === '/privacy-policy') return noscriptPolicyBlock('privacy', lang)
    if (route.path === '/cookie-policy') return noscriptPolicyBlock('cookie', lang)
    return ''
}

function ssrFallbackFor(route) {
    // Contenuto statico visibile se JavaScript non parte; React lo sostituisce al mount.
    const it = noscriptForRoute(route, 'it')
    const en = noscriptForRoute(route, 'en')
    if (!it && !en) return ''
    return `<div id="ssr-fallback" data-prerender-fallback>
<section lang="it">${it}</section>
<section lang="en">${en}</section>
</div>`
}

async function ensureDir(dir) {
    await mkdir(dir, { recursive: true })
}

async function pathExists(p) {
    try { await access(p); return true } catch { return false }
}

async function generateRoute(route, baseHtml) {
    const titleIt = route.titleIt || (route.isRoom ? `${ROOMS[route.slug].nameIt} — ${SITE.name}, Firenze` : SITE.name)
    const descriptionIt = route.descriptionIt || (route.isRoom ? ROOMS[route.slug].descriptionIt : '')
    const image = route.isRoom ? absUrl(ROOMS[route.slug].image) : SITE.defaultImageAbsolute

    const head = metaTags({
        title: titleIt,
        description: descriptionIt,
        canonical: absUrl(route.path),
        image,
        noindex: !!route.noindex,
        language: 'it',
        alternates: alternateUrlsForPath(route.path)
    })
    const jsonLd = jsonLdScripts(buildJsonLdForRoute(route, 'it'))
    const ssrFallback = ssrFallbackFor(route)
    const noscript = `<noscript>${noscriptForRoute(route, 'it')}\n${noscriptForRoute(route, 'en')}</noscript>`

    let html = baseHtml
        .replace(/<title>[^<]*<\/title>/g, '')
        .replace(/<meta\s+name="description"[^>]*>/g, '')
        .replace(/<meta\s+name="robots"[^>]*>/g, '')
        .replace(/<link\s+rel="canonical"[^>]*>/g, '')
        .replace(/<link\s+rel="alternate"\s+hreflang[^>]*>/g, '')
        .replace(/<meta\s+property="og:[^"]+"[^>]*>/g, '')
        .replace(/<meta\s+name="twitter:[^"]+"[^>]*>/g, '')
        .replace(/<\/head>/, `${head}\n    ${jsonLd}\n</head>`)
        .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${ssrFallback}</div>\n${noscript}`)

    const outDir = route.path === '/' ? BUILD_DIR : path.join(BUILD_DIR, ...route.path.split('/').filter(Boolean))
    await ensureDir(outDir)
    const outPath = path.join(outDir, 'index.html')
    await writeFile(outPath, html, 'utf8')
    return outPath
}

function noscriptLandingBlock(route) {
    const lang = route.lang
    const visitLabel = lang === 'en' ? 'Visit the official website' : 'Vai al sito ufficiale'
    const paragraphs = route.intro.map((p) => `<p>${escapeHtml(p)}</p>`).join('\n')
    const rooms = Object.values(ROOMS).map((r) => {
        const name = lang === 'en' ? r.nameEn : r.nameIt
        const desc = lang === 'en' ? r.descriptionEn : r.descriptionIt
        return `<h3>${escapeHtml(name)}</h3><p>${escapeHtml(desc)}</p><p><a href="${SITE.baseUrl}/stanza/${r.slug}">${SITE.baseUrl}/stanza/${r.slug}</a></p>`
    }).join('\n')
    return `<h1>${escapeHtml(route.h1)}</h1>
${paragraphs}
<h2>${lang === 'en' ? 'The three suites' : 'Le tre suite'}</h2>
${rooms}
<h2>${lang === 'en' ? 'Contact' : 'Contatti'}</h2>
<p>${escapeHtml(SITE.email)} · ${escapeHtml(SITE.phone)} · ${escapeHtml(SITE.address.streetAddress)}, ${escapeHtml(SITE.address.postalCode)} ${escapeHtml(SITE.address.addressLocality)}</p>
<p><a href="${SITE.baseUrl}/">${visitLabel}: ${SITE.baseUrl}/</a></p>`
}

async function generateLanding(route, baseHtml) {
    const head = metaTags({
        title: route.title,
        description: route.description,
        canonical: absUrl(route.path),
        image: SITE.defaultImageAbsolute,
        noindex: false,
        language: route.lang,
        alternates: alternateUrlsForPath(route.path)
    })
    const jsonLdBlocks = [
        defaultSiteJsonLd(),
        breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: route.h1, path: route.path }
        ]),
        faqJsonLd(route.lang)
    ]
    const jsonLd = jsonLdScripts(jsonLdBlocks)
    const block = noscriptLandingBlock(route)
    const ssrFallback = `<div id="ssr-fallback" data-prerender-fallback>
<section lang="${route.lang}">${block}</section>
</div>`
    const noscript = `<noscript>${block}</noscript>`

    let html = baseHtml
        .replace(/<title>[^<]*<\/title>/g, '')
        .replace(/<meta\s+name="description"[^>]*>/g, '')
        .replace(/<meta\s+name="robots"[^>]*>/g, '')
        .replace(/<link\s+rel="canonical"[^>]*>/g, '')
        .replace(/<link\s+rel="alternate"\s+hreflang[^>]*>/g, '')
        .replace(/<meta\s+property="og:[^"]+"[^>]*>/g, '')
        .replace(/<meta\s+name="twitter:[^"]+"[^>]*>/g, '')
        .replace(/<\/head>/, `${head}\n    ${jsonLd}\n</head>`)
        .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${ssrFallback}</div>\n${noscript}`)

    const outDir = path.join(BUILD_DIR, ...route.path.split('/').filter(Boolean))
    await ensureDir(outDir)
    const outPath = path.join(outDir, 'index.html')
    await writeFile(outPath, html, 'utf8')
    return outPath
}

async function main() {
    const indexPath = path.join(BUILD_DIR, 'index.html')
    if (!(await pathExists(indexPath))) {
        console.error(`[prerender] build/index.html non trovato in ${indexPath}. Hai eseguito 'vite build'?`)
        process.exit(1)
    }
    const baseHtml = await readFile(indexPath, 'utf8')

    const generated = []
    for (const route of PRERENDER_ROUTES) {
        const out = await generateRoute(route, baseHtml)
        generated.push(out)
    }
    for (const route of LANDING_ROUTES) {
        const out = await generateLanding(route, baseHtml)
        generated.push(out)
    }

    // Verifica presenza file statici da public/
    const required = ['robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt']
    for (const f of required) {
        const dest = path.join(BUILD_DIR, f)
        if (!(await pathExists(dest))) {
            console.warn(`[prerender] file ${f} non presente in build/, controlla che esista in public/`)
        }
    }

    console.log(`[prerender] ${generated.length} route prerenderizzate:`)
    for (const p of generated) {
        console.log('  •', path.relative(BUILD_DIR, p))
    }
}

main().catch((err) => {
    console.error('[prerender] errore fatale:', err)
    process.exit(1)
})
