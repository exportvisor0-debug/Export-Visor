import React from "react";
import { ArrowUpRight } from "lucide-react";

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
    },
    {
      num: "02",
      title: "Requirement Analysis",
      desc: "ExportVisor technical team reviews specifications, assessing grain grading tolerances, chemical standards, and color parameters.",
    },
    {
      num: "03",
      title: "Product & Supplier Matching",
      desc: "We match the requirement with audited Bangladesh tanneries having proven competency and appropriate drumming/finishing lines.",
    },
    {
      num: "04",
      title: "Sample & Specification Discussion",
      desc: "Review of physical master swatches, digital technical data sheets, and preparation of counter-samples or reference cuttings.",
    },
    {
      num: "05",
      title: "Price & Commercial Confirmation",
      desc: "Formulation of competitive FOB Chittagong or CIF quotations, confirming MOQ, lead times, and LC/TT payment structures.",
    },
    {
      num: "06",
      title: "Quality & Inspection Protocol",
      desc: "Establishment of agreed tolerance thresholds, surface defect criteria, substance uniformity rules, and testing standards.",
    },
    {
      num: "07",
      title: "Order Formalization",
      desc: "Proforma Invoice issuance, contract signing, and financial instrument (LC/TT) verification through established banking channels.",
    },
    {
      num: "08",
      title: "Production Coordination",
      desc: "On-site monitoring of tannery beamhouse operations, re-tanning drum cycles, vacuum drying, toggling, and topcoat finishing.",
    },
    {
      num: "09",
      title: "Final Pre-Shipment Inspection",
      desc: "Rigorous hide-by-hide area calibration, rub fastness, finish adhesion, color consistency, and seaworthy packing verification.",
    },
    {
      num: "10",
      title: "Export & Shipment Coordination",
      desc: "Handling customs clearance, container stuffing, Bill of Lading, Certificate of Origin, and export documentation dispatch.",
    },
  ];

  return (
    <section id="sourcing-process" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Structured Workflow
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Our 10-Stage Sourcing & Export Process
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
              className="p-6 bg-white border border-stone-200 rounded-lg hover:border-stone-300 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono-data text-sm font-bold text-[#C87D3B] tracking-tight">
                    Stage {step.num}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                    B2B Protocol
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#181310]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>Managed by ExportVisor</span>
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-all shadow-xs cursor-pointer"
          >
            <span>Initiate Stage 01 — Submit Your Sourcing Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-[#C87D3B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
