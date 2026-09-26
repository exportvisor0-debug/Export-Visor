import React from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import { heroLeatherImg } from "../data/products";
import { ArrowUpRight, ShieldCheck, Layers, Globe2, FileText } from "lucide-react";

interface HeroProps {
  onExploreLeather: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreLeather,
  onRequestQuote,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      {/* Subtle architectural ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#C87D3B_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Strategic Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
              <span className="text-[#C87D3B] font-bold">Bangladesh</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{t.hero.kicker.split("·")[1]?.trim() || "Leather Sourcing & Export Partner"}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>B2B International</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#181310] leading-[1.08] text-balance">
              {t.hero.headline}
            </h1>

            {/* Sub-headline / Concrete Description */}
            <p className="font-body text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty">
              {t.hero.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  trackEvent("request_quote_click", { location: "hero_primary" });
                  onRequestQuote();
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.requestQuote}</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-[#C87D3B]" />
              </button>

              <button
                onClick={() => {
                  trackEvent("product_detail_view", { source: "hero_explore" });
                  onExploreLeather();
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-all shadow-2xs cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.exploreCatalogue}</span>
              </button>
            </div>

            {/* Verified Commercial Highlights Strip (Strictly Confirmed Facts - RFQ Driven) */}
            <div className="pt-6 border-t border-stone-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                    {t.hero.pricingBasis}
                  </span>
                  <span className="font-mono-data text-lg font-semibold text-[#181310] block mt-0.5">
                    {t.hero.pricingValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.pricingNote}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                    {t.hero.volumeBasis}
                  </span>
                  <span className="font-mono-data text-lg font-semibold text-[#181310] block mt-0.5">
                    {t.hero.volumeValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.volumeNote}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                    {t.hero.leadTimeBasis}
                  </span>
                  <span className="font-mono-data text-lg font-semibold text-[#181310] block mt-0.5">
                    {t.hero.leadTimeValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.leadTimeNote}
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                    {t.hero.paymentBasis}
                  </span>
                  <span className="font-mono-data text-lg font-semibold text-[#181310] block mt-0.5">
                    {t.hero.paymentValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.paymentNote}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-900 shadow-md aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src={heroLeatherImg}
                alt="Finished and crust leather inspection table showing authentic leather grain"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-102"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs text-[#E8A366] font-medium mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>On-Site Tannery Inspection Coordination</span>
                </div>
                <p className="text-xs text-stone-200 line-clamp-2">
                  Overseeing grain selection, thickness calibration, color-matching, and packaging before export container loading.
                </p>
              </div>
            </div>

            {/* Quick trust pill floating beneath */}
            <div className="mt-3 flex items-center justify-between px-2 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-stone-400" />
                <span>Origin: Bangladesh Tanneries</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-stone-400" />
                <span>Wet Blue · Crust · Finished</span>
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
