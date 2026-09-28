import React from "react";
import { siteConfig } from "../config/siteConfig";
import { CheckCircle2, Shield, Eye, FileSpreadsheet, Anchor, ArrowRight } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import { useLanguage } from "../context/LanguageContext";

interface AboutSectionProps {
  onOpenProfile: () => void;
  onRequestQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenProfile,
  onRequestQuote,
}) => {
  const { t } = useLanguage();

  const corePillars = [
    {
      title: t.about.point1Title,
      description: t.about.point1Desc,
      icon: CheckCircle2,
      color: "bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30",
    },
    {
      title: t.about.point2Title,
      description: t.about.point2Desc,
      icon: FileSpreadsheet,
      color: "bg-blue-500/10 text-blue-600 border border-blue-500/25",
    },
    {
      title: t.about.point3Title,
      description: t.about.point3Desc,
      icon: Eye,
      color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/25",
    },
    {
      title: t.about.point4Title,
      description: t.about.point4Desc,
      icon: Shield,
      color: "bg-purple-500/10 text-purple-600 border border-purple-500/25",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-22 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              {t.about.kicker}
            </div>
            <SectionShareButton path="/about" sectionName={t.about.kicker} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight text-balance">
            {t.about.title}{" "}
            <span className="text-gold-gradient">{t.about.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Value Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Context: The Sourcing Reality */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-stone-50/80 border border-stone-200/90 rounded-xl shadow-2xs">
              <h3 className="font-display text-2xl font-bold text-[#15120E] mb-3">
                Why International Buyers Need an On-the-Ground Partner
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Sourcing leather across borders often involves hurdles in technical communication, variable tannage grades, ambiguous lead times, and verification challenges.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                ExportVisor solves this by functioning as your local sourcing arm. We ensure your specifications—from substance measurement to shade continuity—are strictly understood, monitored, and inspected directly at the tannery level before the container seals are locked.
              </p>
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span className="font-medium">Scope: Leather Only</span>
                <span className="font-bold text-[#7A5A17] px-2 py-0.5 rounded bg-[#C89D43]/15">
                  Wet Blue · Crust · Finished
                </span>
              </div>
            </div>

            <div className="p-6 border border-stone-200 rounded-xl space-y-4 bg-white shadow-2xs">
              <h4 className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                Our Operating Principles
              </h4>
              <ul className="text-xs text-stone-600 space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C89D43]/20 text-[#C89D43] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-stone-800">Buyer-Centric:</strong> We represent your interests, your tolerance standards, and your inspection protocols.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C89D43]/20 text-[#C89D43] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-stone-800">Zero Exaggeration:</strong> Factual reporting on tannery capabilities, lead times, and raw material availability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C89D43]/20 text-[#C89D43] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-stone-800">Commercial Clarity:</strong> Transparent quotations based on current tannery benchmarks and actual grade yields.</span>
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={onOpenProfile}
                  className="inline-flex items-center text-xs font-bold text-[#C89D43] hover:text-[#A67C24] transition-colors cursor-pointer group"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Operational Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C89D43]" />
              How We Coordinate Buyer Operations
            </h3>

            <div className="space-y-3">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 border border-stone-200/90 hover:border-[#C89D43]/50 rounded-xl transition-all duration-200 bg-white shadow-2xs hover:shadow-md group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center shrink-0 mt-0.5 transition-transform group-hover:scale-110 shadow-2xs`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono-data text-xs font-bold text-[#C89D43]">
                            0{idx + 1}.
                          </span>
                          <h4 className="text-base font-bold text-[#15120E] group-hover:text-[#C89D43] transition-colors">
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
              <span className="text-xs text-stone-500 font-medium">
                Ready to review specifications with our Bangladesh team?
              </span>
              <button
                onClick={onRequestQuote}
                className="text-xs font-bold text-[#C89D43] hover:text-[#A67C24] underline underline-offset-4 transition-colors cursor-pointer"
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
