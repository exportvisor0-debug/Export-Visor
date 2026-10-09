import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ShieldCheck,
  Award,
  Factory,
  Layers,
  Thermometer,
  Gauge,
  CheckCircle2,
  ArrowUpRight,
  RotateCcw,
  Sparkles,
  Eye,
  Calendar,
  Building2,
  Sliders,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { trackEvent } from "../utils/analytics";
import { SectionShareButton } from "./SectionShareButton";
import anilineFinishingImg from "../assets/images/aniline_finishing_line_1791541469414.jpg";
import splittingCaliperImg from "../assets/images/splitting_caliper_qa_1791541420075.jpg";
import tanneryWoodenDrumsImg from "../assets/images/tannery_wooden_drums_1791541403112.jpg";
import vacuumPlateDryingImg from "../assets/images/vacuum_plate_drying_1791541443435.jpg";
import wetBlueImg from "../assets/images/leather_wet_blue_stage_1790421617932.jpg";
import exportPackingCratesImg from "../assets/images/export_packing_crates_1791541500181.jpg";

export interface ProductionStage {
  id: string;
  stepNumber: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  locationEn: string;
  locationBn: string;
  descriptionEn: string;
  descriptionBn: string;
  videoUrl: string;
  fallbackPoster: string;
  telemetry: {
    temperature: string;
    drumSpeed: string;
    substanceTolerance: string;
    complianceStandard: string;
    cycleDuration: string;
  };
  keyAssuranceEn: string;
  keyAssuranceBn: string;
}

