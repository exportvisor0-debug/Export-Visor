import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import { heroLeatherImg, heroExportImg } from "../data/products";
import {
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Globe2,
  FileText,
  CheckCircle2,
  Ship,
  Sparkles,
  MessageCircle,
  ChevronRight,
  Building2,
  ExternalLink,
} from "lucide-react";

interface HeroProps {
  onExploreLeather: () => void;
  onRequestQuote: () => void;
  onOpenCompanyProfile?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreLeather,
  onRequestQuote,
  onOpenCompanyProfile,
}) => {
  const { t, language } = useLanguage();
  const [activeVisualTab, setActiveVisualTab] = useState<"inspection" | "shipping">("inspection");

  // Dynamic headline & subheadline tailored to high-converting international B2B buyer brief
  const headline =
    language === "en"
      ? "Premier Leather Sourcing & Export Partner from Bangladesh to the World"
      : t.hero.headline;

  const subheadline =
    language === "en"
      ? "ExportVisor connects international footwear brands, luxury leather goods manufacturers, and global trade importers directly with vetted, LWG-compliant tanneries in Bangladesh. We oversee rigorous AQL 2.5 on-site quality inspections, negotiate direct factory-floor pricing, and coordinate secure port-to-port export logistics."
      : t.hero.subheadline;

  // Stagger animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-22 border-b border-stone-200/80 bg-gradient-to-b from-[#FAF8F5] via-[#F6F3EE] to-[#FAF8F5]">
      {/* Subtle architectural ambient grid & warm radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-[radial-gradient(#C89D43_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D6AC4B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C89D43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Value Proposition & High-Converting Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Live Status Badge / Kicker */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#15120E] text-[#E5BE58] text-xs font-semibold tracking-wide border border-[#C89D43]/40 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5BE58] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6AC4B]" />
                </span>
                <span className="uppercase text-[11px] tracking-wider text-white font-medium">
                  Direct Tannery Sourcing · Savar, Bangladesh
                </span>
              </div>

              <span className="hidden sm:inline-flex text-xs font-semibold text-stone-600 items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                LWG Compliant Network
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#15120E] leading-[1.08] text-balance"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl text-pretty"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Core Capability Badges Strip */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-600 pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium px-2 py-1 rounded bg-[#C89D43]/10 text-[#7A5A17] border border-[#C89D43]/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D43]" />
                Wet Blue · Crust · Finished Leather
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                100% Pre-Shipment AQL 2.5 QA
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium px-2 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Chittagong (BDCGP) Port Dispatch
              </span>
            </motion.div>

            {/* Call to Action (CTA) Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              
              {/* Primary High-Converting CTA: Explore Products */}
              <motion.button
                whileHover={{ scale: 1.025, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  trackEvent("product_detail_view", { source: "hero_explore_primary" });
                  onExploreLeather();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#181310] via-[#261E17] to-[#181310] hover:from-[#261E17] hover:to-[#382C22] rounded-lg shadow-sm hover:shadow-lg border border-[#C89D43]/35 transition-all cursor-pointer group"
              >
                <Layers className="w-4 h-4 text-[#E5BE58] transition-transform group-hover:rotate-6" />
                <span>Explore Products</span>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              {/* Secondary CTA: Request Instant Quote */}
              <motion.button
                whileHover={{ scale: 1.025, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  trackEvent("request_quote_click", { location: "hero_primary" });
                  onRequestQuote();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold tracking-wide text-white rounded-lg shadow-gold-subtle hover:shadow-lg transition-all cursor-pointer group"
                style={{
                  background: "linear-gradient(135deg, #D6AC4B 0%, #C89D43 50%, #B8892E 100%)",
                }}
              >
                <span>Request Instant Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              {/* Tertiary Contact Link: WhatsApp Desk */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_direct" })}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Optional Company Profile Modal Trigger */}
              {onOpenCompanyProfile && (
                <button
                  onClick={() => {
                    trackEvent("company_profile_view", { location: "hero_quick" });
                    onOpenCompanyProfile();
                  }}
                  className="hidden xl:inline-flex items-center justify-center gap-1.5 px-3 py-3.5 text-xs font-semibold text-stone-600 hover:text-[#C89D43] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C89D43]" />
                  <span>Company Deck</span>
                </button>
              )}

            </motion.div>

            {/* Verified Commercial Highlights Strip (Strictly Confirmed Facts - RFQ Driven) */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-stone-200/90">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                
                <div className="p-2.5 rounded-md hover:bg-white/60 transition-colors">
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                    {t.hero.pricingBasis}
                  </span>
                  <span className="font-mono-data text-lg font-bold text-[#181310] block mt-0.5">
                    {t.hero.pricingValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.pricingNote}
                  </span>
                </div>

                <div className="p-2.5 rounded-md hover:bg-white/60 transition-colors">
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                    {t.hero.volumeBasis}
                  </span>
                  <span className="font-mono-data text-lg font-bold text-[#181310] block mt-0.5">
                    {t.hero.volumeValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.volumeNote}
                  </span>
                </div>

                <div className="p-2.5 rounded-md hover:bg-white/60 transition-colors">
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                    {t.hero.leadTimeBasis}
                  </span>
                  <span className="font-mono-data text-lg font-bold text-[#181310] block mt-0.5">
                    {t.hero.leadTimeValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.leadTimeNote}
                  </span>
                </div>

                <div className="p-2.5 rounded-md hover:bg-white/60 transition-colors">
                  <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                    {t.hero.paymentBasis}
                  </span>
                  <span className="font-mono-data text-lg font-bold text-[#181310] block mt-0.5">
                    {t.hero.paymentValue}
                  </span>
                  <span className="text-[11px] text-stone-500 leading-tight block">
                    {t.hero.paymentNote}
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase with Interactive Switcher & Glass Badges */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            
            {/* Visual Header / View Toggle */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#C89D43]" />
                Live Sourcing Operations
              </span>

              {/* View Selector Tabs */}
              <div className="inline-flex p-0.5 bg-stone-200/90 rounded-lg text-xs">
                <button
                  onClick={() => setActiveVisualTab("inspection")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeVisualTab === "inspection"
                      ? "bg-white text-[#15120E] shadow-2xs font-bold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Quality Inspection
                </button>
                <button
                  onClick={() => setActiveVisualTab("shipping")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                    activeVisualTab === "shipping"
                      ? "bg-white text-[#15120E] shadow-2xs font-bold"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Port Shipping
                </button>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="relative rounded-xl overflow-hidden border border-[#C89D43]/30 bg-stone-900 shadow-xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
              <AnimatePresence mode="wait">
                {activeVisualTab === "inspection" ? (
                  <motion.div
                    key="tab-inspection"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={heroLeatherImg}
                      alt="Finished and crust leather inspection table showing authentic leather grain in Bangladesh tannery"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Inspection Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-[#E5BE58] font-bold mb-1">
                        <ShieldCheck className="w-4 h-4 text-[#E5BE58]" />
                        <span>On-Site Caliper & Substance Inspection</span>
                      </div>
                      <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                        Precision thickness calibration (0.9mm - 2.2mm), color swatch matching, tensile testing, and grain grading before crate packing.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="tab-shipping"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={heroExportImg}
                      alt="Export shipping containers and cargo pallet logistics from Chittagong Port"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Shipping Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-[#E5BE58] font-bold mb-1">
                        <Ship className="w-4 h-4 text-blue-400" />
                        <span>Chittagong Port (BDCGP) Export Logistics</span>
                      </div>
                      <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                        Direct container stuffing, export customs clearance, Bill of Lading (BL), Certificate of Origin, and scheduled sailings to 25+ global ports.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Glassmorphism Badge 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3.5 left-3.5 bg-black/75 backdrop-blur-md text-white px-3.5 py-2 rounded-lg border border-[#C89D43]/40 shadow-lg flex items-center gap-2.5 max-w-[210px]"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E5BE58]/30 to-[#C89D43]/20 border border-[#E5BE58]/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#E5BE58]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="block font-bold text-white">AQL 2.5 Standard</span>
                  <span className="text-[#E5BE58] text-[10px] font-medium">Zero-defect guarantee</span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2 (Top Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md text-white px-3.5 py-2 rounded-lg border border-blue-500/30 shadow-lg flex items-center gap-2 max-w-[200px]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse shadow-xs" />
                <div className="text-[11px] leading-tight">
                  <span className="block font-bold text-white">25+ Export Ports</span>
                  <span className="text-blue-300 text-[10px] font-medium">EU · Asia · Americas</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Trust Meta Strip Beneath Image */}
            <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-semibold text-stone-700">
                <Building2 className="w-3.5 h-3.5 text-[#C89D43]" />
                <span>Savar Tannery Estate, Dhaka</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-stone-700">
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Incoterms: FOB · CIF · CFR</span>
              </span>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
