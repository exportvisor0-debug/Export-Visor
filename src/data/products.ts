/**
 * ExportVisor Central Leather Product Catalogue
 * 
 * Centralized data architecture for easy updating and addition of leather specifications.
 */

// Import generated photorealistic assets
import heroLeatherImg from "../assets/images/hero_leather_inspection_1790421583026.jpg";
import heroExportImg from "../assets/images/hero_leather_export_1790424538382.jpg";
import crustLeatherImg from "../assets/images/leather_crust_natural_1790421595126.jpg";
import finishedAnilineImg from "../assets/images/leather_finished_aniline_1790421606041.jpg";
import wetBlueImg from "../assets/images/leather_wet_blue_stage_1790421617932.jpg";
import exportShippingImg from "../assets/images/export_shipping_containers_1790421629253.jpg";

export { heroLeatherImg, heroExportImg, crustLeatherImg, finishedAnilineImg, wetBlueImg, exportShippingImg };

export interface LeatherProduct {
  id: string;
  slug?: string;
  name: string;
  category: "Intermediate Stage" | "Finished Leather" | "Specialty Finish" | "Semi-Processed";
  badgeLabel?: string;
  isSustainable?: boolean;
  sustainabilityNote?: string;
  shortDescription: string;
  overview: string;
  image: string;
  origin: string;
  materialType: string;
  availableFinishes: string[];
  thicknessRange: string;
  colorOptions: string;
  sizeMeasurement: string;
  moq: string;
  leadTime: string;
  indicativePrice: string;
  applications: string[];
  qualityInspection: string;
  packagingShipping: string;
  buyerRequirementsNote: string;
  availabilityNote: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export const LEATHER_PRODUCTS: LeatherProduct[] = [
  {
    id: "crust-leather",
    slug: "crust-leather",
    name: "Crust Leather",
    seoTitle: "Crust Leather Supplier & Exporter Bangladesh | Savar Tannery",
    seoDescription: "Source high-grade Cow, Buffalo & Goat Crust Leather from Bangladesh tanneries. Natural milling, drum-dyed or vegetable tanned crust for footwear and leather goods.",
    seoKeywords: ["crust leather bangladesh", "cow crust leather supplier", "drum dyed crust savar", "leather tannery bangladesh", "wholesale crust leather b2b"],
    category: "Intermediate Stage",
    badgeLabel: "High Demand",
    isSustainable: true,
    sustainabilityNote: "Chrome-Free & Veg-Tan Options Available · CETP Effluent Compliant",
    shortDescription:
      "Tanned, dried, and sorted intermediate leather ready for finishing, embossing, or coloration to buyer specifications.",
    overview:
      "Crust leather represents an intermediate state after tanning, shaving, and re-tanning/fatliquoring, where moisture has been removed. It offers international manufacturers and finishing tanneries maximum flexibility to apply custom colors, waxes, oils, milling, or embossing according to their own seasonal collections.",
    image: crustLeatherImg,
    origin: "Bangladesh",
    materialType: "Bovine / Cowhide / Buffalo / Goat based on buyer specification",
    availableFinishes: [
      "Natural Milling Crust",
      "Full Chrome Tanned",
      "Chrome-Free / Vegetable Tanned",
      "Buffed / Snuffed Surface",
      "Drum Dyed / Undyed",
    ],
    thicknessRange: "0.8 - 1.0 mm, 1.0 - 1.2 mm, 1.2 - 1.4 mm, or custom buyer specification",
    colorOptions: "Natural, Beige, Black, Brown, or custom drum-dyed shades",
    sizeMeasurement: "Sides / Full Hides (approx. 16–24 sq ft per hide on average)",
    moq: "Determined upon RFQ (Subject to buyer specifications & batch size)",
    leadTime: "Scheduled per RFQ & batch requirements",
    indicativePrice: "Quoted upon RFQ (Determined by grade, thickness, finish & quantity)",
    applications: [
      "Footwear uppers & linings",
      "Leather goods & handbags",
      "Belts & small leather goods",
      "Furniture upholstery base",
    ],
    qualityInspection:
      "Coordination of thickness consistency, grain firmness, substance balance, moisture level, and surface defect grading prior to packaging.",
    packagingShipping:
      "Packed flat in seaworthy wooden pallets or export cartons with moisture protection, ready for 20ft / 40ft container dispatch.",
    buyerRequirementsNote:
      "Buyers are invited to submit target substance, temper (soft, medium, firm), and grain grading expectations.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "finished-leather",
    slug: "finished-leather",
    name: "Finished Leather",
    seoTitle: "Finished Cow Leather Exporter Bangladesh | Factory Sourcing",
    seoDescription: "Export-grade finished cowhide leather from Bangladesh. Automated spray finish, milled grain, pull-up, glazed finishes tailored for footwear and upholstery.",
    seoKeywords: ["finished leather exporter", "bangladesh finished cow leather", "aniline leather roll", "footwear upper leather wholesale", "savar leather finishing"],
    category: "Finished Leather",
    badgeLabel: "Commercial Grade",
    shortDescription:
      "Fully dyed, surfaced, and treated leather ready for direct industrial cutting into footwear, upholstery, and accessories.",
    overview:
      "Finished leather has undergone the complete cycle of coloration, protective topcoats, mechanical softening, and grain regulation. Sourced from partner tanneries with automated spray lines and roller coating systems, it is tailored for volume buyers requiring dependable physical durability and aesthetic uniformity.",
    image: finishedAnilineImg,
    origin: "Bangladesh",
    materialType: "Cowhide / Bovine (Full Grain, Top Grain, or Corrected Grain)",
    availableFinishes: [
      "Smooth Matte Finish",
      "Semi-Gloss / Glazed",
      "Milled Pebble Grain",
      "Pull-Up Oil & Wax",
      "Water-Resistant Coating",
    ],
    thicknessRange: "1.1 - 1.3 mm, 1.3 - 1.5 mm, 1.6 - 1.8 mm, or per buyer tech pack",
    colorOptions: "Full Pantone / buyer master swatch matching (Black, Cognac, Tan, Navy, Espresso, etc.)",
    sizeMeasurement: "Full hides & sides, measured via calibrated electronic area measuring machines",
    moq: "Determined upon RFQ (Subject to color split & finishing requirements)",
    leadTime: "Scheduled per RFQ & production program",
    indicativePrice: "Quoted upon RFQ (Tailored to grade selection, finish & volume)",
    applications: [
      "Formal & casual dress shoes",
      "Athletic & lifestyle footwear",
      "Luxury luggage & briefcases",
      "Executive office & automotive upholstery",
    ],
    qualityInspection:
      "Rigorous rub fastness, finish adhesion, color consistency (delta E tolerances), tensile strength, and flex endurance checks.",
    packagingShipping:
      "Rolled grain-side-in with protective interleaf paper, consolidated into export poly bundles and secured in wooden crates or pallets.",
    buyerRequirementsNote:
      "Custom surface effects, water repellency, or flame retardant treatments can be reviewed upon request.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "wet-blue-leather",
    slug: "wet-blue-leather",
    name: "Wet Blue Leather",
    seoTitle: "Wet Blue Leather Hides Exporter Bangladesh | Cow & Goat Hides",
    seoDescription: "Export certified chrome tanned Wet Blue Cow, Buffalo and Goat hides from Bangladesh. High substance yield, machine fleshed, container load shipping.",
    seoKeywords: ["wet blue cow hides", "wet blue leather bangladesh", "wet blue export savar", "raw hide chrome tanned", "wet blue splits supplier"],
    category: "Semi-Processed",
    badgeLabel: "Primary Sourcing",
    shortDescription:
      "Chrome-tanned hydrated hides in the primary blue state, providing raw tannage stability for global re-tanners.",
    overview:
      "Wet Blue represents raw hides immediately after unhairing, liming, deliming, bating, pickling, and primary chrome tanning. ExportVisor coordinates with certified local wet blue producers in Bangladesh, assisting international tanners who perform their own proprietary re-tanning, dyeing, and finishing operations.",
    image: wetBlueImg,
    origin: "Bangladesh",
    materialType: "Cow / Buffalo / Goat Wet Blue Hides & Splits",
    availableFinishes: [
      "Full Substance Unsplit",
      "Drop Split / Grain Split",
      "Machine-Fleshed & Trimmed",
      "Evenly Wringed",
    ],
    thicknessRange: "Substance graded per raw weight category (Light, Medium, Heavy)",
    colorOptions: "Characteristic Chrome Tanned Pale Cyan Blue",
    sizeMeasurement: "Classified by raw hide weight / surface area class",
    moq: "Determined upon RFQ (Container loads or tailored lots)",
    leadTime: "Scheduled per RFQ & wet blue inventory sorting",
    indicativePrice: "Quoted upon RFQ based on raw hide selection & market pricing",
    applications: [
      "International re-tanning mills",
      "Automotive leather processing",
      "Heavy work boot leather manufacture",
      "Split suede production",
    ],
    qualityInspection:
      "Sorting by grain quality, scar/vein density, boil test shrinkage resistance, chromium oxide content, and hide yield.",
    packagingShipping:
      "Folded or layered with biocidal treatment in heavy-duty polyethylene-lined wooden crates/pallets to retain optimal moisture.",
    buyerRequirementsNote:
      "Buyers must specify hide origin preferences (local cow vs. heavy steer) and selection grading ratios (e.g. TR, A/B/C/D).",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "full-grain-leather",
    slug: "full-grain-leather",
    name: "Full Grain Leather",
    seoTitle: "Full Grain Finished Cow Leather Exporter Bangladesh | Premium Grade",
    seoDescription: "Export grade authentic Full Grain Cowhide Leather from Bangladesh. Natural unbroken grain pore structure, rich patina, premium footwear and luxury bag grade.",
    seoKeywords: ["full grain leather bangladesh", "full grain cowhide export", "premium leather savar", "aniline full grain leather", "b2b leather manufacturer"],
    category: "Finished Leather",
    badgeLabel: "Premium Grade",
    isSustainable: true,
    sustainabilityNote: "Low-Impact Drum Tanning · Minimal Polymer Load · Eco-Conscious Beamhouse",
    shortDescription:
      "The highest tier of leather preserving the intact epidermis and natural hide pore pattern without buffing or sanding.",
    overview:
      "Full grain leather retains the genuine natural grain of the hide with all original markings, breathability, and natural strength. It develops a rich, distinct patina over time and is favored by prestigious global brands crafting heirloom goods, premium footwear, and high-end upholstery.",
    image: heroLeatherImg,
    origin: "Bangladesh",
    materialType: "First-selection Bangladesh bovine cowhide",
    availableFinishes: [
      "Natural Aniline Drum Dye",
      "Light Wax Conditioning",
      "Slightly Protected Semi-Aniline",
      "Natural Grain Mill",
    ],
    thicknessRange: "1.2 - 1.4 mm, 1.4 - 1.6 mm, 1.8 - 2.0 mm, or custom specification",
    colorOptions: "Classic Tan, Saddle Brown, Chestnut, Black, British Tan",
    sizeMeasurement: "Sides averaging 18–22 sq ft",
    moq: "Determined upon RFQ (Subject to raw selection sorting)",
    leadTime: "Scheduled per RFQ & raw hide selection availability",
    indicativePrice: "Quoted upon RFQ based on selection tier and buyer tech pack",
    applications: [
      "Heritage footwear & work boots",
      "High-end leather jackets",
      "Bespoke briefcases & totes",
      "Architectural leather tiles & luxury sofas",
    ],
    qualityInspection:
      "Rigid grading for pristine surface condition, minimal tick bites or scratches, consistent tensile strength, and natural hand feel.",
    packagingShipping:
      "Specially layered with acid-free tissue between hides, crated in reinforced export boxes.",
    buyerRequirementsNote:
      "Full grain requires premium raw hide selection. Inquiries should specify allowable surface variance.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "split-leather",
    slug: "split-leather",
    name: "Split Leather (Suede & Drop Split)",
    seoTitle: "Split Leather & Suede Exporter Bangladesh | Work Glove & Boot Split",
    seoDescription: "Wholesale Split Leather, Wet Blue drop splits, and finished cow split suede from Bangladesh. Ideal for work gloves, footwear linings, and industrial accessories.",
    seoKeywords: ["split leather bangladesh", "cow split suede supplier", "drop split wet blue", "work glove leather export", "savar split leather tannery"],
    category: "Intermediate Stage",
    badgeLabel: "High Utility",
    isSustainable: true,
    sustainabilityNote: "High-Efficiency Upcycled Byproduct · CETP Effluent Compliant",
    shortDescription:
      "Fibrous lower layer split from thick hides, refined into durable suede, work glove leather, or coated embossed leather.",
    overview:
      "Split leather is created when a thick raw or wet blue bovine hide is split horizontally. The lower cut (corium layer) lacks the natural grain but offers remarkable fibrous density, tear strength, and cost efficiency. It is universally specified for safety boots, work gloves, soft suede jackets, and coated bicast leather.",
    image: crustLeatherImg,
    origin: "Bangladesh",
    materialType: "Bangladesh Bovine Drop Split / Wet Blue Split",
    availableFinishes: [
      "Natural Suede Nap (Buffed)",
      "Unfinished Wet Blue Drop Split",
      "Crust Split (Ready to Dye)",
      "Polyurethane Laminated / Bicast",
      "Work-Glove Heavy Flesh Split",
    ],
    thicknessRange: "0.9 - 1.1 mm, 1.2 - 1.4 mm, 1.4 - 1.6 mm, or custom spec",
    colorOptions: "Natural Grey, Golden Tan, Black, Navy, Brown, or custom dyed",
    sizeMeasurement: "Sides / Full Splits (approx. 14–20 sq ft)",
    moq: "Determined upon RFQ (Economical containerload or tailored batches)",
    leadTime: "Scheduled per RFQ & split inventory availability",
    indicativePrice: "Quoted upon RFQ based on split weight & finishing level",
    applications: [
      "Industrial work gloves & safety gear",
      "Casual suede shoes & boot counters",
      "Tool bags & heavy aprons",
      "Footwear linings & tongue reinforcements",
    ],
    qualityInspection:
      "Substance uniformity across split area, tear strength testing, nap consistency, and moisture verification.",
    packagingShipping:
      "Compressed in export bales or seaworthy wooden skids with weather-resistant strapping.",
    buyerRequirementsNote:
      "Specify whether drop split (wet blue), crust split, or finished suede is required.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "top-grain-leather",
    slug: "top-grain-leather",
    name: "Top Grain Leather",
    seoTitle: "Top Grain Cowhide Leather Supplier Bangladesh | Uniform Finish",
    seoDescription: "Export top grain bovine leather from Bangladesh. Lightly buffed for flawless consistency, stain resistance, and high yield in commercial footwear & furniture.",
    seoKeywords: ["top grain leather bangladesh", "cowhide top grain supplier", "commercial leather upholstery", "top grain footwear leather", "savar tannery"],
    category: "Finished Leather",
    shortDescription:
      "Refined upper leather with lightly buffed outer layer providing superior uniformity, durability, and stain resistance.",
    overview:
      "Top grain leather features the upper layer of the hide with minor surface variations smoothed out through micro-buffing and subtle finish coats. It offers an optimal balance between genuine leather luxury and commercial consistency, making it ideal for large-scale footwear and upholstery programs.",
    image: finishedAnilineImg,
    origin: "Bangladesh",
    materialType: "Selected Bangladesh cowhide / steer",
    availableFinishes: [
      "Semi-Pigmented",
      "Micro-Pigment Glaze",
      "Silky Matte Topcoat",
      "Mild Grain Print",
    ],
    thicknessRange: "1.0 - 1.2 mm, 1.2 - 1.4 mm, or custom",
    colorOptions: "Extensive custom color matching to physical swatches",
    sizeMeasurement: "Sides / Whole hides (calibrated electronic inspection)",
    moq: "Determined upon RFQ (Aligned with buyer production run)",
    leadTime: "Scheduled per RFQ & production program",
    indicativePrice: "Quoted upon RFQ (Subject to grade, finish & volume)",
    applications: [
      "Commercial contract furniture",
      "Fashion footwear & sneakers",
      "Wallets, belts, & tech sleeves",
      "Hospitality upholstery",
    ],
    qualityInspection:
      "Color uniformity across batches, dry and wet crocking tests, lightfastness, and fold endurance.",
    packagingShipping: "Rolled in protective moisture-barrier tubing on wooden export skids.",
    buyerRequirementsNote: "Buyer can specify gloss levels (dead matte to high sheen) and softness ratings.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "corrected-grain-leather",
    slug: "corrected-grain-leather",
    name: "Corrected Grain Leather",
    seoTitle: "Corrected Grain & Embossed Leather Exporter Bangladesh | Saffiano & Haircell",
    seoDescription: "Source embossed corrected grain cowhide leather from Savar, Bangladesh. Saffiano, Haircell, and Pebble prints with high abrasion resistance.",
    seoKeywords: ["corrected grain leather", "saffiano leather bangladesh", "embossed cow leather export", "pebble grain leather supplier", "industrial footwear leather"],
    category: "Finished Leather",
    shortDescription:
      "Durable, embossed leather featuring uniform textured grain and robust protective coating for high-wear applications.",
    overview:
      "Corrected grain leather undergoes careful surface conditioning, followed by the application of an artificial grain pattern (such as Saffiano, Haircell, or Pebble) via heated hydraulic or continuous embossing rollers. It is engineered for industrial consistency and exceptional yield efficiency.",
    image: crustLeatherImg,
    origin: "Bangladesh",
    materialType: "Bangladesh Bovine Hide",
    availableFinishes: [
      "Saffiano Embossed",
      "Haircell Print",
      "Heavy Pebble Print",
      "Pigmented High-Durability Finish",
    ],
    thicknessRange: "1.2 - 1.4 mm, 1.4 - 1.6 mm",
    colorOptions: "Unlimited solid colors, high color fastness",
    sizeMeasurement: "Sides (approx. 18–24 sq ft)",
    moq: "Determined upon RFQ (Based on embossing tooling & volume)",
    leadTime: "Scheduled per RFQ & order specifications",
    indicativePrice: "Quoted upon RFQ (Subject to embossing pattern, grade & quantity)",
    applications: [
      "Institutional and safety footwear",
      "Uniform belts & accessories",
      "Heavy duty travel bags",
      "Commercial seating",
    ],
    qualityInspection:
      "Embossing depth retention, abrasion resistance (Taber test), surface adhesion, and flexing endurance.",
    packagingShipping: "Export carton packaging with moisture desiccant packs and reinforced straps.",
    buyerRequirementsNote: "Plate patterns can be matched to buyer existing samples upon request.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "aniline-semi-aniline",
    slug: "aniline-semi-aniline",
    name: "Aniline & Semi-Aniline Leather",
    seoTitle: "Aniline & Semi-Aniline Leather Exporter Bangladesh | Luxury Drum Dyed",
    seoDescription: "Premium transparent drum-dyed Aniline and Semi-Aniline leather from Bangladesh. Luxurious natural hand feel, breathability, and rich earthy colors.",
    seoKeywords: ["aniline leather bangladesh", "semi aniline cowhide", "drum dyed leather roll", "luxury bag leather supplier", "soft hand feel leather export"],
    category: "Specialty Finish",
    badgeLabel: "Artisanal Feel",
    isSustainable: true,
    sustainabilityNote: "Waterborne Low-VOC Drum Dyeing · REACH Compliant Formulations",
    shortDescription:
      "Transparent drum-dyed leather showcasing the innate pore structure with minimal or transparent protective topcoats.",
    overview:
      "Aniline leather is dyed exclusively with soluble dyes without covering the surface with opaque topcoats, preserving the organic authenticity and warmth of the hide. Semi-aniline introduces an ultra-thin transparent protective veil to enhance soil resistance while maintaining exceptional tactile softness.",
    image: finishedAnilineImg,
    origin: "Bangladesh",
    materialType: "Top tier selected Bangladesh Cowhide",
    availableFinishes: [
      "Pure Aniline Natural Hand",
      "Semi-Aniline Protective Mist",
      "Warm Wax Burnish",
      "Soft Hand Milling",
    ],
    thicknessRange: "1.0 - 1.2 mm, 1.2 - 1.4 mm",
    colorOptions: "Rich earthy tones: Cognac, Dark Chocolate, Burgundy, Olive, Charcoal",
    sizeMeasurement: "Sides / Full Hides (average 18–22 sq ft)",
    moq: "Determined upon RFQ (Subject to raw hide selection availability)",
    leadTime: "Scheduled per RFQ & hide sorting schedule",
    indicativePrice: "Quoted upon RFQ following technical specification review",
    applications: [
      "Designer luxury furniture",
      "Handcrafted artisan footwear",
      "High-end leather jackets",
      "Fine leather goods",
    ],
    qualityInspection:
      "Pore breathability verification, softness grading, natural grain retention, and drum dye penetration check.",
    packagingShipping: "Individually interleaved in moisture-conditioned export boxes.",
    buyerRequirementsNote:
      "Requires high-grade raw hides with minimal blemishes. Buyers are advised to discuss sample approval.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "pigmented-leather",
    slug: "pigmented-leather",
    name: "Pigmented & Coated Leather",
    seoTitle: "Pigmented Leather Supplier Bangladesh | High Durability & Easy Clean",
    seoDescription: "Export-grade pigmented cowhide leather from Bangladesh. Extreme stain resistance, lightfastness, and uniform color matching for contract seating and footwear.",
    seoKeywords: ["pigmented leather bangladesh", "coated leather supplier", "automotive leather upholstery", "contract furniture leather", "high wear leather export"],
    category: "Finished Leather",
    shortDescription:
      "Opaque polymer-coated leather engineered for extreme durability, color consistency, and ease of maintenance.",
    overview:
      "Pigmented leather is finished with a pigment dispersion and polyurethane or acrylic topcoat that seals the surface. This ensures maximum protection against sunlight, stains, and scuffing, making it the preferred solution for heavy-traffic public spaces, mass-market footwear, and automotive interiors.",
    image: heroLeatherImg,
    origin: "Bangladesh",
    materialType: "Bovine / Cowhide",
    availableFinishes: [
      "Full Pigmented Matte",
      "High Gloss Patent / Glaze",
      "Polyurethane Protective Shield",
      "Easy-Clean Soil Resistant",
    ],
    thicknessRange: "1.1 - 1.3 mm, 1.3 - 1.5 mm",
    colorOptions: "Exact Pantone matching; solid whites, vivid colors, and darks",
    sizeMeasurement: "Sides / Full Hides (approx. 18–22 sq ft)",
    moq: "Determined upon RFQ (Tailored to buyer batch size)",
    leadTime: "Scheduled per RFQ & batch requirements",
    indicativePrice: "Quoted upon RFQ (Subject to pigment specification & volume)",
    applications: [
      "Mass production footwear",
      "Public transportation & commercial seating",
      "School & hospital furniture",
      "Protective leather gear",
    ],
    qualityInspection:
      "Accelerated weathering, UV lightfastness, chemical spot resistance, and Bally flex tests.",
    packagingShipping: "Secure palletized packing with anti-fungal barrier linings.",
    buyerRequirementsNote: "Specific automotive or flame-retardant standards must be indicated in inquiry.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
  {
    id: "buyer-custom-sourcing",
    slug: "buyer-custom-sourcing",
    name: "Buyer-Specified Custom Leather",
    seoTitle: "Custom Leather Sourcing & Counter Sample Development Bangladesh",
    seoDescription: "Bespoke leather development tailored to your exact physical sample, thickness, and color. Counter-samples and lab dip testing from Savar tanneries.",
    seoKeywords: ["custom leather sourcing bangladesh", "leather counter sample development", "oem leather development", "bespoke tannery sourcing", "savar leather lab dips"],
    category: "Specialty Finish",
    badgeLabel: "Bespoke Sourcing",
    isSustainable: true,
    sustainabilityNote: "Tailored Chrome-Free, Bio-Based & Wet White Formulations Available",
    shortDescription:
      "Tailored leather sourcing matched to your exact physical sample, technical master spec, or target price point.",
    overview:
      "When standard catalogue specifications do not align with your product development requirements, ExportVisor coordinates custom development with suitable tannery partners in Bangladesh. We manage counter-sample development, lab dip approvals, and technical verification to replicate your desired hand feel, temper, and finish.",
    image: crustLeatherImg,
    origin: "Bangladesh",
    materialType: "Bovine / Buffalo / Goat based on buyer requirement",
    availableFinishes: [
      "Developed to match physical buyer swatch",
      "Vegetable / Chrome / Semi-Vegetable hybrid",
      "Waterproof / Oil-tanned / Crazy Horse",
      "Custom embossed or printed textures",
    ],
    thicknessRange: "Custom specified by buyer (e.g. 0.6 mm lining up to 3.5 mm sole/belt)",
    colorOptions: "Laboratory color recipe matching to physical swatch or Pantone TCX",
    sizeMeasurement: "Calculated per buyer pattern cutting yield requirements",
    moq: "Determined upon RFQ (Subject to custom development scope)",
    leadTime: "Scheduled per RFQ & counter-sample approval",
    indicativePrice: "Quoted upon RFQ based on confirmed technical recipe & volume",
    applications: [
      "OEM / ODM footwear collections",
      "International brand collections",
      "Industrial safety products",
      "Architectural and interior projects",
    ],
    qualityInspection:
      "Counter-sample comparison, master batch retention, spectrophotometer color matching, and physical lab reports.",
    packagingShipping: "Custom export packaging according to buyer warehouse receiving protocols.",
    buyerRequirementsNote:
      "Send physical samples or detailed technical data sheet for accurate tannery matching.",
    availabilityNote: "Available based on buyer requirements and sourcing availability.",
  },
];
