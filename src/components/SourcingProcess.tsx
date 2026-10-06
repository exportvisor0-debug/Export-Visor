import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import { useLanguage } from "../context/LanguageContext";

interface SourcingProcessProps {
  onRequestQuote: () => void;
}

export const SourcingProcess: React.FC<SourcingProcessProps> = ({
  onRequestQuote,
}) => {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.process.stage1Title,
      desc: t.process.stage1Desc,
      color: "from-amber-500 to-amber-600",
    },
    {
      num: "02",
      title: t.process.stage2Title,
      desc: t.process.stage2Desc,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      num: "03",
      title: t.process.stage3Title,
      desc: t.process.stage3Desc,
      color: "from-blue-500 to-blue-600",
    },
    {
      num: "04",
      title: t.process.stage4Title,
      desc: t.process.stage4Desc,
      color: "from-purple-500 to-purple-600",
    },
    {
      num: "05",
      title: t.process.stage5Title,
      desc: t.process.stage5Desc,
      color: "from-[#D6AC4B] to-[#B8892E]",
    },
    {
      num: "06",
      title: t.process.stage6Title,
      desc: t.process.stage6Desc,
      color: "from-teal-500 to-teal-600",
    },
    {
      num: "07",
      title: t.process.stage7Title,
      desc: t.process.stage7Desc,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      num: "08",
      title: t.process.stage8Title,
      desc: t.process.stage8Desc,
      color: "from-orange-500 to-orange-600",
    },
    {
      num: "09",
      title: t.process.stage9Title,
      desc: t.process.stage9Desc,
      color: "from-emerald-600 to-teal-700",
    },
    {
      num: "10",
      title: t.process.stage10Title,
      desc: t.process.stage10Desc,
      color: "from-blue-600 to-indigo-700",
    },
  ];

  return (
    <section id="sourcing-process" className="py-16 sm:py-24 bg-white dark:bg-[#0B0806] border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Fade-In-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              {t.process.kicker}
            </div>
            <SectionShareButton path="/sourcing-process" sectionName={t.process.kicker} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#FAF6F0] leading-tight mt-1">
            {t.process.title} <span className="text-gold-gradient">{t.process.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Process Steps Grid with Motion Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.06, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -4, borderColor: "rgba(200, 157, 67, 0.6)" }}
              className="p-6 bg-white dark:bg-[#120E0B] border border-stone-200/90 dark:border-stone-800 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs group-hover:scale-110 transition-transform`}>
                      {step.num}
                    </span>
                    <span className="font-mono-data text-xs font-bold text-[#7A5A17] dark:text-[#E5BE58] tracking-wider uppercase">
                      Stage {step.num}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
                    B2B Protocol
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#15120E] dark:text-[#FAF6F0] group-hover:text-[#C89D43] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400 dark:text-stone-500 font-medium">
                <span className="flex items-center gap-1 text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D43]" />
                  Managed by ExportVisor
                </span>
                <span className="text-[#7A5A17] font-semibold">Verified Deliverable</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