const TANNERY_STAGES: ProductionStage[] = [
  {
    id: "stage-finishing-qa",
    stepNumber: "01",
    titleEn: "Modern Aniline Finishing & AQL 2.5 QA",
    titleBn: "মডার্ন অ্যানিলিন ফিনিশিং ও AQL ২.৫ ইন্সপেকশন",
    subtitleEn: "Automated Spray Coating, Lustrous Finishing & Hide-by-Hide Grading",
    subtitleBn: "অটোমেটেড স্প্রে ফিনিশিং ও নিখুঁত কোয়ালিটি গ্রেডিং",
    locationEn: "Savar Export Finishing Suite · Line 1",
    locationBn: "সাভার এক্সপোর্ট ফিনিশিং স্যুট · লাইন ১",
    descriptionEn:
      "Automated rotary and reciprocating spray line applying protective water-based aniline and pull-up finishes. QA inspectors verify substance with digital calipers and grade hide-by-hide according to international AQL 2.5 standards.",
    descriptionBn:
      "সাভারের আধুনিক অটোমেটেড রোটারি ও রোলার লাইনে প্রিমিয়াম ফিনিশ (ম্যাট, পুল-আপ, বার্নিশ) প্রয়োগ করা হয়। প্রতিটি হাইড ডিজিটাল ক্যালিপারে মেপে আন্তর্জাতিক AQL ২.৫ মানদণ্ডে নিখুঁতভাবে গ্রেডিং করা হয়।",
    videoUrl: "/videos/stage-01.mp4",
    fallbackPoster: anilineFinishingImg,
    telemetry: {
      temperature: "Ambient Testing (24°C)",
      drumSpeed: "Automated Precision Feed",
      substanceTolerance: "Grade Selection (TR / A / B / C)",
      complianceStandard: "AQL 2.5 Major / 4.0 Minor",
      cycleDuration: "Continuous QA Line",
    },
    keyAssuranceEn: "100% inspected with digital thickness calibration & zero grain defect guarantee",
    keyAssuranceBn: "ডিজিটাল পুরুত্ব ক্যালিব্রেশন এবং জিরো গ্রেইন ডিফেক্ট গ্যারান্টি সহ ১০০% পরীক্ষিত",
  },
  {
    id: "stage-splitting",
    stepNumber: "02",
    titleEn: "Precision Splitting, Edge Trimming & Caliper Calibration",
    titleBn: "হাইড্রলিক প্রিসিশন স্প্লিটিং ও শেভিং",
    subtitleEn: "Substance Calibration & Electronic Uniformity",
    subtitleBn: "সাবস্ট্যান্স ক্যালিব্রেশন ও সুনির্দিষ্ট পুরুত্ব",
    locationEn: "Savar Mechanical Line · Splitting Hall A",
    locationBn: "সাভার মেকানিক্যাল লাইন · স্প্লিটিং হল এ",
    descriptionEn:
      "High-speed precision band knives split leather hides into premium top grain and drop splits. Electronic micro-sensors guarantee exact target substance (0.9mm to 2.2mm) with ±0.05mm tolerance.",
    descriptionBn:
      "উচ্চগতির ইলেকট্রনিক ব্যান্ড নাইফ দিয়ে চামড়া কেটে প্রিমিয়াম টপ গ্রেইন ও ড্রপ স্প্লিট আলাদা করা হয়। প্রতিটি হাইডে ±০.০৫ মিমি সূক্ষ্মতার মধ্যে নির্ধারিত পুরুত্ব বজায় রাখা হয়।",
    videoUrl: "/videos/stage-02.mp4",
    fallbackPoster: splittingCaliperImg,
    telemetry: {
      temperature: "Ambient (26°C)",
      drumSpeed: "Band Knife 28 m/s",
      substanceTolerance: "±0.05 mm Precision",
      complianceStandard: "SATRA TM1 / DIN 53326",
      cycleDuration: "Continuous Feed Line",
    },
    keyAssuranceEn: "Digital dial micrometer verified across 6 points per hide",
    keyAssuranceBn: "প্রতিটি চামড়ার ৬টি ভিন্ন পয়েন্টে ডিজিটাল মাইক্রোমিটার ভেরিফাইড",
  },
  {
    id: "stage-retan-dyeing",
    stepNumber: "03",
    titleEn: "Heavy Teak Drum Retannage & Automated Color Milling",
    titleBn: "রি-ট্যানিং ও কালার ডাইং ড্রাম",
    subtitleEn: "Aniline Penetration & Supple Hand-Feel Temper",
    subtitleBn: "অ্যানিলিন পেনিট্রেশন ও সফট টেম্পার ফর্মুলেশন",
    locationEn: "Savar Color Laboratory & Automated Mill",
    locationBn: "সাভার কালার ল্যাবরেটরি ও অটোমেটেড মিল",
    descriptionEn:
      "Hides are loaded into massive motorized African Teak drums. Custom fatliquors and certified European dyestuffs penetrate deep into the hide fiber core, delivering high tensile elongation and uniform shade matching.",
    descriptionBn:
      "বৃহৎ আফ্রিকান টিক কাঠের ড্রামে বিশেষ ফ্যাটলিকর ও ইউরোপিয়ান সার্টিফাইড ডাই দিয়ে রঙ প্রবেশ করানো হয়। ফলে চামড়া পায় কাঙ্ক্ষিত নমনীয়তা, উচ্চ টান-সহনশীলতা এবং অভিন্ন শেড।",
    videoUrl: "/videos/stage-03.mp4",
    fallbackPoster: tanneryWoodenDrumsImg,
    telemetry: {
      temperature: "50°C - 55°C",
      drumSpeed: "12 - 14 RPM",
      substanceTolerance: "Core Penetration Depth 100%",
      complianceStandard: "CIE Lab Delta E < 0.6",
      cycleDuration: "6 - 8 Hours",
    },
    keyAssuranceEn: "Shade matched under D65 daylight & TL84 retail lighting",
    keyAssuranceBn: "D65 ডে-লাইট ও TL84 রিটেইল লাইটিংয়ের অধীনে শেড ম্যাচিং",
  },
  {
    id: "stage-vacuum-staking",
    stepNumber: "04",
    titleEn: "Vacuum Plate Drying & Vibratory Staking",
    titleBn: "ভ্যাকুয়াম ড্রায়ার ও ভাইব্রেটরি স্টেকিং",
    subtitleEn: "Moisture Extraction & Fiber Relaxation",
    subtitleBn: "আর্দ্রতা নিষ্কাশন ও ফাইবার রিলাক্সেশন",
    locationEn: "Conditioning Plant · Modern Vacuum Floor",
    locationBn: "কন্ডিশনিং প্ল্যান্ট · মডার্ন ভ্যাকুয়াম ফ্লোর",
    descriptionEn:
      "Polished stainless steel vacuum plates extract water under vacuum at 68°C to prevent grain wrinkling. Computerized vibratory staking pins then flex and relax fibers to eliminate stiffness and achieve supple temper.",
    descriptionBn:
      "হিটেড স্টেইনলেস স্টিল প্লেটে ৬৮°C তাপমাত্রায় ভ্যাকুয়ামের সাহায্যে আর্দ্রতা নিষ্কাশন করা হয়। এরপর ভাইব্রেটরি স্টেকিং মেশিনের পিন দিয়ে চামড়াকে নিখুঁত সফটনেস দেওয়া হয়।",
    videoUrl: "/videos/stage-04.mp4",
    fallbackPoster: vacuumPlateDryingImg,
    telemetry: {
      temperature: "65°C - 68°C Plates",
      drumSpeed: "0.85 Bar Vacuum",
      substanceTolerance: "Target Moisture: 14% - 16%",
      complianceStandard: "ISO 4044 Conditioning",
      cycleDuration: "2 - 3 Min / Hide Plate",
    },
    keyAssuranceEn: "Flat, smooth lay without curl or grain distortion",
    keyAssuranceBn: "একদম সমতল ও মসৃণ লেয়ার, কোনো প্রকার কুঁচকে যাওয়া ছাড়া",
  },
  {
    id: "stage-wet-blue",
    stepNumber: "05",
    titleEn: "Boil-Tested Wet Blue Export Drum Milling",
    titleBn: "ওয়েট ব্লু ক্রোম ট্যানিং ড্রাম",
    subtitleEn: "Chromium III Tanning & Thermal Stabilization",
    subtitleBn: "বেসিক ক্রোমিয়াম সালফেট ও থার্মাল স্ট্যাবিলাইজেশন",
    locationEn: "Savar Heavy Milling Cluster · Drum Unit 4",
    locationBn: "সাভার হেভি মিলিং ক্লাস্টার · ড্রাম ইউনিট ৪",
    descriptionEn:
      "Precision dosing of Basic Chromium Sulfate stabilizes hide collagen in massive wooden drums, passing standard 100°C boil tests for international export wet blue shipments.",
    descriptionBn:
      "বৃহৎ কাঠের ড্রামে বেসিক ক্রোমিয়াম সালফেটের নিখুঁত রাসায়নিক রূপান্তরের মাধ্যমে চামড়ার কোলাজেন স্থায়ীভাবে লক করা হয়। এটি ১০০°C বয়েলিং টেস্টে সম্পূর্ণরূপে উত্তীর্ণ হয়ে ওয়েট ব্লু তৈরি করে।",
    videoUrl: "/videos/stage-05.mp4",
    fallbackPoster: wetBlueImg,
    telemetry: {
      temperature: "38°C - 42°C",
      drumSpeed: "8.0 - 10.0 RPM",
      substanceTolerance: "Full Cross-Section Penetration",
      complianceStandard: "ISO 17075 (Cr VI Free)",
      cycleDuration: "14 - 16 Hours",
    },
    keyAssuranceEn: "Boil test passed: zero shrinkage at 100°C boiling water",
    keyAssuranceBn: "বয়েল টেস্ট উত্তীর্ণ: ১০০°C ফুটন্ত পানিতে শূন্য সংকোচন",
  },
  {
    id: "stage-packaging",
    stepNumber: "06",
    titleEn: "Export Sorting, Barrier Wrap & Crate Packing",
    titleBn: "এক্সপোর্ট প্যাকিং ও ব্যারিয়ার র্যাপিং",
    subtitleEn: "Moisture-Barrier Seal & ISPM-15 Heat-Treated Crating",
    subtitleBn: "আর্দ্রতা-রোধী ব্যারিয়ার ও কাঠামোগত এক্সপোর্ট প্যাকিং",
    locationEn: "Export Grading Hall · Savar Central Desk",
    locationBn: "এক্সপোর্ট গ্রেডিং হল · সাভার সেন্ট্রাল ডেস্ক",
    descriptionEn:
      "Every hide undergoes optical area measurement, is labeled with batch certificates, wrapped in heavy moisture-barrier poly with active silica desiccant packs, and packed into heat-treated export crates.",
    descriptionBn:
      "প্রতিটি চামড়া অপটিক্যাল সেন্সরে স্ক্যান করে পরিমাপ করা হয় এবং আর্দ্রতা-রোধী সিলিকা জেল ও পলিব্যাগ সহ ISPM-১৫ হিট-ট্রিটেড এক্সপোর্ট কাঠের ক্রেটে প্যাক করা হয়।",
    videoUrl: "/videos/stage-06.mp4",
    fallbackPoster: exportPackingCratesImg,
    telemetry: {
      temperature: "Ambient Inspection (24°C)",
      drumSpeed: "Digital Table Conveyor",
      substanceTolerance: "Grade Selection (TR / A / B / C)",
      complianceStandard: "ISPM-15 Export Packaging",
      cycleDuration: "Hide-by-Hide Certification",
    },
    keyAssuranceEn: "Export crate packed with moisture barrier & silica packs for 45-day sea freight",
    keyAssuranceBn: "৪৫ দিনের সমুদ্র পরিবহনের উপযোগী আর্দ্রতা-রোধী সিলিকা ও পলিব্যাগ সহ এক্সপোর্ট প্যাকিং",
  },
];

