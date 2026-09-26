/**
 * ExportVisor - Central Configuration File
 * 
 * Update your company contacts, links, analytics IDs, and commercial parameters here.
 * All components across the application pull directly from this single source of truth.
 */

export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    shortDescription: string;
    fullDescription: string;
    origin: string;
    hqLocation: string;
    address: string;
  };
  contact: {
    email: string;
    emailUrl: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    phone: string;
  };
  social: {
    linkedinUrl: string;
    facebookUrl: string;
    instagramUrl: string;
  };
  commercial: {
    moqText: string;
    pricingText: string;
    leadTimeText: string;
    paymentTermsText: string;
    samplePolicy: string;
  };
  analytics: {
    gaMeasurementId: string;
  };
  formEndpoint: {
    // If you wish to use Formspree, Web3Forms, or custom webhook:
    apiUrl: string;
    fallbackToDirectContact: boolean;
  };
}

export const siteConfig: SiteConfig = {
  company: {
    name: "ExportVisor",
    tagline: "Your Trusted Leather Sourcing Partner from Bangladesh",
    shortDescription:
      "A Bangladesh-based B2B leather sourcing and export agency connecting international buyers with vetted tanneries.",
    fullDescription:
      "ExportVisor acts as a dedicated leather sourcing and export partner in Bangladesh. We facilitate international buyer access to wet blue, crust, and finished leather by coordinating supplier matching, technical specifications, quality inspection, order management, and export documentation.",
    origin: "Dhaka, Bangladesh",
    hqLocation: "Savar Tannery Industrial Estate / Dhaka, Bangladesh",
    address: "Savar Tannery Industrial Zone, Hemayetpur, Dhaka, Bangladesh [ADD REGISTERED OFFICE SUITE/STREET]",
  },
  contact: {
    email: "info@exportvisor.com",
    emailUrl: "mailto:info@exportvisor.com?subject=ExportVisor%20Leather%20Sourcing%20Inquiry",
    whatsappNumber: "+8801570264394",
    whatsappFormatted: "+880 1570-264394",
    whatsappUrl:
      "https://wa.me/8801570264394?text=Hello%20ExportVisor%20Team%2C%20I%20am%20interested%20in%20sourcing%20leather%20from%20Bangladesh.%20Could%20we%20discuss%20specifications%20and%20quotation%3F",
    phone: "+880 1570-264394",
  },
  social: {
    linkedinUrl: "https://www.linkedin.com/company/leather-exporter/home/",
    facebookUrl: "https://www.facebook.com/leatherexporters",
    instagramUrl: "https://www.instagram.com/exportvisor", // [EDIT: Replace with official Instagram if active]
  },
  commercial: {
    moqText: "Determined per RFQ (Subject to leather type, grade selection, and tannery confirmation)",
    pricingText:
      "Quoted on Request for Quotation (RFQ), determined by leather grade, substance, finish complexity, volume, and technical specifications.",
    leadTimeText:
      "Scheduled upon RFQ review and proforma confirmation, based on production cycles and batch requirements.",
    paymentTermsText: "Letter of Credit (LC) / Telegraphic Transfer (TT)",
    samplePolicy: "Available upon buyer request and technical specification review.",
  },
  analytics: {
    // Replace with your real Google Analytics 4 ID (e.g., 'G-XXXXXXXXXX')
    gaMeasurementId: "G-EXPORTVISOR_GA4",
  },
  formEndpoint: {
    // Optional backend webhook / form endpoint (e.g. https://formspree.io/f/xyz or https://api.web3forms.com/submit)
    apiUrl: "",
    fallbackToDirectContact: true,
  },
};
