import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found! Run vite build first.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, "utf-8");

const routes = [
  {
    path: "about",
    title: "About ExportVisor | Dedicated Leather Sourcing Agency in Bangladesh",
    description: "ExportVisor acts as your dedicated on-the-ground leather sourcing liaison and inspection coordinator in Bangladesh, bridging international buyers with vetted local tanneries.",
  },
  {
    path: "products",
    title: "Leather Sourcing Catalogue | Wet Blue, Crust & Finished Leather | ExportVisor",
    description: "Source export-grade genuine leather from Bangladesh: Full Grain, Top Grain, Corrected Grain, Drum Dyed Crust, and Wet Blue bovine and goat hides tailored to buyer specifications.",
  },
  {
    path: "leather-products",
    title: "Leather Sourcing Catalogue | Wet Blue, Crust & Finished Leather | ExportVisor",
    description: "Source export-grade genuine leather from Bangladesh: Full Grain, Top Grain, Corrected Grain, Drum Dyed Crust, and Wet Blue bovine and goat hides tailored to buyer specifications.",
  },
  {
    path: "terms",
    title: "Commercial Terms & Standards | ExportVisor",
    description: "Transparent RFQ-driven commercial terms: direct factory-floor pricing, custom MOQ evaluation, scheduled production lead times, and secure international payment terms (LC/TT).",
  },
  {
    path: "sourcing-process",
    title: "10-Stage Sourcing & Export Process | ExportVisor",
    description: "Step-by-step transparency from initial RFQ and lab-dip counter-sample approval to drum production, AQL 2.5 on-site quality inspection, container stuffing, and export logistics.",
  },
  {
    path: "quality-inspection",
    title: "Quality Control & AQL 2.5 Inspection Coordination | ExportVisor",
    description: "Rigorous hide-by-hide quality inspection protocols: thickness calibration (±0.1 mm), tensile strength, color fastness testing, and pre-shipment container audits.",
  },
  {
    path: "knowledge-hub",
    title: "Leather Knowledge Hub & Technical Specifications | ExportVisor",
    description: "Technical sourcing guides comparing Wet Blue, Crust, and Finished leather characteristics, grain integrity, substance tolerances, and testing parameters for global buyers.",
  },
  {
    path: "market-insights",
    title: "Bangladesh Leather Market Insights & Sourcing Trends | ExportVisor",
    description: "Current industry intelligence, raw hide market trends, export tariff advantages (GSP/EBA duty-free access), and tannery cluster dynamics in Savar, Dhaka.",
  },
  {
    path: "export-shipping",
    title: "Export Logistics & Shipping from Chittagong Port | ExportVisor",
    description: "International freight management from Chittagong Port (BDCGP) and Hazrat Shahjalal International Airport (DAC) under FOB, CIF, or CFR terms with complete trade documentation.",
  },
  {
    path: "bangladesh-sourcing",
    title: "Why Source Leather from Bangladesh | Tannery Ecosystem | ExportVisor",
    description: "Discover the competitive advantages of sourcing leather from Bangladesh: indigenous raw material quality, centralized Savar Tannery Industrial Estate, and 0% import duty benefits.",
  },
  {
    path: "global-trade-impact",
    title: "Global Trade Impact & Export Distribution | ExportVisor",
    description: "Export volume data, port logistics metrics, and destination distribution across major international leather manufacturing markets including the EU, UK, and Asia.",
  },
  {
    path: "why-us",
    title: "Why Partner with ExportVisor | Trusted Leather Agency",
    description: "Buyer-first advocacy, on-the-ground presence in Savar, technical language translation, transparent commercial terms, and dedicated quality assurance for global brands.",
  },
  {
    path: "quote",
    title: "Request a Leather Quotation & Direct Sourcing Desk | ExportVisor",
    description: "Submit your technical leather tech pack, target thickness, color swatches, or volume requirements for rapid tannery matching, feasibility analysis, and direct pricing.",
  },
  {
    path: "contact",
    title: "Direct Sourcing Desk & Contact | ExportVisor",
    description: "Submit your technical leather tech pack, target thickness, color swatches, or volume requirements for rapid tannery matching, feasibility analysis, and direct pricing.",
  },
  {
    path: "faq",
    title: "Frequently Asked Questions (FAQ) | ExportVisor Leather Sourcing",
    description: "Factual answers regarding MOQs, sample development, production lead times, international payment terms (LC/TT), and third-party inspection arrangements.",
  },
];

console.log("Generating static route pages for ExportVisor...");

routes.forEach((route) => {
  const targetDir = path.join(distDir, route.path);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const canonicalUrl = `https://exportvisor.com/${route.path}`;

  let html = baseHtml
    // Replace Title
    .replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`)
    .replace(/<meta name="title" content=".*?" \/>/gi, `<meta name="title" content="${route.title}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/gi, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta property="twitter:title" content=".*?" \/>/gi, `<meta property="twitter:title" content="${route.title}" />`)
    // Replace Description
    .replace(/<meta name="description" content=".*?" \/>/gi, `<meta name="description" content="${route.description}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/gi, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta property="twitter:description" content=".*?" \/>/gi, `<meta property="twitter:description" content="${route.description}" />`)
    // Replace Canonical & URL
    .replace(/<link rel="canonical" href=".*?" \/>/gi, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/gi, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="twitter:url" content=".*?" \/>/gi, `<meta property="twitter:url" content="${canonicalUrl}" />`);

  fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
  console.log(`✓ Generated /${route.path}/index.html`);
});

console.log("Static section routes successfully generated!");
