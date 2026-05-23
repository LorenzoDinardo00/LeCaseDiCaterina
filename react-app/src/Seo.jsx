import { Helmet } from 'react-helmet-async'
import { useLanguage } from './LanguageContext'
import { SITE, absUrl } from './siteMetadata'

export default function Seo({
    title,
    description,
    path = '/',
    image,
    noindex = false,
    jsonLd = null,
    extraJsonLd = []
}) {
    const { language } = useLanguage()
    const lang = language || SITE.defaultLanguage
    const canonical = absUrl(path)
    const ogImage = image ? absUrl(image) : SITE.defaultImageAbsolute
    const fullTitle = title || SITE.name
    const safeDescription = description || ''

    const jsonLdBlocks = []
    if (jsonLd) jsonLdBlocks.push(jsonLd)
    if (Array.isArray(extraJsonLd) && extraJsonLd.length > 0) jsonLdBlocks.push(...extraJsonLd)

    return (
        <Helmet htmlAttributes={{ lang }}>
            <title>{fullTitle}</title>
            <meta name="description" content={safeDescription} />
            <link rel="canonical" href={canonical} />
            {SITE.supportedLanguages.map((l) => (
                <link key={l} rel="alternate" hrefLang={l} href={canonical} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={canonical} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE.name} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={safeDescription} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'it_IT'} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={safeDescription} />
            <meta name="twitter:image" content={ogImage} />

            {noindex && <meta name="robots" content="noindex,nofollow" />}
            {!noindex && <meta name="robots" content="index,follow,max-image-preview:large" />}

            {jsonLdBlocks.map((block, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(block)}
                </script>
            ))}
        </Helmet>
    )
}
