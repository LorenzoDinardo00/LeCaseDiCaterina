import { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from './LanguageContext'
import { translations } from './translations'

const REDIRECT_SECONDS = 8

export default function BookingPage() {
    const { language } = useLanguage()
    const navigate = useNavigate()
    const t = translations[language].booking
    const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS)
    const [redirecting, setRedirecting] = useState(false)

    const xenionUrl = language === 'en'
        ? 'https://my.xenion.it/lestanzedicaterina/paginaprenotazione?idstructure=1&lang=en'
        : 'https://my.xenion.it/lestanzedicaterina/paginaprenotazione?idstructure=1&lang=it'

    const goToXenion = useCallback(() => {
        setRedirecting(true)
        window.location.href = xenionUrl
    }, [xenionUrl])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (redirecting) return
        if (secondsLeft <= 0) {
            goToXenion()
            return
        }
        const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
        return () => clearTimeout(id)
    }, [secondsLeft, redirecting, goToXenion])

    return (
        <div className="booking-bridge">
            <div className="booking-bridge-card">
                <h1>{t.title}</h1>
                <p className="booking-intro">{t.intro}</p>

                <h2>{t.noticeTitle}</h2>
                <ul className="booking-points">
                    {t.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>

                <p className="booking-privacy-link">
                    <Link to="/privacy-policy">{t.privacyLink}</Link>
                </p>

                <div className="booking-actions">
                    <button type="button" className="btn-booking-proceed" onClick={goToXenion} disabled={redirecting}>
                        {redirecting ? t.redirecting : t.proceed}
                    </button>
                    <button type="button" className="btn-booking-back" onClick={() => navigate('/')} disabled={redirecting}>
                        {t.back}
                    </button>
                </div>

                {!redirecting && (
                    <p className="booking-countdown">
                        {t.autoRedirect.replace('{seconds}', secondsLeft)}
                    </p>
                )}
            </div>
        </div>
    )
}