interface VirtualTanneryTourProps {
  onRequestQuote?: (context?: string) => void;
  onScheduleTour?: (topic?: string) => void;
}

export const VirtualTanneryTour: React.FC<VirtualTanneryTourProps> = ({
  onRequestQuote,
  onScheduleTour,
}) => {
  const { language } = useLanguage();
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentStage = TANNERY_STAGES[activeStageIndex];

  // Update video playback when stage changes
  useEffect(() => {
    setHasVideoError(false);
    setVideoProgress(0);
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy or format fallback
          setIsPlaying(false);
        });
    }
  }, [activeStageIndex, playbackSpeed]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setVideoDuration(dur);
    setVideoProgress((curr / dur) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = newProgress * (videoRef.current.duration || 1);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section
      id="virtual-tannery-tour"
      aria-label="Virtual Tannery Tour - Savar Leather Production Desk"
      className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#0B0806] border-b border-[#C89D43]/25 dark:border-stone-800 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Brand Warm Gold Ambient Glow Flares matching Logo */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D6AC4B]/10 dark:bg-[#D6AC4B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#C89D43]/10 dark:bg-[#C89D43]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-[#C89D43]" />
                {language === "bn" ? "লাইভ ট্যানারি উৎপাদন ট্যুর" : "Virtual Tannery Tour · Savar"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>LWG Gold Verified</span>
              </span>
              <SectionShareButton path="/#virtual-tannery-tour" sectionName="Virtual Tannery Tour" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#FAF6F0] leading-tight">
              {language === "bn"
                ? "সাভারের আধুনিক ট্যানারি ফ্লোর: সরাসরি ভিডিও ট্যুর"
                : "Inside Savar Tannery Estate: Live Production Tour"}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {language === "bn"
                ? "আন্তর্জাতিক বায়ারদের সর্বোচ্চ স্বচ্ছতা দিতে সাভারের এলডব্লিউজি সার্টিফাইড ট্যানারিগুলোর ড্রাম ট্যানিং, হাইড্রলিক স্প্লিটিং, ডাইং এবং ফিনিশিং প্রক্রিয়ার সরাসরি ভিডিও পর্যায়সমূহ দেখুন।"
                : "Experience short, looped video footage of live leather processing inside Savar Leather Estate. Build complete confidence in tannery infrastructure, drum capacity, and hide-by-hide quality governance."}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 shrink-0 p-3 bg-white dark:bg-[#15110E] rounded-xl border border-[#C89D43]/25 dark:border-[#C89D43]/30 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D6AC4B] to-[#C89D43] text-stone-950 flex items-center justify-center font-bold shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="text-stone-500 dark:text-stone-400 block font-medium">
                Savar Leather Estate, Dhaka
              </span>
              <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1">
                <span>85,000 sq ft / day drum capacity</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Production Theater: Video Viewport & Telemetry HUD */}
        <div
          ref={containerRef}
          className="bg-white dark:bg-[#120E0B] rounded-2xl border border-[#C89D43]/30 dark:border-[#C89D43]/35 shadow-xl overflow-hidden mb-8 transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch lg:min-h-[500px] xl:min-h-[540px]">
            
            {/* Left 7 Cols: Video Canvas with True Cinematic Aspect */}
            <div className="lg:col-span-7 xl:col-span-7 relative bg-black aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] xl:min-h-[540px] overflow-hidden flex items-center justify-center group select-none">
              
              {/* HTML5 Video Element with Looped Playback */}
              {!hasVideoError ? (
                <video
                  ref={videoRef}
                  key={currentStage.videoUrl}
                  src={currentStage.videoUrl}
                  poster={currentStage.fallbackPoster}
                  playsInline
                  autoPlay
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onError={() => setHasVideoError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700"
                />
              ) : (
                /* Fallback Poster in case of network restriction */
                <div className="relative w-full h-full">
                  <img
                    src={currentStage.fallbackPoster}
                    alt={currentStage.titleEn}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-mono border border-white/20">
                      Live High-Res Production Preview
                    </span>
                  </div>
                </div>
              )}

              {/* Cinematic Vignette Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

              {/* Top Overlay: Live Badge & Stage Number */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-white z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-[#C89D43]/40 shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#E5BE58] uppercase tracking-wider">
                    STAGE {currentStage.stepNumber} / 06
                  </span>
                  <span className="text-stone-300 text-[11px]">· {currentStage.locationEn}</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[11px] text-stone-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5BE58]" />
                  <span>
                    {language === "bn"
                      ? "সাভার অন-সাইট প্রোডাকশন স্ট্রীম"
                      : "Savar On-Site Production Stream"}
                  </span>
                </div>
              </div>

              {/* Center Play/Pause Splash on Hover */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video clip" : "Play video clip"}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 border border-[#C89D43]/60 text-[#E5BE58] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer shadow-lg z-20 hover:scale-105"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>

              {/* Bottom Scrim Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20 space-y-2">
                
                {/* Progress Scrubbing Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer transition-all relative overflow-hidden"
                  title="Click to seek"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#D6AC4B] to-[#E5BE58] rounded-full transition-all duration-100"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>

                {/* Video HUD Buttons */}
                <div className="flex items-center justify-between text-white text-xs pt-0.5">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 hover:text-[#E5BE58] transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1 hover:text-[#E5BE58] transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className="w-4 h-4 text-[#E5BE58]" />}
                    </button>

                    <span className="font-mono text-[11px] text-stone-300 hidden sm:inline">
                      {formatTime(currentTime)} / {formatTime(videoDuration || 15)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Speed selector */}
                    <button
                      onClick={() => {
                        const speeds = [1, 1.25, 1.5];
                        const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
                        setPlaybackSpeed(speeds[nextIdx]);
                      }}
                      className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] font-mono text-[#E5BE58] font-bold border border-white/10 transition-colors"
                      title="Playback speed"
                    >
                      {playbackSpeed}x
                    </button>

                    {/* Stage quick step indicators */}
                    <div className="hidden md:flex items-center gap-1">
                      {TANNERY_STAGES.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveStageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                            activeStageIndex === idx
                              ? "bg-[#E5BE58] w-5"
                              : "bg-white/30 hover:bg-white/60"
                          }`}
                          aria-label={`Jump to stage ${s.stepNumber}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleFullscreen}
                      className="p-1 hover:text-[#E5BE58] transition-colors cursor-pointer"
                      aria-label="Toggle Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right 5 Cols: Active Stage Technical Intelligence & Telemetry */}
            <div className="lg:col-span-5 xl:col-span-5 p-5 sm:p-6 lg:p-6 xl:p-7 flex flex-col justify-between bg-white dark:bg-[#120E0B] border-t lg:border-t-0 lg:border-l border-[#C89D43]/20 dark:border-stone-800 lg:max-h-[540px] lg:overflow-y-auto">
              
              <div className="space-y-4">
                {/* Header of Stage */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#C89D43] uppercase tracking-wider">
                      Process Stage {currentStage.stepNumber}
                    </span>
                    <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                      Savar Tannery Hub
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#15120E] dark:text-[#FAF6F0] leading-snug">
                    {language === "bn" ? currentStage.titleBn : currentStage.titleEn}
                  </h3>
                  
                  <p className="text-xs font-medium text-[#7A5A17] dark:text-[#E5BE58] mt-0.5">
                    {language === "bn" ? currentStage.subtitleBn : currentStage.subtitleEn}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {language === "bn" ? currentStage.descriptionBn : currentStage.descriptionEn}
                </p>

                {/* Key Assurance Box */}
                <div className="p-3 bg-[#FAF8F5] dark:bg-[#181310] border border-[#C89D43]/25 dark:border-[#C89D43]/30 rounded-xl flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#C89D43] shrink-0 mt-0.5" />
                  <span className="text-stone-800 dark:text-stone-200 font-medium">
                    {language === "bn" ? currentStage.keyAssuranceBn : currentStage.keyAssuranceEn}
                  </span>
                </div>

                {/* Technical Telemetry HUD Grid */}
                <div className="pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 font-bold block mb-2">
                    {language === "bn" ? "টেকনিক্যাল পরামিতি (Telemetry)" : "Tannery Technical Telemetry"}
                  </span>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#181310] border border-stone-200/80 dark:border-stone-800">
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 block font-mono">
                        Target Temp
                      </span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1 font-mono text-[11px] mt-0.5">
                        <Thermometer className="w-3 h-3 text-[#C89D43]" />
                        {currentStage.telemetry.temperature}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#181310] border border-stone-200/80 dark:border-stone-800">
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 block font-mono">
                        Machine Speed
                      </span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1 font-mono text-[11px] mt-0.5">
                        <Gauge className="w-3 h-3 text-blue-500" />
                        {currentStage.telemetry.drumSpeed}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#181310] border border-stone-200/80 dark:border-stone-800">
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 block font-mono">
                        Tolerance / Depth
                      </span>
                      <span className="font-bold text-stone-900 dark:text-stone-100 font-mono text-[11px] mt-0.5 block truncate">
                        {currentStage.telemetry.substanceTolerance}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-[#181310] border border-stone-200/80 dark:border-stone-800">
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 block font-mono">
                        Quality Standard
                      </span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 font-mono text-[11px] mt-0.5 block truncate">
                        {currentStage.telemetry.complianceStandard}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for this Stage */}
              <div className="pt-5 mt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("request_quote_click", {
                      location: "virtual_tannery_tour",
                      stage: currentStage.id,
                    });
                    if (onRequestQuote) {
                      onRequestQuote(`${currentStage.titleEn} (From Savar Tannery Tour)`);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] transition-all shadow-gold-subtle hover:shadow-md cursor-pointer"
                >
                  <span>
                    {language === "bn"
                      ? "এই ব্যাচের সোয়াচ / কোটেশন চান"
                      : "Request Swatch from This Batch"}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#15120E]" />
                </button>

                {onScheduleTour && (
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent("consultation_modal_open", {
                        location: "virtual_tannery_tour",
                        stage: currentStage.id,
                      });
                      onScheduleTour(`On-Site Tannery Inspection Visit (${currentStage.titleEn})`);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-[#C89D43] dark:hover:text-[#E5BE58] bg-stone-50 dark:bg-[#181310] hover:bg-stone-100 dark:hover:bg-[#221C16] border border-stone-200 dark:border-stone-800 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C89D43]" />
                    <span>
                      {language === "bn"
                        ? "অন-সাইট ভিজিট শিডিউল করুন"
                        : "Schedule Factory Floor Inspection"}
                    </span>
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Interactive 6-Stage Timeline Navigator Bar */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-[#C89D43]" />
              {language === "bn" ? "৬টি উৎপাদন পর্যায় নেভিগেট করুন" : "Select Production Stage to Inspect"}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex((prev) => (prev - 1 + TANNERY_STAGES.length) % TANNERY_STAGES.length)
                }
                className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#15110E] hover:border-[#C89D43] text-stone-700 dark:text-stone-300 cursor-pointer transition-colors"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveStageIndex((prev) => (prev + 1) % TANNERY_STAGES.length)
                }
                className="p-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#15110E] hover:border-[#C89D43] text-stone-700 dark:text-stone-300 cursor-pointer transition-colors"
                aria-label="Next Stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 6 Stage Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {TANNERY_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => {
                    setActiveStageIndex(idx);
                    trackEvent("virtual_tour_stage_click", { stage_id: stage.id });
                  }}
                  className={`flex flex-col justify-between text-left p-3 min-h-[96px] rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-white dark:bg-[#1A1410] border-[#C89D43] shadow-md ring-2 ring-[#C89D43]/25"
                      : "bg-white/80 dark:bg-[#120E0B] hover:bg-white dark:hover:bg-[#181310] border-stone-200/90 dark:border-stone-800/80 hover:border-[#C89D43]/50 shadow-2xs"
                  }`}
                >
                  {/* Subtle active top bar indicator */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D6AC4B] to-[#C89D43]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-[#C89D43]" : "text-stone-400 dark:text-stone-500"
                      }`}
                    >
                      {stage.stepNumber}
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    ) : (
                      <Eye className="w-3.5 h-3.5 text-stone-300 dark:text-stone-600 group-hover:text-[#C89D43] transition-colors" />
                    )}
                  </div>

                  <h4
                    className={`text-xs font-bold leading-snug line-clamp-2 transition-colors ${
                      isActive
                        ? "text-[#15120E] dark:text-[#FAF6F0]"
                        : "text-stone-700 dark:text-stone-300 group-hover:text-[#C89D43]"
                    }`}
                  >
                    {language === "bn" ? stage.titleBn : stage.titleEn}
                  </h4>

                  <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400 mt-1 truncate block">
                    {stage.telemetry.cycleDuration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
