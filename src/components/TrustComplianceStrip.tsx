import React, { useState } from "react";
import {
  Award,
  ShieldCheck,
  Leaf,
  ClipboardCheck,
  Ship,
  Info,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface CompliancePillar {
  id: string;
  icon: React.ElementType;
  title: string;
  subtext: string;
  badge: string;
  details: string;
  standards: string[];
}

const COMPLIANCE_PILLARS: CompliancePillar[] = [
  {
    id: "iso-certified",
    icon: Award,
    title: "ISO Certified Tanneries",
    subtext: "ISO 9001 / 14001 Audited Operations",
    badge: "Quality & Management",
    details:
      "We prioritize vetted partner tanneries in Savar and Chattogram that maintain certified ISO 9001 (Quality Management) and ISO 14001 (Environmental Management Systems) manufacturing standards.",
    standards: ["ISO 9001:2015", "ISO 14001:2015", "Documented Traceability"],
  },
  {
    id: "reach-compliance",
    icon: ShieldCheck,
    title: "REACH & Chemical Safety",
    subtext: "Azo-Free & Hexavalent Chromium Restricted",
    badge: "EU / Global Standards",
    details:
      "All export leathers can be formulated to comply with European Union REACH Annex XVII thresholds, ensuring SVHC compliance, zero harmful aromatic amines, and verified chrome-free or low-free-formaldehyde formulations.",
    standards: ["EU REACH Annex XVII", "Azo-Free Dyes", "Cr(VI) Non-Detectable (<3ppm)"],
  },
  {
    id: "cetp-eco",
    icon: Leaf,
    title: "CETP Environmental Compliance",
    subtext: "Savar Effluent Treatment Plant Connected",
    badge: "Eco-Compliant Sourcing",
    details:
      "Partner mills operate within the Savar Tannery Industrial Estate connected to the Central Effluent Treatment Plant (CETP), with dedicated biological stages and chromium recovery recycling.",
    standards: ["Savar CETP Connected", "Waterborne Wet White Options", "Solid Waste Management"],
  },
  {
    id: "pre-shipment-inspection",
    icon: ClipboardCheck,
    title: "100% Pre-Shipment Inspection",
    subtext: "Piece-by-Piece Calibration & Grading",
    badge: "Independent Verification",
    details:
      "Every batch is physically inspected by ExportVisor technical inspectors at the tannery staging floor. We calibrate substance (thickness tolerance ±0.1mm), evaluate temper, check grain pull, and verify export packing.",
    standards: ["Thickness Calibration (±0.1mm)", "Crocking & Rub Fastness", "Grain Pull & Flex Testing"],
  },
  {
    id: "global-logistics",
    icon: Ship,
    title: "Global Logistics Partner",
    subtext: "FOB Chattogram / CIF Worldwide Sea & Air",
    badge: "Reliable Trade Corridors",
    details:
      "Seamless maritime container shipping (20ft & 40ft dry/reefer) coordinated via Chattogram Port with tier-1 international shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd) with full Phytosanitary and Chamber certificates.",
    standards: ["Chattogram Port Export Clearance", "Standard LC at Sight / TT", "Bill of Lading & Origin Docs"],
  },
];

export const TrustComplianceStrip: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<CompliancePillar | null>(null);

  return (
    <>
      <section
        aria-label="Trust and Compliance Verification Strip"
        className="relative bg-white border-b border-stone-200/90 shadow-2xs z-20 py-4 sm:py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Micro-label */}
          <div className="flex items-center justify-between mb-3 text-[11px] font-mono uppercase tracking-wider text-stone-600">
            <span className="font-semibold text-[#80420E]">
              B2B Trust & Institutional Compliance Framework
            </span>
            <span className="hidden md:inline-block text-stone-600">
              Verified Tannery Partnerships · International Standards
            </span>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {COMPLIANCE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillar(pillar)}
                  className="group flex flex-col text-left p-3 sm:p-3.5 bg-[#FAF8F5] hover:bg-stone-100/90 border border-stone-200/80 hover:border-stone-300 rounded-lg transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs focus:outline-none focus:ring-1 focus:ring-[#C87D3B]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#181310] group-hover:text-[#C87D3B] group-hover:border-[#C87D3B]/40 transition-colors shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-stone-600 group-hover:text-stone-700">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-semibold text-[#181310] group-hover:text-[#C87D3B] transition-colors leading-tight line-clamp-1">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-[11px] text-stone-600 leading-snug mt-1 line-clamp-2">
                    {pillar.subtext}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-stone-200/60 flex items-center justify-between text-[10px] font-medium text-stone-600 group-hover:text-stone-800">
                    <span>View criteria</span>
                    <ChevronRight className="w-3 h-3 text-stone-500 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Compliance Criteria Modal */}
      {selectedPillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-title"
        >
          <div className="bg-white rounded-lg border border-stone-200 shadow-xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-start justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#C87D3B]">
                  <selectedPillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 block">
                    {selectedPillar.badge}
                  </span>
                  <h4 id="pillar-title" className="font-display text-xl font-bold text-[#181310] leading-tight">
                    {selectedPillar.title}
                  </h4>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                className="text-stone-600 hover:text-stone-900 text-sm font-semibold p-1 cursor-pointer"
                aria-label="Close compliance details"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {selectedPillar.details}
            </p>

            <div className="bg-[#FAF8F5] p-3.5 rounded-md border border-stone-200 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                Applicable Technical Benchmarks
              </span>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-stone-700">
                {selectedPillar.standards.map((std, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C87D3B]" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-stone-100">
              <span className="text-[11px] text-stone-600">
                Formal test certificates issued per export batch
              </span>
              <button
                type="button"
                onClick={() => setSelectedPillar(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
