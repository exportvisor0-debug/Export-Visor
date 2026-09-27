import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface SourcingProcessProps {
  onRequestQuote: () => void;
}

export const SourcingProcess: React.FC<SourcingProcessProps> = ({
  onRequestQuote,
}) => {
  const steps = [
    {
      num: "01",
      title: "Buyer Inquiry",
      desc: "Buyer submits target leather type, required quantity, target substance/thickness, finish type, and application requirements.",
      color: "from-amber-500 to-amber-600",
    },
    {
      num: "02",
      title: "Requirement Analysis",
      desc: "ExportVisor technical team reviews specifications, assessing grain grading tolerances, chemical standards, and color parameters.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      num: "03",
      title: "Product & Supplier Matching",
      desc: "We match the requirement with audited Bangladesh tanneries having proven competency and appropriate drumming/finishing lines.",
      color: "from-blue-500 to-blue-600",
    },
    {
      num: "04",
      title: "Sample & Specification Discussion",
      desc: "Review of physical master swatches, digital technical data sheets, and preparation of counter-samples or reference cuttings.",
      color: "from-purple-500 to-purple-600",
    },
    {
      num: "05",
      title: "Price & Commercial Confirmation",
      desc: "Formulation of competitive FOB Chittagong or CIF quotations, confirming MOQ, lead times, and LC/TT payment structures.",
      color: "from-[#D6AC4B] to-[#B8892E]",
    },
    {
      num: "06",
      title: "Quality & Inspection Protocol",
      desc: "Establishment of agreed tolerance thresholds, surface defect criteria, substance uniformity rules, and testing standards.",
      color: "from-teal-500 to-teal-600",
    },
    {
      num: "07",
      title: "Order Formalization",
      desc: "Proforma Invoice issuance, contract signing, and financial instrument (LC/TT) verification through established banking channels.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      num: "08",
      title: "Production Coordination",
      desc: "On-site monitoring of tannery beamhouse operations, re-tanning drum cycles, vacuum drying, toggling, and topcoat finishing.",
      color: "from-orange-500 to-orange-600",
    },
    {
      num: "09",
      title: "Final Pre-Shipment Inspection",
      desc: "Rigorous hide-by-hide area calibration, rub fastness, finish adhesion, color consistency, and seaworthy packing verification.",
      color: "from-emerald-600 to-teal-700",
    },
    {
      num: "10",
      title: "Export & Shipment Coordination",
      desc: "Handling customs clearance, container stuffing, Bill of Lading, Certificate of Origin, and export documentation dispatch.",
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <section id="sourcing-process" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider mb-2">
            Structured Workflow
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            Our 10-Stage <span className="text-gold-gradient">Sourcing & Export Pipeline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            From initial technical brief to final container seal at the port, ExportVisor coordinates every milestone with structured transparency.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-white border border-stone-200/90 rounded-xl hover:border-[#C89D43]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs`}>
                      {step.num}
                    </span>
                    <span className="font-mono-data text-xs font-bold text-[#7A5A17] tracking-wider uppercase">
                      Stage {step.num}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                    B2B Protocol
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#15120E] group-hover:text-[#C89D43] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                <span className="flex items-center gap-1 text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D43]" />
                  Managed by ExportVisor
                </span>
                <span className="text-[#7A5A17] font-semibold">Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-gradient-to-r from-[#D6AC4B] via-[#E5BE58] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-xl transition-all shadow-gold-subtle hover:shadow-gold-glow cursor-pointer group"
          >
            <span>Initiate Stage 01 — Submit Your Sourcing Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#15120E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
