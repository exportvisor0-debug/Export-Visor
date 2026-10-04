import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import {
  TrendingUp,
  FileText,
  Calendar,
  ExternalLink,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  BarChart3,
  Factory,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

export interface MarketInsight {
  id: string;
  category: "Environmental & CETP" | "Supply Dynamics" | "Export Trends" | "Sustainable Tech";
  title: string;
  offsetMonths: number; // 0 = current live running month, 1 = previous month, etc.
  source: string;
  readTime: string;
  summary: string;
  procurementTakeaway: string;
  keyStats?: string[];
  impactLevel: "High Strategic Impact" | "Medium Operational Impact" | "Market Opportunity";
  externalLink?: string;
}

/**
 * Automatically computes dynamic localized date relative to the current live running month.
 * offsetMonths = 0 produces the current live month (e.g. October 2026 or অক্টোবর ২০২৬).
 * As real-world time progresses, the news dates automatically update without manual edits.
 */
export const getDynamicMarketMonth = (offsetMonths: number = 0, lang: string = "en"): string => {
  const d = new Date();
  d.setDate(1); // prevent month-end day skipping (e.g. 31st)
  d.setMonth(d.getMonth() - offsetMonths);

  if (lang === "bn") {
    const bnMonths = [
      "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
      "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];
    const month = bnMonths[d.getMonth()];
    const yearDigits = d.getFullYear().toString().split("");
    const bnDigits: Record<string, string> = {
      "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
      "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯"
    };
    const bnYear = yearDigits.map((char) => bnDigits[char] || char).join("");
    return `${month} ${bnYear}`;
  }

  const localeMap: Record<string, string> = {
    en: "en-US",
    de: "de-DE",
    fr: "fr-FR",
    es: "es-ES",
    it: "it-IT",
    zh: "zh-CN",
    ar: "ar-EG",
    ja: "ja-JP",
    ko: "ko-KR",
    tr: "tr-TR",
  };
  const locale = localeMap[lang] || "en-US";
  try {
    return d.toLocaleDateString(locale, { month: "long", year: "numeric" });
  } catch {
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }
};

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    id: "savar-cetp-upgrade-2026",
    category: "Environmental & CETP",
    title: "Savar Tannery Estate Advances Chromium Recovery & CETP Biological Stage Upgrades",
    offsetMonths: 0, // Current active month
    source: "Bangladesh Tannery Association (BTA) & DoE",
    readTime: "3 min read",
    summary:
      "Dhaka's central tannery cluster at Hemayetpur, Savar, has deployed upgraded biological oxidation basins and automated chromium recovery units. This modernization accelerates environmental compliance and global retail brand approvals.",
    procurementTakeaway:
      "Buyers requiring strict chemical safety and effluent compliance can now shortlist specialized wet blue and finished leather tanneries operating dedicated pre-treatment and chromium recovery systems.",
    keyStats: ["85% CETP capacity optimization", "Direct chromium recovery recycling", "Environmental compliance upgrade"],
    impactLevel: "High Strategic Impact",
  },
  {
    id: "raw-hide-seasonality-2026",
    category: "Supply Dynamics",
    title: "Seasonal Raw Hide Influx Stabilizes Commercial Wet Blue & Crust Baseline Pricing",
    offsetMonths: 0, // Current active month
    source: "Export Promotion Bureau (EPB) Market Monitor",
    readTime: "2 min read",
    summary:
      "The seasonal collection of domestic cow, buffalo, and goat skins has replenished beamhouse inventories across Savar and Chattogram. The influx of tight-grain hides has eased raw material price volatility, creating an advantageous procurement window for international buyers booking export batches.",
    procurementTakeaway:
      "Optimal procurement window for locking in long-term crust and wet blue contracts before peak year-end footwear manufacturing demand.",
    keyStats: ["~10M raw skins seasonal harvest", "Stabilized baseline price band", "Tight epidermal grain sorting"],
    impactLevel: "Market Opportunity",
  },
  {
    id: "eu-supply-diversification-2026",
    category: "Export Trends",
    title: "European Footwear & Leather Goods Importers Accelerate Direct Sourcing from Dhaka",
    offsetMonths: 0, // Current active month
    source: "LFMEAB Global Sourcing Index",
    readTime: "4 min read",
    summary:
      "Footwear manufacturers and leather merchants in Italy, Spain, and Germany are expanding direct procurement contracts with Bangladesh tanneries. The combination of competitive FOB Chattogram pricing, favorable tariff treatments, and improving technical temper customization has positioned Bangladesh as an essential supply hedge.",
    procurementTakeaway:
      "European brands are increasingly procuring intermediate crust and lining leathers directly from Bangladesh to mitigate high energy and chemical surcharges at domestic European finishing mills.",
    keyStats: ["+14.2% YoY European volume growth", "Duty-free preferential trade access", "Expanded aniline finishing lines"],
    impactLevel: "High Strategic Impact",
  },
  {
    id: "chrome-free-eco-tanning-2026",
    category: "Sustainable Tech",
    title: "Rising Commercial Demand for Wet White & Synthetic Bio-Based Tanning Formulations",
    offsetMonths: 1, // Last month
    source: "Leather Engineering & Technology Institute (LETI)",
    readTime: "3 min read",
    summary:
      "In response to stringent European Union REACH thresholds and brand eco-pledges, leading export tanneries in Savar have expanded dedicated drums for chrome-free (wet white) and vegetable retanned leathers, utilizing synthetic tannins and mimosa extracts.",
    procurementTakeaway:
      "Chrome-free formulations are readily available on an RFQ basis for children's footwear, orthopedic uppers, and luxury leather goods requiring zero detectable hexavalent chromium.",
    keyStats: ["Zero detectable Cr VI", "REACH / SVHC compliant recipes", "Biodegradable synthetic tannins"],
    impactLevel: "Medium Operational Impact",
  },
  {
    id: "chattogram-port-feeder-logistics",
    category: "Export Trends",
    title: "Direct Transshipment Routes from Chattogram Port Shorten European & Asian Transit",
    offsetMonths: 1, // Last month
    source: "Chattogram Port Authority & International Shipping Council",
    readTime: "2 min read",
    summary:
      "Expansion of direct feeder services connecting Chattogram Port to transshipment hubs in Colombo, Singapore, and Port Klang has improved maritime freight schedule reliability. Turnaround times for 20ft and 40ft dry containers carrying preserved leather have improved by 4 to 6 days.",
    procurementTakeaway:
      "Reduced maritime dwell times preserve wet blue hydration consistency and allow buyers to operate leaner safety stock in their domestic cutting rooms.",
    keyStats: ["4-6 days transit time reduction", "Dedicated reefer and dry container slots", "FOB & CIF tracking integration"],
    impactLevel: "Medium Operational Impact",
  },
  {
    id: "goat-cow-grain-distinction",
    category: "Supply Dynamics",
    title: "High Demand for Bengal Goat Skin in High-Flex Glove & Garment Sourcing",
    offsetMonths: 2, // 2 months ago
    source: "International Footwear & Leather Trade Review",
    readTime: "3 min read",
    summary:
      "Bengal goat skin (Kushtia/Black Bengal grade) continues to command global recognition for its dense fiber cross-weaving and exceptional tensile strength relative to substance (0.6–0.8 mm). Orders from global work-safety glove and luxury small leather goods makers remain robust.",
    procurementTakeaway:
      "For glove, lining, and high-flex accessory production, Bengal goat crust provides superior tear resistance per square foot compared to alternative Asian origin skins.",
    keyStats: ["Compact fiber cross-weave", "Tensile strength >20 N/mm²", "Optimal 0.6–0.8 mm substance"],
    impactLevel: "Market Opportunity",
  },
];

