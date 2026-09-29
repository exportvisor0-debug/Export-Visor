import React from "react";
import { heroLeatherImg } from "../data/products";
import { CheckCircle2, ShieldCheck, Eye, Layers, Ruler, Palette } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import { useLanguage } from "../context/LanguageContext";

export const QualityInspectionSection: React.FC = () => {
  const { t, language } = useLanguage();

  const qualityFactors = [
    {
      factor: t.quality.item1Title,
      desc: t.quality.item1Desc,
      icon: Layers,
      color: "bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30",
    },
    {
      factor: t.quality.item2Title,
      desc: t.quality.item2Desc,
      icon: Ruler,
      color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/25",
    },
    {
      factor: t.quality.item3Title,
      desc: t.quality.item3Desc,
      icon: Eye,
      color: "bg-blue-500/10 text-blue-600 border border-blue-500/25",
    },
    {
      factor: t.quality.item4Title,
      desc: t.quality.item4Desc,
      icon: Palette,
      color: "bg-purple-500/10 text-purple-600 border border-purple-500/25",
    },
  ];

  const stages = [
    {
      num: "1",
      title:
        language === "bn"
          ? "ধাপ ১: ক্রাস্ট ও ওয়েট ব্লু প্রাথমিক গ্রেডিং ও সিলেকশন"
          : "Stage 1: Crust & Wet Blue Sorting Inspection",
      desc:
        language === "bn"
          ? "ডাইং ও ফিনিশিংয়ের আগে চামড়ার গ্রেড ব্রেকডাউন, টেম্পার এবং গ্রেইন ত্রুটি নিবিড়ভাবে যাচাই করা হয়।"
          : "Inspecting intermediate hides prior to dyeing to verify grade breakdown, temper, and absence of underlying grain defects.",
    },
    {
      num: "2",
      title:
        language === "bn"
          ? "ধাপ ২: ইন-প্রসেস ফিনিশ, শেড ও কালার ম্যাচিং পরীক্ষা"
          : "Stage 2: In-Process Finish & Color Review",
      desc:
        language === "bn"
          ? "বায়ারের অনুমোদিত মাস্টার কালার সোয়াচের সাথে ড্রাম ডাইং স্ট্রাইক, স্প্রে লাইন একরূপতা ও হাতের স্পর্শ মিলিয়ে দেখা হয়।"
          : "Checking initial drum dyeing strikes, spray line uniformity, and surface feel against buyer approved master cuttings.",
    },
    {
      num: "3",
      title:
        language === "bn"
          ? "ধাপ ৩: চূড়ান্ত প্রি-শিপমেন্ট ইন্সপেকশন ও এরিয়া অডিট"
          : "Stage 3: Final Pre-Shipment Inspection & Area Audit",
      desc:
        language === "bn"
          ? "ইলেকট্রনিক মেজারমেন্ট মেশিনের প্রিন্টআউট, প্যাক কাউন্ট, আর্দ্রতা পরীক্ষা, প্যালেট স্থায়িত্ব ও এক্সপোর্ট মার্কিং অডিট।"
          : "Auditing electronic area measurement printouts, pack counts, moisture retention, pallet stability, and export markings.",
    },
  ];

  return (
    <section id="quality-inspection" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              {t.quality.kicker}
            </div>
            <SectionShareButton path="/quality-inspection" sectionName={t.quality.kicker} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            {t.quality.title} <span className="text-gold-gradient">{t.quality.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            {t.quality.subtitle}
          </p>
        </div>

        {/* Top Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#15120E]">
              {language === "bn" ? "ইন্সপেকশন সমন্বয় কীভাবে কাজ করে" : "How Inspection Coordination Works"}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {language === "bn"
                ? "আন্তর্জাতিক ক্রেতাদের পক্ষে প্রতিটি ব্যাচের উৎপাদনে বাংলাদেশে সশরীরে আসা সবসময় সম্ভব হয় না। এক্সপোর্টভাইজর পার্টনার ট্যানারির ভেতরে ক্রেতার বস্তুনিষ্ঠ টেকনিক্যাল প্রতিনিধি হিসেবে কাজ করে।"
                : "International buyers cannot always travel to Bangladesh for every production batch. ExportVisor acts as the buyer's objective technical coordinator inside partner tanneries."}
            </p>

            <div className="space-y-3 pt-2">
              {stages.map((stage) => (
                <div key={stage.num} className="p-4 bg-[#FAF8F5] border border-stone-200/90 rounded-xl text-xs space-y-1 shadow-2xs hover:border-[#C89D43]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-[#C89D43]/20 text-[#7A5A17] font-mono font-bold text-[10px] flex items-center justify-center">
                      {stage.num}
                    </span>
                    <span className="font-bold text-[#15120E] uppercase tracking-wider text-[11px] block">
                      {stage.title}
                    </span>
                  </div>
                  <p className="text-stone-600 leading-relaxed pl-7">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-500/5 rounded-lg border border-[#C89D43]/20 text-xs">
              <div className="font-bold text-[#7A5A17] flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C89D43]" />
                <span>{t.quality.standardsTitle}</span>
              </div>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                {t.quality.standardsDesc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-[#C89D43]/30 shadow-lg bg-stone-900 aspect-[4/3] group">
              <img
                src={heroLeatherImg}
                alt="Leather grading and inspection inspection table"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-bold text-[#E5BE58] mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5BE58]" />
                  <span>{language === "bn" ? "অন-সাইট ফ্যাক্টরি ইন্সপেকশন" : "On-Site Inspection Coordination"}</span>
                </div>
                <p className="text-stone-200 text-[11px] leading-relaxed">
                  {language === "bn"
                    ? "প্যাকিং ও রপ্তানির পূর্বে প্রতিটি চামড়ার পুরুত্ব, স্থায়িত্ব এবং সারফেস কোয়ালিটি নির্ভুলভাবে নিরীক্ষণ করা হয়।"
                    : "Verifying thickness consistency, grain smoothness, and surface condition hide by hide before packing."}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Quality Determinants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityFactors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.factor}
                className="p-6 border border-stone-200/90 rounded-xl bg-white hover:border-[#C89D43]/50 transition-all duration-200 shadow-2xs hover:shadow-md group"
              >
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3.5 transition-transform group-hover:scale-110 shadow-xs`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#15120E] mb-1.5 group-hover:text-[#C89D43] transition-colors">
                  {item.factor}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
