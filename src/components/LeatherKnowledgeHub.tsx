import React, { useState } from "react";
import {
  Droplets,
  ShieldAlert,
  Sun,
  Warehouse,
  Thermometer,
  Layers,
  FileCheck2,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { LeatherGradingGuide } from "./LeatherGradingGuide";

interface LeatherKnowledgeHubProps {
  onRequestQuote: (prefill?: string) => void;
}

export const LeatherKnowledgeHub: React.FC<LeatherKnowledgeHubProps> = ({
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<"all" | "wet-blue" | "crust" | "finished" | "receiving">("all");

  const knowledgeItems = [
    {
      id: "wb-moisture",
      category: "wet-blue",
      categoryLabel: "Wet Blue Leather",
      title: "Moisture & Hydration Equilibrium",
      subtitle: "Preventing fiber desiccation during ocean transit",
      icon: Droplets,
      tips: [
        "Maintain target hide moisture content strictly between 50% and 60% within sealed polyethylene crate liners.",
        "Avoid prolonged storage in temperatures exceeding 30°C (86°F), which accelerates chemical evaporation and fiber shrinkage.",
        "Ensure wooden export pallets are certified ISPM-15 heat-treated to eliminate fungal spores and wood parasites.",
      ],
      technicalNote:
        "Severe moisture loss in wet blue causes irreversible chromium salt crystallization, impairing re-tanning dye uptake.",
    },
    {
      id: "wb-biocide",
      category: "wet-blue",
      categoryLabel: "Wet Blue Leather",
      title: "Mold & Biocidal Protection",
      subtitle: "Preserving chrome-tanned hides during sea freight",
      icon: ShieldAlert,
      tips: [
        "Verify standard bactericide/fungicide dosage (e.g. TCMTB or OIT formulations) applied during the final beamhouse wash.",
        "Monitor maritime container dew point; ensure desiccant bags are positioned above pallet wraps to absorb ceiling condensation.",
        "Inspect container door seals for watertight integrity before loading at Chittagong Port terminals.",
      ],
      technicalNote:
        "ExportVisor coordinates with tanneries to ensure standardized active biocidal concentrations for long-haul routes.",
    },
    {
      id: "crust-climate",
      category: "crust",
      categoryLabel: "Crust Leather",
      title: "Atmospheric Conditioning & Humidity",
      subtitle: "Maintaining fiber suppleness before final finishing",
      icon: Warehouse,
      tips: [
        "Store crust bundles in climate-controlled warehouses with 50%–65% Relative Humidity (RH) and ambient temperatures under 25°C.",
        "Allow minimum 48 hours ambient acclimatization in your workshop before mechanical staking or dry milling operations.",
        "Never place crust pallets directly against cold exterior concrete walls or damp floor slabs.",
      ],
      technicalNote:
        "Sub-40% humidity causes vegetable and milling crust to stiffen, increasing risk of micro-fractures along belly edges.",
    },
    {
      id: "crust-oxidation",
      category: "crust",
      categoryLabel: "Crust Leather",
      title: "UV Shielding & Light Oxidation",
      subtitle: "Protecting undyed surfaces against color shifts",
      icon: Sun,
      tips: [
        "Shield crust hides from direct ultraviolet (UV) sunlight and high-output industrial fluorescent light tubes.",
        "Use opaque, breathable kraft paper covers over stacked hides to prevent premature tanning oil photo-oxidation.",
        "Keep crust batches segregated by tannage type (vegetable vs. chrome) to avoid cross-contamination of natural oils.",
      ],
      technicalNote:
        "Vegetable-tanned crust is particularly sensitive to ambient light, which naturally darkens exposed borders.",
    },
    {
      id: "finished-handling",
      category: "finished",
      categoryLabel: "Finished Leather",
      title: "Roll Geometry & Surface Storage",
      subtitle: "Preserving grain embossing and topcoat uniformity",
      icon: Layers,
      tips: [
        "Always roll finished leather grain-side-in with protective acid-free paper interleaving between hides.",
        "Store rolled hides horizontally on cantilevered pipe racking rather than standing rolls on end to prevent edge curling.",
        "Avoid stacking rolls more than 4 layers high to prevent pressure creases across aniline and smooth calf finishes.",
      ],
      technicalNote:
        "High compression stacking on delicate pull-up and patent finishes can transfer surface oils or cause contact gloss variations.",
    },
    {
      id: "finished-care",
      category: "finished",
      categoryLabel: "Finished Leather",
      title: "Aniline vs. Pigmented Maintenance",
      subtitle: "Differential warehouse handling standards",
      icon: Sparkles,
      tips: [
        "Handle pure aniline and semi-aniline hides with clean lint-free cotton gloves to prevent skin oil absorption.",
        "For pigmented and corrected grain leathers, clean surfaces using only damp microfiber cloths with neutral pH balance.",
        "Never expose finished hides to solvent fumes, silicone aerosols, or open heat vents in the cutting room.",
      ],
      technicalNote:
        "Pigmented topcoats offer high rub fastness, whereas aniline leathers breathe naturally but remain porous to liquids.",
    },
    {
      id: "receiving-protocol",
      category: "receiving",
      categoryLabel: "Receiving Protocol",
      title: "Buyer Warehouse Inbound Checklist",
      subtitle: "Step-by-step verification upon container de-stuffing",
      icon: FileCheck2,
      tips: [
        "Audit tamper-evident container bolt seal numbers against the original shipping Bill of Lading (B/L).",
        "Inspect pallet moisture barrier wraps for condensation, punctures, or transit vibration damage before unstrapping.",
        "Randomly sample 5% of bundles for calibrated dial gauge thickness checks and color consistency under D65 lighting.",
        "Record batch numbers and tannery stamp markings for complete supply chain traceability back to Bangladesh.",
      ],
      technicalNote:
        "ExportVisor retains master cutting swatches from every dispatched batch for comparison with inbound buyer audits.",
    },
  ];

  const filteredItems = knowledgeItems.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <section id="knowledge-hub" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200/80 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
              B2B Value-Add & Technical Advisory
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
              Leather Knowledge Hub
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Professional guidelines for handling, climate-controlled warehousing, and maintaining different leather forms—from hydrated wet blue hides to delicate finished aniline surfaces.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <a
              href="#grading-guide"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-[#FAF8F5] hover:bg-stone-100 border border-stone-300 rounded-md transition-colors cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C87D3B]" />
              <span>Grading Standards Guide</span>
            </a>
            <button
              onClick={() => onRequestQuote("Technical Sourcing Advisory")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              <span>Request Tech Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C87D3B]" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg mb-8 max-w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === "all"
                ? "bg-[#181310] text-white shadow-xs"
                : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
            }`}
          >
            All Technical Tips
          </button>
          <button
            onClick={() => setActiveTab("wet-blue")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === "wet-blue"
                ? "bg-[#181310] text-white shadow-xs"
                : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
            }`}
          >
            Wet Blue Handling
          </button>
          <button
            onClick={() => setActiveTab("crust")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === "crust"
                ? "bg-[#181310] text-white shadow-xs"
                : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
            }`}
          >
            Crust Leather Storage
          </button>
          <button
            onClick={() => setActiveTab("finished")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === "finished"
                ? "bg-[#181310] text-white shadow-xs"
                : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
            }`}
          >
            Finished Leather Care
          </button>
          <button
            onClick={() => setActiveTab("receiving")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === "receiving"
                ? "bg-[#181310] text-white shadow-xs"
                : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
            }`}
          >
            Inbound Receiving Checklist
          </button>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#FAF8F5] border border-stone-200 rounded-lg p-6 flex flex-col justify-between hover:border-stone-300 transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C87D3B]">
                      {item.categoryLabel}
                    </span>
                    <div className="w-8 h-8 rounded bg-white border border-stone-200 text-[#C87D3B] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#181310] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 mb-4">
                    {item.subtitle}
                  </p>

                  <ul className="text-xs text-stone-600 space-y-2.5">
                    {item.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200/80">
                  <div className="p-2.5 bg-white border border-stone-200/60 rounded text-[11px] text-stone-600 leading-relaxed">
                    <span className="font-semibold text-stone-800">Technical Context:</span>{" "}
                    {item.technicalNote}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Leather Grading Guide Component */}
        <div id="grading-guide" className="scroll-mt-20">
          <LeatherGradingGuide
            onInquireGrade={(gradeLabel) => onRequestQuote(gradeLabel)}
          />
        </div>

        {/* Bottom Direct Assistance Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-stone-900 text-white rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="font-display text-xl sm:text-2xl font-semibold text-white">
              Have Specific Testing or Chemical Compliance Standards?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              ExportVisor coordinates REACH compliance, azo-free certifications, chrome-free tanning formulations, and custom temper requirements upon RFQ submission.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote("REACH / Chemical Standards Inquiry")}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#181310] bg-[#C87D3B] hover:bg-[#E8A366] rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            Submit Technical RFQ
          </button>
        </div>

      </div>
    </section>
  );
};
