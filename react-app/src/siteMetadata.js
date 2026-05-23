// Metadata sito condivisi tra Seo.jsx, prerender.mjs, sitemap, llms.txt
export const SITE = {
    name: 'Le Stanze di Caterina',
    legalName: 'Le Stanze di Caterina',
    baseUrl: 'https://lestanzedicaterina.com',
    defaultLanguage: 'it',
    supportedLanguages: ['it', 'en'],
    address: {
        streetAddress: 'Via dello Studio 12',
        postalCode: '50122',
        addressLocality: 'Firenze',
        addressRegion: 'Toscana',
        addressCountry: 'IT'
    },
    geo: { lat: 43.773131, lng: 11.255814 },
    phone: '+39 333 199 2394',
    email: 'giacomomarretti1997@gmail.com',
    whatsapp: '+39 333 199 2394',
    defaultImage: '/img/IMG_0714.JPG',
    defaultImageAbsolute: 'https://lestanzedicaterina.com/img/IMG_0714.JPG',
    sameAs: []
}

export const ROOMS = {
    'camera-spagnola': {
        slug: 'camera-spagnola',
        nameIt: 'Suite Spagnola', nameEn: 'Spanish Suite',
        size: 35, beds: 1, bathrooms: 1, guests: 2, price: 180,
        image: '/img/Camera Spagnola/IMG_7808.jpg',
        descriptionIt: 'Suite mediterranea con muri in mattoni originali del XV secolo, testata dorata artigianale, vista sulla città storica e bagno privato con doccia a pioggia.',
        descriptionEn: '15th-century brick suite with handcrafted golden headboard, view over historic Florence and a private bathroom with rain shower.'
    },
    'camera-italiana': {
        slug: 'camera-italiana',
        nameIt: 'Suite Italiana', nameEn: 'Italian Suite',
        size: 30, beds: 1, bathrooms: 1, guests: 2, price: 150,
        image: '/img/Camera Italiana/IMG_7814.jpg',
        descriptionIt: 'Suite essenziale con opera d’arte come testata, design d’autore, camera silenziosa sul cortile interno e bagno in marmo di Carrara con doccia walk-in a mosaico.',
        descriptionEn: 'Essential Italian-style suite with original artwork as headboard, designer furniture, a quiet courtyard room and a Carrara marble bathroom with mosaic walk-in shower.'
    },
    'camera-francese': {
        slug: 'camera-francese',
        nameIt: 'Suite Francese', nameEn: 'French Suite',
        size: 28, beds: 1, bathrooms: 1, guests: 2, price: 140,
        image: '/img/Camera Francese/IMG_7798.jpg',
        descriptionIt: 'Suite luminosa ispirata al Rinascimento con tessuti pregiati e dettagli dorati, a 2 minuti a piedi dal Duomo, bagno privato completamente rinnovato.',
        descriptionEn: 'Bright Renaissance-inspired suite with fine fabrics and golden details, 2 minutes on foot from the Duomo, fully renovated private bathroom.'
    }
}

export const ATTRACTIONS = [
    { name: 'Duomo di Santa Maria del Fiore', distanceMinutes: 2, distanceMeters: 50 },
    { name: 'Galleria degli Uffizi', distanceMinutes: 5 },
    { name: 'Ponte Vecchio', distanceMinutes: 8 },
    { name: 'Palazzo Pitti', distanceMinutes: 10 },
    { name: 'Galleria dell’Accademia (David di Michelangelo)', distanceMinutes: 8 },
    { name: 'Battistero di San Giovanni', distanceMinutes: 3 },
    { name: 'Piazza della Signoria', distanceMinutes: 5 },
    { name: 'Mercato Centrale di Firenze', distanceMinutes: 10 },
    { name: 'Stazione Santa Maria Novella', distanceMinutes: 12 },
    { name: 'Aeroporto di Firenze-Peretola (FLR)', distanceMinutes: 25, mode: 'auto/taxi' }
]

export function absUrl(path = '/') {
    if (!path) return SITE.baseUrl
    if (path.startsWith('http')) return path
    if (!path.startsWith('/')) path = '/' + path
    return SITE.baseUrl + path
}

