import { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import Seo from './Seo'
import { LANDING_ROUTES, ROOMS, SITE, defaultSiteJsonLd, breadcrumbJsonLd, faqJsonLd } from './siteMetadata'

export default function LandingPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const { setLanguage } = useLanguage()

    const route = LANDING_ROUTES.find((r) => r.path === location.pathname)
    const relatedRoutes = route
        ? LANDING_ROUTES.filter((r) => r.lang === route.lang && r.path !== route.path)
        : []

    useEffect(() => {
        window.scrollTo(0, 0)
        if (route && setLanguage) {
            setLanguage(route.lang)
        }
    }, [route, setLanguage])

    useEffect(() => {
        if (!route) navigate('/')
    }, [route, navigate])

    if (!route) return null

    const lang = route.lang
    const labels = lang === 'en'
        ? {
            heading: route.h1,
            visitSite: 'Visit the official website',
            visitSiteShort: 'Go to the official site',
            bookNow: 'Book now',
            roomsTitle: 'The three suites',
            roomsIntro: 'Le Stanze di Caterina offers three themed suites, each up to 2 guests, with private bathroom, Wi-Fi, air conditioning, Smart TV, minibar and safe.',
            factsTitle: 'Why it matches this search',
            facts: [
                '50 metres from Piazza del Duomo',
                '2 minutes on foot from Florence Cathedral',
                'Inside the historic centre ZTL',
                'Three suites with private bathrooms'
            ],
            relatedTitle: 'Related searches',
            contactTitle: 'Contact and booking',
            contactBody: 'Bookings are handled through the external Xenion booking engine. For information, special requests or to verify availability you can contact us directly:',
            email: 'Email',
            phone: 'Phone / WhatsApp',
            seeRoom: 'See the suite',
            badge: 'Le Stanze di Caterina — B&B in Florence, 50 m from the Duomo'
        }
        : {
            heading: route.h1,
            visitSite: 'Vai al sito ufficiale',
            visitSiteShort: 'Vai al sito ufficiale',
            bookNow: 'Prenota ora',
            roomsTitle: 'Le tre suite',
            roomsIntro: 'Le Stanze di Caterina offre tre suite a tema, ognuna fino a 2 ospiti, con bagno privato, Wi-Fi, aria condizionata, Smart TV, minibar e cassaforte.',
            factsTitle: 'Perché risponde a questa ricerca',
            facts: [
                '50 metri da Piazza del Duomo',
                '2 minuti a piedi dalla Cattedrale di Firenze',
                'Dentro la ZTL del centro storico',
                'Tre suite con bagno privato'
            ],
            relatedTitle: 'Ricerche correlate',
            contactTitle: 'Contatti e prenotazioni',
            contactBody: 'Le prenotazioni sono gestite tramite il motore esterno Xenion. Per informazioni, richieste speciali o per verificare la disponibilità puoi contattarci direttamente:',
            email: 'Email',
            phone: 'Telefono / WhatsApp',
            seeRoom: 'Scopri la suite',
            badge: 'Le Stanze di Caterina — B&B a Firenze, a 50 m dal Duomo'
        }

    return (
        <div className="landing-page">
            <Seo
                title={route.title}
                description={route.description}
                path={route.path}
                jsonLd={defaultSiteJsonLd()}
                extraJsonLd={[
                    breadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: route.h1, path: route.path }
                    ]),
                    faqJsonLd(lang)
                ]}
            />
            <Navbar />
            <header className="landing-hero">
                <div className="container">
                    <span className="landing-badge">{labels.badge}</span>
                    <h1>{route.h1}</h1>
                    <div className="landing-cta-top">
                        <Link to="/prenota" className="btn-landing-primary">{labels.bookNow}</Link>
                        <Link to="/" className="btn-landing-secondary">{labels.visitSite}</Link>
                    </div>
                </div>
            </header>

            <article className="landing-content">
                <div className="container">
                    {route.intro.map((p, i) => (
                        <p key={i} className="landing-paragraph">{p}</p>
                    ))}

                    <section className="landing-facts" aria-labelledby="landing-facts-title">
                        <h2 id="landing-facts-title">{labels.factsTitle}</h2>
                        <ul>
                            {labels.facts.map((fact) => (
                                <li key={fact}>{fact}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="landing-rooms">
                        <h2>{labels.roomsTitle}</h2>
                        <p className="landing-rooms-intro">{labels.roomsIntro}</p>
                        <div className="landing-rooms-grid">
                            {Object.values(ROOMS).map((r) => (
                                <Link key={r.slug} to={`/stanza/${r.slug}`} className="landing-room-card">
                                    <div className="landing-room-image">
                                        <img src={r.image} alt={lang === 'en' ? r.nameEn : r.nameIt} loading="lazy" />
                                    </div>
                                    <div className="landing-room-info">
                                        <h3>{lang === 'en' ? r.nameEn : r.nameIt}</h3>
                                        <p>{lang === 'en' ? r.descriptionEn : r.descriptionIt}</p>
                                        <span className="landing-room-link">{labels.seeRoom} →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="landing-contact">
                        <h2>{labels.contactTitle}</h2>
                        <p>{labels.contactBody}</p>
                        <ul className="landing-contact-list">
                            <li><strong>{labels.email}:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                            <li><strong>{labels.phone}:</strong> <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`}>{SITE.phone}</a></li>
                            <li><strong>{lang === 'en' ? 'Address' : 'Indirizzo'}:</strong> {SITE.address.streetAddress}, {SITE.address.postalCode} {SITE.address.addressLocality}</li>
                        </ul>
                    </section>

                    {relatedRoutes.length > 0 && (
                        <section className="landing-related">
                            <h2>{labels.relatedTitle}</h2>
                            <ul>
                                {relatedRoutes.map((related) => (
                                    <li key={related.path}>
                                        <Link to={related.path}>{related.h1}</Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <section className="landing-cta-bottom">
                        <h2>{route.bottomQuestion}</h2>
                        <div className="landing-cta-bottom-actions">
                            <Link to="/prenota" className="btn-landing-primary">{labels.bookNow}</Link>
                            <Link to="/" className="btn-landing-secondary">{labels.visitSiteShort}</Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    )
}
