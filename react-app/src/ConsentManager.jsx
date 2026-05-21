import { createContext, useState, useContext, useEffect } from 'react'

const CookieConsentContext = createContext()

const DEFAULT_CONSENT = {
    necessary: true,
    analytics: false,
    marketing: false
}

const safeGetItem = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (e) {
        console.warn('localStorage is not available:', e.message)
        return null
    }
}

const safeSetItem = (key, value) => {
    try {
        localStorage.setItem(key, value)
        return true
    } catch (e) {
        console.warn('localStorage is not available:', e.message)
        return false
    }
}

const normalizeConsent = (raw) => ({
    necessary: true,
    analytics: raw?.analytics === true,
    marketing: raw?.marketing === true
})

export function CookieConsentProvider({ children }) {
    const [consent, setConsent] = useState(DEFAULT_CONSENT)

    useEffect(() => {
        try {
            const savedConsent = safeGetItem('cookieConsent')
            if (savedConsent) {
                const parsed = JSON.parse(savedConsent)
                setConsent(normalizeConsent(parsed))
            }
        } catch (e) {
            console.warn('Could not load cookie consent:', e.message)
        }

        const handleConsentChange = (event) => {
            if (event.detail) {
                setConsent(normalizeConsent(event.detail))
            }
        }

        window.addEventListener('cookieConsentChanged', handleConsentChange)
        return () => window.removeEventListener('cookieConsentChanged', handleConsentChange)
    }, [])

    const updateConsent = (newConsent) => {
        const normalized = normalizeConsent(newConsent)
        const payload = { ...normalized, timestamp: new Date().toISOString(), version: 2 }
        setConsent(normalized)
        safeSetItem('cookieConsent', JSON.stringify(payload))
        try {
            window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: normalized }))
        } catch (e) {
            console.warn('Could not dispatch consent event:', e.message)
        }
    }

    const hasAnalyticsConsent = consent.analytics === true
    const hasMarketingConsent = consent.marketing === true

    return (
        <CookieConsentContext.Provider value={{ consent, updateConsent, hasAnalyticsConsent, hasMarketingConsent }}>
            {children}
        </CookieConsentContext.Provider>
    )
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext)
    if (!context) {
        return {
            consent: DEFAULT_CONSENT,
            updateConsent: () => {},
            hasAnalyticsConsent: false,
            hasMarketingConsent: false
        }
    }
    return context
}
