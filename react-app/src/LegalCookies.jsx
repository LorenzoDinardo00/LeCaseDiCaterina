import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from './App'
import { useLanguage } from './LanguageContext'
import { translations } from './translations'
import './styles.css'

function CookieTable({ rows, headers }) {
    if (!rows || rows.length === 0) return null
    return (
        <div className="cookie-table-wrap">
            <table className="cookie-table">
                <thead>
                    <tr>
                        <th>{headers.name}</th>
                        <th>{headers.purpose}</th>
                        <th>{headers.duration}</th>
                        <th>{headers.type}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td>{row.name}</td>
                            <td>{row.purpose}</td>
                            <td>{row.duration}</td>
                            <td>{row.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function CookiePolicy() {
    const { language } = useLanguage()
    const t = translations[language].cookiePolicy

    const headers = {
        name: t.tableHeaderName,
        purpose: t.tableHeaderPurpose,
        duration: t.tableHeaderDuration,
        type: t.tableHeaderType
    }

    const handleOpenPrefs = () => {
        window.dispatchEvent(new Event('openCookieBanner'))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className="policy-page">
                <div className="container">
                    <h1>{t.title}</h1>
                    {t.lastUpdated && <p className="last-updated">{t.lastUpdated}</p>}

                    <div className="policy-content">
                        <section>
                            <p>{t.intro}</p>
                        </section>

                        <section>
                            <h2>{t.whatAre}</h2>
                            <p>{t.whatAreText}</p>
                        </section>

                        <section>
                            <h2>{t.categoriesTitle}</h2>
                        </section>

                        <section>
                            <h3 className="policy-subheading">{t.necessaryTitle}</h3>
                            <p>{t.necessaryText}</p>
                            <CookieTable rows={t.necessaryRows} headers={headers} />
                        </section>

                        <section>
                            <h3 className="policy-subheading">{t.analyticsTitle}</h3>
                            <p>{t.analyticsText}</p>
                            <CookieTable rows={t.analyticsRows} headers={headers} />
                        </section>

                        <section>
                            <h3 className="policy-subheading">{t.marketingTitle}</h3>
                            <p>{t.marketingText}</p>
                            <CookieTable rows={t.marketingRows} headers={headers} />
                        </section>

                        <section>
                            <h2>{t.otherToolsTitle}</h2>
                            <p>{t.otherToolsText}</p>
                            <CookieTable rows={t.otherToolsRows} headers={headers} />
                        </section>

                        <section>
                            <h2>{t.managementTitle}</h2>
                            <p>{t.managementText}</p>
                            <p>
                                <button type="button" className="cookie-prefs-inline-btn" onClick={handleOpenPrefs}>
                                    {language === 'it' ? 'Apri le preferenze cookie' : 'Open cookie preferences'}
                                </button>
                            </p>
                        </section>

                        <section>
                            <h2>{t.rightsTitle}</h2>
                            <p>
                                {t.rightsText}{' '}
                                <Link to="/privacy-policy">{language === 'it' ? 'Vai alla Privacy Policy' : 'Go to the Privacy Notice'}</Link>.
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
