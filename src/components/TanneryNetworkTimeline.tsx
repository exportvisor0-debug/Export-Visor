import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { trackEvent } from "../utils/analytics";
import { SectionShareButton } from "./SectionShareButton";
import {
  heroLeatherImg,
  containerCargoShipImg,
  portGantryLoadingImg,
  crustLeatherImg,
  finishedAnilineImg,
  wetBlueImg,
} from "../data/products";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Ship,
  Factory,
  Leaf,
  Globe2,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface TimelineSegment {
  id: string;
  phase: string;
  phaseBn: string;
  badge: string;
  badgeBn: string;
  kicker: string;
  kickerBn: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  metrics: { label: string; labelBn: string; value: string }[];
  standards: string[];
  standardsBn: string[];
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

const TIMELINE_SEGMENTS: TimelineSegment[] = [
  {
    id: "seg-phase-1",
    phase: "Phase 01",
    phaseBn: "পর্যায় ০১",
    badge: "Eco Compliance",
    badgeBn: "পরিবেশবান্ধব রূপান্তর",
    kicker: "Wastewater & Effluent Governance",
    kickerBn: "বর্জ্য ও পানি শোধন ব্যবস্থা",
    title: "Savar Central Effluent Treatment (CETP) Integration",
    titleBn: "সাভার সেন্ট্রাল এফ্লুয়েন্ট ট্রিটমেন্ট প্ল্যান্ট (CETP) সংযুক্তি",
    description:
      "We mandated that all partnered tanneries complete direct pipeline connectivity to the Savar Central Effluent Treatment Plant (CETP). Implemented strict biological effluent benchmarks, localized chromium recovery loops, and chemical salt reduction protocols.",
    descriptionBn:
      "আমাদের পার্টনার সমস্ত ট্যানারিতে সাভার কেন্দ্রীয় বর্জ্য পরিশোধনাগারের (CETP) সরাসরি পাইপলাইন সংযোগ নিশ্চিত করা হয়। ক্রোমিয়াম রিসাইক্লিং ও রাসায়নিক লবণ হ্রাস করার কঠোর পরিবেশবান্ধব প্রোটোকল কার্যকর করা হয়।",
    metrics: [
      { label: "CETP Connectivity", labelBn: "CETP সংযোগ", value: "100% Audited" },
      { label: "Chromium Recovery", labelBn: "ক্রোমিয়াম রিসাইক্লিং", value: "Closed Loop" },
      { label: "Water Savings", labelBn: "পানির সাশ্রয়", value: "35% Reduced" },
    ],
    standards: ["CETP Effluent Standards", "Chrome Recovery & Re-Use", "Chemical Storage Audits"],
    standardsBn: ["CETP বর্জ্য নিঃসরণ মানদণ্ড", "ক্রোমিয়াম পুনরুদ্ধার ও পুনর্ব্যবহার", "রাসায়নিক স্টোরেজ অডিট"],
    image: crustLeatherImg,
    imageAlt: "Drum-dyed crust leather conditioning in modern eco-compliant drums",
    icon: Leaf,
  },
  {
    id: "seg-phase-2",
    phase: "Phase 02",
    phaseBn: "পর্যায় ০২",
    badge: "EU Standards",
    badgeBn: "আন্তর্জাতিক কমপ্লায়েন্স",
    kicker: "Chemical Safety & Zero-Hazard Guarantee",
    kickerBn: "রাসায়নিক নিরাপত্তা ও ক্ষতিকর উপাদানমুক্ত",
    title: "EU REACH Annex XVII & Zero-Cr(VI) Formulation",
    titleBn: "ইউরোপীয় ইউনিয়ন REACH ও ক্ষতিকর ক্রোমিয়ামমুক্ত ফর্মুলেশন",
    description:
      "Formulated our leather recipes to satisfy rigorous European Union REACH regulations. Restricted substances of very high concern (SVHC), achieved non-detectable Hexavalent Chromium Cr(VI) (<3 ppm), and transitioned exclusively to Azo-free certified dyes for global footwear brands.",
    descriptionBn:
      "ইউরোপীয় ইউনিয়নের REACH বিধিমালার সাথে মিল রেখে চামড়ার রাসায়নিক ফর্মুলেশন উন্নত করা হয়। ক্ষতিকর হেক্সাভ্যালেন্ট ক্রোমিয়াম Cr(VI) ৩ পিপিএম-এর নিচে নামিয়ে আনা হয় এবং সম্পূর্ণ অ্যাজো-ফ্রি ডাই নিশ্চিত করা হয়।",
    metrics: [
      { label: "Cr(VI) Threshold", labelBn: "Cr(VI) মাত্রা", value: "< 3 ppm (ND)" },
      { label: "Azo-Dye Benchmark", labelBn: "অ্যাজো ডাই মানদণ্ড", value: "100% Free" },
      { label: "SVHC Compliance", labelBn: "SVHC কমপ্লায়েন্স", value: "EU Level 1" },
    ],
    standards: ["EU REACH Annex XVII", "OEKO-TEX Chemical Safe", "Zero Harmful Amines"],
    standardsBn: ["EU REACH অ্যানেক্স XVII", "OEKO-TEX নিরাপদ কেমিক্যাল", "ক্ষতিকর অ্যামিন মুক্ত"],
    image: finishedAnilineImg,
    imageAlt: "Finished aniline leather rolls tested for European chemical safety",
    icon: ShieldCheck,
  },
  {
    id: "seg-phase-3",
    phase: "Phase 03",
    phaseBn: "পর্যায় ০৩",
    badge: "LWG Accreditation",
    badgeBn: "LWG স্বীকৃতি",
    kicker: "Global Sustainability Benchmark",
    kickerBn: "বিশ্বমানের টেকসই মানদণ্ড",
    title: "LWG-Audited (Leather Working Group) Network Formation",
    titleBn: "LWG সার্টিফাইড ট্যানারি নেটওয়ার্ক গঠন",
    description:
      "Formed our verified network of Leather Working Group (LWG) audited partner mills in Bangladesh. Meeting rigorous international audit protocols for energy consumption, wastewater BOD/COD parameters, traceable hide origins from government-approved abattoirs, and worker safety.",
    descriptionBn:
      "লেদার ওয়ার্কিং গ্রুপ (LWG) অডিটেড এবং আন্তর্জাতিক মানসম্পন্ন ট্যানারির সমন্বয়ে শক্তিশালী পার্টনার নেটওয়ার্ক গড়ে তোলা হয়। শক্তি সাশ্রয়, পানির স্বচ্ছতা এবং অনুমোদিত খামার থেকে চামড়া ট্র্যাকিংয়ের বৈশ্বিক মান অর্জন করা হয়।",
    metrics: [
      { label: "Audit Standard", labelBn: "অডিট স্ট্যান্ডার্ড", value: "LWG Gold/Silver" },
      { label: "Origin Traceability", labelBn: "উৎস ট্র্যাকিং", value: "100% Verified" },
      { label: "Global Brand Approval", labelBn: "ব্র্যান্ড গ্রহণযোগ্যতা", value: "Tier-1 Ready" },
    ],
    standards: ["LWG Environmental Auditing", "Abattoir Hide Traceability", "Water & Energy Tracking"],
    standardsBn: ["LWG পরিবেশগত অডিটিং", "খামার ভিত্তিক কাঁচামাল ট্র্যাকিং", "পানি ও জ্বালানি নিরীক্ষণ"],
    image: heroLeatherImg,
    imageAlt: "LWG protocol leather inspection and grain calibration in Savar tannery",
    icon: Award,
  },
  {
    id: "seg-phase-4",
    phase: "Phase 04",
    phaseBn: "পর্যায় ০৪",
    badge: "Quality Engineering",
    badgeBn: "কোয়ালিটি ইঞ্জিনিয়ারিং",
    kicker: "Zero-Defect On-Site Quality Desk",
    kickerBn: "ফ্যাক্টরি ফ্লোরে অন-সাইট কোয়ালিটি ডেস্ক",
    title: "100% Pre-Shipment AQL 2.5 Technical Inspection Desk",
    titleBn: "১০০% প্রি-শিপমেন্ট AQL ২.৫ টেকনিক্যাল পরিদর্শন ডেস্ক",
    description:
      "Established ExportVisor's dedicated technical quality inspection team stationed permanently at the factory floor. Equipped with digital substance calipers, Crockmeter rub testers, and electronic area verification, inspecting every single hide before crate palletizing.",
    descriptionBn:
      "সাভারের ফ্যাক্টরি ফ্লোরে এক্সপোর্টভাইজরের নিজস্ব টেকনিক্যাল ইন্সপেকশন টিম মোতায়েন করা হয়। ডিজিটাল ক্যালিপার, ক্রকমিটার এবং এরিয়া মেজারমেন্ট মেশিনের সাহায্যে প্যাকিংয়ের পূর্বে প্রতিটি চামড়া টুকরো টুকরো ধরে নিরীক্ষা নিশ্চিত করা হয়।",
    metrics: [
      { label: "Inspection Defect Cap", labelBn: "সর্বোচ্চ ত্রুটি সীমা", value: "AQL 2.5 Standard" },
      { label: "Thickness Tolerance", labelBn: "পুরুত্ব টলারেন্স", value: "±0.1 mm Precise" },
      { label: "Photo Inspection", labelBn: "ফটো ডকুমেন্টেশন", value: "100% Batch Log" },
    ],
    standards: ["Piece-by-Piece Caliper Measurement", "Delta E Color Match", "Pre-Pallet Quality Sign-off"],
    standardsBn: ["পিস বাই পিস ক্যালিপার পরিমাপ", "ডেল্টা E কালার ম্যাচিং", "প্রি-প্যালেট কোয়ালিটি অনুমোদন"],
    image: portGantryLoadingImg,
    imageAlt: "Technical export preparation and seaport container terminal staging",
    icon: Layers,
  },
  {
    id: "seg-phase-5",
    phase: "Global Reach",
    phaseBn: "বৈশ্বিক বিস্তার",
    badge: "Global Expansion",
    badgeBn: "আন্তর্জাতিক সম্প্রসারণ",
    kicker: "Worldwide Maritime Trade Corridor",
    kickerBn: "বিশ্বব্যাপী সমুদ্রপথ বাণিজ্য",
    title: "Direct Maritime Container Dispatch to 25+ Global Ports",
    titleBn: "২৫+ আন্তর্জাতিক সমুদ্রবন্দরে সরাসরি কনটেইনার জাহাজীকরণ",
    description:
      "Today, ExportVisor coordinates end-to-end export shipping directly from Chattogram Port (BDCGP) with tier-1 shipping lines (Maersk, MSC, CMA CGM). Serving footwear makers, furniture crafters, and luxury leather goods brands across Europe, Asia, and North America with seamless LC and TT banking.",
    descriptionBn:
      "বর্তমানে চট্টগ্রাম সমুদ্র বন্দর থেকে সরাসরি বৈশ্বিক শিপিং লাইনের মাধ্যমে ইউরোপ, আমেরিকা ও এশিয়ার ২৫টিরও বেশি আন্তর্জাতিক বন্দরে কনটেইনার পৌঁছে দিচ্ছে এক্সপোর্টভাইজর। সম্পূর্ণ ডকুমেন্টেশন, কাস্টমস ও এলসি ব্যাংকিং সহায়তা সহ মসৃণ ডেলিভারি।",
    metrics: [
      { label: "Export Seaports", labelBn: "রপ্তানি বন্দর", value: "25+ Global Ports" },
      { label: "Container Types", labelBn: "কনটেইনার মোড", value: "20ft & 40ft FCL/LCL" },
      { label: "Documentation", labelBn: "আন্তর্জাতিক ডকুমেন্ট", value: "BL, COO, Phytosanitary" },
    ],
    standards: ["FOB Chattogram / CIF Worldwide", "ISPM-15 Heat-Treated Pallets", "Direct Vessel Bill of Lading"],
    standardsBn: ["FOB চট্টগ্রাম / CIF বিশ্বব্যাপী", "ISPM-15 হিট-ট্রিটেড প্যালেট", "সরাসরি শিপিং বিল অব লেডিং"],
    image: containerCargoShipImg,
    imageAlt: "Commercial ocean container cargo ship loaded with export freight sailing on deep sea",
    icon: Ship,
  },
];

interface TanneryNetworkTimelineProps {
  onRequestQuote?: () => void;
}

export const TanneryNetworkTimeline: React.FC<TanneryNetworkTimelineProps> = ({
  onRequestQuote,
}) => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(2); // Default to Phase 03 LWG milestone for maximum impact
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeSegment = TIMELINE_SEGMENTS[activeIndex];
  const progressPercent = (activeIndex / (TIMELINE_SEGMENTS.length - 1)) * 100;

  // Autoplay progression if enabled
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TIMELINE_SEGMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleSelectSegment = (index: number) => {
    setActiveIndex(index);
    trackEvent("timeline_segment_select", {
      segment_phase: TIMELINE_SEGMENTS[index].phase,
      segment_title: TIMELINE_SEGMENTS[index].title,
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TIMELINE_SEGMENTS.length) % TIMELINE_SEGMENTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TIMELINE_SEGMENTS.length);
  };

  return (
    <section
      id="tannery-timeline"
      className="py-16 sm:py-24 bg-white dark:bg-[#0B0806] border-b border-stone-200/90 dark:border-stone-800/80 relative overflow-hidden transition-colors duration-200"
    >
      {/* Subtle architectural ambient background glow without dot grid */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D6AC4B]/10 dark:bg-[#D6AC4B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C89D43]/10 dark:bg-[#C89D43]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Section Header with Fade-In-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#C89D43]" />
                <span>
                  {language === "bn" ? "ট্যানারি নেটওয়ার্ক ইতিহাস ও ক্রমবিকাশ" : "Tannery Network Evolution"}
                </span>
              </div>
              <SectionShareButton
                path="/#tannery-timeline"
                sectionName={language === "bn" ? "ট্যানারি টাইমলাইন" : "Tannery Network Timeline"}
              />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#F8F5F0] leading-tight text-balance">
              {language === "bn" ? (
                <>
                  স্থানীয় কারখানা থেকে{" "}
                  <span className="text-gold-gradient">বৈশ্বিক এক্সপোর্ট নেটওয়ার্কে</span> রূপান্তর
                </>
              ) : (
                <>
                  From Local Savar Drums to a{" "}
                  <span className="text-gold-gradient">Global Export Network</span>
                </>
              )}
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed text-pretty">
              {language === "bn"
                ? "আমাদের ধারাবাহিক বিবর্তন দেখুন—সাভারের আধুনিক ড্রাম অংশীদারিত্ব থেকে শুরু করে পরিবেশবান্ধব LWG সার্টিফিকেশন ও বিশ্বমানের কন্টেইনার এক্সপোর্টের সমৃদ্ধ নেটওয়ার্ক।"
                : "Explore our verified growth journey: from modern drum partnerships in Savar to LWG environmental accreditation, automated AQL 2.5 testing, and container vessels serving 25+ global ports."}
            </p>
          </div>

          {/* Timeline Navigation Controls */}
          <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous era"
              className="p-2.5 rounded-lg bg-white dark:bg-[#1A1410] hover:bg-stone-50 dark:hover:bg-[#251D17] border border-stone-200/90 dark:border-[#C89D43]/30 text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <span className="font-mono-data text-xs font-bold text-stone-600 dark:text-stone-300 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1A1410] border border-stone-200/80 dark:border-[#C89D43]/30 shadow-2xs">
              0{activeIndex + 1} / 0{TIMELINE_SEGMENTS.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next era"
              className="p-2.5 rounded-lg bg-white dark:bg-[#1A1410] hover:bg-stone-50 dark:hover:bg-[#251D17] border border-stone-200/90 dark:border-[#C89D43]/30 text-stone-700 dark:text-stone-200 hover:text-stone-900 dark:hover:text-white shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* INTERACTIVE HORIZONTAL GOLD-ACCENTED PROGRESS PATH */}
        {/* ============================================================== */}
        <div className="relative mb-10 pb-4">
          
          {/* Background Track Line */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-stone-300/80 dark:bg-stone-800 rounded-full z-0 hidden sm:block" />

          {/* Animated Gold Fill Path */}
          <motion.div
            className="absolute top-5 left-0 h-1 rounded-full z-0 hidden sm:block"
            style={{
              background: "linear-gradient(90deg, #B8892E 0%, #D6AC4B 50%, #F3CF72 100%)",
              boxShadow: "0 0 12px rgba(200, 157, 67, 0.45)",
            }}
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Stepper Nodes Along Path */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2 relative z-10">
            {TIMELINE_SEGMENTS.map((seg, idx) => {
              const isPassed = idx <= activeIndex;
              const isActive = idx === activeIndex;
              const IconComp = seg.icon;

              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => handleSelectSegment(idx)}
                  className={`group flex flex-col items-center sm:items-start text-left p-3 sm:p-2 rounded-xl transition-all cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-white/95 dark:bg-[#181310] sm:bg-transparent shadow-xs sm:shadow-none border border-[#C89D43]/40 sm:border-transparent"
                      : "hover:bg-white/60 dark:hover:bg-white/5 sm:hover:bg-transparent"
                  }`}
                >
                  {/* Interactive Node Point */}
                  <div className="flex items-center sm:justify-start justify-center w-full mb-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                        isActive
                          ? "bg-gradient-to-br from-[#F5D275] to-[#D6AC4B] dark:from-[#181310] dark:to-[#261E17] text-stone-950 dark:text-[#E5BE58] border-2 border-[#B8892E] dark:border-[#D6AC4B] shadow-gold-subtle scale-110"
                          : isPassed
                          ? "bg-[#D6AC4B] text-stone-950 border-2 border-[#B8892E] shadow-2xs"
                          : "bg-white dark:bg-[#1A1410] text-stone-400 dark:text-stone-500 border-2 border-stone-300 dark:border-stone-700 group-hover:border-[#C89D43]/60 group-hover:text-stone-700 dark:group-hover:text-stone-300"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />

                      {/* Active Node Pulse Ring */}
                      {isActive && (
                        <span className="absolute -inset-1 rounded-full border-2 border-[#D6AC4B]/50 animate-ping pointer-events-none" />
                      )}
                    </div>
                  </div>

                  {/* Phase Tag & Label (No Years / Shal) */}
                  <div className="w-full text-center sm:text-left">
                    <span
                      className={`inline-block font-mono-data text-xs font-bold transition-colors ${
                        isActive
                          ? "text-[#7A5A17] dark:text-[#E5BE58] font-black"
                          : isPassed
                          ? "text-stone-800 dark:text-stone-300"
                          : "text-stone-500 dark:text-stone-400"
                      }`}
                    >
                      {language === "bn" ? seg.phaseBn : seg.phase}
                    </span>
                    <h3
                      className={`text-xs font-bold transition-colors truncate block ${
                        isActive
                          ? "text-[#15120E] dark:text-[#F8F5F0]"
                          : "text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white"
                      }`}
                      title={language === "bn" ? seg.titleBn : seg.title}
                    >
                      {language === "bn" ? seg.badgeBn : seg.badge}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* ACTIVE TIMELINE SEGMENT SHOWCASE CARD */}
        {/* ============================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-white dark:bg-[#120E0B] rounded-2xl border border-stone-200/90 dark:border-[#C89D43]/35 shadow-xl overflow-hidden transition-colors duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Deep Narrative & Growth Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Top Kicker & Badge Row (No Years / Shal) */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono-data text-xs font-bold text-[#7A5A17] dark:text-[#E5BE58] px-3 py-1 rounded-md bg-amber-50 dark:bg-[#1F1813] border border-amber-300 dark:border-[#C89D43]/40 shadow-2xs">
                      {language === "bn" ? activeSegment.phaseBn : activeSegment.phase}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#C89D43]" />
                      <span>{language === "bn" ? activeSegment.badgeBn : activeSegment.badge}</span>
                    </span>

                    <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider hidden sm:inline">
                      {language === "bn" ? activeSegment.kickerBn : activeSegment.kicker}
                    </span>
                  </div>

                  {/* Main Milestone Title */}
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#15120E] dark:text-[#F8F5F0] leading-tight text-balance">
                    {language === "bn" ? activeSegment.titleBn : activeSegment.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed text-pretty">
                    {language === "bn" ? activeSegment.descriptionBn : activeSegment.description}
                  </p>

                  {/* Key Operational Standards Tags */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                      {language === "bn" ? "প্রতিষ্ঠিত মানদণ্ডসমূহ:" : "Accredited Operating Protocols:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(language === "bn" ? activeSegment.standardsBn : activeSegment.standards).map(
                        (std, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F5] dark:bg-[#1A1410] border border-stone-200/90 dark:border-stone-800 text-xs font-medium text-stone-700 dark:text-stone-300 shadow-2xs"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C89D43]" />
                            <span>{std}</span>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Quantitative Metric Strip for the Era */}
                <div className="pt-6 border-t border-stone-100 dark:border-stone-800/80">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {activeSegment.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-stone-50/80 dark:bg-[#18130F] rounded-xl border border-stone-200/70 dark:border-stone-800/80"
                      >
                        <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold truncate">
                          {language === "bn" ? m.labelBn : m.label}
                        </span>
                        <span className="font-mono-data text-sm sm:text-base font-bold text-[#15120E] dark:text-[#E5BE58] block mt-0.5 truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA link to quote / inquiry */}
                  {onRequestQuote && (
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        {language === "bn"
                          ? "আমাদের বর্তমান ট্যানারি নেটওয়ার্ক থেকে কোটেশন পেতে চান?"
                          : "Interested in sourcing through our audited partner network?"}
                      </span>
                      <button
                        type="button"
                        onClick={onRequestQuote}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#C89D43] hover:text-[#7A5A17] dark:hover:text-[#E5BE58] transition-colors cursor-pointer group"
                      >
                        <span>{language === "bn" ? "সোর্সিং কোটেশন পাঠান" : "Request Sourcing Quote"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Visual Milestone Showcase with Photo and Ambient Badges */}
              <div className="lg:col-span-5 relative bg-stone-100 dark:bg-stone-900 overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-full">
                <img
                  src={activeSegment.image}
                  alt={activeSegment.imageAlt}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-104"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Floating Milestone Era Badge (Top Left - No Years) */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#C89D43]/40 text-white flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono-data text-xs font-bold text-[#E5BE58]">
                    {language === "bn" ? activeSegment.phaseBn : activeSegment.phase}
                  </span>
                  <span className="text-stone-300 text-xs font-medium">
                    · {language === "bn" ? "যাচাইকৃত মাইলফলক" : "Verified Milestone"}
                  </span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-[#E5BE58] font-bold mb-1">
                    <activeSegment.icon className="w-4 h-4 text-[#E5BE58]" />
                    <span>{language === "bn" ? activeSegment.badgeBn : activeSegment.badge}</span>
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
                    {language === "bn" ? activeSegment.kickerBn : activeSegment.kicker} —{" "}
                    {activeSegment.imageAlt}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
