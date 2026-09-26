export type SupportedLanguage =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "zh"
  | "ar"
  | "ja"
  | "ko"
  | "tr";

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
];

export interface TranslationDictionary {
  nav: {
    about: string;
    leather: string;
    knowledge: string;
    process: string;
    quality: string;
    contact: string;
    companyProfile: string;
    requestQuote: string;
    whatsApp: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    requestQuote: string;
    exploreCatalogue: string;
    pricingBasis: string;
    pricingValue: string;
    pricingNote: string;
    volumeBasis: string;
    volumeValue: string;
    volumeNote: string;
    leadTimeBasis: string;
    leadTimeValue: string;
    leadTimeNote: string;
    paymentBasis: string;
    paymentValue: string;
    paymentNote: string;
  };
  catalogue: {
    kicker: string;
    title: string;
    subtitle: string;
    sourcingNoteTitle: string;
    sourcingNote: string;
    searchPlaceholder: string;
    viewSpecs: string;
    requestQuote: string;
    customPromptTitle: string;
    customPromptDesc: string;
    customPromptCta: string;
  };
  knowledgeHub: {
    kicker: string;
    title: string;
    subtitle: string;
    consultationCta: string;
    allTips: string;
    wetBlue: string;
    crust: string;
    finished: string;
    receiving: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
  };
  commercial: {
    kicker: string;
    title: string;
    subtitle: string;
    moqTitle: string;
    moqDesc: string;
    pricingTitle: string;
    pricingDesc: string;
    leadTimeTitle: string;
    leadTimeDesc: string;
    paymentTitle: string;
    paymentDesc: string;
    notice: string;
  };
  inquiry: {
    kicker: string;
    title: string;
    subtitle: string;
    sendInquiry: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    nav: {
      about: "About",
      leather: "Leather",
      knowledge: "Knowledge",
      process: "Process",
      quality: "Quality",
      contact: "Contact",
      companyProfile: "Company Profile",
      requestQuote: "Request a Quote",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Bangladesh Leather Export · Leather Sourcing & Export Partner · B2B International",
      headline: "Your Trusted Leather Sourcing Partner from Bangladesh",
      subheadline:
        "ExportVisor assists international buyers, footwear manufacturers, and leather importers in sourcing commercial-grade wet blue, crust, and finished leather directly from reputable tanneries in Bangladesh. We bridge technical communication, oversee quality inspection coordination, and streamline export workflows.",
      requestQuote: "Request a Quotation",
      exploreCatalogue: "Explore Leather Catalogue",
      pricingBasis: "Pricing Basis",
      pricingValue: "Per RFQ",
      pricingNote: "Tailored to specifications",
      volumeBasis: "Order Volume & MOQ",
      volumeValue: "Per RFQ",
      volumeNote: "Aligned with buyer requirements",
      leadTimeBasis: "Production Lead Time",
      leadTimeValue: "Per RFQ",
      leadTimeNote: "Scheduled per batch specs",
      paymentBasis: "Payment Terms",
      paymentValue: "LC / TT",
      paymentNote: "Standard international trade",
    },
    catalogue: {
      kicker: "Sourcing Catalogue",
      title: "Export-Grade Bangladesh Leather",
      subtitle:
        "Explore our core leather sourcing classifications. Every shipment is tailored to buyer technical specifications, substance tolerances, and intended applications.",
      sourcingNoteTitle: "Sourcing Note",
      sourcingNote:
        "All leather varieties are sourced and processed according to specific buyer orders and tannery availability. Final commercial parameters are confirmed upon technical review.",
      searchPlaceholder: "Search by leather type, shoe, sofa...",
      viewSpecs: "View Specifications",
      requestQuote: "Request Quote",
      customPromptTitle: "Need a Custom Leather Specification or Specific Color Match?",
      customPromptDesc:
        "ExportVisor coordinates custom tannage formulation, lab dip approvals, and physical counter-samples based on your master physical swatch.",
      customPromptCta: "Submit Custom Specification",
    },
    knowledgeHub: {
      kicker: "B2B Value-Add & Technical Advisory",
      title: "Leather Knowledge Hub",
      subtitle:
        "Professional guidelines for handling, climate-controlled warehousing, and maintaining different leather forms—from hydrated wet blue hides to delicate finished aniline surfaces.",
      consultationCta: "Request Tech Consultation",
      allTips: "All Technical Tips",
      wetBlue: "Wet Blue Handling",
      crust: "Crust Leather Storage",
      finished: "Finished Leather Care",
      receiving: "Inbound Receiving Checklist",
      bannerTitle: "Have Specific Testing or Chemical Compliance Standards?",
      bannerDesc:
        "ExportVisor coordinates REACH compliance, azo-free certifications, chrome-free tanning formulations, and custom temper requirements upon RFQ submission.",
      bannerCta: "Submit Technical RFQ",
    },
    commercial: {
      kicker: "Commercial Framework",
      title: "RFQ-Driven Commercial Terms",
      subtitle:
        "Every export project is uniquely evaluated. Minimum quantities, production schedules, and commercial quotations are formulated strictly based on your Request for Quotation (RFQ) and technical specifications.",
      moqTitle: "Minimum Order Quantity (MOQ)",
      moqDesc:
        "Order volumes and minimums depend on the selected leather category, hide grading distribution, drum loading capacity, and buyer production requirements.",
      pricingTitle: "Tannery Quotation Basis",
      pricingDesc:
        "Pricing is customized to your exact technical specifications—leather grade, substance/thickness, finish type, test compliance, and total order volume.",
      leadTimeTitle: "Production Lead Time",
      leadTimeDesc:
        "Timelines are calculated upon review of raw material availability, beamhouse drum cycles, lab dip/counter-sample approvals, and total batch yardage.",
      paymentTitle: "International Payment Terms",
      paymentDesc:
        "Irrevocable Letter of Credit (LC at sight) or Telegraphic Transfer (TT) standard international banking channels for smooth cross-border trade.",
      notice:
        "All commercial terms, batch commitments, and pricing quotations are finalized following technical RFQ review and proforma confirmation based on your exact grade, thickness, and volume requirements.",
    },
    inquiry: {
      kicker: "Direct Sourcing Desk",
      title: "Request a Quotation & Leather Specification Review",
      subtitle:
        "Submit your technical leather requirements below. Our Bangladesh sourcing team will review tannery feasibility, availability, and prepare an indicative commercial offer.",
      sendInquiry: "Send Sourcing Inquiry to ExportVisor",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      leather: "Leder",
      knowledge: "Fachwissen",
      process: "Prozess",
      quality: "Qualität",
      contact: "Kontakt",
      companyProfile: "Unternehmensprofil",
      requestQuote: "Angebot anfordern",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Lederexport aus Bangladesch · Einkaufspartner für globale Kunden · Internationales B2B",
      headline: "Ihr zuverlässiger Partner für Lederbeschaffung aus Bangladesch",
      subheadline:
        "ExportVisor unterstützt internationale Einkäufer, Schuhfabriken und Lederwarenhersteller bei der direkten Beschaffung von Wet Blue, Crust- und Fertigleder von qualifizierten Gerbereien in Bangladesch.",
      requestQuote: "Angebot anfordern (RFQ)",
      exploreCatalogue: "Lederkatalog erkunden",
      pricingBasis: "Preiskalkulation",
      pricingValue: "Nach RFQ",
      pricingNote: "Maßgeschneidert nach Spezifikation",
      volumeBasis: "Auftragsvolumen & MOQ",
      volumeValue: "Nach RFQ",
      volumeNote: "Abgestimmt auf Kundenbedarf",
      leadTimeBasis: "Produktionszeit",
      leadTimeValue: "Nach RFQ",
      leadTimeNote: "Geplant nach Chargengröße",
      paymentBasis: "Zahlungsbedingungen",
      paymentValue: "LC / TT",
      paymentNote: "Internationaler Standard",
    },
    catalogue: {
      kicker: "Beschaffungskatalog",
      title: "Exportfähiges Qualitätsleder aus Bangladesch",
      subtitle:
        "Entdecken Sie unsere Ledersortimente. Jede Lieferung wird exakt an Ihre technischen Anforderungen, Stärketoleranzen und Verwendungszwecke angepasst.",
      sourcingNoteTitle: "Beschaffungshinweis",
      sourcingNote:
        "Alle Ledersorten werden auftragsbezogen nach Kundenspezifikation und Gerbereiverfügbarkeit beschafft.",
      searchPlaceholder: "Nach Ledertyp, Schuhe, Möbel suchen...",
      viewSpecs: "Spezifikationen ansehen",
      requestQuote: "Angebot anfordern",
      customPromptTitle: "Benötigen Sie kundenspezifische Lederrezepturen oder Farbabstimmungen?",
      customPromptDesc:
        "ExportVisor koordiniert individuelle Gerbungsansätze, Labor-Dips und physische Gegenmuster basierend auf Ihrem Originalmuster.",
      customPromptCta: "Spezifikation einreichen",
    },
    knowledgeHub: {
      kicker: "B2B-Mehrwert & Technische Beratung",
      title: "Leder-Wissenszentrum",
      subtitle:
        "Fachliche Richtlinien für Handhabung, klimatisierte Einlagerung und Pflege verschiedener Lederarten – von feuchtem Wet Blue bis zu anspruchsvollem Anilinleder.",
      consultationCta: "Technische Beratung anfordern",
      allTips: "Alle Praxistipps",
      wetBlue: "Wet Blue Handhabung",
      crust: "Crust Leder Lagerung",
      finished: "Fertigleder Pflege",
      receiving: "Wareneingang Checkliste",
      bannerTitle: "Spezifische REACH- oder Prüfstandards erforderlich?",
      bannerDesc:
        "ExportVisor koordiniert REACH-Konformität, azo-freie Zertifikate, chromfreie Gerbung und Festigkeitsprüfungen per RFQ.",
      bannerCta: "Technisches RFQ senden",
    },
    commercial: {
      kicker: "Handelsrahmen",
      title: "RFQ-basierte Handelskonditionen",
      subtitle:
        "Jedes Exportprojekt wird individuell kalkuliert. Mindestmengen, Produktionszeitpläne und Angebote richten sich nach Ihrer Ausschreibung.",
      moqTitle: "Mindestbestellmenge (MOQ)",
      moqDesc:
        "Volumen richten sich nach Lederkategorie, Sortierungsanteil, Fasstauglichkeit und Produktionsvolumen.",
      pricingTitle: "Gerberei-Preise",
      pricingDesc:
        "Preise basieren auf Lederqualität, Dickentoleranz, Finish und Gesamtauftragsmenge.",
      leadTimeTitle: "Fertigungsdauer",
      leadTimeDesc:
        "Lieferzeiten orientieren sich an Rohwarenverfügbarkeit, Weichfasszyklen und Musterfreigaben.",
      paymentTitle: "Internationale Zahlung",
      paymentDesc:
        "Unwiderrufliches Akkreditiv (LC at sight) oder telegrafische Überweisung (TT).",
      notice:
        "Alle kommerziellen Vereinbarungen werden nach technischer Prüfung der Spezifikationen in einer offiziellen Proforma-Rechnung bestätigt.",
    },
    inquiry: {
      kicker: "Direktes Einkaufsbüro",
      title: "Angebot anfordern & Spezifikationsprüfung",
      subtitle:
        "Reichen Sie Ihre technischen Anforderungen ein. Unser Team prüft Machbarkeit und Verfügbarkeit in Bangladesch.",
      sendInquiry: "Anfrage an ExportVisor senden",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      leather: "Cuir",
      knowledge: "Expertise",
      process: "Processus",
      quality: "Qualité",
      contact: "Contact",
      companyProfile: "Profil d'entreprise",
      requestQuote: "Demander un devis",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Export de Cuir du Bangladesh · Partenaire Sourcing & Export · B2B International",
      headline: "Votre partenaire de confiance pour le sourcing de cuir au Bangladesh",
      subheadline:
        "ExportVisor accompagne les acheteurs internationaux, fabricants de chaussures et maroquiniers pour l'approvisionnement en cuir wet blue, croûte (crust) et cuir fini directement auprès de tanneries auditées au Bangladesh.",
      requestQuote: "Demander une cotation (RFQ)",
      exploreCatalogue: "Explorer le catalogue",
      pricingBasis: "Base tarifaire",
      pricingValue: "Sur devis (RFQ)",
      pricingNote: "Adapté au cahier des charges",
      volumeBasis: "Volume & MOQ",
      volumeValue: "Selon RFQ",
      volumeNote: "Ajusté aux besoins clients",
      leadTimeBasis: "Délai de production",
      leadTimeValue: "Selon RFQ",
      leadTimeNote: "Planifié par lot",
      paymentBasis: "Conditions de paiement",
      paymentValue: "LC / TT",
      paymentNote: "Commerce international",
    },
    catalogue: {
      kicker: "Catalogue de Sourcing",
      title: "Cuirs de Qualité Export du Bangladesh",
      subtitle:
        "Découvrez nos catégories de cuirs. Chaque expédition est rigoureusement conforme à votre cahier des charges technique et à vos tolérances d'épaisseur.",
      sourcingNoteTitle: "Note d'approvisionnement",
      sourcingNote:
        "Tous les cuirs sont approvisionnés sur mesure selon le cahier des charges de l'acheteur et les disponibilités en tannerie.",
      searchPlaceholder: "Rechercher un type de cuir, chaussure, siège...",
      viewSpecs: "Voir les spécifications",
      requestQuote: "Demander un devis",
      customPromptTitle: "Besoin d'un cuir sur mesure ou d'une teinte spécifique ?",
      customPromptDesc:
        "ExportVisor coordonne le développement de contre-échantillons et l'ajustement colorimétrique selon votre échantillon physique.",
      customPromptCta: "Soumettre une spécification",
    },
    knowledgeHub: {
      kicker: "Valeur Ajoutée B2B & Conseil Technique",
      title: "Centre de Connaissances du Cuir",
      subtitle:
        "Conseils professionnels pour le stockage climatisé, la manipulation et l'entretien des différents cuirs — du wet blue hydraté aux cuirs aniline fins.",
      consultationCta: "Demander un conseil technique",
      allTips: "Tous les conseils",
      wetBlue: "Manipulation Wet Blue",
      crust: "Stockage Cuir Crust",
      finished: "Entretien Cuir Fini",
      receiving: "Checklist Réception",
      bannerTitle: "Normes REACH ou exigences chimiques strictes ?",
      bannerDesc:
        "ExportVisor prend en charge la conformité REACH, le tannage sans chrome et les tests physiques sur simple demande RFQ.",
      bannerCta: "Envoyer un RFQ technique",
    },
    commercial: {
      kicker: "Cadre Commercial",
      title: "Conditions Commerciales Basées sur RFQ",
      subtitle:
        "Chaque projet d'exportation est évalué individuellement. Volumes minimums, plannings et prix sont fixés d'après votre appel d'offres (RFQ).",
      moqTitle: "Quantité Minimum (MOQ)",
      moqDesc:
        "Les volumes dépendent de la sélection de grain, de la capacité des foulons et de vos besoins de production.",
      pricingTitle: "Base de Cotation",
      pricingDesc:
        "Tarification calculée selon l'épaisseur, le type de finition et le métrage global commandé.",
      leadTimeTitle: "Délai de Fabrication",
      leadTimeDesc:
        "Établi en fonction de la disponibilité des peaux brutes et de la validation des échantillons.",
      paymentTitle: "Paiement International",
      paymentDesc:
        "Lettre de crédit irrévocable (LC à vue) ou virement bancaire SWIFT (TT).",
      notice:
        "Tous les engagements commerciaux et prix finaux sont confirmés sur facture proforma après validation de votre cahier des charges.",
    },
    inquiry: {
      kicker: "Bureau des Commandes",
      title: "Demande de Cotation & Examen Technique",
      subtitle:
        "Transmettez vos besoins en cuir. Notre équipe à Dhaka étudiera la faisabilité technique et formulera une offre commerciale détaillée.",
      sendInquiry: "Envoyer ma demande à ExportVisor",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      leather: "Cueros",
      knowledge: "Conocimiento",
      process: "Proceso",
      quality: "Calidad",
      contact: "Contacto",
      companyProfile: "Perfil corporativo",
      requestQuote: "Solicitar cotización",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Exportación de Cuero de Bangladés · Socio de Compras Internacional · B2B",
      headline: "Su socio confiable para el suministro de cuero desde Bangladés",
      subheadline:
        "ExportVisor conecta a importadores internacionales, fabricantes de calzado y marroquinería con curtidurías auditadas en Bangladés para el suministro de wet blue, crust y cuero terminado.",
      requestQuote: "Solicitar cotización (RFQ)",
      exploreCatalogue: "Explorar catálogo de cueros",
      pricingBasis: "Base de precios",
      pricingValue: "Según cotización (RFQ)",
      pricingNote: "Personalizado a su ficha técnica",
      volumeBasis: "Volumen & MOQ",
      volumeValue: "Según RFQ",
      volumeNote: "Adaptado a su escala de compra",
      leadTimeBasis: "Plazo de producción",
      leadTimeValue: "Según RFQ",
      leadTimeNote: "Planificado por lote",
      paymentBasis: "Condiciones de pago",
      paymentValue: "LC / TT",
      paymentNote: "Banca internacional",
    },
    catalogue: {
      kicker: "Catálogo de Suministro",
      title: "Cuero de Calidad de Exportación de Bangladés",
      subtitle:
        "Explore nuestras categorías de cuero. Cada lote se formula según las tolerancias de grosor, tacto y acabado exigidas por su equipo técnico.",
      sourcingNoteTitle: "Nota de suministro",
      sourcingNote:
        "Todos los cueros se gestionan bajo pedido conforme a los requerimientos específicos del comprador y disponibilidad de curtiduría.",
      searchPlaceholder: "Buscar por tipo de cuero, calzado, tapicería...",
      viewSpecs: "Ver especificaciones",
      requestQuote: "Solicitar cotización",
      customPromptTitle: "¿Requiere un desarrollo de cuero a medida o muestra de color?",
      customPromptDesc:
        "ExportVisor coordina la formulación de muestras y contra-muestras físicas basadas en su muestra original.",
      customPromptCta: "Enviar especificación a medida",
    },
    knowledgeHub: {
      kicker: "Valor Agregado B2B & Asesoría Técnica",
      title: "Centro de Conocimiento del Cuero",
      subtitle:
        "Pautas profesionales para almacenamiento climatizado, manipulación y conservación de cueros — desde wet blue hidratado hasta acabados anilina.",
      consultationCta: "Solicitar asesoría técnica",
      allTips: "Todos los consejos",
      wetBlue: "Manejo de Wet Blue",
      crust: "Almacenaje de Crust",
      finished: "Cuidado de Cuero Terminado",
      receiving: "Lista de Recepción",
      bannerTitle: "¿Exige normativas REACH o estándares químicos rigurosos?",
      bannerDesc:
        "ExportVisor coordina el cumplimiento de normas europeas REACH, curtición sin cromo y ensayos físicos con laboratorios certificados.",
      bannerCta: "Enviar solicitud técnica (RFQ)",
    },
    commercial: {
      kicker: "Marco Comercial",
      title: "Condiciones Comerciales por Solicitud (RFQ)",
      subtitle:
        "Cada proyecto de exportación se cotiza de forma individualizada. Cantidades mínimas y plazos se estructuran con base en su solicitud.",
      moqTitle: "Cantidad Mínima (MOQ)",
      moqDesc:
        "Los volúmenes mínimos se adaptan a la categoría de piel, capacidad de bombo y su programa de fabricación.",
      pricingTitle: "Cotización de Curtiduría",
      pricingDesc:
        "Precios calculados en función del calibre/grosor, selección de grano, acabado y volumen ordenado.",
      leadTimeTitle: "Tiempo de Entrega",
      leadTimeDesc:
        "Programado según disponibilidad de materia prima y aprobación de muestras de laboratorio.",
      paymentTitle: "Pago Internacional",
      paymentDesc:
        "Carta de Crédito Irrevocable (LC a la vista) o Transferencia Bancaria (TT).",
      notice:
        "Los términos comerciales definitivos se estipulan en la factura proforma tras validar su ficha técnica.",
    },
    inquiry: {
      kicker: "Mesa de Suministro Directo",
      title: "Solicitud de Cotización y Revisión de Ficha Técnica",
      subtitle:
        "Envíe sus requerimientos de cuero. Nuestro equipo evaluará la factibilidad en curtiduría y elaborará una propuesta formal.",
      sendInquiry: "Enviar requerimiento a ExportVisor",
    },
  },
  it: {
    nav: {
      about: "Chi siamo",
      leather: "Pellame",
      knowledge: "Competenza",
      process: "Processo",
      quality: "Qualità",
      contact: "Contatto",
      companyProfile: "Profilo aziendale",
      requestQuote: "Richiedi preventivo",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Export Pellami dal Bangladesh · Partner di Sourcing & Export · B2B Internazionale",
      headline: "Il vostro partner affidabile per l'approvvigionamento di pellami dal Bangladesh",
      subheadline:
        "ExportVisor supporta buyer internazionali, calzaturifici e pelletterie nell'acquisto di wet blue, crust e pelli finite direttamente da concerie selezionate in Bangladesh.",
      requestQuote: "Richiedi quotazione (RFQ)",
      exploreCatalogue: "Esplora il catalogo pellami",
      pricingBasis: "Base di prezzo",
      pricingValue: "Su preventivo (RFQ)",
      pricingNote: "Su misura per la scheda tecnica",
      volumeBasis: "Volume d'ordine & MOQ",
      volumeValue: "Su RFQ",
      volumeNote: "Calibrato sulle esigenze del buyer",
      leadTimeBasis: "Tempi di produzione",
      leadTimeValue: "Su RFQ",
      leadTimeNote: "Pianificato per lotto",
      paymentBasis: "Condizioni di pagamento",
      paymentValue: "LC / TT",
      paymentNote: "Standard commerciale internazionale",
    },
    catalogue: {
      kicker: "Catalogo di Sourcing",
      title: "Pellami di Grado Export dal Bangladesh",
      subtitle:
        "Scoprite le nostre selezioni di pellami. Ogni spedizione rispetta rigorosamente tolleranze di spessore, mano e resa richieste.",
      sourcingNoteTitle: "Nota di fornitura",
      sourcingNote:
        "Tutti i pellami sono lavorati su specifica del cliente in base alla disponibilità delle concerie.",
      searchPlaceholder: "Cerca per tipo di pelle, calzatura, divano...",
      viewSpecs: "Visualizza specifiche",
      requestQuote: "Richiedi preventivo",
      customPromptTitle: "Richiedete una rifinizione su misura o una cartella colori specifica?",
      customPromptDesc:
        "ExportVisor coordina campionature personalizzate e controcampioni fisici partendo dal vostro campione di riferimento.",
      customPromptCta: "Invia specifica su misura",
    },
    knowledgeHub: {
      kicker: "Valore Aggiunto B2B & Consulenza Tecnica",
      title: "Hub Tecnico del Pellame",
      subtitle:
        "Linee guida professionali per la conservazione climatizzata, movimentazione e cura dei pellami — dal wet blue idratato alle pelli all'anilina pregiate.",
      consultationCta: "Richiedi consulenza tecnica",
      allTips: "Tutti i consigli",
      wetBlue: "Gestione Wet Blue",
      crust: "Stoccaggio Crust",
      finished: "Cura Pelli Finite",
      receiving: "Checklist Ricezione Merci",
      bannerTitle: "Standard REACH o capitolati chimici specifici?",
      bannerDesc:
        "ExportVisor garantisce conformità REACH, concia chrome-free e prove fisiche di laboratorio su richiesta RFQ.",
      bannerCta: "Invia RFQ tecnica",
    },
    commercial: {
      kicker: "Condizioni Commerciali",
      title: "Termini Commerciali Guidati da RFQ",
      subtitle:
        "Ogni commessa estera viene quotata individualmente. Volumi minimi, tempistiche e prezzi scaturiscono dalla vostra richiesta (RFQ).",
      moqTitle: "Minimo d'Ordine (MOQ)",
      moqDesc:
        "I volumi dipendono dal tipo di pelle, resa delle selezioni e capacità dei bottali di conceria.",
      pricingTitle: "Quotazione Conceria",
      pricingDesc:
        "Prezzi stabiliti in base a spessore, tipo di rifinizione e metratura complessiva.",
      leadTimeTitle: "Tempi di Produzione",
      leadTimeDesc:
        "Calcolati in base alla selezione grezza e all'approvazione dei campioni prova.",
      paymentTitle: "Pagamento Internazionale",
      paymentDesc:
        "Lettera di Credito Irrevocabile (LC a vista) o Bonifico Bancario (TT).",
      notice:
        "Tutti i dettagli contrattuali finali vengono fissati in fattura proforma dopo verifica tecnica del capitolato.",
    },
    inquiry: {
      kicker: "Ufficio Forniture Estere",
      title: "Richiesta Preventivo & Esame Capitolato",
      subtitle:
        "Inviateci i vostri requisiti tecnici. Il nostro team verificherà la fattibilità formulando un'offerta formale.",
      sendInquiry: "Invia richiesta a ExportVisor",
    },
  },
  zh: {
    nav: {
      about: "关于我们",
      leather: "皮革目录",
      knowledge: "专业知识",
      process: "出口流程",
      quality: "品质把控",
      contact: "联系我们",
      companyProfile: "公司简介",
      requestQuote: "申请报价 (RFQ)",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "孟加拉国皮革出口 · 皮革采购与出口合作伙伴 · 国际B2B",
      headline: "您值得信赖的孟加拉国原产皮革采购伙伴",
      subheadline:
        "ExportVisor 协助全球鞋履制造商、箱包品牌和皮革进口商，直接从孟加拉国优质制革厂采购商业级蓝湿皮、半植鞣/铬鞣胚皮以及成品皮革。我们提供技术规格把控、驻厂质量检验和规范的出口全流程协同。",
      requestQuote: "获取正式报价 (RFQ)",
      exploreCatalogue: "浏览皮革目录",
      pricingBasis: "定价机制",
      pricingValue: "按单核价 (RFQ)",
      pricingNote: "根据规格要求定制",
      volumeBasis: "起订量 (MOQ)",
      volumeValue: "按单协商",
      volumeNote: "匹配采购商批量",
      leadTimeBasis: "生产交期",
      leadTimeValue: "按批次计划",
      leadTimeNote: "依据转鼓排产及打样",
      paymentBasis: "结算方式",
      paymentValue: "信用证 LC / 电汇 TT",
      paymentNote: "国际正规银行结算",
    },
    catalogue: {
      kicker: "采购产品库",
      title: "孟加拉国出口级正品皮革",
      subtitle:
        "探索核心皮革品类。每一批次均严格依照买家厚度公差、手感软硬度和终端用途量身生产。",
      sourcingNoteTitle: "供应说明",
      sourcingNote:
        "所有皮革均根据买家技术参数及制革厂转鼓产能定制加工。最终商务条款经技术确认后订立。",
      searchPlaceholder: "搜索鞋面皮、沙发皮、蓝湿皮...",
      viewSpecs: "查看技术参数",
      requestQuote: "申请报价",
      customPromptTitle: "需要特殊皮革风格或指定潘通色卡调配？",
      customPromptDesc:
        "ExportVisor 协助对接孟加拉国制革厂按客户来样定染、试样色板确认及物理对样。",
      customPromptCta: "提交定制规格",
    },
    knowledgeHub: {
      kicker: "B2B增值赋能与技术咨询",
      title: "皮革技术知识中心",
      subtitle:
        "关于不同形态皮革的仓储温湿度管理、海运防护及成品养护操作规范。",
      consultationCta: "申请技术咨询",
      allTips: "全部技术要点",
      wetBlue: "蓝湿皮防护",
      crust: "胚皮仓储",
      finished: "成品皮革养护",
      receiving: "集装箱到港验货清单",
      bannerTitle: "有特定的欧洲REACH环保或化学品合规要求？",
      bannerDesc:
        "ExportVisor 协同制革厂提供REACH认证、无偶氮染料、六价铬限制及物理力学测试支持。",
      bannerCta: "提交技术参数表",
    },
    commercial: {
      kicker: "商务合作机制",
      title: "基于技术参数核定的商业条款",
      subtitle:
        "每个出口项目均独立核算。起订量、生产交期和出口价格完全基于您的询价单 (RFQ) 与技术要求。",
      moqTitle: "最小起订量 (MOQ)",
      moqDesc:
        "起订量取决于皮种分类、选级比例、转鼓装载容积及买家投产需求。",
      pricingTitle: "制革厂报价标准",
      pricingDesc:
        "价格严格根据选级、厚度规格、表面工艺和订单总体量定制。",
      leadTimeTitle: "排产交货周期",
      leadTimeDesc:
        "结合原皮选料、转鼓周期、色板物理确认以及海运订舱综合排定。",
      paymentTitle: "国际结算通道",
      paymentDesc: "不可撤销即期信用证 (L/C at sight) 或银行电汇 (T/T)。",
      notice:
        "所有商务条款及形式发票均在技术参数和选级比例审核通过后正式确立。",
    },
    inquiry: {
      kicker: "直采服务中心",
      title: "申请正式报价与技术规格评估",
      subtitle:
        "请在下方提交您的皮革需求。我们的孟加拉国团队将核实制革厂产能并出具参考性商务报价。",
      sendInquiry: "提交采购需求至 ExportVisor",
    },
  },
  ar: {
    nav: {
      about: "من نحن",
      leather: "كتالوج الجلود",
      knowledge: "مركز المعرفة",
      process: "خطوات التصدير",
      quality: "معايير الجودة",
      contact: "اتصل بنا",
      companyProfile: "الملف التعريفي",
      requestQuote: "طلب عرض أسعار",
      whatsApp: "واتساب",
    },
    hero: {
      kicker: "تصدير الجلود من بنغلاديش · شريك التوريد والتصدير · تجارة دولية B2B",
      headline: "شريككم الموثوق لتوريد وتصدير الجلود من بنغلاديش",
      subheadline:
        "تساعد ExportVisor المشترين الدوليين ومصانع الأحذية ومستوردي الجلود في توريد الجلود الرطبة الزرقاء (Wet Blue) والجلود الجافة (Crust) والجلود تامة الصنع مباشرة من المدابغ المعتمدة في بنغلاديش مع الرقابة الفنية وضمان الجودة.",
      requestQuote: "طلب تسعيرة (RFQ)",
      exploreCatalogue: "استعراض كتالوج الجلود",
      pricingBasis: "أساس التسعير",
      pricingValue: "حسب المواصفات (RFQ)",
      pricingNote: "مخصص وفقاً للمواصفات المطلوبة",
      volumeBasis: "الحد الأدنى للطلب (MOQ)",
      volumeValue: "حسب الطلب",
      volumeNote: "متوافق مع خطة إنتاج المشتري",
      leadTimeBasis: "مدة الإنتاج",
      leadTimeValue: "حسب جدول التشغيل",
      leadTimeNote: "مجدول حسب سعة البراميل والعينات",
      paymentBasis: "شروط الدفع",
      paymentValue: "اعتماد بنكي LC / تحويل TT",
      paymentNote: "عبر القنوات المصرفية الدولية المعتمدة",
    },
    catalogue: {
      kicker: "كتالوج التوريد",
      title: "جلود طبيعية تصديرية من بنغلاديش",
      subtitle:
        "استكشف تشكيلاتنا من الجلود الطبيعية. يتم إنتاج كل دفعة خصيصاً وفقاً لسماكة العميل والتشطيب والاستخدام الصناعي.",
      sourcingNoteTitle: "ملاحظة التوريد",
      sourcingNote:
        "يتم تجهيز كافة طلبيات الجلود بناءً على المواصفات المحددة للمشتري وطاقة المدابغ الإنتاجية.",
      searchPlaceholder: "ابحث بالنوع: أحذية، حقائب، وت بلو...",
      viewSpecs: "عرض المواصفات الفنية",
      requestQuote: "طلب عرض سعر",
      customPromptTitle: "هل تحتاج إلى تشطيب جلدي مخصص أو مطابقة لون دقيقة؟",
      customPromptDesc:
        "تنسق ExportVisor تصنيع خلطات الدباغة وتجهيز العينات المادية بناءً على عينة الماستر الخاصة بك.",
      customPromptCta: "إرسال المواصفات المخصصة",
    },
    knowledgeHub: {
      kicker: "القيمة المضافة والاستشارات الفنية",
      title: "مركز المعرفة الفنية للجلود",
      subtitle:
        "إرشادات مهنية حول التخزين المكيف والحماية أثناء الشحن البحري للجلود الرطبة والجلود المشطبة.",
      consultationCta: "طلب استشارة فنية",
      allTips: "كافة الإرشادات",
      wetBlue: "جلود الوت بلو",
      crust: "جلود الكرست",
      finished: "الجلود تامة الصنع",
      receiving: "فحص الحاويات عند الاستلام",
      bannerTitle: "هل لديكم متطلبات خاصة باختبارات REACH أو المواد الكيميائية؟",
      bannerDesc:
        "نضمن مطابقة معايير الاتحاد الأوروبي REACH، الصبغات الخالية من الآزو، واختبارات القوة الميكانيكية.",
      bannerCta: "تقديم مواصفات RFQ",
    },
    commercial: {
      kicker: "الإطار التجاري",
      title: "شروط تجارية محددة بناءً على طلب التسعير (RFQ)",
      subtitle:
        "يتم تقييم كل مشروع تصديري بشكل فردي. يتم حساب كميات الحد الأدنى ومواعيد التسليم والتسعير بدقة.",
      moqTitle: "الحد الأدنى للطلب (MOQ)",
      moqDesc:
        "تعتمد الكميات على نوع الجلد، تصنيف الفرز، وسعة أسطوانات الدباغة.",
      pricingTitle: "أساس تسعير المدبغة" ,
      pricingDesc:
        "تسعير مخصص يطابق درجة الفرز والسماكة ونوع التشطيب والحجم الإجمالي.",
      leadTimeTitle: "فترة الإنتاج والشحن",
      leadTimeDesc:
        "تحدد بناءً على توافر الجلود الخام واعتماد العينات ومواعيد الحاويات البحرية.",
      paymentTitle: "شروط الدفع الدولي",
      paymentDesc:
        "خطاب اعتماد مستندي غير قابل للإلغاء (LC at sight) أو تحويل بنكي (TT).",
      notice:
        "يتم اعتماد جميع البنود الرسمية في الفاتورة المبدئية (Proforma) بعد مراجعة المعايير الفنية.",
    },
    inquiry: {
      kicker: "مكتب التوريد المباشر",
      title: "طلب عرض أسعار ومراجعة المواصفات الفنية",
      subtitle:
        "أدخل مواصفات الجلود المطلوبة وسيقوم فريقنا بمراجعة الجدوى وإعداد العرض التجاري المناسب.",
      sendInquiry: "إرسال طلب التوريد إلى ExportVisor",
    },
  },
  ja: {
    nav: {
      about: "会社概要",
      leather: "レザーカタログ",
      knowledge: "技術知識",
      process: "輸出プロセス",
      quality: "品質管理",
      contact: "お問い合わせ",
      companyProfile: "企業案内",
      requestQuote: "お見積り依頼",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "バングラデシュ皮革輸出 · 調達・輸出パートナー · 国際B2B",
      headline: "バングラデシュ産高品質レザー調達の信頼できるパートナー",
      subheadline:
        "ExportVisorは、海外のシューズメーカー、レザーグッズブランド、革問屋向けに、バングラデシュの厳選されたタンナーからウェットブルー、クラスト、仕上げ革の直接調達を支援します。仕様確認から現地検品、輸出業務までトータルにサポートします。",
      requestQuote: "見積りを依頼する (RFQ)",
      exploreCatalogue: "カタログを見る",
      pricingBasis: "価格体系",
      pricingValue: "仕様別見積 (RFQ)",
      pricingNote: "等級・仕様に応じたカスタム算出",
      volumeBasis: "最小注文数量 (MOQ)",
      volumeValue: "要相談",
      volumeNote: "バイヤー要件に柔軟対応",
      leadTimeBasis: "納期",
      leadTimeValue: "ロット別計画",
      leadTimeNote: "試作承認およびドラム稼働に基づく",
      paymentBasis: "決済条件",
      paymentValue: "L/C (即期) / T/T",
      paymentNote: "正規国際銀行決済",
    },
    catalogue: {
      kicker: "調達カタログ",
      title: "バングラデシュ産 輸出規格本革",
      subtitle:
        "主要レザーラインナップをご覧ください。厚み公差、柔軟度、用途に合わせて受注生産いたします。",
      sourcingNoteTitle: "調達に関する注記",
      sourcingNote:
        "すべての皮革はバイヤーの技術仕様とドラム容量に合わせて調達・加工されます。",
      searchPlaceholder: "靴用レザー、牛革、ウェットブルー等を検索...",
      viewSpecs: "仕様を確認",
      requestQuote: "見積りを依頼",
      customPromptTitle: "カスタムレザーの配合や特定の色合わせが必要ですか？",
      customPromptDesc:
        "ExportVisorはお客様のマスター見本に基づき、カスタム鞣し配合および現物サンプルの制作をコーディネートします。",
      customPromptCta: "カスタム仕様を相談",
    },
    knowledgeHub: {
      kicker: "B2B技術アドバイザリー",
      title: "レザーナレッジハブ",
      subtitle:
        "水分保持が必要なウェットブルーからデリケートなアニリン仕上げまで、保管・輸送・品質管理ガイドライン。",
      consultationCta: "技術相談を依頼",
      allTips: "すべての技術情報",
      wetBlue: "ウェットブルー管理",
      crust: "クラスト革の保管",
      finished: "仕上げ革のケア",
      receiving: "入庫時チェックリスト",
      bannerTitle: "REACH規則や特定の化学物質規制基準への対応",
      bannerDesc:
        "EU REACH規則、アゾ染料フリー、六価クロム規制（3ppm未満）など厳格な試験基準に対応可能です。",
      bannerCta: "技術仕様書を送信",
    },
    commercial: {
      kicker: "取引条件",
      title: "RFQベースの取引フレームワーク",
      subtitle:
        "ロット最小量、納期、価格は、ご提出いただく仕様書および見積依頼（RFQ）に基づいて個別に策定されます。",
      moqTitle: "最小発注数量 (MOQ)",
      moqDesc: "原皮の等級分布、ドラム容量、用途要件によって決定されます。",
      pricingTitle: "タンナー見積基準",
      pricingDesc:
        "等級、厚み、仕上げ方法、総発注平米数に応じて最適化されます。",
      leadTimeTitle: "生産リードタイム",
      leadTimeDesc:
        "原皮手配、サンプル確認、海上輸送スケジュールを総合して算出します。",
      paymentTitle: "国際決済条件",
      paymentDesc: "取消不能信用状 (LC at sight) または電信送金 (T/T)。",
      notice:
        "すべての正式取引条件は技術確認後のプロフォーマインボイス（PI）にて確定します。",
    },
    inquiry: {
      kicker: "直接調達デスク",
      title: "見積り依頼および皮革仕様レビュー",
      subtitle:
        "ご希望の仕様を下記フォームよりお送りください。現地チームが実現可能性を確認し、迅速にご回答いたします。",
      sendInquiry: "ExportVisorに調達依頼を送信",
    },
  },
  ko: {
    nav: {
      about: "회사 소개",
      leather: "가죽 카탈로그",
      knowledge: "기술 가이드",
      process: "수출 절차",
      quality: "품질 관리",
      contact: "문의하기",
      companyProfile: "회사 소개서",
      requestQuote: "견적 요청 (RFQ)",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "방글라데시 가죽 수출 · 가죽 소싱 및 수출 파트너 · 글로벌 B2B",
      headline: "방글라데시 천연 가죽 소싱의 신뢰할 수 있는 파트너",
      subheadline:
        "ExportVisor는 글로벌 제화 브랜드, 가방 제조사 및 가죽 수입업체를 위해 방글라데시 우수 태너리로부터 웻블루(Wet Blue), 크러스트(Crust), 마감 가죽(Finished Leather)을 직접 소싱하도록 지원합니다. 현장 품질 검수부터 무역 선적까지 전 과정을 책임집니다.",
      requestQuote: "공식 견적 요청 (RFQ)",
      exploreCatalogue: "가죽 카탈로그 탐색",
      pricingBasis: "가격 책정 기준",
      pricingValue: "스펙별 견적 (RFQ)",
      pricingNote: "요청 스펙에 맞춘 최적 산출",
      volumeBasis: "최소 주문 수량 (MOQ)",
      volumeValue: "협의 가능",
      volumeNote: "바이어 생산 요건에 맞춤",
      leadTimeBasis: "생산 납기",
      leadTimeValue: "배치별 스케줄",
      leadTimeNote: "드럼 공정 및 샘플 승인 기준",
      paymentBasis: "결제 조건",
      paymentValue: "취소불능 L/C / T/T",
      paymentNote: "정규 국제 금융 거래",
    },
    catalogue: {
      kicker: "소싱 카탈로그",
      title: "방글라데시 수출 규격 천연 가죽",
      subtitle:
        "주요 가죽 제품군을 확인하세요. 바이어의 두께 공차, 물성, 용도에 맞추어 맞춤 가공됩니다.",
      sourcingNoteTitle: "소싱 유의사항",
      sourcingNote:
        "모든 가죽은 바이어 스펙과 태너리 가용성에 따라 수주 생산됩니다.",
      searchPlaceholder: "신발 가죽, 카우하이드, 웻블루 검색...",
      viewSpecs: "상세 스펙 보기",
      requestQuote: "견적 문의",
      customPromptTitle: "특수 가죽 가공이나 특정 컬러 매칭이 필요하신가요?",
      customPromptDesc:
        "ExportVisor는 바이어 원본 스와치에 맞춘 맞춤형 무두질 배합 및 물리 샘플 제작을 지원합니다.",
      customPromptCta: "커스텀 스펙 요청",
    },
    knowledgeHub: {
      kicker: "B2B 가치 및 기술 자문",
      title: "가죽 기술 지식 센터",
      subtitle:
        "수분 유지가 필요한 웻블루부터 섬세한 아닐린 가죽까지 항온항습 보관 및 운송 가이드라인.",
      consultationCta: "기술 상담 신청",
      allTips: "전체 팁 보기",
      wetBlue: "웻블루 관리",
      crust: "크러스트 보관",
      finished: "마감 가죽 관리",
      receiving: "입고 검수 체크리스트",
      bannerTitle: "유럽 REACH 규정 및 화학물질 규제 대응이 필요하신가요?",
      bannerDesc:
        "REACH 준수, 아조염료 프리, 6가 크롬 제한(<3ppm) 및 물리 시험성적서를 지원합니다.",
      bannerCta: "기술 RFQ 제출",
    },
    commercial: {
      kicker: "거래 조건 프레임워크",
      title: "RFQ 기반 맞춤형 거래 조건",
      subtitle:
        "모든 수출 프로젝트는 개별 평가됩니다. 최소 수량, 납기, 수출 가격은 제출해주신 RFQ를 기준으로 산정됩니다.",
      moqTitle: "최소 주문 수량 (MOQ)",
      moqDesc: "원피 등급 비율, 드럼 용량 및 생산 목적에 따라 결정됩니다.",
      pricingTitle: "태너리 견적 기준",
      pricingDesc:
        "가죽 등급, 두께, 표면 가공법 및 주문 총면적에 맞춘 개별 산정.",
      leadTimeTitle: "생산 및 납기 일정",
      leadTimeDesc:
        "원자재 수급, 샘플 승인 및 해상 스케줄을 종합하여 확정합니다.",
      paymentTitle: "국제 결제 방식",
      paymentDesc:
        "취소불능 일람출급 신용장 (LC at sight) 또는 전신환 송금 (TT).",
      notice:
        "모든 정식 계약 조건은 기술 검토 완료 후 프로포마 인보이스(PI)를 통해 체결됩니다.",
    },
    inquiry: {
      kicker: "직접 소싱 데스크",
      title: "견적 요청 및 가죽 기술 사양 검토",
      subtitle:
        "원하시는 가죽 사양을 남겨주시면 방글라데시 소싱팀이 태너리 타당성을 확인 후 제안서를 드립니다.",
      sendInquiry: "ExportVisor에 소싱 문의 전송",
    },
  },
  tr: {
    nav: {
      about: "Hakkımızda",
      leather: "Deri Kataloğu",
      knowledge: "Teknik Bilgi",
      process: "İhracat Süreci",
      quality: "Kalite Güvencesi",
      contact: "İletişim",
      companyProfile: "Firma Profili",
      requestQuote: "Teklif Al (RFQ)",
      whatsApp: "WhatsApp",
    },
    hero: {
      kicker: "Bangladeş Deri İhracatı · Deri Tedarik & İhracat Ortağı · Uluslararası B2B",
      headline: "Bangladeş'ten Güvenilir Deri Tedarik ve İhracat Çözüm Ortağınız",
      subheadline:
        "ExportVisor, uluslararası ayakkabı üreticileri, çanta markaları ve deri ithalatçılarına Bangladeş'in saygın tabakhanelerinden wet blue, krust ve bitmiş deri tedariğinde doğrudan aracılık eder. Teknik koordinasyon, yerinde kalite kontrolü ve ihracat lojistiğini tek elden yönetiyoruz.",
      requestQuote: "Teklif İste (RFQ)",
      exploreCatalogue: "Deri Kataloğunu İncele",
      pricingBasis: "Fiyatlandırma Esası",
      pricingValue: "RFQ Talebine Özel",
      pricingNote: "İstenen teknik spesifikasyona göre",
      volumeBasis: "Minimum Sipariş (MOQ)",
      volumeValue: "Talebe Göre",
      volumeNote: "Alıcı üretim planına uyumlu",
      leadTimeBasis: "Üretim Süresi",
      leadTimeValue: "Parti Bazında",
      leadTimeNote: "Dolap kapasitesi ve numune onayına bağlı",
      paymentBasis: "Ödeme Koşulları",
      paymentValue: "Gayrikabili Rücu L/C / T/T",
      paymentNote: "Uluslararası bankacılık standartları",
    },
    catalogue: {
      kicker: "Tedarik Kataloğu",
      title: "Bangladeş İhracat Standardı Hakiki Deri",
      subtitle:
        "Ana deri sınıflandırmalarımızı inceleyin. Her sevkiyat, alıcının kalınlık toleranslarına, tuşesine ve kullanım amacına göre hazırlanır.",
      sourcingNoteTitle: "Tedarik Notu",
      sourcingNote:
        "Tüm deri çeşitleri alıcının teknik şartnamesine ve tabakhane kapasitesine göre sipariş üzerine işlenir.",
      searchPlaceholder: "Ayakkabılık, döşemelik, wet blue deri ara...",
      viewSpecs: "Özellikleri İncele",
      requestQuote: "Fiyat Teklifi İste",
      customPromptTitle: "Özel Bir Deri Formülasyonuna veya Renk Eşleşmesine mi İhtiyacınız Var?",
      customPromptDesc:
        "ExportVisor, master fiziksel numunenize göre özel tabaklama formülleri ve karşı numune hazırlıklarını koordine eder.",
      customPromptCta: "Özel Şartname Gönder",
    },
    knowledgeHub: {
      kicker: "B2B Değer Katan Teknik Danışmanlık",
      title: "Deri Teknik Bilgi Merkezi",
      subtitle:
        "Nemini koruması gereken wet blue derilerden hassas anilin yüzeylere kadar iklimlendirilmiş depolama ve sevkiyat rehberi.",
      consultationCta: "Teknik Danışmanlık Al",
      allTips: "Tüm Teknik Tavsiyeler",
      wetBlue: "Wet Blue Muhafazası",
      crust: "Krust Deri Depolama",
      finished: "Bitmiş Deri Bakımı",
      receiving: "Konteyner Kabul Kontrol Listesi",
      bannerTitle: "REACH veya Özel Kimyasal Standartlarınız mı Var?",
      bannerDesc:
        "ExportVisor, AB REACH standartlarına uyum, azo-boyar madde içermeyen üretim ve krom kısıtlamalarını garanti eder.",
      bannerCta: "Teknik RFQ Gönder",
    },
    commercial: {
      kicker: "Ticari Çerçeve",
      title: "Şartnameye Dayalı Ticari Koşullar",
      subtitle:
        "Her ihracat projesi bağımsız değerlendirilir. Minimum miktarlar, üretim takvimleri ve fiyat teklifleri teknik RFQ formunuza göre belirlenir.",
      moqTitle: "Minimum Sipariş Miktarı (MOQ)",
      moqDesc:
        "Deri türüne, seleksiyon dağılımına ve dolap yükleme kapasitelerine göre belirlenir.",
      pricingTitle: "Tabakhane Fiyatlandırma Esası",
      pricingDesc:
        "Kalite sınıfı, kalınlık, finisaj tipi ve toplam sipariş metrekaresine göre özel hesaplanır.",
      leadTimeTitle: "Üretim ve Teslim Süresi",
      leadTimeDesc:
        "Hammadde temini, numune onayı ve deniz yolu konteyner planlamasına göre belirlenir.",
      paymentTitle: "Uluslararası Ödeme Şartları",
      paymentDesc:
        "Görüldüğünde Ödemeli Akreditif (LC at sight) veya Banka Havalesi (TT).",
      notice:
        "Tüm nihai ticari koşullar teknik onay ve proforma fatura teyidi ile resmiyet kazanır.",
    },
    inquiry: {
      kicker: "Doğrudan Tedarik Masası",
      title: "Fiyat Teklifi ve Deri Şartnamesi Değerlendirmesi",
      subtitle:
        "Aşağıdaki formdan gereksinimlerinizi iletin. Bangladeş ekibimiz tabakhane fizibilitesini kontrol edip teklif sunsun.",
      sendInquiry: "ExportVisor'a Tedarik Talebi Gönder",
    },
  },
};
