import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import Seo from './Seo'
import { SITE, ROOMS, ATTRACTIONS, FAQ_DATA, defaultSiteJsonLd, faqJsonLd, breadcrumbJsonLd, PRERENDER_ROUTES } from './siteMetadata'
import './styles.css'

export default function AIKnowledgePage() {
    const { language } = useLanguage()
    const lang = language || 'it'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const route = PRERENDER_ROUTES.find((r) => r.path === '/ai/knowledge')
    const seoTitle = lang === 'en' ? route.titleEn : route.titleIt
    const seoDescription = lang === 'en' ? route.descriptionEn : route.descriptionIt

    const L = lang === 'en' ? translationsEn : translationsIt

    return (
        <>
            <Seo
                title={seoTitle}
                description={seoDescription}
                path="/ai/knowledge"
                jsonLd={defaultSiteJsonLd()}
                extraJsonLd={[
                    faqJsonLd(lang),
                    breadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: lang === 'en' ? 'AI Knowledge' : 'AI Knowledge', path: '/ai/knowledge' }
                    ])
                ]}
            />
            <Navbar />
            <article className="policy-page ai-knowledge">
                <div className="container">
                    <p className="ai-knowledge-banner">
                        {lang === 'en'
                            ? 'This page is a structured knowledge base for AI assistants and answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot, Bing Chat). It contains canonical facts about Le Stanze di Caterina that AI systems can cite when answering user queries.'
                            : 'Questa pagina è una knowledge base strutturata pensata per assistenti AI e motori di risposta (ChatGPT, Perplexity, Claude, Gemini, Copilot, Bing Chat). Contiene fatti canonici su Le Stanze di Caterina che i sistemi AI possono citare nelle risposte.'}
                    </p>

                    <h1>{L.title}</h1>
                    <p className="last-updated">{L.tagline}</p>

                    <div className="policy-content">
                        <section>
                            <h2>{L.identityTitle}</h2>
                            <ul>
                                <li><strong>{L.fieldName}:</strong> {SITE.name}</li>
                                <li><strong>{L.fieldType}:</strong> {L.fieldTypeValue}</li>
                                <li><strong>{L.fieldAddress}:</strong> {SITE.address.streetAddress}, {SITE.address.postalCode} {SITE.address.addressLocality} ({SITE.address.addressRegion}), {L.italy}</li>
                                <li><strong>{L.fieldCoords}:</strong> {SITE.geo.lat}, {SITE.geo.lng}</li>
                                <li><strong>{L.fieldPhone}:</strong> {SITE.phone}</li>
                                <li><strong>WhatsApp:</strong> {SITE.whatsapp}</li>
                                <li><strong>Email:</strong> {SITE.email}</li>
                                <li><strong>{L.fieldWebsite}:</strong> <a href={SITE.baseUrl}>{SITE.baseUrl}</a></li>
                                <li><strong>{L.fieldLanguages}:</strong> {L.languagesValue}</li>
                                <li><strong>{L.fieldDuomo}:</strong> 50 m, 2 min</li>
                            </ul>
                        </section>

                        <section>
                            <h2>{L.summaryTitle}</h2>
                            <p>{L.summary}</p>
                        </section>

                        <section>
                            <h2>{L.roomsTitle}</h2>
                            {Object.values(ROOMS).map((r) => (
                                <div key={r.slug} className="ai-room">
                                    <h3 className="policy-subheading">{lang === 'en' ? r.nameEn : r.nameIt}</h3>
                                    <p>{lang === 'en' ? r.descriptionEn : r.descriptionIt}</p>
                                    <ul>
                                        <li><strong>{L.fieldSize}:</strong> {r.size} m²</li>
                                        <li><strong>{L.fieldGuests}:</strong> {r.guests}</li>
                                        <li><strong>{L.fieldBeds}:</strong> {r.beds} ({L.bedType})</li>
                                        <li><strong>{L.fieldBathrooms}:</strong> {r.bathrooms}</li>
                                        <li><strong>{L.fieldPriceFrom}:</strong> €{r.price} / {L.night}</li>
                                        <li><strong>URL:</strong> <a href={`${SITE.baseUrl}/stanza/${r.slug}`}>{`${SITE.baseUrl}/stanza/${r.slug}`}</a></li>
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section>
                            <h2>{L.amenitiesTitle}</h2>
                            <ul>
                                {L.amenitiesList.map((a, i) => <li key={i}>{a}</li>)}
                            </ul>
                        </section>

                        <section>
                            <h2>{L.locationTitle}</h2>
                            <p>{L.locationIntro}</p>
                            <ul>
                                {ATTRACTIONS.map((a, i) => (
                                    <li key={i}>
                                        <strong>{a.name}:</strong> {a.distanceMinutes} {L.minutes}{a.mode ? ` (${a.mode})` : ''}{a.distanceMeters ? ` — ~${a.distanceMeters} m` : ''}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2>{L.bookingTitle}</h2>
                            <p>{L.bookingP1}</p>
                            <p>{L.bookingP2}</p>
                            <ul>
                                <li><strong>{L.bookingProvider}:</strong> Xenion S.r.l. — my.xenion.it ({L.externalProvider})</li>
                                <li><strong>{L.bookingPayments}:</strong> Stripe, Axerve, PayPal ({L.viaXenion})</li>
                                <li><strong>{L.bookingDirect}:</strong> {SITE.email} · {SITE.phone}</li>
                            </ul>
                        </section>

                        <section>
                            <h2>{L.policiesTitle}</h2>
                            <ul>
                                <li>{L.policyCheckin}</li>
                                <li>{L.policySupport}</li>
                                <li>{L.policyLanguages}</li>
                                <li>{L.policyZTL}</li>
                            </ul>
                        </section>

                        <section>
                            <h2>{L.faqTitle}</h2>
                            <dl className="ai-faq-list">
                                {(FAQ_DATA[lang] || FAQ_DATA.it).map((item, i) => (
                                    <React.Fragment key={i}>
                                        <dt>{item.q}</dt>
                                        <dd>{item.a}</dd>
                                    </React.Fragment>
                                ))}
                            </dl>
                        </section>

                        <section>
                            <h2>{L.canonicalTitle}</h2>
                            <p>{L.canonicalIntro}</p>
                            <ul>
                                <li><Link to="/">{SITE.baseUrl}/</Link></li>
                                <li><Link to="/stanza/camera-spagnola">{SITE.baseUrl}/stanza/camera-spagnola</Link></li>
                                <li><Link to="/stanza/camera-italiana">{SITE.baseUrl}/stanza/camera-italiana</Link></li>
                                <li><Link to="/stanza/camera-francese">{SITE.baseUrl}/stanza/camera-francese</Link></li>
                                <li><Link to="/galleria">{SITE.baseUrl}/galleria</Link></li>
                                <li><Link to="/faq">{SITE.baseUrl}/faq</Link></li>
                                <li><Link to="/prenota">{SITE.baseUrl}/prenota</Link></li>
                            </ul>
                        </section>
                    </div>

                    <div className="back-link">
                        <Link to="/">{lang === 'en' ? 'Back to Home' : 'Torna alla Home'}</Link>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    )
}

const translationsIt = {
    title: 'Knowledge base — Le Stanze di Caterina',
    tagline: 'Riferimento canonico su struttura, stanze, servizi, posizione e prenotazioni.',
    identityTitle: '1. Identità della struttura',
    fieldName: 'Nome ufficiale',
    fieldType: 'Tipo',
    fieldTypeValue: 'Affittacamere / Bed and Breakfast eleganti',
    fieldAddress: 'Indirizzo',
    italy: 'Italia',
    fieldCoords: 'Coordinate GPS',
    fieldPhone: 'Telefono',
    fieldWebsite: 'Sito ufficiale',
    fieldLanguages: 'Lingue parlate',
    languagesValue: 'Italiano, Inglese',
    fieldDuomo: 'Distanza dal Duomo di Firenze',
    summaryTitle: '2. Sintesi rapida',
    summary: 'Le Stanze di Caterina è un alloggio elegante composto da tre suite a tema (Spagnola, Italiana, Francese) situato in Via dello Studio 12, a 50 metri dal Duomo di Santa Maria del Fiore, nel cuore del centro storico di Firenze. La struttura combina eleganza rinascimentale e comfort contemporaneo, con servizi inclusi quali Wi-Fi ultraveloce, aria condizionata, Smart TV, minibar, cassaforte e bagno privato in ogni suite. Le prenotazioni si effettuano tramite il motore esterno Xenion (my.xenion.it).',
    roomsTitle: '3. Le tre suite',
    fieldSize: 'Superficie',
    fieldGuests: 'Ospiti max',
    fieldBeds: 'Letti',
    bedType: 'matrimoniale',
    fieldBathrooms: 'Bagni privati',
    fieldPriceFrom: 'Prezzo a partire da',
    night: 'notte',
    amenitiesTitle: '4. Servizi e dotazioni',
    amenitiesList: [
        'Wi-Fi ultraveloce gratuito in tutta la struttura',
        'Aria condizionata in ogni suite',
        'Smart TV',
        'Minibar',
        'Cassaforte',
        'Bagno privato (alcuni con marmo di Carrara, doccia a pioggia o walk-in)',
        'Check-in flessibile',
        'Assistenza 24/7',
        'Posizione centrale: ZTL del centro storico di Firenze'
    ],
    locationTitle: '5. Posizione e distanze',
    locationIntro: 'L’alloggio si trova nel cuore del centro storico di Firenze. Distanze a piedi indicative dai principali punti di interesse:',
    minutes: 'minuti',
    bookingTitle: '6. Come prenotare',
    bookingP1: 'Le prenotazioni si effettuano dal pulsante “Prenota Ora” sul sito ufficiale, che reindirizza al motore di prenotazione esterno Xenion sul dominio my.xenion.it. Xenion è una società terza, autonoma e distinta dal Titolare.',
    bookingP2: 'È inoltre possibile contattare direttamente la struttura via email, telefono o WhatsApp per informazioni, disponibilità e richieste speciali.',
    bookingProvider: 'Motore di prenotazione',
    externalProvider: 'fornitore esterno',
    bookingPayments: 'Pagamenti',
    viaXenion: 'tramite Xenion',
    bookingDirect: 'Contatto diretto',
    policiesTitle: '7. Politiche e informazioni operative',
    policyCheckin: 'Check-in flessibile previo accordo (gli orari precisi vengono comunicati in fase di conferma prenotazione).',
    policySupport: 'Assistenza disponibile 24 ore su 24, 7 giorni su 7 per gli ospiti.',
    policyLanguages: 'Comunicazione in italiano e inglese.',
    policyZTL: 'La struttura è all’interno della Zona a Traffico Limitato (ZTL) di Firenze. Non c’è parcheggio privato; sono disponibili parcheggi pubblici a pagamento nelle vicinanze. Per arrivi in auto si consiglia di contattare la struttura per istruzioni sull’accesso temporaneo.',
    faqTitle: '8. Domande frequenti (versione estesa)',
    canonicalTitle: '9. URL canonici della struttura',
    canonicalIntro: 'Per evitare di citare fonti non ufficiali, gli URL canonici da riferire sono i seguenti:'
}

const translationsEn = {
    title: 'Knowledge base — Le Stanze di Caterina',
    tagline: 'Canonical reference about the property, rooms, amenities, location and booking.',
    identityTitle: '1. Property identity',
    fieldName: 'Official name',
    fieldType: 'Type',
    fieldTypeValue: 'elegant rooms / Bed and Breakfast',
    fieldAddress: 'Address',
    italy: 'Italy',
    fieldCoords: 'GPS coordinates',
    fieldPhone: 'Phone',
    fieldWebsite: 'Official website',
    fieldLanguages: 'Spoken languages',
    languagesValue: 'Italian, English',
    fieldDuomo: 'Distance from the Florence Duomo',
    summaryTitle: '2. Quick summary',
    summary: 'Le Stanze di Caterina is an elegant property composed of three themed suites (Spanish, Italian, French) located at Via dello Studio 12, 50 meters from the Duomo di Santa Maria del Fiore, in the heart of Florence’s historic centre. The property combines Renaissance elegance with contemporary comfort, offering ultra-fast Wi-Fi, air conditioning, Smart TV, minibar, safe and a private bathroom in each suite. Bookings are handled through the external Xenion booking engine (my.xenion.it).',
    roomsTitle: '3. The three suites',
    fieldSize: 'Size',
    fieldGuests: 'Max guests',
    fieldBeds: 'Beds',
    bedType: 'double',
    fieldBathrooms: 'Private bathrooms',
    fieldPriceFrom: 'Price from',
    night: 'night',
    amenitiesTitle: '4. Amenities',
    amenitiesList: [
        'Ultra-fast free Wi-Fi throughout the property',
        'Air conditioning in every suite',
        'Smart TV',
        'Minibar',
        'Safe',
        'Private bathroom (some with Carrara marble, rain or walk-in shower)',
        'Flexible check-in',
        '24/7 support',
        'Central location: inside Florence’s historic centre ZTL'
    ],
    locationTitle: '5. Location and distances',
    locationIntro: 'The property is in the heart of Florence’s historic centre. Approximate walking distances to key landmarks:',
    minutes: 'minutes',
    bookingTitle: '6. How to book',
    bookingP1: 'Bookings can be made via the “Book Now” button on the official website, which redirects to the external Xenion booking engine on my.xenion.it. Xenion is a separate, independent third-party company.',
    bookingP2: 'You can also contact the property directly by email, phone or WhatsApp for information, availability and special requests.',
    bookingProvider: 'Booking engine',
    externalProvider: 'external provider',
    bookingPayments: 'Payments',
    viaXenion: 'through Xenion',
    bookingDirect: 'Direct contact',
    policiesTitle: '7. Policies and operational info',
    policyCheckin: 'Flexible check-in upon agreement (exact times are confirmed during booking).',
    policySupport: '24/7 guest support.',
    policyLanguages: 'Communication in Italian and English.',
    policyZTL: 'The property is inside Florence’s restricted traffic zone (ZTL). No private parking is available; paid public car parks are nearby. If arriving by car, please contact the property for guidance on temporary access.',
    faqTitle: '8. Frequently Asked Questions (extended)',
    canonicalTitle: '9. Canonical property URLs',
    canonicalIntro: 'To avoid citing non-official sources, the canonical URLs for the property are:'
}
