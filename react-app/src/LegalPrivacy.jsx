import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import { translations } from './translations'
import Seo from './Seo'
import './styles.css'

export default function PrivacyPolicy() {
    const { language } = useLanguage()
    const t = translations[language].privacyPolicy

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Seo
                title={language === 'en' ? 'Privacy Notice — Le Stanze di Caterina' : 'Privacy Policy — Le Stanze di Caterina'}
                description={language === 'en' ? 'GDPR privacy notice of Le Stanze di Caterina.' : 'Informativa privacy GDPR di Le Stanze di Caterina.'}
                path="/privacy-policy"
                noindex
            />
            <Navbar />
            <div className="policy-page">
                <div className="container">
                    <h1>{t.title}</h1>
                    <p className="last-updated">{t.lastUpdated}</p>

                    <div className="policy-content">
                        <section>
                            <p>{t.intro}</p>
                        </section>

                        {t.sections.map((section, idx) => (
                            <section key={idx}>
                                <h2>{section.title}</h2>
                                <p>{section.body}</p>
                            </section>
                        ))}

                        <section className="policy-cta">
                            <p>
                                {language === 'it'
                                    ? 'Per la gestione granulare dei cookie consulta la '
                                    : 'For granular cookie management see the '}
                                <Link to="/cookie-policy">{language === 'it' ? 'Cookie Policy' : 'Cookie Policy'}</Link>.
                            </p>
                        </section>
                    </div>

                    <div className="back-link">
                        <Link to="/">{translations[language].roomPage.backHome}</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
