import React from "react";
import {
  Compass,
  MessageSquare,
  Building2,
  FileCheck,
  HeartHandshake,
  Eye,
} from "lucide-react";

export const WhyExportVisor: React.FC = () => {
  const reasons = [
    {
      title: "Direct Bangladesh Tannery Access",
      desc: "We connect international buyers directly with audited tanneries in Bangladesh possessing specific machinery for wet blue, crust, or high-grade finished leather.",
      icon: Building2,
      color: "bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30",
    },
    {
      title: "Buyer-Focused Representation",
      desc: "Our mandate is strictly buyer-aligned. We advocate for your substance tolerances, chemical compliance requirements, and delivery schedules without supplier bias.",
      icon: Compass,
      color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/25",
    },
    {
      title: "Technical Language Translation",
      desc: "Leather specifications require exact terminology. We translate your tech packs, Pantone swatches, and temper desires into clear production parameters for local tanners.",
      icon: MessageSquare,
      color: "bg-blue-500/10 text-blue-600 border border-blue-500/25",
    },
    {
      title: "Objective Inspection Coordination",
      desc: "Coordination of multi-point inspections—measuring hide area, crocking fastness, tensile tolerance, and grain defects before container stuffing.",
      icon: Eye,
      color: "bg-purple-500/10 text-purple-600 border border-purple-500/25",
    },
    {
      title: "Transparent Commercial Process",
      desc: "Clear indicative benchmarks ($0.95–$1.20/sq ft baseline where applicable), formal proforma invoices, and verifiable payment terms via LC or TT.",
      icon: FileCheck,
      color: "bg-rose-500/10 text-rose-600 border border-rose-500/25",
    },
    {
      title: "Long-Term Sourcing Continuity",
      desc: "We aim for ongoing buyer partnerships rather than one-off trades, ensuring consistent batch-to-batch leather quality season after season.",
      icon: HeartHandshake,
      color: "bg-teal-500/10 text-teal-600 border border-teal-500/25",
    },
  ];

  return (
    <section id="why-exportvisor" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider mb-2">
            Partnership Value
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            Why International Buyers <span className="text-gold-gradient">Partner with ExportVisor</span>
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
                className="p-6 sm:p-7 bg-white border border-stone-200/90 rounded-xl hover:border-[#C89D43]/50 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 rounded-lg ${item.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-2xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#15120E] group-hover:text-[#C89D43] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="font-mono font-medium">Advantage 0{idx + 1}</span>
                  <span className="text-[#C89D43] font-bold">Verified Reliability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
