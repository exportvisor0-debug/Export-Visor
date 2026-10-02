export interface SectionRoute {
  id: string; // DOM section element ID
  path: string; // Primary canonical path (e.g. /products)
  aliases?: string[]; // Alternative paths that redirect or map to this section
  title: string;
  metaDescription: string;
  navLabel: string;
}

export const SECTION_ROUTES: SectionRoute[] = [
  {
    id: "hero",
    path: "/",
    title: "ExportVisor | Bangladesh Leather Sourcing & Export Partner",
    metaDescription:
      "ExportVisor connects international footwear brands, leather goods manufacturers, and global buyers directly with vetted tanneries in Bangladesh. Direct tannery pricing, AQL 2.5 quality inspection, and export logistics.",
    navLabel: "Home",
  },
  {
    id: "about",
    path: "/about",
    aliases: ["/about-us", "/company"],
    title: "About ExportVisor | Dedicated Leather Sourcing Agency in Bangladesh",
    metaDescription:
      "ExportVisor acts as your dedicated on-the-ground leather sourcing liaison and inspection coordinator in Bangladesh, bridging international buyers with vetted local tanneries.",
    navLabel: "About",
  },
  {
    id: "tannery-timeline",
    path: "/timeline",
    aliases: ["/tannery-timeline", "/history", "/growth"],
    title: "Tannery Network Timeline & Evolution | ExportVisor",
    metaDescription:
      "Explore the 10+ year evolution of ExportVisor's tannery network in Bangladesh—from Savar drum alliances to LWG accreditation, AQL 2.5 testing desks, and global container shipping to 25+ ports.",
    navLabel: "Timeline",
  },
  {
    id: "leather-products",
    path: "/products",
    aliases: ["/leather-products", "/catalogue", "/leather"],
    title: "Leather Sourcing Catalogue | Wet Blue, Crust & Finished Leather",
    metaDescription:
      "Source certified genuine leather from Bangladesh: Full Grain, Top Grain, Corrected Grain, Drum Dyed Crust, and Wet Blue bovine and goat hides tailored to buyer specifications.",
    navLabel: "Products",
  },
  {
    id: "commercial-terms",
    path: "/terms",
    aliases: ["/commercial-terms"],
    title: "Commercial Terms & Standards | ExportVisor",
    metaDescription:
      "Transparent RFQ-driven commercial terms: direct factory-floor pricing, custom MOQ evaluation, scheduled production lead times, and secure international payment terms (LC/TT).",
    navLabel: "Commercial Terms",
  },
  {
    id: "sourcing-process",
    path: "/sourcing-process",
    aliases: ["/process", "/workflow"],
    title: "10-Stage Sourcing & Export Process | ExportVisor",
    metaDescription:
      "Step-by-step transparency from initial RFQ and lab-dip counter-sample approval to drum production, AQL 2.5 on-site quality inspection, container stuffing, and export logistics.",
    navLabel: "Sourcing Process",
  },
  {
    id: "quality-inspection",
    path: "/quality-inspection",
    aliases: ["/quality", "/inspection"],
    title: "Quality Control & AQL 2.5 Inspection Coordination | ExportVisor",
    metaDescription:
      "Rigorous hide-by-hide quality inspection protocols: thickness calibration (±0.1 mm), tensile strength, color fastness testing, and pre-shipment container audits.",
    navLabel: "Quality & Inspection",
  },
  {
    id: "knowledge-hub",
    path: "/knowledge-hub",
    aliases: ["/knowledge", "/guides"],
    title: "Leather Knowledge Hub & Technical Specifications | ExportVisor",
    metaDescription:
      "Technical sourcing guides comparing Wet Blue, Crust, and Finished leather characteristics, grain integrity, substance tolerances, and testing parameters for global buyers.",
    navLabel: "Knowledge Hub",
  },
  {
    id: "market-insights",
    path: "/market-insights",
    aliases: ["/insights", "/industry-trends"],
    title: "Bangladesh Leather Market Insights & Sourcing Trends | ExportVisor",
    metaDescription:
      "Current industry intelligence, raw hide market trends, export tariff advantages (GSP/EBA duty-free access), and tannery cluster dynamics in Savar, Dhaka.",
    navLabel: "Market Insights",
  },
  {
    id: "export-shipping",
    path: "/export-shipping",
    aliases: ["/shipping", "/logistics"],
    title: "Export Logistics & Shipping from Chittagong Port | ExportVisor",
    metaDescription:
      "International freight management from Chittagong Port (BDCGP) and Hazrat Shahjalal International Airport (DAC) under FOB, CIF, or CFR terms with complete trade documentation.",
    navLabel: "Export & Shipping",
  },
  {
    id: "bangladesh-sourcing",
    path: "/bangladesh-sourcing",
    aliases: ["/bangladesh", "/origin"],
    title: "Why Source Leather from Bangladesh | Tannery Ecosystem",
    metaDescription:
      "Discover the competitive advantages of sourcing leather from Bangladesh: indigenous raw material quality, centralized Savar Tannery Industrial Estate, and 0% import duty benefits.",
    navLabel: "Bangladesh Advantage",
  },
  {
    id: "global-trade-impact",
    path: "/global-trade-impact",
    aliases: ["/trade-impact", "/trade-data"],
    title: "Global Trade Impact & Export Distribution | ExportVisor",
    metaDescription:
      "Export volume data, port logistics metrics, and destination distribution across major international leather manufacturing markets including the EU, UK, and Asia.",
    navLabel: "Global Trade Data",
  },
  {
    id: "why-exportvisor",
    path: "/why-us",
    aliases: ["/why-exportvisor"],
    title: "Why Partner with ExportVisor | Trusted Leather Agency",
    metaDescription:
      "Buyer-first advocacy, on-the-ground presence in Savar, technical language translation, transparent commercial terms, and dedicated quality assurance for global brands.",
    navLabel: "Why ExportVisor",
  },
  {
    id: "contact",
    path: "/quote",
    aliases: ["/contact", "/rfq", "/inquiry"],
    title: "Request a Leather Quotation & Direct Sourcing Desk | ExportVisor",
    metaDescription:
      "Submit your technical leather tech pack, target thickness, color swatches, or volume requirements for rapid tannery matching, feasibility analysis, and direct pricing.",
    navLabel: "Request Quote",
  },
  {
    id: "faq",
    path: "/faq",
    aliases: ["/faqs", "/questions"],
    title: "Frequently Asked Questions (FAQ) | ExportVisor Leather Sourcing",
    metaDescription:
      "Factual answers regarding MOQs, sample development, production lead times, international payment terms (LC/TT), and third-party inspection arrangements.",
    navLabel: "FAQ",
  },
  {
    id: "leather-glossary",
    path: "/glossary",
    aliases: ["/leather-glossary", "/terms-glossary", "/leather-terms"],
    title: "Leather Sourcing Glossary & Industry Terminology | ExportVisor",
    metaDescription:
      "Definitive guide defining Wet Blue, Crust Leather, Full Grain, Split Leather, Temper, and Caliper standards for international footwear and leather goods buyers.",
    navLabel: "Glossary",
  },
];

