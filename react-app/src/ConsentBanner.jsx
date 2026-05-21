import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageContext'
import { translations } from './translations'
import { useCookieConsent } from './ConsentManager'
import './styles.css'

const safeGetItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (e) {
        console.warn('localStorage is not available:', e.message)
        return null
    }
}

export default function CookieBanner() {
    const { language } = useLanguage()
    const t = translations[language]?.cookieBanner || {}
    const { updateConsent } = useCookieConsent()
    const [isVisible, setIsVisible] = useState(false)
    const [showPreferences, setShowPreferences] = useState(false)

    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false
    })

    useEffect(() => {
        try {
            const savedConsent = safeGetItem('cookieConsent')
            if (!savedConsent) {
                const timer = setTimeout(() => setIsVisible(true), 2000)
                return () => clearTimeout(timer)
            } else {
                try {
                    const parsed = JSON.parse(savedConsent)
                    setPreferences({
                        necessary: true,
                        analytics: parsed?.analytics === true,
                        marketing: parsed?.marketing === true
                    })
                    setIsVisible(false)
                } catch (e) {
                    const timer = setTimeout(() => setIsVisible(true), 2000)
                    return () => clearTimeout(timer)
                }
            }
        } catch (e) {
            console.warn('localStorage blocked, skipping cookie banner')
            setIsVisible(false)
        }
    }, [])

    useEffect(() => {
        const handleReopen = () => {
            setIsVisible(true)
            setShowPreferences(true)
        }
        window.addEventListener('openCookieBanner', handleReopen)
        return () => window.removeEventListener('openCookieBanner', handleReopen)
    }, [])

    const saveConsent = (choice) => {
        let finalPreferences = { necessary: true, analytics: false, marketing: false }

        if (choice === 'all') {
            finalPreferences = { necessary: true, analytics: true, marketing: true }
        } else if (choice === 'reject') {
            finalPreferences = { necessary: true, analytics: false, marketing: false }
        } else if (choice === 'custom') {
            finalPreferences = { ...preferences, necessary: true }
        }

        updateConsent(finalPreferences)
        setPreferences(finalPreferences)
        setIsVisible(false)
        setShowPreferences(false)
    }

    if (!isVisible) return null

    return (
        <div className="cookie-banner-overlay">
            <div className="cookie-banner">
                {!showPreferences ? (
                    <div className="cookie-content">
                        <div className="cookie-text">
                            <h3>{t.title}</h3>
                            <p>{t.text}</p>
                            <Link to="/cookie-policy" className="cookie-link">{t.readMore}</Link>
                        </div>
                        <div className="cookie-actions">
                            <button className="btn-cookie btn-accept" onClick={() => saveConsent('all')}>
                                {t.accept}
                            </button>
                            <button className="btn-cookie btn-reject" onClick={() => saveConsent('reject')}>
                                {t.reject}
                            </button>
                            <button className="btn-cookie btn-customize" onClick={() => setShowPreferences(true)}>
                                {t.customize}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="cookie-preferences">
                        <div className="preferences-header">
                            <h3>{t.preferencesTitle}</h3>
                            <button
                                className="btn-close-pref"
                                onClick={() => setShowPreferences(false)}
                                aria-label="Close preferences"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="preferences-intro">{t.preferencesText}</p>

                        <div className="preference-item">
                            <div className="pref-label">
                                <span>{t.necessary}</span>
                                <input type="checkbox" checked disabled />
                            </div>
                            <p className="pref-desc">{t.necessaryDesc}</p>
                        </div>

                        <div className="preference-item">
                            <div className="pref-label">
                                <span>{t.analytics}</span>
                                <input
                                    type="checkbox"
                                    checked={preferences.analytics}
                                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                />
                            </div>
                            <p className="pref-desc">{t.analyticsDesc}</p>
                        </div>

                        <div className="preference-item">
                            <div className="pref-label">
                                <span>{t.marketing}</span>
                                <input
                                    type="checkbox"
                                    checked={preferences.marketing}
                                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                />
                            </div>
                            <p className="pref-desc">{t.marketingDesc}</p>
                        </div>

                        <div className="preferences-actions">
                            <button className="btn-cookie btn-save" onClick={() => saveConsent('custom')}>
                                {t.save}
                            </button>
                            <button className="btn-cookie btn-accept" onClick={() => saveConsent('all')}>
                                {t.accept}
                            </button>
                            <button className="btn-cookie btn-reject" onClick={() => saveConsent('reject')}>
                                {t.reject}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
