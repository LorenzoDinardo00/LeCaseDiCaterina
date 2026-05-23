import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import Seo from './Seo'
import { FAQ_DATA, faqJsonLd, breadcrumbJsonLd, PRERENDER_ROUTES } from './siteMetadata'
import './styles.css'

export default function FaqPage({ isAiVariant = false }) {
    const { language } = useLanguage()
    const lang = language || 'it'
    const items = FAQ_DATA[lang] || FAQ_DATA.it
    const [openIndex, setOpenIndex] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const routeKey = isAiVariant ? '/ai/faq' : '/faq'
    const route = PRERENDER_ROUTES.find((r) => r.path === routeKey)
    const seoTitle = lang === 'en' ? route.titleEn : route.titleIt
    const seoDescription = lang === 'en' ? route.descriptionEn : route.descriptionIt

    const heading = lang === 'en' ? 'Frequently Asked Questions' : 'Domande Frequenti'
    const subheading = lang === 'en'
        ? 'Everything you need to know about Le Stanze di Caterina before booking your stay in Florence.'
        : 'Tutto quello che serve sapere su Le Stanze di Caterina prima di prenotare il tuo soggiorno a Firenze.'

    return (
        <>
            <Seo
                title={seoTitle}
                description={seoDescription}
                path={routeKey}
                jsonLd={faqJsonLd(lang)}
                extraJsonLd={[
                    breadcrumbJsonLd([
                        { name: 'Home', path: '/' },
                        { name: lang === 'en' ? 'FAQ' : 'FAQ', path: routeKey }
                    ])
                ]}
            />
            <Navbar />
            <div className="policy-page faq-page">
                <div className="container">
                    <h1>{heading}</h1>
                    <p className="last-updated">{subheading}</p>

                    <div className="policy-content faq-list">
                        {items.map((item, idx) => {
                            const open = openIndex === idx
                            return (
                                <section key={idx} className={`faq-item ${open ? 'open' : ''}`}>
                                    <button
                                        type="button"
                                        className="faq-question"
                                        aria-expanded={open}
                                        onClick={() => setOpenIndex(open ? -1 : idx)}
                                    >
                                        <span>{item.q}</span>
                                        <span className="faq-toggle" aria-hidden="true">{open ? '−' : '+'}</span>
                                    </button>
                                    <div className="faq-answer" role="region">
                                        <p>{item.a}</p>
                                    </div>
                                </section>
                            )
                        })}
                    </div>

                    <div className="back-link">
                        <Link to="/">{lang === 'en' ? 'Back to Home' : 'Torna alla Home'}</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