import { LEATHER_PRODUCTS, LeatherProduct } from "../data/products";

export function getProductBySlugOrId(identifier: string): LeatherProduct | undefined {
  const clean = identifier.trim().toLowerCase().replace(/^\/+/, "").replace(/^product\//, "").replace(/^products\//, "");
  return LEATHER_PRODUCTS.find(
    (p) => p.id.toLowerCase() === clean || (p.slug && p.slug.toLowerCase() === clean)
  );
}

export function getProductCanonicalUrl(productId: string): string {
  const prod = LEATHER_PRODUCTS.find((p) => p.id === productId || p.slug === productId);
  const slug = prod?.slug || prod?.id || productId;
  return `https://exportvisor.com/product/${slug}`;
}

/**
 * Finds a route by pathname (including aliases) or by section ID
 */
export function getRouteByPath(pathname: string): SectionRoute | undefined {
  const normalized = pathname.trim().toLowerCase().replace(/\/+$/, "") || "/";
  
  // Check if it's an individual product route: e.g. /product/:slug or /products/:slug
  if (normalized.startsWith("/product/") || normalized.startsWith("/products/")) {
    const parts = normalized.split("/");
    const slug = parts[2];
    if (slug) {
      const prod = getProductBySlugOrId(slug);
      if (prod) {
        return {
          id: "leather-products",
          path: `/product/${prod.id}`,
          title: prod.seoTitle || `${prod.name} | ExportVisor Leather Sourcing`,
          metaDescription: prod.seoDescription || prod.shortDescription,
          navLabel: prod.name,
        };
      }
    }
  }

  return SECTION_ROUTES.find(
    (r) =>
      r.path.toLowerCase() === normalized ||
      (r.aliases && r.aliases.map((a) => a.toLowerCase()).includes(normalized))
  );
}

export function getRouteById(id: string): SectionRoute | undefined {
  return SECTION_ROUTES.find((r) => r.id === id);
}

export function getFullUrl(path: string): string {
  const base = "https://exportvisor.com";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? base : `${base}${cleanPath}`;
}