export function defaultSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        '@id': SITE.baseUrl + '#lodging',
        name: SITE.name,
        url: SITE.baseUrl,
        image: SITE.defaultImageAbsolute,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: '€€€',
        address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.streetAddress,
            postalCode: SITE.address.postalCode,
            addressLocality: SITE.address.addressLocality,
            addressRegion: SITE.address.addressRegion,
            addressCountry: SITE.address.addressCountry
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng
        },
        hasMap: 'https://www.google.com/maps/place/Via+dello+Studio,+12,+50122+Firenze+FI',
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuito', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Aria condizionata', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Minibar', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Cassaforte', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Bagno privato', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Check-in flessibile', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Assistenza 24/7', value: true }
        ],
        containsPlace: Object.values(ROOMS).map((r) => ({
            '@type': 'HotelRoom',
            name: r.nameIt,
            url: SITE.baseUrl + '/stanza/' + r.slug,
            occupancy: { '@type': 'QuantitativeValue', maxValue: r.guests, unitText: 'persone' },
            floorSize: { '@type': 'QuantitativeValue', value: r.size, unitCode: 'MTK' }
        })),
        sameAs: SITE.sameAs
    }
}

export function roomJsonLd(roomSlug, language = 'it') {
    const r = ROOMS[roomSlug]
    if (!r) return null
    const name = language === 'en' ? r.nameEn : r.nameIt
    const description = language === 'en' ? r.descriptionEn : r.descriptionIt
    return {
        '@context': 'https://schema.org',
        '@type': 'HotelRoom',
        name,
        description,
        url: SITE.baseUrl + '/stanza/' + r.slug,
        image: absUrl(r.image),
        floorSize: { '@type': 'QuantitativeValue', value: r.size, unitCode: 'MTK' },
        occupancy: { '@type': 'QuantitativeValue', maxValue: r.guests, unitText: 'persone' },
        bed: { '@type': 'BedDetails', numberOfBeds: r.beds, typeOfBed: 'Letto matrimoniale' },
        amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi gratuito', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Aria condizionata', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Minibar', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Cassaforte', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Bagno privato', value: true }
        ],
        offers: {
            '@type': 'Offer',
            priceCurrency: 'EUR',
            price: r.price,
            availability: 'https://schema.org/InStock',
            url: SITE.baseUrl + '/prenota'
        },
        isPartOf: { '@id': SITE.baseUrl + '#lodging' }
    }
}

export function breadcrumbJsonLd(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.name,
            item: absUrl(it.path)
        }))
    }
}

