import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import {
  heroLeatherImg,
  heroExportImg,
  crustLeatherImg,
  finishedAnilineImg,
  wetBlueImg,
  exportShippingImg,
  containerCargoShipImg,
  cargoShipVesselImg,
  portGantryLoadingImg,
} from "../data/products";
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
  ChevronLeft,
  Building2,
  Award,
  Play,
  Pause,
  Anchor,
} from "lucide-react";

interface HeroProps {
  onExploreLeather: () => void;
  onRequestQuote: () => void;
  onOpenCompanyProfile?: () => void;
}

interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  tagBn: string;
  caption: string;
  captionBn: string;
  alt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-ship-open-sea",
    image: containerCargoShipImg,
    tag: "Ocean Container Freight",
    tagBn: "মহাসাগরীয় কনটেইনার ফ্রেইট",
    caption: "Deep Sea Ocean Container Cargo Shipping · Direct Sailings to 25+ Global Ports",
    captionBn: "গভীর সমুদ্রে মালবাহী কনটেইনার কার্গো শিপিং · ২৫+ আন্তর্জাতিক বন্দরে সরাসরি জাহাজীকরণ",
    alt: "Commercial container cargo ship loaded with freight containers for maritime leather export",
  },
  {
    id: "slide-port-gantry",
    image: portGantryLoadingImg,
    tag: "Port Terminal Logistics",
    tagBn: "পোর্ট টার্মিনাল অপারেশন",
    caption: "Chattogram Port (BDCGP) Container Terminal · Automated Gantry Vessel Loading",
    captionBn: "চট্টগ্রাম বন্দর (BDCGP) কনটেইনার টার্মিনাল · স্বয়ংক্রিয় গ্যান্ট্রি ক্রেন লোডিং",
    alt: "International seaport container terminal with heavy gantry cranes loading export container ship",
  },
  {
    id: "slide-inspection",
    image: heroLeatherImg,
    tag: "LWG Tannery Floor",
    tagBn: "LWG ট্যানারি ফ্লোর",
    caption: "LWG-Audited Tannery Quality Inspection & Grain Substance Calibration · Savar, Dhaka",
    captionBn: "LWG অডিটেড ট্যানারি কোয়ালিটি পরিদর্শন ও গ্রেইন সাবস্ট্যান্স ক্যালিব্রেশন · সাভার",
    alt: "ExportVisor artisan leather inspection and thickness calibration in Savar, Bangladesh",
  },
  {
    id: "slide-port-vessel",
    image: cargoShipVesselImg,
    tag: "Maritime Shipping Lanes",
    tagBn: "আন্তর্জাতিক সমুদ্রপথ",
    caption: "Maritime Container Dispatch · FCL Full Container Loads & LCL Consolidation",
    captionBn: "সমুদ্রপথে কনটেইনার প্রেরণ · FCL ফুল কনটেইনার ও LCL কনসলিডেশন",
    alt: "Ocean container vessel underway with international export shipping containers",
  },
  {
    id: "slide-finished-aniline",
    image: finishedAnilineImg,
    tag: "Finished Leather Export",
    tagBn: "ফিনিশড লেদার রপ্তানি",
    caption: "Export-Grade Aniline & Full Grain Leather · Formulated for Global Brand Collections",
    captionBn: "রপ্তানি মানসম্পন্ন অ্যানিলিন ও ফুল গ্রেইন লেদার · গ্লোবাল ব্র্যান্ড কালেকশন",
    alt: "Premium aniline finished leather rolls in rich earthy tones",
  },
  {
    id: "slide-export-terminal",
    image: exportShippingImg,
    tag: "Seaworthy Staging",
    tagBn: "সি-ওয়ার্থি স্টেজিং",
    caption: "ISPM-15 Certified Wooden Pallet Packaging & Moisture-Barrier Container Stuffing",
    captionBn: "ISPM-15 সার্টিফাইড কাঠের প্যালেটে প্যাকিং ও কনটেইনার সুরক্ষিত স্টাফিং",
    alt: "Maritime cargo container terminal with export containers ready for dispatch",
  },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreLeather,
  onRequestQuote,
  onOpenCompanyProfile,
}) => {
  const { t, language } = useLanguage();
  const [activeVisualTab, setActiveVisualTab] = useState<"inspection" | "shipping">("inspection");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Preload all slider images on initial mount for instant, flicker-free crossfades
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Background slider autoplay with clean cleanup
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Stagger animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-12 sm:pt-9 sm:pb-16 lg:pt-12 lg:pb-18 border-b border-[#C89D43]/30 bg-[#0E0B09] text-white">
      {/* High-Performance Photographic Background Hero Slider with Maritime Export Imagery */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={HERO_SLIDES[currentSlide].id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].alt}
              className="w-full h-full object-cover object-center"
              loading={currentSlide === 0 ? "eager" : "lazy"}
              // @ts-ignore
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep Luxury Scrim Overlay: Rich deep obsidian so maritime container ships and ExportVisor gold branding pop with maximum brilliance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A08]/95 via-[#130E0A]/82 to-[#0D0A08]/40 md:from-[#0D0A08]/92 md:via-[#130E0A]/68 md:to-[#0D0A08]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A08]/65 via-transparent to-[#0D0A08]/95" />
      </div>

      {/* Ambient warm ExportVisor gold radial flares */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D6AC4B]/15 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C89D43]/12 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Value Proposition & Sleek High-Converting Action Area */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* LWG-Certified Tannery Network Kicker Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 text-[#E5BE58] text-xs font-semibold tracking-wide border border-[#C89D43]/60 shadow-gold-subtle backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <Award className="w-3.5 h-3.5 text-[#E5BE58]" />
                <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                  {language === "bn"
                    ? "LWG সার্টিফাইড ট্যানারি নেটওয়ার্ক · সাভার, ঢাকা"
                    : "LWG-Certified Tannery Network · Savar Leather Estate"}
                </span>
              </div>

              <span className="hidden sm:inline-flex text-xs font-semibold items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 text-blue-200 border border-blue-400/40 backdrop-blur-md">
                <Ship className="w-3.5 h-3.5 text-blue-300" />
                {language === "bn" ? "চট্টগ্রাম পোর্ট এক্সপোর্ট লজিস্টিকস" : "Chattogram (BDCGP) Port Dispatch"}
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-2.5xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] text-balance drop-shadow-sm"
            >
              {t.hero.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="font-body text-sm sm:text-base lg:text-lg text-stone-300 leading-relaxed max-w-2xl text-pretty"
            >
              {t.hero.subheadline}
            </motion.p>

            {/* Streamlined, Eye-Catchy Action Group (Clean, uncluttered, focused) */}
            <motion.div variants={itemVariants} className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                {/* Primary Action: Request Commercial Quote with ExportVisor Gold Gradient */}
                <motion.button
                  whileHover={{ scale: 1.025, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    trackEvent("request_quote_click", { location: "hero_primary" });
                    onRequestQuote();
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold tracking-wide text-[#15120E] rounded-lg shadow-lg shadow-[#C89D43]/30 hover:shadow-xl hover:shadow-[#D6AC4B]/45 transition-all cursor-pointer group"
                  style={{
                    background: "linear-gradient(135deg, #F5D275 0%, #D6AC4B 50%, #B8892E 100%)",
                  }}
                >
                  <span>{t.hero.requestQuote}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#15120E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>

                {/* Secondary Action: Explore Products */}
                <motion.button
                  whileHover={{ scale: 1.025, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    trackEvent("product_detail_view", { source: "hero_explore_primary" });
                    onExploreLeather();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-sm font-semibold tracking-wide text-white bg-black/75 hover:bg-[#1A140F] rounded-lg shadow-md border-2 border-[#C89D43]/60 hover:border-[#F3CF72] transition-all cursor-pointer group backdrop-blur-xs"
                >
                  <Layers className="w-4 h-4 text-[#E5BE58] transition-transform group-hover:rotate-6" />
                  <span>{t.hero.exploreCatalogue}</span>
                  <ChevronRight className="w-4 h-4 text-stone-300 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>

                {/* Refined WhatsApp Desk Pill */}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "hero_direct" })}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 text-xs font-semibold tracking-wide text-emerald-200 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/50 rounded-lg transition-all shadow-xs backdrop-blur-xs"
                  title="Direct WhatsApp Communication"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === "bn" ? "হোয়াটসঅ্যাপে চ্যাট" : "Chat on WhatsApp"}</span>
                </a>

                {/* Optional Company Profile */}
                {onOpenCompanyProfile && (
                  <button
                    onClick={() => {
                      trackEvent("company_profile_view", { location: "hero_quick" });
                      onOpenCompanyProfile();
                    }}
                    className="hidden xl:inline-flex items-center justify-center gap-1.5 px-3 py-3 text-xs font-semibold text-stone-300 hover:text-[#E5BE58] transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#E5BE58]" />
                    <span>{language === "bn" ? "কোম্পানি ডেক" : "Company Deck"}</span>
                  </button>
                )}
              </div>

              {/* Clean, Non-Cluttered Trust Verification Ribbon */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-stone-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5BE58]" />
                  <span>
                    {language === "bn"
                      ? "LWG অডিটেড ট্যানারি নেটওয়ার্ক"
                      : "LWG-Audited Partner Tanneries"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {language === "bn"
                      ? "১০০% প্রি-শিপমেন্ট AQL ২.৫ কোয়ালিটি"
                      : "100% Pre-Shipment AQL 2.5 QA"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>
                    {language === "bn"
                      ? "চট্টগ্রাম (BDCGP) গ্লোবাল পোর্ট শিপিং"
                      : "FOB Chattogram (BDCGP) · CIF Global"}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Showcase with Interactive Switcher & Glass Badges */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative">
            
            {/* Visual Header / View Toggle */}
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#E5BE58]" />
                Live Sourcing & Export Operations
              </span>

              {/* View Selector Tabs */}
              <div className="inline-flex p-0.5 bg-black/60 backdrop-blur-md rounded-lg text-xs border border-white/10">
                <button
                  onClick={() => setActiveVisualTab("inspection")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    activeVisualTab === "inspection"
                      ? "bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] text-stone-950 shadow-xs font-bold"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  Quality Inspection
                </button>
                <button
                  onClick={() => setActiveVisualTab("shipping")}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    activeVisualTab === "shipping"
                      ? "bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] text-stone-950 shadow-xs font-bold"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  Container Shipping
                </button>
              </div>
            </div>

            {/* Showcase Visual Card */}
            <div className="relative rounded-xl overflow-hidden border border-[#C89D43]/40 bg-stone-950 shadow-2xl aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] group">
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
                      src={containerCargoShipImg}
                      alt="Export container cargo ship sailing on international waters for maritime leather freight"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Shipping Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-[#E5BE58] font-bold mb-1">
                        <Ship className="w-4 h-4 text-blue-400" />
                        <span>Chittagong Port (BDCGP) Maritime Logistics</span>
                      </div>
                      <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                        Direct container stuffing, export customs clearance, Bill of Lading (BL), Certificate of Origin, and scheduled sailings to 25+ global ports.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Glassmorphism Badge 1 (Top Left) - LWG Audited Network */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3.5 left-3.5 bg-black/80 backdrop-blur-md text-white px-3.5 py-2 rounded-lg border border-[#C89D43]/50 shadow-lg flex items-center gap-2.5 max-w-[220px]"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E5BE58]/30 to-[#C89D43]/20 border border-[#E5BE58]/50 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#E5BE58]" />
                </div>
                <div className="text-[11px] leading-tight">
                  <span className="block font-bold text-white">LWG-Audited Network</span>
                  <span className="text-[#E5BE58] text-[10px] font-medium">Environmental Standards</span>
                </div>
              </motion.div>

              {/* Floating Glassmorphism Badge 2 (Top Right) - Ocean Container Dispatch */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-white px-3.5 py-2 rounded-lg border border-blue-400/40 shadow-lg flex items-center gap-2 max-w-[200px]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse shadow-xs" />
                <div className="text-[11px] leading-tight">
                  <span className="block font-bold text-white">25+ Export Ports</span>
                  <span className="text-blue-300 text-[10px] font-medium">Ocean Container Freight</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Trust Meta Strip Beneath Image */}
            <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 font-semibold text-stone-200">
                <Building2 className="w-3.5 h-3.5 text-[#E5BE58]" />
                <span>Savar Tannery Estate, Dhaka</span>
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-stone-200">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Incoterms: FOB · CIF · CFR</span>
              </span>
            </div>

          </motion.div>

        </motion.div>

        {/* Ambient Hero Background Slider Control Bar */}
        <div className="mt-8 pt-4 border-t border-[#C89D43]/25 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5BE58] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5BE58]" />
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-black/80 border border-[#C89D43]/50 text-[#E5BE58] font-bold shadow-2xs shrink-0">
              <Ship className="w-3 h-3 text-[#E5BE58]" />
              <span>{language === "bn" ? HERO_SLIDES[currentSlide].tagBn : HERO_SLIDES[currentSlide].tag}</span>
            </span>
            <span className="text-[11px] font-mono text-stone-300 font-semibold truncate max-w-xs sm:max-w-md">
              {language === "bn" ? HERO_SLIDES[currentSlide].captionBn : HERO_SLIDES[currentSlide].caption}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C89D43]/40 shadow-lg text-stone-200">
            <span className="text-[11px] font-mono font-bold text-[#E5BE58] pr-1">
              0{currentSlide + 1} <span className="text-stone-500 font-normal">/ 0{HERO_SLIDES.length}</span>
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
              }
              aria-label="Previous background slide"
              className="p-1 rounded hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Sleek Linear Segments (No round dots) */}
            <div className="flex items-center gap-1.5 px-1">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                  title={slide.tag}
                  className={`h-1 rounded-xs transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-7 bg-gradient-to-r from-[#F5D275] to-[#D6AC4B] shadow-[0_0_8px_rgba(230,190,88,0.6)]"
                      : "w-3 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              aria-label="Next background slide"
              className="p-1 rounded hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause background slider" : "Play background slider"}
              className="p-1 rounded hover:bg-white/10 text-stone-300 hover:text-white transition-colors ml-0.5 cursor-pointer"
            >
              {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
