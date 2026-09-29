import React from "react";
import { Scale, Clock, CreditCard, Layers, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SectionShareButton } from "./SectionShareButton";

export const CommercialTermsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="commercial-terms" className="py-14 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              {t.commercial.kicker}
            </span>
            <SectionShareButton path="/terms" sectionName={t.commercial.kicker} />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15120E] mt-1">
            {t.commercial.title} <span className="text-gold-gradient">{t.commercial.subtitle}</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
            {t.commercial.notice}
          </p>
        </div>

        {/* 4 Commercial Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: MOQ */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-emerald-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                {language === "bn" ? "নমনীয় MOQ" : "Flexible MOQ"}
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              {t.commercial.moqTitle}
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              {language === "bn" ? "RFQ অনুযায়ী" : "Per RFQ"}
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              {t.commercial.moqDesc}
            </p>
          </div>

          {/* Card 2: Quotation */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-[#C89D43]/60 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-[#7A5A17] border border-amber-200 font-semibold">
                {language === "bn" ? "সরাসরি মিল FOB/CIF" : "Direct Mill FOB/CIF"}
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              {t.commercial.pricingTitle}
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              {language === "bn" ? "কোটেশন ভিত্তিক" : "Quoted upon RFQ"}
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              {t.commercial.pricingDesc}
            </p>
          </div>

          {/* Card 3: Lead Time */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-blue-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-semibold">
                {language === "bn" ? "শিডিউলড ব্যাচ" : "Scheduled Batches"}
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              {t.commercial.leadTimeTitle}
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              {language === "bn" ? "RFQ অনুযায়ী শিডিউল" : "Scheduled per RFQ"}
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              {t.commercial.leadTimeDesc}
            </p>
          </div>

          {/* Card 4: Payment Terms */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-purple-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-semibold">
                {language === "bn" ? "বাণিজ্যিক নিরাপত্তা" : "Trade Security"}
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              {t.commercial.paymentTitle}
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              LC / TT
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              {t.commercial.paymentDesc}
            </p>
          </div>

        </div>

        {/* Commercial Clarification Footnote */}
        <div className="mt-8 p-4 border border-[#C89D43]/30 rounded-xl text-[11px] text-stone-600 flex items-start gap-3 bg-[#FBF8F1] shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-stone-900">
              {language === "bn" ? "স্বচ্ছতার নিশ্চয়তা:" : "Transparency Notice:"}
            </strong>{" "}
            {t.commercial.notice}
          </span>
        </div>

      </div>
    </section>
  );
};