export const FAQ_DATA = {
    it: [
        { q: 'Dove si trova Le Stanze di Caterina?', a: 'Le Stanze di Caterina si trova in Via dello Studio 12, 50122 Firenze, a circa 50 metri (2 minuti a piedi) dal Duomo di Santa Maria del Fiore, nel cuore del centro storico fiorentino.' },
        { q: 'Quante stanze ci sono e che caratteristiche hanno?', a: 'Sono disponibili tre suite: Suite Spagnola (35 m², muri in mattoni del XV secolo, vista storica, da €180), Suite Italiana (30 m², bagno in marmo di Carrara, camera silenziosa, da €150) e Suite Francese (28 m², arredi rinascimentali, bagno completamente rinnovato, da €140). Ogni suite ospita fino a 2 persone.' },
        { q: 'Quali servizi sono inclusi?', a: 'Tutte le suite includono Wi-Fi ultraveloce gratuito, aria condizionata, Smart TV, minibar, cassaforte e bagno privato. La struttura offre check-in flessibile e assistenza 24/7.' },
        { q: 'Come si prenota?', a: 'Le prenotazioni si effettuano dal sito ufficiale lestanzedicaterina.com tramite il pulsante “Prenota Ora”, che reindirizza al motore di prenotazione esterno Xenion (my.xenion.it). In alternativa è possibile contattarci via email a giacomomarretti1997@gmail.com o telefono/WhatsApp al +39 333 199 2394.' },
        { q: 'A che distanza si trovano i principali monumenti?', a: 'Duomo di Firenze: 2 minuti a piedi. Battistero di San Giovanni: 3 minuti. Galleria degli Uffizi: 5 minuti. Piazza della Signoria: 5 minuti. Ponte Vecchio: 8 minuti. Galleria dell’Accademia (David di Michelangelo): 8 minuti. Mercato Centrale: 10 minuti. Palazzo Pitti: 10 minuti. Stazione Santa Maria Novella: 12 minuti.' },
        { q: 'Quali lingue parlate?', a: 'Italiano e inglese. Il sito è disponibile in entrambe le lingue.' },
        { q: 'Quali metodi di pagamento sono accettati?', a: 'Tramite il motore di prenotazione Xenion sono accettati pagamenti gestiti da Stripe, Axerve e PayPal. Per dettagli sui metodi consigliamo di completare la prenotazione su my.xenion.it.' },
        { q: 'Sono ammessi animali domestici?', a: 'Per esigenze specifiche su animali domestici, accessibilità, lettini o necessità dietetiche è preferibile contattarci direttamente prima della prenotazione via email o WhatsApp.' },
        { q: 'C’è un parcheggio?', a: 'L’alloggio si trova nel centro storico (ZTL). Non disponiamo di parcheggio privato. Sono disponibili parcheggi pubblici a pagamento nelle vicinanze; per arrivare in auto consigliamo di contattarci per indicazioni sull’accesso temporaneo alla ZTL.' },
        { q: 'Come si raggiunge dall’aeroporto o dalla stazione?', a: 'Dalla stazione di Firenze Santa Maria Novella: 12 minuti a piedi o brevissima corsa in taxi. Dall’aeroporto di Firenze-Peretola (FLR): circa 25 minuti in taxi o tramvia T2 fino a stazione SMN e poi 12 minuti a piedi.' }
    ],
    en: [
        { q: 'Where is Le Stanze di Caterina located?', a: 'Le Stanze di Caterina is at Via dello Studio 12, 50122 Florence, around 50 meters (2 minutes on foot) from the Duomo di Santa Maria del Fiore, in the heart of the historic centre.' },
        { q: 'How many rooms are there and what are they like?', a: 'There are three suites: Spanish Suite (35 m², 15th-century brick walls, historic view, from €180), Italian Suite (30 m², Carrara marble bathroom, quiet courtyard, from €150) and French Suite (28 m², Renaissance-inspired interiors, fully renovated bathroom, from €140). Each suite accommodates up to 2 guests.' },
        { q: 'Which amenities are included?', a: 'All suites include ultra-fast free Wi-Fi, air conditioning, Smart TV, minibar, safe and private bathroom. The property offers flexible check-in and 24/7 support.' },
        { q: 'How do I book?', a: 'Bookings can be made on the official website lestanzedicaterina.com via the “Book Now” button, which redirects to the external booking engine Xenion (my.xenion.it). You can also contact us by email at giacomomarretti1997@gmail.com or by phone/WhatsApp at +39 333 199 2394.' },
        { q: 'How far are the main monuments?', a: 'Florence Duomo: 2 min on foot. Baptistery of San Giovanni: 3 min. Uffizi Gallery: 5 min. Piazza della Signoria: 5 min. Ponte Vecchio: 8 min. Accademia Gallery (Michelangelo’s David): 8 min. Mercato Centrale: 10 min. Pitti Palace: 10 min. Santa Maria Novella station: 12 min.' },
        { q: 'Which languages do you speak?', a: 'Italian and English. The site is available in both languages.' },
        { q: 'Which payment methods are accepted?', a: 'Through the Xenion booking engine, payments are processed by Stripe, Axerve and PayPal. For full details please complete the booking on my.xenion.it.' },
        { q: 'Are pets allowed?', a: 'For specific needs related to pets, accessibility, baby cots or dietary requirements please contact us directly before booking by email or WhatsApp.' },
        { q: 'Is there parking?', a: 'The property is inside Florence’s restricted traffic zone (ZTL). We do not offer private parking. Several paid public car parks are available nearby; if you arrive by car please contact us for guidance on temporary ZTL access.' },
        { q: 'How do I get there from the airport or station?', a: 'From Florence Santa Maria Novella station: 12 minutes on foot or a very short taxi ride. From Florence-Peretola Airport (FLR): about 25 minutes by taxi, or take the T2 tram to SMN station and walk for 12 minutes.' }
    ]
}

