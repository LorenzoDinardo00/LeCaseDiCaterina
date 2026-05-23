export const translations = {
  it: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      rooms: 'Le Stanze',
      gallery: 'Galleria',
      location: 'Posizione',
      contact: 'Contatti',
      bookNow: 'Prenota Ora'
    },

    // Hero
    hero: {
      title: 'Le Stanze di Caterina',
      subtitle: 'Eleganza fiorentina a due passi dal Duomo',
      cta: 'Scopri le nostre stanze',
      slides: [
        'Architettura storica',
        'Vista sul Duomo di Firenze',
        'Suite con mattoni originali',
        'Suite Italiana'
      ]
    },

    // About
    about: {
      label: 'Benvenuti',
      title: "Un'esperienza unica nel cuore di Firenze",
      p1: "Le Stanze di Caterina vi accolgono in un palazzo storico del centro di Firenze, dove l'eleganza rinascimentale incontra il comfort contemporaneo. A pochi passi dal magnifico Duomo di Santa Maria del Fiore, la nostra struttura offre un rifugio esclusivo per viaggiatori esigenti.",
      p2: "Ogni dettaglio è stato curato con passione per offrirvi un soggiorno indimenticabile, dove il fascino dell'arte e della storia si fondono con servizi di altissimo livello.",
      features: ['Posizione centrale', 'Design raffinato', 'Servizio esclusivo']
    },

    // Rooms
    rooms: {
      label: 'Alloggi',
      title: 'Le Nostre Stanze',
      description: "Ogni camera è un'opera d'arte, curata nei minimi dettagli per offrire un'esperienza di soggiorno senza paragoni.",
      discover: 'Scopri',
      spagnola: 'Suite Spagnola',
      italiana: 'Suite Italiana',
      francese: 'Suite Francese'
    },

    // Services
    services: {
      wifi: { title: 'Wi-Fi Gratuito', desc: 'Connessione veloce in tutta la struttura' },
      checkin: { title: 'Check-in Flessibile', desc: 'Arrivo in qualsiasi momento della giornata' },
      support: { title: 'Assistenza h24', desc: 'Supporto sempre disponibile per ogni esigenza' },
      location: { title: 'Posizione Centrale', desc: 'A 2 minuti a piedi dal Duomo di Firenze' }
    },

    // Gallery
    gallery: {
      label: 'Galleria',
      title: 'Scorci di Eleganza',
      description: 'Esplora gli angoli più suggestivi delle nostre stanze',
      cta: 'Scopri la Galleria Completa',
      pageTitle: 'La Nostra Galleria',
      pageDescription: 'Scopri ogni angolo delle nostre eleganti stanze attraverso la nostra collezione fotografica',
      backHome: 'Torna alla Home'
    },

    // Location
    location: {
      label: 'Posizione',
      title: 'Nel Cuore di Firenze',
      description: 'Le Stanze di Caterina si trovano in una posizione privilegiata, a soli 50 metri dal Duomo di Santa Maria del Fiore. Da qui potrete raggiungere a piedi tutti i principali monumenti e musei della città.',
      distances: [
        { value: '2 min', label: 'Duomo di Firenze' },
        { value: '5 min', label: 'Galleria degli Uffizi' },
        { value: '8 min', label: 'Ponte Vecchio' },
        { value: '10 min', label: 'Palazzo Pitti' }
      ]
    },

    // Contact
    contact: {
      label: 'Contatti',
      title: 'Prenotate il Vostro Soggiorno',
      description: 'Per informazioni e prenotazioni, non esitate a contattarci. Il nostro team sarà lieto di assistervi nella pianificazione del vostro soggiorno perfetto.',
      address: 'Indirizzo',
      phone: 'Telefono',
      whatsapp: 'WhatsApp',
      email: 'Email'
    },

    footer: {
      tagline: "Un'esperienza di ospitalità unica nel cuore di Firenze.",
      links: 'Link Utili',
      follow: 'Seguici',
      rights: '© 2026 Le Stanze di Caterina. Tutti i diritti riservati.',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      preferences: 'Gestisci preferenze cookie',
      designer: 'Engineered by Tempora Innovation'
    },

    // Cookie Banner
    cookieBanner: {
      title: 'Cookie e privacy',
      text: 'Usiamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso, possiamo usare anche cookie statistici e contenuti di terze parti (es. mappe Google) per migliorare l’esperienza. Nessun cookie non necessario viene impostato senza la tua scelta esplicita. Puoi accettare, rifiutare o personalizzare le preferenze in qualsiasi momento.',
      accept: 'Accetta tutti',
      reject: 'Rifiuta non necessari',
      customize: 'Personalizza',
      readMore: 'Leggi la Cookie Policy',
      preferencesTitle: 'Preferenze Cookie',
      preferencesText: 'Scegli quali categorie di cookie autorizzare. Le tue preferenze possono essere modificate in qualsiasi momento dal footer.',
      necessary: 'Necessari (Sempre attivi)',
      necessaryDesc: 'Cookie indispensabili al funzionamento del sito: lingua, preferenze privacy, sicurezza della sessione. Non richiedono consenso (base giuridica: legittimo interesse / esecuzione del contratto, art. 122 Codice Privacy).',
      analytics: 'Statistici',
      analyticsDesc: 'Strumenti di misurazione anonimi/aggregati per capire come viene usato il sito. Attualmente nessuno strumento di analytics è attivo: la categoria resta opzionale per eventuali strumenti futuri (es. Plausible, Matomo o equivalenti privacy-friendly).',
      marketing: 'Contenuti di Terze Parti',
      marketingDesc: 'Contenuti incorporati da fornitori terzi che possono impostare cookie o raccogliere dati di navigazione: Google Maps (mappa stanze e posizione). Senza il consenso questi contenuti non vengono caricati e al loro posto compare un placeholder.',
      save: 'Salva preferenze'
    },

    // Booking Redirect Page
    booking: {
      title: 'Stai per lasciare il nostro sito',
      intro: 'Il servizio di prenotazione NON è gestito da noi. È fornito da Xenion S.r.l., una società terza, autonoma e indipendente, sul dominio my.xenion.it, che non è di nostra proprietà. Cliccando su “Procedi” verrai reindirizzato fuori dal sito lestanzedicaterina.it e atterrerai su una piattaforma esterna gestita esclusivamente da Xenion.',
      noticeTitle: 'Cosa succede dopo il click',
      points: [
        'Lasci lestanzedicaterina.it ed entri su my.xenion.it, un sito di un fornitore terzo (Xenion S.r.l.) non gestito da noi.',
        'I dati che inserirai nel form (nome, contatti, date, eventuali documenti) saranno raccolti e trattati direttamente da Xenion sul proprio sito.',
        'Se completerai un pagamento online, i dati di pagamento saranno gestiti da Stripe, Axerve o PayPal — anch’essi soggetti terzi autonomi.',
        'Sulla pagina Xenion possono essere caricati componenti di altre terze parti (Google Fonts, jQuery, Bootstrap CDN, Google Maps API). Si applicano le privacy/cookie policy pubblicate da Xenion sul proprio dominio.',
        'Per esercitare i tuoi diritti GDPR puoi rivolgerti a noi per i soli dati che riceviamo da Xenion (gestione del soggiorno) e direttamente a Xenion per tutto il resto.'
      ],
      proceed: 'Procedi al sito di Xenion',
      back: 'Torna al sito',
      autoRedirect: 'Verrai reindirizzato automaticamente tra {seconds} secondi.',
      privacyLink: 'Leggi la nostra Privacy Policy',
      redirecting: 'Reindirizzamento in corso…'
    },

    // Privacy Policy Page
    privacyPolicy: {
      title: 'Informativa sulla Privacy',
      lastUpdated: 'Ultimo aggiornamento: 21/05/2026',
      intro: 'La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.lgs. 196/2003 e successive modifiche, e descrive come vengono trattati i dati personali degli utenti che consultano il sito lestanzedicaterina.it e utilizzano i relativi servizi (richieste di contatto, prenotazioni e funzionalità correlate).',
      sections: [
        {
          title: '1. Titolare del Trattamento',
          body: 'Titolare del trattamento è la Ditta Individuale Marretti Giacomo — P.IVA 07282350482, Codice CIN IT048017B4UPQMRN5Z — sede legale: Località Casaglia 3B, 50032 Borgo San Lorenzo (FI), Italia. Sede operativa / struttura ricettiva: Via dello Studio 12, 50122 Firenze (FI), Italia. Email: giacomomarretti1997@gmail.com — Telefono / WhatsApp: +39 333 199 2394. Il Titolare può essere contattato per qualsiasi richiesta relativa al trattamento dei dati personali e all’esercizio dei diritti dell’interessato.'
        },
        {
          title: '2. Tipologie di dati raccolti',
          body: 'Il sito tratta le seguenti categorie di dati: (a) dati di navigazione (indirizzo IP, user agent, pagine visitate, data/ora), raccolti automaticamente dai log del server e dei sistemi di hosting per finalità tecniche e di sicurezza; (b) dati identificativi e di contatto forniti volontariamente dall’utente tramite email o telefono (nome, cognome, recapito, contenuto del messaggio); (c) dati di prenotazione raccolti dal motore di prenotazione Xenion (nome, cognome, documento d’identità ove richiesto, recapiti, date di soggiorno, dati di pagamento gestiti da Stripe / Axerve / PayPal); (d) preferenze cookie memorizzate nel browser dell’utente.'
        },
        {
          title: '3. Finalità e basi giuridiche',
          body: 'I dati personali sono trattati per le seguenti finalità: (i) rispondere a richieste di informazioni e contatto — base giuridica: art. 6.1.b GDPR (misure precontrattuali) e art. 6.1.a (consenso); (ii) gestione delle prenotazioni e dei rapporti contrattuali con gli ospiti — base giuridica: art. 6.1.b GDPR (esecuzione del contratto) e adempimenti normativi (registro ospiti Questura ex art. 109 TULPS); (iii) adempimenti fiscali, contabili e di legge — base giuridica: art. 6.1.c GDPR (obbligo legale); (iv) sicurezza del sito, prevenzione frodi, log tecnici — base giuridica: art. 6.1.f GDPR (legittimo interesse del Titolare); (v) statistiche aggregate sulla fruizione del sito e integrazione di contenuti di terze parti (es. mappe) — base giuridica: art. 6.1.a GDPR (consenso, raccolto tramite cookie banner).'
        },
        {
          title: '4. Tempi di conservazione',
          body: 'I dati sono conservati per il tempo strettamente necessario alle finalità per cui sono raccolti: (a) email e richieste di contatto: 24 mesi dall’ultimo scambio, salvo richieste di cancellazione; (b) dati di prenotazione e contrattuali: 10 anni per obblighi civilistici/fiscali (art. 2220 c.c.); (c) dati comunicati alla Questura ex art. 109 TULPS: secondo i termini previsti dalla normativa di pubblica sicurezza; (d) log tecnici di accesso: massimo 12 mesi; (e) preferenze cookie: 6 mesi (poi viene richiesto nuovamente il consenso). Al termine dei periodi indicati i dati sono cancellati o anonimizzati.'
        },
        {
          title: '5. Destinatari dei dati e responsabili del trattamento',
          body: 'Tutti i destinatari elencati di seguito sono soggetti terzi, autonomi e giuridicamente distinti dal Titolare, che agiscono in qualità di Responsabili del trattamento ex art. 28 GDPR (o in alcuni casi come autonomi titolari) sulla base di appositi contratti: Vercel Inc. (hosting front-end del sito); Xenion S.r.l. — fornitore esterno proprietario e gestore del booking engine ospitato sul dominio my.xenion.it, NON gestito dal Titolare; Stripe Inc., Axerve S.p.A. e PayPal (Europe) S.à r.l. (gestione dei pagamenti, attivati all’interno del flusso Xenion, in qualità di titolari/responsabili autonomi); Bunny.net (CDN per i font web); Google Ireland Ltd. (servizio Google Maps Embed, attivato solo previo consenso). I dati possono inoltre essere comunicati ad autorità pubbliche, professionisti incaricati (es. commercialista) e fornitori IT, nei limiti delle finalità sopra indicate. L’elenco aggiornato dei Responsabili è disponibile su richiesta scritta al Titolare.'
        },
        {
          title: '6. Trasferimenti di dati extra UE',
          body: 'Alcuni fornitori (es. Vercel, Stripe, PayPal, Google) hanno sede o effettuano trattamenti negli Stati Uniti o in altri Paesi terzi. Tali trasferimenti avvengono in conformità al GDPR, sulla base di: (i) decisioni di adeguatezza della Commissione UE ove applicabili (es. EU-US Data Privacy Framework per i fornitori aderenti); (ii) Clausole Contrattuali Standard (SCC) adottate dalla Commissione UE; (iii) misure supplementari ove necessarie. Copia delle garanzie adottate può essere richiesta al Titolare.'
        },
        {
          title: '7. Diritti dell’interessato',
          body: 'L’utente ha diritto, ai sensi degli artt. 15-22 GDPR, di: accedere ai propri dati; richiederne la rettifica o la cancellazione; ottenere la limitazione o opporsi al trattamento; ricevere i dati in formato strutturato (portabilità); revocare in qualsiasi momento il consenso prestato, senza che ciò pregiudichi la liceità dei trattamenti effettuati prima della revoca. Le richieste vanno inviate via email a giacomomarretti1997@gmail.com. L’interessato ha inoltre diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it) qualora ritenga che il trattamento violi il GDPR.'
        },
        {
          title: '8. Cookie e tecnologie simili',
          body: 'Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento al primo caricamento. Cookie statistici e contenuti di terze parti (es. Google Maps) vengono attivati solo dopo consenso esplicito dell’utente tramite l’apposito banner. Per il dettaglio completo si rimanda alla Cookie Policy.'
        },
        {
          title: '9. Prenotazioni via Xenion — servizio esterno di terze parti',
          body: 'Si avvisa l’utente che il servizio di prenotazione NON è gestito dal Titolare né è ospitato su domini del Titolare. Cliccando “Prenota Ora” l’utente lascia il sito lestanzedicaterina.it e viene reindirizzato al booking engine ospitato sul dominio my.xenion.it, di proprietà e gestione esclusiva di Xenion S.r.l., società terza, autonoma e giuridicamente distinta dal Titolare del trattamento. Il sito my.xenion.it, il software del booking engine, l’infrastruttura, i log e i cookie ivi impostati sono di esclusiva responsabilità di Xenion S.r.l. Nei rapporti con il Titolare, Xenion agisce come Responsabile del trattamento ex art. 28 GDPR limitatamente ai dati delle prenotazioni della struttura. Su my.xenion.it possono essere caricati componenti di soggetti terzi ulteriori (Google Fonts, jQuery, Bootstrap CDN, Google Maps API, Stripe, Axerve, PayPal), per i quali si applicano le rispettive informative. Qualora l’utente proceda al pagamento online, i dati di pagamento sono raccolti e gestiti direttamente da Stripe, Axerve o PayPal in qualità di titolari/responsabili autonomi del trattamento secondo le rispettive politiche. Il Titolare riceve da Xenion i soli dati strettamente necessari alla gestione del soggiorno. Per i trattamenti effettuati da Xenion (log tecnici, cookie, caricamenti da CDN, eventuali ulteriori finalità) si rimanda esclusivamente all’informativa privacy/cookie pubblicata da Xenion sul dominio my.xenion.it.'
        },
        {
          title: '10. Sicurezza',
          body: 'Il Titolare adotta misure tecniche e organizzative adeguate per proteggere i dati da accessi non autorizzati, perdita, distruzione o diffusione: connessione HTTPS con HSTS, header di sicurezza (Content-Security-Policy, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, X-Frame-Options), gestione granulare del consenso cookie, principio di minimizzazione dei dati.'
        },
        {
          title: '11. Modifiche all’informativa',
          body: 'La presente informativa può essere aggiornata in qualsiasi momento per riflettere modifiche normative o organizzative. La versione vigente è sempre pubblicata su questa pagina con indicazione della data di ultimo aggiornamento.'
        }
      ]
    },

    // Cookie Policy Page
    cookiePolicy: {
      title: 'Cookie Policy',
      lastUpdated: 'Ultimo aggiornamento: 21/05/2026',
      intro: 'Questo documento informa gli utenti sui cookie e sulle tecnologie analoghe utilizzate dal sito lestanzedicaterina.it, ai sensi del provvedimento del Garante Privacy del 10/06/2021 e dell’art. 122 del Codice Privacy. Per la disciplina generale del trattamento dei dati personali si rimanda alla Privacy Policy.',
      whatAre: 'Cosa sono i cookie',
      whatAreText: 'I cookie sono piccoli file di testo che i siti web inviano al browser dell’utente, dove vengono memorizzati e poi ritrasmessi al sito stesso alla visita successiva. Analoghe tecnologie (es. local storage) possono memorizzare informazioni sul dispositivo dell’utente.',
      categoriesTitle: 'Categorie di cookie utilizzate',
      tableHeaderName: 'Nome / Fornitore',
      tableHeaderPurpose: 'Finalità',
      tableHeaderDuration: 'Durata',
      tableHeaderType: 'Tipo',
      necessaryTitle: 'Cookie tecnici (necessari)',
      necessaryText: 'Sono utilizzati esclusivamente al fine di effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria al fornitore di un servizio della società dell’informazione esplicitamente richiesto dall’utente. Non richiedono consenso.',
      necessaryRows: [
        { name: 'cookieConsent (Le Stanze di Caterina)', purpose: 'Memorizza le preferenze cookie scelte dall’utente.', duration: '6 mesi', type: 'Locale (localStorage), prima parte' },
        { name: 'language (Le Stanze di Caterina)', purpose: 'Memorizza la lingua selezionata.', duration: 'Sessione / persistente', type: 'Locale (localStorage), prima parte' }
      ],
      analyticsTitle: 'Cookie statistici',
      analyticsText: 'Al momento il sito non utilizza strumenti di analytics di terze parti. La categoria resta disponibile nel banner per consentire l’eventuale attivazione futura di strumenti privacy-friendly (es. Plausible, Matomo). Nessun cookie analitico viene impostato senza il consenso dell’utente.',
      analyticsRows: [],
      marketingTitle: 'Contenuti di terze parti',
      marketingText: 'Sono contenuti incorporati forniti da soggetti terzi che possono impostare cookie o raccogliere dati di navigazione (es. IP, user agent). Vengono caricati solo dopo consenso esplicito dell’utente; in assenza di consenso, al loro posto è mostrato un placeholder.',
      marketingRows: [
        { name: 'Google Maps Embed (Google Ireland Ltd.)', purpose: 'Visualizzazione mappa della struttura. Può impostare cookie come NID, SOCS, CONSENT.', duration: 'Fino a 6 mesi (Google)', type: 'Terza parte, extra-UE (SCC / EU-US DPF)' }
      ],
      otherToolsTitle: 'Altri servizi e fornitori coinvolti',
      otherToolsText: 'Il sito si avvale dei seguenti servizi, che pur non rientrando direttamente nella categoria dei cookie possono comportare il trattamento di dati tecnici (es. indirizzo IP) per il funzionamento del servizio:',
      otherToolsRows: [
        { name: 'Vercel Inc. (USA)', purpose: 'Hosting e distribuzione del sito. Log tecnici per sicurezza e prestazioni.', duration: 'Vedi privacy Vercel', type: 'Responsabile del trattamento' },
        { name: 'Bunny.net (Slovenia)', purpose: 'Distribuzione dei font web (fonts.bunny.net). Non imposta cookie di profilazione; non condivide dati con terzi a fini pubblicitari.', duration: 'Solo per la durata della richiesta', type: 'Responsabile del trattamento' },
        { name: 'Xenion S.r.l. (Italia) — fornitore esterno', purpose: 'Servizio booking engine ospitato su my.xenion.it, dominio NON di proprietà del Titolare. L’utente che clicca “Prenota Ora” esce dal sito lestanzedicaterina.it e viene reindirizzato a Xenion. Sulla pagina Xenion possono essere caricati ulteriori script di terze parti (Google Fonts, jQuery, Bootstrap CDN, Stripe, Axerve, PayPal, Google Maps API). I cookie eventualmente impostati su my.xenion.it sono di esclusiva responsabilità di Xenion.', duration: 'Vedi privacy/cookie policy pubblicate su my.xenion.it', type: 'Soggetto terzo, autonomo e distinto dal Titolare. Responsabile del trattamento ex art. 28 GDPR limitatamente alle prenotazioni della struttura.' },
        { name: 'Stripe / Axerve / PayPal', purpose: 'Elaborazione dei pagamenti effettuati nel flusso Xenion. Operano come autonomi titolari per gli aspetti antifrode e contabili.', duration: 'Vedi le rispettive privacy policy', type: 'Titolari/Responsabili autonomi nel proprio ambito' }
      ],
      managementTitle: 'Come gestire o revocare il consenso',
      managementText: 'Puoi modificare in qualsiasi momento le tue preferenze cliccando su “Gestisci preferenze cookie” nel footer del sito. È inoltre possibile bloccare o cancellare i cookie direttamente dalle impostazioni del proprio browser (Chrome, Firefox, Safari, Edge, Brave). La disattivazione dei cookie necessari può compromettere il funzionamento del sito.',
      rightsTitle: 'Diritti dell’interessato',
      rightsText: 'Per l’esercizio dei diritti previsti dagli artt. 15-22 GDPR (accesso, rettifica, cancellazione, opposizione, portabilità, reclamo al Garante) si rimanda alla Privacy Policy.'
    },

    // Room Page
    roomPage: {
      bookNow: 'Prenota Ora',
      hostedBy: 'Ospitato da Le Stanze di Caterina',
      aboutPlace: 'Informazioni su questo alloggio',
      amenitiesTitle: 'Cosa troverai',
      amenities: ['Aria condizionata', 'Wi-Fi ultraveloce', 'Smart TV', 'Minibar', 'Cassaforte', 'Bagno privato'],
      amenitiesCategory: 'Servizi',
      locationTitle: 'Dove ti troverai',
      locationDesc: 'Nel cuore del centro storico di Firenze, a soli 50 metri dal Duomo di Santa Maria del Fiore. La posizione perfetta per esplorare a piedi tutti i tesori della città.',
      otherRooms: 'Scopri le altre stanze',
      backHome: 'Torna alla Home',
      showAllPhotos: 'Mostra tutte le foto',

      // Room specific
      spagnola: {
        title: 'Suite Spagnola',
        tagline: 'Un ambiente intenso, caldo, vibrante',
        description: 'La Suite La Spagnola interpreta uno stile mediterraneo deciso e passionale: tonalità arancio e terracotta, superfici materiche e contrasti marcati danno vita a uno spazio di forte personalità, avvolgente e pieno di energia.',
        highlights: [
          'Muri in mattoni originali del XV secolo',
          'Testata del letto dorata artigianale',
          'Vista sulla città storica',
          'Bagno privato con doccia a pioggia'
        ]
      },
      italiana: {
        title: 'Suite Italiana',
        tagline: 'Un ambiente intimo, materico, autentico',
        description: "La Suite L'Italiana è un omaggio allo stile italiano più essenziale: superfici in pietra, tonalità calde, luci soffuse e un bagno dal carattere deciso, con ampia doccia walk-in rivestita in mosaico.",
        highlights: [
          "Opera d'arte originale come testata",
          "Design d'autore",
          'Camera silenziosa su cortile interno',
          'Bagno in marmo di Carrara'
        ]
      },
      francese: {
        title: 'Suite Francese',
        tagline: 'Un ambiente luminoso, raffinato, armonioso',
        description: "La Suite La Francese richiama l'eleganza senza tempo dello stile d'oltralpe: linee pulite, superfici chiare, dettagli classici e un bagno ampio e luminoso, pensato per offrire comfort e leggerezza.",
        highlights: [
          'Arredi ispirati al Rinascimento',
          'Tessuti pregiati e dettagli dorati',
          'A 2 minuti a piedi dal Duomo',
          'Bagno privato completamente rinnovato'
        ]
      }
    }
  },

  en: {
    // Navbar
    nav: {
      home: 'Home',
      about: 'About Us',
      rooms: 'Rooms',
      gallery: 'Gallery',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Now'
    },

    // Hero
    hero: {
      title: 'Le Stanze di Caterina',
      subtitle: 'Florentine elegance steps from the Duomo',
      cta: 'Discover our rooms',
      slides: [
        'Historic architecture',
        'View of Florence Duomo',
        'Suite with original bricks',
        'Italian Suite'
      ]
    },

    // About
    about: {
      label: 'Welcome',
      title: 'A unique experience in the heart of Florence',
      p1: 'Le Stanze di Caterina welcomes you in a historic palazzo in the center of Florence, where Renaissance elegance meets contemporary comfort. Just steps from the magnificent Duomo di Santa Maria del Fiore, our property offers an exclusive retreat for discerning travelers.',
      p2: 'Every detail has been lovingly curated to offer you an unforgettable stay, where the charm of art and history blend with the highest level of service.',
      features: ['Central location', 'Refined design', 'Exclusive service']
    },

    // Rooms
    rooms: {
      label: 'Accommodations',
      title: 'Our Rooms',
      description: 'Each room is a work of art, crafted with attention to detail to offer an unparalleled stay experience.',
      discover: 'Discover',
      spagnola: 'Spanish Suite',
      italiana: 'Italian Suite',
      francese: 'French Suite'
    },

    // Services
    services: {
      wifi: { title: 'Free Wi-Fi', desc: 'High-speed connection throughout the property' },
      checkin: { title: 'Flexible Check-in', desc: 'Arrive at any time of the day' },
      support: { title: '24/7 Support', desc: 'Always available for your every need' },
      location: { title: 'Central Location', desc: '2 minutes walk from Florence Duomo' }
    },

    // Gallery
    gallery: {
      label: 'Gallery',
      title: 'Glimpses of Elegance',
      description: 'Explore the most charming corners of our rooms',
      cta: 'View Full Gallery',
      pageTitle: 'Our Gallery',
      pageDescription: 'Discover every corner of our elegant rooms through our photo collection',
      backHome: 'Back to Home'
    },

    // Location
    location: {
      label: 'Location',
      title: 'In the Heart of Florence',
      description: 'Le Stanze di Caterina is located in a privileged position, just 50 meters from the Duomo di Santa Maria del Fiore. From here you can reach all the main monuments and museums on foot.',
      distances: [
        { value: '2 min', label: 'Florence Duomo' },
        { value: '5 min', label: 'Uffizi Gallery' },
        { value: '8 min', label: 'Ponte Vecchio' },
        { value: '10 min', label: 'Pitti Palace' }
      ]
    },

    // Contact
    contact: {
      label: 'Contact',
      title: 'Book Your Stay',
      description: 'For information and reservations, please do not hesitate to contact us. Our team will be happy to assist you in planning your perfect stay.',
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email'
    },

    footer: {
      tagline: 'A unique hospitality experience in the heart of Florence.',
      links: 'Useful Links',
      follow: 'Follow Us',
      rights: '© 2026 Le Stanze di Caterina. All rights reserved.',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      preferences: 'Manage cookie preferences',
      designer: 'Engineered by Tempora Innovation'
    },

    // Cookie Banner
    cookieBanner: {
      title: 'Cookies and Privacy',
      text: 'We use technical cookies necessary for the website to function. With your consent, we may also use statistical cookies and embedded third-party content (e.g. Google Maps) to improve the experience. No non-essential cookies are set without your explicit choice. You can accept, reject or customise your preferences at any time.',
      accept: 'Accept all',
      reject: 'Reject non-essential',
      customize: 'Customise',
      readMore: 'Read Cookie Policy',
      preferencesTitle: 'Cookie Preferences',
      preferencesText: 'Choose which cookie categories to authorise. Your preferences can be changed at any time from the site footer.',
      necessary: 'Necessary (Always active)',
      necessaryDesc: 'Essential cookies for the website to function: language, privacy preferences, session security. No consent required (legal basis: legitimate interest / contract performance, Art. 122 Italian Privacy Code).',
      analytics: 'Statistics',
      analyticsDesc: 'Anonymous/aggregate measurement tools used to understand how the site is used. No analytics tool is currently active: the category remains optional for future privacy-friendly tools (e.g. Plausible, Matomo).',
      marketing: 'Third-Party Content',
      marketingDesc: 'Content embedded from third-party providers that may set cookies or collect browsing data: Google Maps (room and location maps). Without consent these contents are not loaded and a placeholder is shown instead.',
      save: 'Save preferences'
    },

    // Booking Redirect Page
    booking: {
      title: 'You are about to leave our website',
      intro: 'The booking service is NOT operated by us. It is provided by Xenion S.r.l., a separate, independent third-party company, on the domain my.xenion.it, which is not owned by us. By clicking “Proceed” you will be redirected away from lestanzedicaterina.it and you will land on an external platform operated exclusively by Xenion.',
      noticeTitle: 'What happens after you click',
      points: [
        'You leave lestanzedicaterina.it and enter my.xenion.it, a website run by a third-party provider (Xenion S.r.l.) that we do not operate.',
        'The data you enter in the form (name, contact details, dates, any identity documents) will be collected and processed directly by Xenion on its own site.',
        'If you complete an online payment, payment data will be processed by Stripe, Axerve or PayPal — also independent third parties.',
        'The Xenion page may load further third-party components (Google Fonts, jQuery, Bootstrap CDN, Google Maps API). Xenion’s privacy and cookie policies — published on its own domain — apply.',
        'To exercise your GDPR rights you may contact us only for the data we receive from Xenion (stay management), and Xenion directly for everything else.'
      ],
      proceed: 'Proceed to the Xenion site',
      back: 'Back to the site',
      autoRedirect: 'You will be redirected automatically in {seconds} seconds.',
      privacyLink: 'Read our Privacy Policy',
      redirecting: 'Redirecting…'
    },

    // Privacy Policy Page
    privacyPolicy: {
      title: 'Privacy Notice',
      lastUpdated: 'Last updated: 21/05/2026',
      intro: 'This notice is provided under Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR) and Italian Legislative Decree 196/2003 as amended, and describes how personal data of users who visit the website lestanzedicaterina.it and use related services (contact requests, bookings and related features) are processed.',
      sections: [
        {
          title: '1. Data Controller',
          body: 'The Data Controller is Ditta Individuale Marretti Giacomo (sole proprietorship) — VAT no. 07282350482, Italian CIN code IT048017B4UPQMRN5Z — registered office: Località Casaglia 3B, 50032 Borgo San Lorenzo (FI), Italy. Operating address / accommodation: Via dello Studio 12, 50122 Florence (FI), Italy. Email: giacomomarretti1997@gmail.com — Phone / WhatsApp: +39 333 199 2394. The Controller may be contacted regarding any request related to the processing of personal data and the exercise of data subjects’ rights.'
        },
        {
          title: '2. Categories of data collected',
          body: 'The site processes the following categories of data: (a) browsing data (IP address, user agent, pages visited, date/time) automatically collected by server and hosting logs for technical and security purposes; (b) identification and contact data voluntarily provided by the user via email or telephone (name, surname, contact details, message content); (c) booking data collected through the Xenion booking engine (name, surname, identity document where required, contact details, stay dates, payment data processed by Stripe / Axerve / PayPal); (d) cookie preferences stored in the user’s browser.'
        },
        {
          title: '3. Purposes and legal bases',
          body: 'Personal data are processed for the following purposes: (i) replying to information and contact requests — legal basis: Art. 6.1.b GDPR (pre-contractual measures) and Art. 6.1.a (consent); (ii) management of bookings and contractual relationships with guests — legal basis: Art. 6.1.b GDPR (performance of the contract) and statutory obligations (guest register required by Italian police authority pursuant to Art. 109 TULPS); (iii) tax, accounting and legal compliance — legal basis: Art. 6.1.c GDPR (legal obligation); (iv) site security, fraud prevention, technical logs — legal basis: Art. 6.1.f GDPR (Controller’s legitimate interest); (v) aggregate statistics on the use of the site and integration of third-party content (e.g. maps) — legal basis: Art. 6.1.a GDPR (consent, collected via the cookie banner).'
        },
        {
          title: '4. Retention periods',
          body: 'Data are kept only for as long as strictly necessary for the purposes for which they were collected: (a) emails and contact requests: 24 months from the last exchange, subject to deletion requests; (b) booking and contractual data: 10 years for civil/tax obligations (Art. 2220 Italian Civil Code); (c) data communicated to the Italian Police under Art. 109 TULPS: as required by public security legislation; (d) technical access logs: maximum 12 months; (e) cookie preferences: 6 months (then consent is requested again). After the indicated periods data are deleted or anonymised.'
        },
        {
          title: '5. Recipients and data processors',
          body: 'All recipients listed below are third parties, independent and legally distinct from the Controller, acting as Data Processors under Art. 28 GDPR (or, in some cases, as independent controllers) on the basis of specific agreements: Vercel Inc. (front-end hosting); Xenion S.r.l. — external provider that owns and operates the booking engine hosted on the my.xenion.it domain, NOT operated by the Controller; Stripe Inc., Axerve S.p.A. and PayPal (Europe) S.à r.l. (payment processing, activated within the Xenion flow as independent controllers/processors); Bunny.net (CDN for web fonts); Google Ireland Ltd. (Google Maps Embed service, activated only after consent). Data may also be communicated to public authorities, appointed professionals (e.g. accountant) and IT providers, within the limits of the purposes set out above. An updated list of Data Processors is available on written request to the Controller.'
        },
        {
          title: '6. Transfers of data outside the EU',
          body: 'Some providers (e.g. Vercel, Stripe, PayPal, Google) are based or carry out processing in the United States or other non-EU countries. Such transfers take place in compliance with the GDPR, on the basis of: (i) European Commission adequacy decisions where applicable (e.g. EU-US Data Privacy Framework for participating providers); (ii) Standard Contractual Clauses (SCC) adopted by the European Commission; (iii) supplementary measures where necessary. A copy of the safeguards in place may be requested from the Controller.'
        },
        {
          title: '7. Data subjects’ rights',
          body: 'Pursuant to Articles 15-22 GDPR, the user has the right to: access their data; request rectification or erasure; obtain restriction or object to processing; receive data in a structured format (portability); withdraw consent at any time, without prejudice to the lawfulness of processing carried out before withdrawal. Requests should be sent by email to giacomomarretti1997@gmail.com. The data subject also has the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it) if they believe the processing breaches the GDPR.'
        },
        {
          title: '8. Cookies and similar technologies',
          body: 'The site only sets technical cookies necessary for its operation on first load. Statistical cookies and third-party content (e.g. Google Maps) are activated only after the user’s explicit consent via the dedicated banner. For full details please refer to the Cookie Policy.'
        },
        {
          title: '9. Bookings via Xenion — external third-party service',
          body: 'The user is hereby informed that the booking service is NOT operated by the Controller, nor is it hosted on any domain of the Controller. By clicking “Book Now” the user leaves the website lestanzedicaterina.it and is redirected to the booking engine hosted on the domain my.xenion.it, which is owned and exclusively operated by Xenion S.r.l., a third-party company, legally distinct and independent from the Controller. The my.xenion.it website, the booking engine software, the underlying infrastructure, the logs and any cookies set thereon are the sole responsibility of Xenion S.r.l. In its relationship with the Controller, Xenion acts as Data Processor under Art. 28 GDPR solely with respect to the booking data of the property. On my.xenion.it additional third-party components may be loaded (Google Fonts, jQuery, Bootstrap CDN, Google Maps API, Stripe, Axerve, PayPal), to which the respective privacy notices apply. Should the user proceed to online payment, payment data are collected and processed directly by Stripe, Axerve or PayPal as independent controllers/processors under their own policies. The Controller only receives from Xenion the data strictly necessary to manage the stay. For any processing carried out by Xenion (technical logs, cookies, CDN loads, any further purposes) please refer exclusively to the privacy/cookie notice published by Xenion on the my.xenion.it domain.'
        },
        {
          title: '10. Security',
          body: 'The Controller adopts appropriate technical and organisational measures to protect data from unauthorised access, loss, destruction or disclosure: HTTPS connection with HSTS, security headers (Content-Security-Policy, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, X-Frame-Options), granular cookie consent management, data minimisation principle.'
        },
        {
          title: '11. Changes to this notice',
          body: 'This notice may be updated at any time to reflect regulatory or organisational changes. The current version is always published on this page with the date of last update.'
        }
      ]
    },

    // Cookie Policy Page
    cookiePolicy: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: 21/05/2026',
      intro: 'This document informs users about cookies and similar technologies used on lestanzedicaterina.it, in accordance with the Italian Data Protection Authority Order of 10/06/2021 and Art. 122 of the Italian Privacy Code. For the general framework on personal data processing please refer to the Privacy Notice.',
      whatAre: 'What are cookies',
      whatAreText: 'Cookies are small text files that websites send to the user’s browser, where they are stored and then sent back to the same site on subsequent visits. Similar technologies (e.g. local storage) can store information on the user’s device.',
      categoriesTitle: 'Categories of cookies used',
      tableHeaderName: 'Name / Provider',
      tableHeaderPurpose: 'Purpose',
      tableHeaderDuration: 'Duration',
      tableHeaderType: 'Type',
      necessaryTitle: 'Technical cookies (necessary)',
      necessaryText: 'Used exclusively to carry out the transmission of a communication over an electronic communications network, or strictly necessary to provide a service explicitly requested by the user. No consent required.',
      necessaryRows: [
        { name: 'cookieConsent (Le Stanze di Caterina)', purpose: 'Stores the cookie preferences chosen by the user.', duration: '6 months', type: 'Local (localStorage), first party' },
        { name: 'language (Le Stanze di Caterina)', purpose: 'Stores the selected language.', duration: 'Session / persistent', type: 'Local (localStorage), first party' }
      ],
      analyticsTitle: 'Statistical cookies',
      analyticsText: 'The site does not currently use any third-party analytics tool. The category remains available in the banner to allow future activation of privacy-friendly tools (e.g. Plausible, Matomo). No analytics cookie is set without user consent.',
      analyticsRows: [],
      marketingTitle: 'Third-party content',
      marketingText: 'Embedded content provided by third parties that may set cookies or collect browsing data (e.g. IP, user agent). Loaded only after explicit user consent; without consent a placeholder is shown instead.',
      marketingRows: [
        { name: 'Google Maps Embed (Google Ireland Ltd.)', purpose: 'Displaying the property location map. May set cookies such as NID, SOCS, CONSENT.', duration: 'Up to 6 months (Google)', type: 'Third party, non-EU (SCC / EU-US DPF)' }
      ],
      otherToolsTitle: 'Other services and providers involved',
      otherToolsText: 'The site relies on the following services, which — although not strictly cookie-based — may involve the processing of technical data (e.g. IP address) for the operation of the service:',
      otherToolsRows: [
        { name: 'Vercel Inc. (USA)', purpose: 'Site hosting and delivery. Technical logs for security and performance.', duration: 'See Vercel privacy notice', type: 'Data Processor' },
        { name: 'Bunny.net (Slovenia)', purpose: 'Delivery of web fonts (fonts.bunny.net). Does not set profiling cookies; does not share data with third parties for advertising.', duration: 'Request lifetime only', type: 'Data Processor' },
        { name: 'Xenion S.r.l. (Italy) — external provider', purpose: 'Booking engine service hosted on my.xenion.it, a domain that is NOT owned by the Controller. Users clicking “Book Now” leave the lestanzedicaterina.it site and are redirected to Xenion. Additional third-party scripts may be loaded on the Xenion page (Google Fonts, jQuery, Bootstrap CDN, Stripe, Axerve, PayPal, Google Maps API). Any cookies set on my.xenion.it are the sole responsibility of Xenion.', duration: 'See the privacy/cookie notices published on my.xenion.it', type: 'Third party, independent and distinct from the Controller. Data Processor under Art. 28 GDPR limited to bookings of the property.' },
        { name: 'Stripe / Axerve / PayPal', purpose: 'Processing of payments made in the Xenion flow. Act as independent controllers for anti-fraud and accounting purposes.', duration: 'See their respective privacy policies', type: 'Independent Controllers/Processors within their scope' }
      ],
      managementTitle: 'How to manage or withdraw consent',
      managementText: 'You can change your preferences at any time by clicking on “Manage cookie preferences” in the site footer. You can also block or delete cookies directly from your browser settings (Chrome, Firefox, Safari, Edge, Brave). Disabling necessary cookies may impair the operation of the site.',
      rightsTitle: 'Data subjects’ rights',
      rightsText: 'For the exercise of the rights provided by Articles 15-22 GDPR (access, rectification, erasure, objection, portability, complaint to the Authority) please refer to the Privacy Notice.'
    },

    // Room Page
    roomPage: {
      bookNow: 'Book Now',
      hostedBy: 'Hosted by Le Stanze di Caterina',
      aboutPlace: 'About this place',
      amenitiesTitle: 'What you\'ll find',
      amenities: ['Air conditioning', 'Ultra-fast Wi-Fi', 'Smart TV', 'Minibar', 'Safe', 'Private bathroom'],
      amenitiesCategory: 'Amenities',
      locationTitle: 'Where you\'ll be',
      locationDesc: 'In the heart of historic Florence, just 50 meters from the Duomo di Santa Maria del Fiore. The perfect location to explore all the treasures of the city on foot.',
      otherRooms: 'Discover other rooms',
      backHome: 'Back to Home',
      showAllPhotos: 'Show all photos',

      // Room specific
      spagnola: {
        title: 'Spanish Suite',
        tagline: 'An intense, warm, vibrant atmosphere',
        description: 'The Spanish Suite interprets a bold and passionate Mediterranean style: orange and terracotta tones, textured surfaces and marked contrasts create a space of strong personality, enveloping and full of energy.',
        highlights: [
          '15th century original brick walls',
          'Handcrafted golden headboard',
          'View over the historic city',
          'Private bathroom with rain shower'
        ]
      },
      italiana: {
        title: 'Italian Suite',
        tagline: 'An intimate, textured, authentic atmosphere',
        description: "The Italian Suite is a tribute to the most essential Italian style: stone surfaces, warm tones, soft lighting and a bathroom with strong character, featuring a large walk-in shower covered in mosaic.",
        highlights: [
          'Original artwork as headboard',
          'Designer furniture',
          'Quiet room overlooking inner courtyard',
          'Carrara marble bathroom'
        ]
      },
      francese: {
        title: 'French Suite',
        tagline: 'A bright, refined, harmonious atmosphere',
        description: "The French Suite evokes the timeless elegance of French style: clean lines, light surfaces, classic details and a spacious, bright bathroom designed to offer comfort and lightness.",
        highlights: [
          'Renaissance-inspired furnishings',
          'Fine fabrics and golden details',
          '2 minutes walk from the Duomo',
          'Fully renovated private bathroom'
        ]
      }
    }
  }
}

export function t(translations, language, path) {
  const keys = path.split('.')
  let result = translations[language]
  for (const key of keys) {
    result = result?.[key]
  }
  return result || path
}
