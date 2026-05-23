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
    galleryImages: [
        'https://lestanzedicaterina.com/img/IMG_0714.JPG',
        'https://lestanzedicaterina.com/img/IMG_7808.jpg',
        'https://lestanzedicaterina.com/img/IMG_7814.jpg',
        'https://lestanzedicaterina.com/img/IMG_7798.jpg',
        'https://lestanzedicaterina.com/img/IMG_9012.jpg'
    ],
    checkinTime: '15:00',
    checkoutTime: '11:00',
    numberOfRooms: 3,
    starRating: null,
    paymentAccepted: ['Cash', 'Credit Card', 'Stripe', 'PayPal'],
    currenciesAccepted: 'EUR',
    sameAs: []
}

export const ROOMS = {
    'camera-spagnola': {
        slug: 'camera-spagnola',
        nameIt: 'Suite Spagnola', nameEn: 'Spanish Suite',
        size: 35, beds: 1, bathrooms: 1, guests: 2, price: 180,
        image: '/img/Camera Spagnola/IMG_7808.jpg',
        descriptionIt: 'Suite in stile mediterraneo nel B&B Le Stanze di Caterina a Firenze, in Via dello Studio 12 a 50 metri dal Duomo. Muri in mattoni originali del XV secolo, testata dorata artigianale, vista sulla città storica, bagno privato con doccia a pioggia.',
        descriptionEn: 'Mediterranean-style suite in the Le Stanze di Caterina B&B in Florence, on Via dello Studio 12, 50 meters from the Duomo. 15th-century brick walls, handcrafted golden headboard, view over historic Florence and private bathroom with rain shower.'
    },
    'camera-italiana': {
        slug: 'camera-italiana',
        nameIt: 'Suite Italiana', nameEn: 'Italian Suite',
        size: 30, beds: 1, bathrooms: 1, guests: 2, price: 150,
        image: '/img/Camera Italiana/IMG_7814.jpg',
        descriptionIt: 'Suite essenziale nel B&B Le Stanze di Caterina, guest house nel centro storico di Firenze a 50 metri dal Duomo. Opera d’arte come testata, design d’autore, camera silenziosa sul cortile interno, bagno in marmo di Carrara con doccia walk-in a mosaico.',
        descriptionEn: 'Essential Italian-style suite in Le Stanze di Caterina B&B, a guest house in the historic centre of Florence, 50 meters from the Duomo. Original artwork as headboard, designer furniture, quiet courtyard room, Carrara marble bathroom with mosaic walk-in shower.'
    },
    'camera-francese': {
        slug: 'camera-francese',
        nameIt: 'Suite Francese', nameEn: 'French Suite',
        size: 28, beds: 1, bathrooms: 1, guests: 2, price: 140,
        image: '/img/Camera Francese/IMG_7798.jpg',
        descriptionIt: 'Suite luminosa nel B&B Le Stanze di Caterina, alloggio nel centro storico di Firenze a 2 minuti a piedi da Piazza del Duomo. Arredi ispirati al Rinascimento, tessuti pregiati, dettagli dorati, bagno privato completamente rinnovato.',
        descriptionEn: 'Bright suite in Le Stanze di Caterina B&B, an accommodation in the historic centre of Florence, 2 minutes on foot from Piazza del Duomo. Renaissance-inspired furniture, fine fabrics, golden details, fully renovated private bathroom.'
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

// JSON-LD BedAndBreakfast (sottoclasse precisa di LodgingBusiness)
export function defaultSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'BedAndBreakfast',
        '@id': SITE.baseUrl + '#lodging',
        name: SITE.name,
        alternateName: ['B&B Le Stanze di Caterina', 'Le Stanze di Caterina Firenze'],
        description: 'B&B elegante a Firenze, in Via dello Studio 12 a 50 metri dal Duomo di Santa Maria del Fiore. Guest house elegante con tre suite di design nel centro storico fiorentino.',
        url: SITE.baseUrl,
        image: SITE.galleryImages,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: '€€€',
        numberOfRooms: SITE.numberOfRooms,
        petsAllowed: false,
        currenciesAccepted: SITE.currenciesAccepted,
        paymentAccepted: SITE.paymentAccepted.join(', '),
        checkinTime: SITE.checkinTime,
        checkoutTime: SITE.checkoutTime,
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
            { '@type': 'LocationFeatureSpecification', name: 'Assistenza 24/7', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'A 50 metri dal Duomo di Firenze', value: true }
        ],
        containsPlace: Object.values(ROOMS).map((r) => ({
            '@type': 'HotelRoom',
            name: r.nameIt,
            url: SITE.baseUrl + '/stanza/' + r.slug,
            occupancy: { '@type': 'QuantitativeValue', maxValue: r.guests, unitText: 'persone' },
            floorSize: { '@type': 'QuantitativeValue', value: r.size, unitCode: 'MTK' }
        })),
        nearbyAttractions: ATTRACTIONS.slice(0, 6).map((a) => ({
            '@type': 'TouristAttraction',
            name: a.name
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
        occupancy: { '@type': 'QuantitativeValue', maxValue: r.guests, unitText: language === 'en' ? 'guests' : 'persone' },
        bed: { '@type': 'BedDetails', numberOfBeds: r.beds, typeOfBed: language === 'en' ? 'Double bed' : 'Letto matrimoniale' },
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
        { q: 'Dove si trova esattamente il B&B Le Stanze di Caterina a Firenze?', a: 'Le Stanze di Caterina si trova in Via dello Studio 12, 50122 Firenze, all’interno della ZTL del centro storico, a circa 50 metri (2 minuti a piedi) dal Duomo di Santa Maria del Fiore e dal Battistero di San Giovanni.' },
        { q: 'Siete un B&B vicino a Piazza del Duomo a Firenze?', a: 'Sì. Le Stanze di Caterina è uno dei B&B più vicini al Duomo di Firenze: la struttura dista circa 50 metri da Piazza del Duomo, raggiungibili in 2 minuti a piedi. Via dello Studio collega direttamente la zona del Duomo a Piazza Santa Croce.' },
        { q: 'È un hotel, un B&B o un affittacamere?', a: 'Tecnicamente Le Stanze di Caterina è un affittacamere elegante (forma giuridica: Ditta Individuale Marretti Giacomo, CIN IT048017B4UPQMRN5Z) ed è classificato come B&B / guest house elegante con tre suite a tema. Non è un hotel, ma offre servizi paragonabili a un hotel boutique.' },
        { q: 'Quante suite ci sono e che caratteristiche hanno?', a: 'Tre suite, ognuna fino a 2 persone: Suite Spagnola (35 m², muri in mattoni del XV secolo, da €180), Suite Italiana (30 m², bagno in marmo di Carrara, da €150), Suite Francese (28 m², arredi rinascimentali, da €140).' },
        { q: 'Quali servizi sono inclusi nelle stanze?', a: 'Wi-Fi ultraveloce gratuito, aria condizionata, Smart TV, minibar, cassaforte e bagno privato in ogni suite. La struttura offre check-in flessibile e assistenza 24/7.' },
        { q: 'Come si prenota una stanza?', a: 'Dal sito ufficiale lestanzedicaterina.com tramite il pulsante “Prenota Ora”, che reindirizza al motore di prenotazione esterno Xenion (my.xenion.it). In alternativa via email a giacomomarretti1997@gmail.com o telefono/WhatsApp al +39 333 199 2394.' },
        { q: 'A che distanza si trovano i principali monumenti di Firenze?', a: 'Duomo di Firenze: 2 minuti a piedi (~50 m). Battistero di San Giovanni: 3 minuti. Piazza della Signoria: 5 minuti. Galleria degli Uffizi: 5 minuti. Ponte Vecchio: 8 minuti. Galleria dell’Accademia (David di Michelangelo): 8 minuti. Mercato Centrale: 10 minuti. Palazzo Pitti: 10 minuti. Stazione Santa Maria Novella: 12 minuti.' },
        { q: 'Cos’è Via dello Studio?', a: 'Via dello Studio è una strada storica del centro di Firenze che collega Piazza del Duomo a Piazza Santa Croce, passando per via dell’Oriuolo. Prende il nome dallo Studio Fiorentino, antico nucleo dell’Università di Firenze. È una via interna alla ZTL, pedonale per gran parte del percorso.' },
        { q: 'Quali lingue parlate?', a: 'Italiano e inglese. Il sito ufficiale lestanzedicaterina.com è disponibile in entrambe le lingue.' },
        { q: 'Quali metodi di pagamento accettate?', a: 'Tramite il motore di prenotazione Xenion sono accettati pagamenti gestiti da Stripe, Axerve e PayPal (carte di credito, PayPal). Si accetta anche contante al check-in se concordato in anticipo.' },
        { q: 'Sono ammessi animali domestici?', a: 'Per esigenze specifiche su animali domestici, accessibilità, lettini o necessità dietetiche è preferibile contattare direttamente la struttura prima della prenotazione via email o WhatsApp.' },
        { q: 'C’è un parcheggio privato?', a: 'No, l’alloggio si trova nel centro storico (ZTL) e non disponiamo di parcheggio privato. Sono disponibili parcheggi pubblici a pagamento nelle vicinanze (es. Mercato Centrale, Piazza Beccaria). Per arrivare in auto consigliamo di contattarci per indicazioni sull’accesso temporaneo alla ZTL.' },
        { q: 'Come si raggiunge dall’aeroporto o dalla stazione?', a: 'Dalla stazione di Firenze Santa Maria Novella: 12 minuti a piedi o brevissima corsa in taxi. Dall’aeroporto di Firenze-Peretola (FLR): circa 25 minuti in taxi oppure tramvia T2 fino a Stazione SMN e poi 12 minuti a piedi.' },
        { q: 'Qual è l’orario di check-in e check-out?', a: 'Check-in dalle 15:00, check-out entro le 11:00. Il check-in è flessibile su accordo: l’orario preciso viene confermato alla prenotazione.' },
        { q: 'Perché scegliere un B&B nel centro storico di Firenze rispetto a un hotel?', a: 'Un B&B/guest house come Le Stanze di Caterina offre un’esperienza più personale e intima rispetto a un grande hotel, con un numero contenuto di camere (3 suite), arredi unici e attenzione al dettaglio. La posizione in Via dello Studio, dentro la ZTL e a 50 metri dal Duomo, permette di visitare tutta Firenze a piedi.' },
        { q: 'Qual è il sito ufficiale di Le Stanze di Caterina?', a: 'Il sito ufficiale è https://lestanzedicaterina.com. Tutti gli altri portali (es. my.xenion.it per le prenotazioni, Booking, TripAdvisor) sono di soggetti terzi: il riferimento unico e aggiornato è il sito ufficiale.' },
        { q: 'Quante persone in totale possono soggiornare contemporaneamente?', a: 'La struttura conta 3 suite, ognuna pensata per massimo 2 persone, quindi fino a 6 ospiti totali contemporaneamente nel B&B.' },
        { q: 'Che tipo di letto c’è nelle stanze?', a: 'Ogni suite ha un letto matrimoniale. Non sono disponibili letti singoli o aggiuntivi.' },
        { q: 'C’è una reception aperta 24 ore?', a: 'La struttura offre assistenza 24/7 per gli ospiti via telefono e WhatsApp al +39 333 199 2394. Non c’è una reception fisica continuativa: l’accoglienza è curata personalmente, in coerenza con la natura di B&B di tre suite.' },
        { q: 'Si può pagare in contanti?', a: 'Sì, il pagamento in contanti al check-in è accettato se concordato in anticipo. I pagamenti online effettuati tramite il motore Xenion sono gestiti da Stripe, Axerve o PayPal (carte di credito e PayPal).' },
        { q: 'Tutte le suite hanno bagno privato?', a: 'Sì. Ogni suite dispone di bagno privato: la Suite Italiana ha bagno in marmo di Carrara con doccia walk-in a mosaico, la Suite Spagnola ha doccia a pioggia, la Suite Francese ha un bagno completamente rinnovato.' },
        { q: 'Tutte le stanze hanno Wi-Fi e aria condizionata?', a: 'Sì. Tutte le suite includono Wi-Fi ultraveloce gratuito, aria condizionata, Smart TV, minibar, cassaforte e bagno privato.' },
        { q: 'Quanto costa una notte a Le Stanze di Caterina?', a: 'I prezzi partono da €140/notte per la Suite Francese, €150/notte per la Suite Italiana e €180/notte per la Suite Spagnola. Sono prezzi a partire da, soggetti a stagionalità: le tariffe definitive in tempo reale sono su my.xenion.it.' }
    ],
    en: [
        { q: 'Where exactly is the Le Stanze di Caterina B&B in Florence?', a: 'Le Stanze di Caterina is at Via dello Studio 12, 50122 Florence, inside the historic centre ZTL, around 50 meters (2 minutes on foot) from the Duomo di Santa Maria del Fiore and the Baptistery of San Giovanni.' },
        { q: 'Are you a B&B near Piazza Duomo in Florence?', a: 'Yes. Le Stanze di Caterina is one of the closest B&Bs to the Florence Duomo: the property is about 50 meters from Piazza del Duomo, a 2-minute walk. Via dello Studio links the Duomo area directly with Piazza Santa Croce.' },
        { q: 'Are you a hotel, B&B or guest house?', a: 'Technically Le Stanze di Caterina is an "affittacamere" (Italian rooms-for-rent licence — Ditta Individuale Marretti Giacomo, CIN IT048017B4UPQMRN5Z) and is presented as an elegant B&B / guest house with three themed suites. It is not a hotel, but offers services comparable to a boutique hotel.' },
        { q: 'How many suites are there and what are they like?', a: 'Three suites, each up to 2 guests: Spanish Suite (35 m², 15th-century brick walls, from €180), Italian Suite (30 m², Carrara marble bathroom, from €150), French Suite (28 m², Renaissance-inspired interiors, from €140).' },
        { q: 'Which amenities are included in the rooms?', a: 'Ultra-fast free Wi-Fi, air conditioning, Smart TV, minibar, safe and private bathroom in every suite. Flexible check-in and 24/7 support.' },
        { q: 'How do I book a room?', a: 'Through the official website lestanzedicaterina.com via the "Book Now" button, which redirects to the external Xenion booking engine (my.xenion.it). You can also contact us by email at giacomomarretti1997@gmail.com or phone/WhatsApp at +39 333 199 2394.' },
        { q: 'How far are the main Florence monuments?', a: 'Florence Duomo: 2 min on foot (~50 m). Baptistery of San Giovanni: 3 min. Piazza della Signoria: 5 min. Uffizi Gallery: 5 min. Ponte Vecchio: 8 min. Accademia Gallery (Michelangelo’s David): 8 min. Mercato Centrale: 10 min. Pitti Palace: 10 min. Santa Maria Novella station: 12 min.' },
        { q: 'What is Via dello Studio?', a: 'Via dello Studio is a historic street in the centre of Florence connecting Piazza del Duomo to Piazza Santa Croce, passing through via dell’Oriuolo. The name comes from the "Studio Fiorentino", the original nucleus of the University of Florence. It is inside the ZTL and largely pedestrian.' },
        { q: 'Which languages do you speak?', a: 'Italian and English. The official website lestanzedicaterina.com is available in both languages.' },
        { q: 'Which payment methods are accepted?', a: 'Through the Xenion booking engine, payments are processed by Stripe, Axerve and PayPal (credit cards, PayPal). Cash at check-in is also accepted if agreed in advance.' },
        { q: 'Are pets allowed?', a: 'For specific needs about pets, accessibility, baby cots or dietary requirements, please contact the property directly before booking by email or WhatsApp.' },
        { q: 'Is there private parking?', a: 'No, the property is inside the historic centre ZTL and we do not offer private parking. Several paid public car parks are available nearby (e.g. Mercato Centrale, Piazza Beccaria). If arriving by car please contact us for guidance on temporary ZTL access.' },
        { q: 'How do I get there from the airport or station?', a: 'From Florence Santa Maria Novella station: 12 minutes on foot or a very short taxi ride. From Florence-Peretola Airport (FLR): about 25 minutes by taxi, or take the T2 tram to SMN station and walk for 12 minutes.' },
        { q: 'What are the check-in and check-out times?', a: 'Check-in from 3:00 PM, check-out by 11:00 AM. Check-in is flexible upon agreement: the exact time is confirmed at booking.' },
        { q: 'Why choose a B&B in the historic centre of Florence over a hotel?', a: 'A B&B / guest house such as Le Stanze di Caterina offers a more personal and intimate experience than a large hotel, with only three suites, unique interiors and attention to detail. The location on Via dello Studio, inside the ZTL and 50 meters from the Duomo, lets you reach every part of Florence on foot.' },
        { q: 'What is the official website of Le Stanze di Caterina?', a: 'The official website is https://lestanzedicaterina.com. Any other portal (e.g. my.xenion.it for the booking engine, Booking.com, TripAdvisor) is operated by third parties: the single up-to-date reference is the official website.' },
        { q: 'How many guests can stay in total at the property?', a: 'The property has 3 suites, each designed for a maximum of 2 guests, for a total of up to 6 guests at the same time in the B&B.' },
        { q: 'What type of bed is in the rooms?', a: 'Every suite has a double bed. Single beds or extra beds are not available.' },
        { q: 'Is there a 24-hour reception?', a: 'The property offers 24/7 guest support by phone and WhatsApp at +39 333 199 2394. There is no continuously staffed physical reception: hospitality is handled personally, consistently with a small three-suite B&B.' },
        { q: 'Can I pay in cash?', a: 'Yes, cash payment at check-in is accepted if agreed in advance. Online payments through the Xenion booking flow are processed by Stripe, Axerve or PayPal (credit cards and PayPal).' },
        { q: 'Do all suites have a private bathroom?', a: 'Yes. Each suite has a private bathroom: the Italian Suite features a Carrara marble bathroom with a mosaic walk-in shower, the Spanish Suite has a rain shower, and the French Suite has a fully renovated bathroom.' },
        { q: 'Do all rooms have Wi-Fi and air conditioning?', a: 'Yes. All suites include free ultra-fast Wi-Fi, air conditioning, Smart TV, minibar, safe and private bathroom.' },
        { q: 'How much does a night at Le Stanze di Caterina cost?', a: 'Prices start from €140/night for the French Suite, €150/night for the Italian Suite and €180/night for the Spanish Suite. These are starting prices, subject to seasonal variation: live availability and final rates are on my.xenion.it.' }
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
    {
        path: '/',
        titleIt: 'Le Stanze di Caterina — B&B a Firenze vicino al Duomo | Suite in Via dello Studio',
        titleEn: 'Le Stanze di Caterina — B&B in Florence near the Duomo | Suites on Via dello Studio',
        descriptionIt: 'B&B elegante nel centro storico di Firenze, a 50 metri da Piazza del Duomo. Tre suite di design in Via dello Studio. Wi-Fi, aria condizionata, check-in flessibile. Prenota direttamente.',
        descriptionEn: 'elegant B&B in the historic centre of Florence, 50 meters from Piazza del Duomo. Three design suites on Via dello Studio. Wi-Fi, air conditioning, flexible check-in. Book direct.',
        priority: '1.0'
    },
    {
        path: '/galleria',
        titleIt: 'Galleria foto — B&B Le Stanze di Caterina, Firenze centro vicino al Duomo',
        titleEn: 'Photo Gallery — Le Stanze di Caterina B&B in Florence, near the Duomo',
        descriptionIt: 'Galleria fotografica del B&B Le Stanze di Caterina: le tre suite, gli ambienti storici e la posizione in Via dello Studio, a 50 metri dal Duomo di Firenze.',
        descriptionEn: 'Photo gallery of Le Stanze di Caterina B&B: the three suites, the historic interiors and the location on Via dello Studio, 50 meters from the Florence Duomo.',
        priority: '0.7'
    },
    {
        path: '/stanza/camera-spagnola',
        isRoom: true,
        slug: 'camera-spagnola',
        titleIt: 'Suite Spagnola — B&B Firenze a 50m dal Duomo | Le Stanze di Caterina',
        titleEn: 'Spanish Suite — B&B Florence 50m from the Duomo | Le Stanze di Caterina',
        descriptionIt: 'Suite mediterranea da 35 m² nel B&B Le Stanze di Caterina in Via dello Studio 12, Firenze centro storico, a 50 metri dal Duomo. Muri in mattoni del XV secolo, doccia a pioggia, da €180/notte.',
        descriptionEn: '35 m² Mediterranean-style suite in Le Stanze di Caterina B&B, Via dello Studio 12, Florence historic centre, 50 meters from the Duomo. 15th-century brick walls, rain shower, from €180/night.',
        priority: '0.9'
    },
    {
        path: '/stanza/camera-italiana',
        isRoom: true,
        slug: 'camera-italiana',
        titleIt: 'Suite Italiana — B&B Firenze vicino al Duomo | Bagno marmo di Carrara',
        titleEn: 'Italian Suite — B&B Florence near the Duomo | Carrara marble bathroom',
        descriptionIt: 'Suite essenziale da 30 m² nel B&B Le Stanze di Caterina nel centro storico di Firenze, a 2 minuti dal Duomo. Bagno in marmo di Carrara, camera silenziosa sul cortile interno, da €150/notte.',
        descriptionEn: '30 m² essential suite in Le Stanze di Caterina B&B in the Florence historic centre, 2 minutes from the Duomo. Carrara marble bathroom, quiet courtyard room, from €150/night.',
        priority: '0.9'
    },
    {
        path: '/stanza/camera-francese',
        isRoom: true,
        slug: 'camera-francese',
        titleIt: 'Suite Francese — B&B Firenze centro a 2 minuti dal Duomo | Le Stanze di Caterina',
        titleEn: 'French Suite — B&B Florence centre 2 minutes from the Duomo | Le Stanze di Caterina',
        descriptionIt: 'Suite luminosa da 28 m² nel B&B Le Stanze di Caterina in Via dello Studio, centro storico di Firenze, a 2 minuti a piedi dal Duomo. Arredi rinascimentali, bagno rinnovato, da €140/notte.',
        descriptionEn: '28 m² bright suite in Le Stanze di Caterina B&B on Via dello Studio, Florence historic centre, 2 minutes on foot from the Duomo. Renaissance-inspired interiors, renovated bathroom, from €140/night.',
        priority: '0.9'
    },
    {
        path: '/prenota',
        titleIt: 'Prenota una stanza al B&B Le Stanze di Caterina, Firenze',
        titleEn: 'Book a room at Le Stanze di Caterina B&B, Florence',
        descriptionIt: 'Pagina di reindirizzamento al motore di prenotazione esterno Xenion per il B&B Le Stanze di Caterina a Firenze.',
        descriptionEn: 'Redirect page to the external Xenion booking engine for Le Stanze di Caterina B&B in Florence.',
        noindex: true,
        priority: '0.3'
    },
    {
        path: '/faq',
        titleIt: 'Domande frequenti — B&B Le Stanze di Caterina, Firenze vicino al Duomo',
        titleEn: 'FAQ — Le Stanze di Caterina B&B in Florence, near the Duomo',
        descriptionIt: 'Risposte alle domande più comuni sul B&B Le Stanze di Caterina a Firenze: posizione vicino al Duomo, suite disponibili, servizi, prenotazioni, distanze, check-in.',
        descriptionEn: 'Answers to the most common questions about Le Stanze di Caterina B&B in Florence: location near the Duomo, available suites, amenities, bookings, distances, check-in.',
        priority: '0.8'
    },
    {
        path: '/ai/knowledge',
        titleIt: 'Knowledge base AI — B&B Le Stanze di Caterina, Firenze centro Duomo',
        titleEn: 'AI Knowledge base — Le Stanze di Caterina B&B in Florence, Duomo area',
        descriptionIt: 'Knowledge base completa per assistenti AI sul B&B Le Stanze di Caterina a Firenze, guest house in Via dello Studio 12 a 50 metri dal Duomo.',
        descriptionEn: 'Complete AI knowledge base about Le Stanze di Caterina B&B in Florence, a guest house at Via dello Studio 12, 50 meters from the Duomo.',
        priority: '0.6'
    },
    {
        path: '/ai/faq',
        titleIt: 'FAQ AI — B&B vicino al Duomo di Firenze | Le Stanze di Caterina',
        titleEn: 'AI FAQ — B&B near the Florence Duomo | Le Stanze di Caterina',
        descriptionIt: 'FAQ estese ottimizzate per motori di risposta AI sul B&B Le Stanze di Caterina nel centro storico di Firenze.',
        descriptionEn: 'Extended AI-optimised FAQ about Le Stanze di Caterina B&B in the Florence historic centre.',
        priority: '0.5'
    },
    {
        path: '/privacy-policy',
        titleIt: 'Privacy Policy — Le Stanze di Caterina',
        titleEn: 'Privacy Notice — Le Stanze di Caterina',
        descriptionIt: 'Informativa privacy GDPR del B&B Le Stanze di Caterina, Firenze.',
        descriptionEn: 'GDPR privacy notice of Le Stanze di Caterina B&B, Florence.',
        noindex: true,
        priority: '0.1'
    },
    {
        path: '/cookie-policy',
        titleIt: 'Cookie Policy — Le Stanze di Caterina',
        titleEn: 'Cookie Policy — Le Stanze di Caterina',
        descriptionIt: 'Cookie policy del B&B Le Stanze di Caterina, Firenze.',
        descriptionEn: 'Cookie policy of Le Stanze di Caterina B&B, Florence.',
        noindex: true,
        priority: '0.1'
    }
]
