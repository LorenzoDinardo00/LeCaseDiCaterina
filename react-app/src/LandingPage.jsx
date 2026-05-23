import { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import Seo from './Seo'
import { LANDING_ROUTES, ROOMS, SITE, defaultSiteJsonLd, breadcrumbJsonLd, faqJsonLd } from './siteMetadata'

export default function LandingPage() {
    const { slug } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const { setLanguage } = useLanguage()

    const route = LANDING_ROUTES.find((r) => r.path === location.pathname)

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
            roomsTitle: 'The three suites',
            roomsIntro: 'Le Stanze di Caterina offers three themed suites, each up to 2 guests, with private bathroom, Wi-Fi, air conditioning, Smart TV, minibar and safe.',
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
            roomsTitle: 'Le tre suite',
            roomsIntro: 'Le Stanze di Caterina offre tre suite a tema, ognuna fino a 2 ospiti, con bagno privato, Wi-Fi, aria condizionata, Smart TV, minibar e cassaforte.',
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
                        <Link to="/" className="btn-landing-primary">{labels.visitSite}</Link>
                    </div>
                </div>
            </header>

            <article className="landing-content">
                <div className="container">
                    {route.intro.map((p, i) => (
                        <p key={i} className="landing-paragraph">{p}</p>
                    ))}

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

                    <section className="landing-cta-bottom">
                        <h2>{route.bottomQuestion}</h2>
                        <Link to="/" className="btn-landing-primary">{labels.visitSiteShort}</Link>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    )
}