export function faqJsonLd(language = 'it') {
    const items = FAQ_DATA[language] || FAQ_DATA.it
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a }
        }))
    }
}

export const PRERENDER_ROUTES = [
    { path: '/', titleIt: 'Le Stanze di Caterina — B&B di lusso a Firenze, a 50 m dal Duomo', titleEn: 'Le Stanze di Caterina — luxury B&B in Florence, 50 m from the Duomo', descriptionIt: 'Tre suite di design nel cuore di Firenze, a 50 metri dal Duomo. Wi-Fi, aria condizionata, check-in flessibile, assistenza 24/7. Prenota direttamente.', descriptionEn: 'Three design suites in the heart of Florence, 50 meters from the Duomo. Wi-Fi, air conditioning, flexible check-in, 24/7 support. Book directly.', priority: '1.0' },
    { path: '/galleria', titleIt: 'Galleria — Le Stanze di Caterina', titleEn: 'Gallery — Le Stanze di Caterina', descriptionIt: 'Galleria fotografica delle suite e degli ambienti del B&B Le Stanze di Caterina a Firenze.', descriptionEn: 'Photo gallery of the suites and interiors of Le Stanze di Caterina B&B in Florence.', priority: '0.7' },
    { path: '/stanza/camera-spagnola', isRoom: true, slug: 'camera-spagnola', priority: '0.9' },
    { path: '/stanza/camera-italiana', isRoom: true, slug: 'camera-italiana', priority: '0.9' },
    { path: '/stanza/camera-francese', isRoom: true, slug: 'camera-francese', priority: '0.9' },
    { path: '/prenota', titleIt: 'Prenota — Le Stanze di Caterina', titleEn: 'Book — Le Stanze di Caterina', descriptionIt: 'Pagina di reindirizzamento al motore di prenotazione esterno Xenion.', descriptionEn: 'Redirect page to the external Xenion booking engine.', noindex: true, priority: '0.3' },
    { path: '/faq', titleIt: 'Domande frequenti — Le Stanze di Caterina', titleEn: 'Frequently Asked Questions — Le Stanze di Caterina', descriptionIt: 'Risposte alle domande più comuni su Le Stanze di Caterina: posizione, stanze, servizi, prenotazioni, distanze.', descriptionEn: 'Answers to the most common questions about Le Stanze di Caterina: location, rooms, amenities, bookings, distances.', priority: '0.8' },
    { path: '/ai/knowledge', titleIt: 'Knowledge base AI — Le Stanze di Caterina', titleEn: 'AI Knowledge base — Le Stanze di Caterina', descriptionIt: 'Knowledge base completa di Le Stanze di Caterina pensata per assistenti AI e motori di risposta (ChatGPT, Perplexity, Claude, Gemini, Copilot).', descriptionEn: 'Complete knowledge base of Le Stanze di Caterina designed for AI assistants and answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot).', priority: '0.6' },
    { path: '/ai/faq', titleIt: 'FAQ per AI — Le Stanze di Caterina', titleEn: 'AI FAQ — Le Stanze di Caterina', descriptionIt: 'Versione estesa delle FAQ ottimizzata per motori di risposta AI.', descriptionEn: 'Extended FAQ version optimised for AI answer engines.', priority: '0.5' },
    { path: '/privacy-policy', titleIt: 'Privacy Policy — Le Stanze di Caterina', titleEn: 'Privacy Notice — Le Stanze di Caterina', descriptionIt: 'Informativa privacy GDPR di Le Stanze di Caterina.', descriptionEn: 'GDPR privacy notice of Le Stanze di Caterina.', noindex: true, priority: '0.1' },
    { path: '/cookie-policy', titleIt: 'Cookie Policy — Le Stanze di Caterina', titleEn: 'Cookie Policy — Le Stanze di Caterina', descriptionIt: 'Cookie policy di Le Stanze di Caterina.', descriptionEn: 'Cookie policy of Le Stanze di Caterina.', noindex: true, priority: '0.1' }
]
