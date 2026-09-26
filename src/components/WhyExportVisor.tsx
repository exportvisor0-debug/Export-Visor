import React from "react";
import {
  Compass,
  MessageSquare,
  Building2,
  FileCheck,
  Truck,
  HeartHandshake,
  Eye,
  Sliders,
} from "lucide-react";

export const WhyExportVisor: React.FC = () => {
  const reasons = [
    {
      title: "Direct Bangladesh Tannery Access",
      desc: "We connect international buyers directly with audited tanneries in Bangladesh possessing specific machinery for wet blue, crust, or high-grade finished leather.",
      icon: Building2,
    },
    {
      title: "Buyer-Focused Representation",
      desc: "Our mandate is strictly buyer-aligned. We advocate for your substance tolerances, chemical compliance requirements, and delivery schedules without supplier bias.",
      icon: Compass,
    },
    {
      title: "Technical Language Translation",
      desc: "Leather specifications require exact terminology. We translate your tech packs, Pantone swatches, and temper desires into clear production parameters for local tanners.",
      icon: MessageSquare,
    },
    {
      title: "Objective Inspection Coordination",
      desc: "Coordination of multi-point inspections—measuring hide area, crocking fastness, tensile tolerance, and grain defects before container stuffing.",
      icon: Eye,
    },
    {
      title: "Transparent Commercial Process",
      desc: "Clear indicative benchmarks ($0.95–$1.20/sq ft baseline where applicable), formal proforma invoices, and verifiable payment terms via LC or TT.",
      icon: FileCheck,
    },
    {
      title: "Long-Term Sourcing Continuity",
      desc: "We aim for ongoing buyer partnerships rather than one-off trades, ensuring consistent batch-to-batch leather quality season after season.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="why-exportvisor" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Partnership Value
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Why International Buyers Partner with ExportVisor
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            International leather sourcing requires reliable communication, clear technical expectations, and proactive on-site coordination. Here is how we create dependable value for global buyers.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 bg-white border border-stone-200 rounded-lg hover:border-stone-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#FAF8F5] border border-stone-200 text-[#C87D3B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#181310] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Advantage 0{idx + 1}</span>
                  <span className="text-[#C87D3B] font-semibold">Reliability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
