import React from "react";
import { siteConfig } from "../config/siteConfig";
import { CheckCircle2, Shield, Eye, FileSpreadsheet, Anchor, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenProfile: () => void;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenProfile,
  onRequestQuote,
}) => {
  const corePillars = [
    {
      title: "Supplier Matching & Vetting",
      description:
        "We identify suitable Bangladesh tanneries with the machinery, raw hide access, and technical finishing capability aligned with your exact product specifications.",
      icon: CheckCircle2,
    },
    {
      title: "Technical Specification Alignment",
      description:
        "Translating buyer tech packs—thickness tolerances, temper, tensile strength, color swatches, and grain selection—directly into actionable production instructions for local tanners.",
      icon: FileSpreadsheet,
    },
    {
      title: "Quality & Inspection Coordination",
      description:
        "Coordinating stage-by-stage inspections from raw wet blue classification through crust sorting and finished hide calibration to mitigate off-spec risks before packing.",
      icon: Eye,
    },
    {
      title: "Order & Production Monitoring",
      description:
        "Serving as the buyer's on-the-ground liaison in Bangladesh, tracking chemical batch processing, milling, toggling, and drying schedules to ensure committed timelines.",
      icon: Shield,
    },
    {
      title: "Export & Documentation Logistics",
      description:
        "Facilitating smooth international trade procedures, including Bill of Lading, Certificate of Origin, packing lists, container consolidation, and shipping line coordination.",
      icon: Anchor,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B] mb-2">
            About ExportVisor
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight text-balance">
            Your Dedicated Sourcing Eyes & Technical Hands in Bangladesh
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            ExportVisor operates as a specialized leather sourcing and export agency based in Bangladesh. We are not a factory or finished goods manufacturer; instead, we represent international buyers, importers, footwear brands, and upholstery producers to navigate the local tannery ecosystem with transparency, technical clarity, and rigorous commercial coordination.
          </p>
        </div>

        {/* Narrative & Value Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Context: The Sourcing Reality */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-lg">
              <h3 className="font-display text-2xl font-semibold text-[#181310] mb-3">
                Why International Buyers Need an On-the-Ground Partner
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Sourcing leather across borders often involves hurdles in technical communication, variable tannage grades, ambiguous lead times, and verification challenges.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                ExportVisor solves this by functioning as your local sourcing arm. We ensure your specifications—from substance measurement to shade continuity—are strictly understood, monitored, and inspected directly at the tannery level before the container seals are locked.
              </p>
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>Scope: Leather Only</span>
                <span className="font-semibold text-stone-800">Wet Blue · Crust · Finished</span>
              </div>
            </div>

            <div className="p-6 border border-stone-200 rounded-lg space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                Our Operating Principles
              </h4>
              <ul className="text-xs text-stone-600 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">✓</span>
                  <span><strong>Buyer-Centric:</strong> We represent your interests, your tolerance standards, and your inspection protocols.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">✓</span>
                  <span><strong>Zero Exaggeration:</strong> Factual reporting on tannery capabilities, lead times, and raw material availability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">✓</span>
                  <span><strong>Commercial Clarity:</strong> Transparent quotations based on current tannery benchmarks and actual grade yields.</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={onOpenProfile}
                  className="inline-flex items-center text-xs font-semibold text-[#C87D3B] hover:text-[#A56126] transition-colors cursor-pointer"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Operational Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm uppercase tracking-wider text-stone-500 font-bold mb-4">
              How We Coordinate Buyer Operations
            </h3>

            <div className="space-y-3">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 border border-stone-200 rounded-lg hover:border-stone-300 transition-colors bg-white"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded bg-stone-100 flex items-center justify-center shrink-0 text-[#C87D3B] mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono-data text-xs text-stone-400 font-medium">
                            0{idx + 1}.
                          </span>
                          <h4 className="text-base font-semibold text-[#181310]">
                            {pillar.title}
                          </h4>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                Ready to review specifications with our Bangladesh team?
              </span>
              <button
                onClick={onRequestQuote}
                className="text-xs font-semibold text-[#181310] underline underline-offset-4 hover:text-[#C87D3B] transition-colors cursor-pointer"
              >
                Submit Your Requirements →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