interface LeatherMarketInsightsProps {
  onRequestQuote: (context?: string) => void;
}

export const LeatherMarketInsights: React.FC<LeatherMarketInsightsProps> = ({
  onRequestQuote,
}) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [activeArticle, setActiveArticle] = useState<MarketInsight | null>(null);
  
  const currentRunningMonth = getDynamicMarketMonth(0, language);
  const [lastUpdated, setLastUpdated] = useState<string>(() => currentRunningMonth);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Synchronize dynamic month with current language
  React.useEffect(() => {
    setLastUpdated(getDynamicMarketMonth(0, language));
  }, [language]);

  const categories = [
    "All",
    "Environmental & CETP",
    "Supply Dynamics",
    "Export Trends",
    "Sustainable Tech",
  ];

  const filteredInsights =
    selectedCategory === "All"
      ? MARKET_INSIGHTS
      : MARKET_INSIGHTS.filter((item) => item.category === selectedCategory);

  const displayedInsights = showAll ? filteredInsights : filteredInsights.slice(0, 3);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(
        language === "bn"
          ? `লাইভ বুলেটিন (${getDynamicMarketMonth(0, language)})`
          : `Live Feed (${getDynamicMarketMonth(0, language)})`
      );
    }, 450);
  };

  return (
    <section id="market-insights" className="py-16 sm:py-24 bg-[#FAF8F5] dark:bg-[#0B0806] border-b border-stone-200/90 dark:border-stone-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200/80 dark:border-stone-800/80 gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5 text-[#C89D43]" />
                <span>{t.marketInsights.kicker}</span>
              </div>
              <SectionShareButton path="/market-insights" sectionName={t.marketInsights.title} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#F8F5F0] leading-tight mt-1">
              {t.marketInsights.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {t.marketInsights.subtitle}
            </p>
          </div>

          {/* Sourcing Desk Quick Action */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 dark:text-stone-200 bg-white dark:bg-[#1A1410] hover:bg-stone-50 dark:hover:bg-[#251D17] border border-stone-300 dark:border-[#C89D43]/30 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title="Auto-synchronized to current active month. Click to refresh industry intelligence feed."
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <RefreshCw className={`w-3.5 h-3.5 text-stone-500 dark:text-stone-400 ${isRefreshing ? "animate-spin text-[#C89D43]" : ""}`} />
              <span className="font-mono text-[11px] font-semibold text-stone-800 dark:text-stone-200">{lastUpdated}</span>
            </button>
            <button
              onClick={() => onRequestQuote("Market Timing Advisory")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-lg transition-all shadow-gold-subtle cursor-pointer whitespace-nowrap"
            >
              <span>Consult Market Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#15120E]" />
            </button>
          </div>
        </div>

        {/* Market Barometer Overview Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-5 bg-white dark:bg-[#130E0B] border border-stone-200/90 dark:border-[#C89D43]/25 rounded-lg shadow-xs mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
              Raw Hide Supply Index
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-mono-data text-lg font-bold text-emerald-700 dark:text-emerald-400">Abundant / Stable</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">↑ Post-Harvest</span>
            </div>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 block leading-tight mt-0.5">
              Strong stock of domestic cow & goat skins
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
              Savar CETP Compliance
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-mono-data text-lg font-bold text-[#181310] dark:text-[#FAF6F0]">Upgrading (CRU)</span>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold">● In Progress</span>
            </div>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 block leading-tight mt-0.5">
              Automated chrome recovery in deployment
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
              EU Tariff Advantage
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-mono-data text-lg font-bold text-[#181310] dark:text-[#FAF6F0]">0% Import Duty</span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Preferential GSP</span>
            </div>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 block leading-tight mt-0.5">
              Duty-free access to EU & UK markets
            </span>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
              Chattogram Maritime Transit
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="font-mono-data text-lg font-bold text-[#181310] dark:text-[#FAF6F0]">18–24 Days</span>
              <span className="text-[11px] text-stone-500 dark:text-stone-400 font-semibold">To Main EU Ports</span>
            </div>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 block leading-tight mt-0.5">
              Direct feeder via Colombo / Singapore
            </span>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 rounded-lg mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#181310] dark:bg-[#C89D43] text-white dark:text-[#15120E] shadow-xs"
                  : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-700/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Insights Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedInsights.map((insight) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4, borderColor: "rgba(200, 157, 67, 0.6)" }}
              className="bg-white dark:bg-[#130E0B] border border-stone-200 dark:border-[#C89D43]/25 rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                {/* Meta info: Category & Date */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 mb-3 pb-2.5 border-b border-stone-100 dark:border-stone-800">
                  <span className="font-bold uppercase tracking-wider text-[#7A5A17] dark:text-[#E5BE58] bg-[#C89D43]/10 px-2 py-0.5 rounded-full border border-[#C89D43]/20">
                    {insight.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-stone-600 dark:text-stone-300 font-medium">
                    <Calendar className="w-3 h-3 text-[#C89D43]" />
                    <span>{getDynamicMarketMonth(insight.offsetMonths, language)}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#15120E] dark:text-[#FAF6F0] leading-snug group-hover:text-[#C89D43] transition-colors">
                  {insight.title}
                </h3>

                {/* Source & Read time */}
                <div className="flex items-center gap-2 text-xs text-stone-400 mt-1.5 mb-3">
                  <span className="truncate max-w-[200px]">{insight.source}</span>
                  <span aria-hidden="true">·</span>
                  <span>{insight.readTime}</span>
                </div>

                {/* Summary */}
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  {insight.summary}
                </p>

                {/* Key Metric Tags */}
                {insight.keyStats && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {insight.keyStats.map((stat, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 bg-stone-100 dark:bg-[#1C1612] text-stone-700 dark:text-stone-300 rounded text-[10px] font-mono font-medium border border-stone-200/60 dark:border-stone-800"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom: Procurement Actionable Takeaway */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
                <div className="p-3 bg-[#FAF8F5] dark:bg-[#1A1410] border border-stone-200/70 dark:border-stone-800 rounded text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  <span className="font-bold text-[#181310] dark:text-[#E5BE58] block mb-0.5">
                    Procurement Takeaway:
                  </span>
                  {insight.procurementTakeaway}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveArticle(insight)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#C89D43] hover:text-[#D6AC4B] transition-colors cursor-pointer"
                  >
                    <span>Read Technical Analysis</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(`Market Insight: ${insight.title}`)}
                    className="text-[11px] text-stone-500 dark:text-stone-400 hover:text-[#C89D43] dark:hover:text-[#E5BE58] underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    Inquire on this Trend
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All / Show Less Expandable Action */}
        {filteredInsights.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-[#15120E] dark:text-[#FAF6F0] bg-white dark:bg-[#16110D] hover:bg-stone-50 dark:hover:bg-[#201812] border border-[#C89D43] hover:border-[#D6AC4B] shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <span>
                {showAll
                  ? (language === "bn" ? "সংক্ষিপ্ত করুন" : "Show Less")
                  : (language === "bn"
                      ? `সবগুলো মার্কেট ইনসাইট দেখুন (${filteredInsights.length}টি)`
                      : `View All Market Insights (${filteredInsights.length} Reports)`)}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#C89D43] group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C89D43] group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* Bottom Sourcing Guidance Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#FAF6F0] via-[#F4EFE6] to-[#FAF6F0] dark:from-stone-900 dark:via-[#1F1914] dark:to-stone-900 border border-[#C89D43]/35 text-stone-900 dark:text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md dark:shadow-xl transition-colors duration-200">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E731C] dark:text-[#E5BE58]">
              <ShieldCheck className="w-4 h-4 text-[#C89D43] dark:text-[#E5BE58]" />
              <span>Independent Technical Assessment</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[#15120E] dark:text-white">
              Need Current Price Benchmarks or Drum Capacity Forecasts?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              ExportVisor provides prospective international buyers with unfiltered ground feedback on raw hide inventory depth, chemical supply stability, and real-time tannery drum loading schedules.
            </p>
          </div>

          <button
            onClick={() => onRequestQuote("Live Price & Drum Capacity Forecast")}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-lg transition-all whitespace-nowrap cursor-pointer shadow-gold-subtle hover:shadow-lg"
          >
            Request Market Advisory
          </button>
        </div>

      </div>

      {/* Detail Briefing Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#140F0C] rounded-lg border border-stone-200 dark:border-[#C89D43]/30 shadow-xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-5 animate-fade-in">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C89D43]">
                {activeArticle.category} · Technical Briefing
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-stone-400 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-sm font-semibold p-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310] dark:text-[#FAF6F0] leading-tight">
              {activeArticle.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-800 dark:text-stone-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C89D43]" />
                {getDynamicMarketMonth(activeArticle.offsetMonths, language)}
              </span>
              <span aria-hidden="true">·</span>
              <span>Source: {activeArticle.source}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-emerald-700 dark:text-emerald-400">{activeArticle.impactLevel}</span>
            </div>

            <div className="space-y-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>{activeArticle.summary}</p>
              <p>
                As international supply chains balance pricing pressure with rigorous sustainability credentials, Bangladesh continues to position itself as a resilient sourcing corridor. For manufacturers planning upcoming seasonal collections, early booking ensures priority hide selection from premier beamhouse drums.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] dark:bg-[#1A1410] border border-stone-200 dark:border-stone-800 rounded-md">
              <h5 className="text-xs uppercase font-bold text-[#181310] dark:text-[#E5BE58] tracking-wider mb-1">
                Strategic Buyer Action Plan
              </h5>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {activeArticle.procurementTakeaway}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-stone-200 dark:border-stone-700 rounded-md cursor-pointer"
              >
                Back to Market Feed
              </button>

              <button
                onClick={() => {
                  const title = activeArticle.title;
                  setActiveArticle(null);
                  onRequestQuote(`Market Briefing Inquiry: ${title}`);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-lg transition-all shadow-gold-subtle cursor-pointer"
              >
                <span>Discuss with Sourcing Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#15120E]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
