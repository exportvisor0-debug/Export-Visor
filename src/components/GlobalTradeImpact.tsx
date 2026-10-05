import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  Globe2,
  Ship,
  CheckCircle2,
  BarChart3,
  PieChart as PieIcon,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

interface VolumeDataPoint {
  year: string;
  finished: number;
  crust: number;
  wetBlue: number;
  total: number;
}

interface DestinationDataPoint {
  name: string;
  share: number;
  volumeSqFt: string;
  topPorts: string;
  color: string;
}

interface GrowthMetric {
  year: string;
  activeClients: number;
  repeatOrderRate: number;
  containersDispatched: number;
}

const EXPORT_VOLUME_DATA: VolumeDataPoint[] = [
  { year: "2021", finished: 0.9, crust: 1.4, wetBlue: 1.1, total: 3.4 },
  { year: "2022", finished: 1.2, crust: 1.6, wetBlue: 1.3, total: 4.1 },
  { year: "2023", finished: 1.6, crust: 1.9, wetBlue: 1.4, total: 4.9 },
  { year: "2024", finished: 2.1, crust: 2.2, wetBlue: 1.6, total: 5.9 },
  { year: "2025", finished: 2.7, crust: 2.6, wetBlue: 1.8, total: 7.1 },
  { year: "2026 (Est)", finished: 3.2, crust: 2.9, wetBlue: 2.0, total: 8.1 },
];

const DESTINATION_DATA: DestinationDataPoint[] = [
  {
    name: "European Union",
    share: 42,
    volumeSqFt: "3.4M sq ft",
    topPorts: "Hamburg, Genoa, Valencia, Rotterdam",
    color: "#C89D43", // Radiant Logo Gold
  },
  {
    name: "East & SE Asia",
    share: 28,
    volumeSqFt: "2.3M sq ft",
    topPorts: "Hai Phong, Busan, Yokohama, Shanghai",
    color: "#2563EB", // Sapphire Maritime Blue
  },
  {
    name: "North America",
    share: 16,
    volumeSqFt: "1.3M sq ft",
    topPorts: "New York, Savannah, Long Beach",
    color: "#059669", // Emerald Green
  },
  {
    name: "Middle East & Others",
    share: 14,
    volumeSqFt: "1.1M sq ft",
    topPorts: "Jebel Ali, Istanbul, Melbourne",
    color: "#7C3AED", // Royal Indigo Purple
  },
];

const CLIENT_GROWTH_DATA: GrowthMetric[] = [
  { year: "2021", activeClients: 18, repeatOrderRate: 74, containersDispatched: 52 },
  { year: "2022", activeClients: 29, repeatOrderRate: 81, containersDispatched: 78 },
  { year: "2023", activeClients: 44, repeatOrderRate: 86, containersDispatched: 115 },
  { year: "2024", activeClients: 63, repeatOrderRate: 91, containersDispatched: 168 },
  { year: "2025", activeClients: 82, repeatOrderRate: 94, containersDispatched: 224 },
  { year: "2026", activeClients: 105, repeatOrderRate: 96, containersDispatched: 280 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const VolumeTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + (Number(entry.value) || 0), 0);
    return (
      <div className="bg-[#15120E] text-white p-3.5 rounded-xl shadow-xl border border-[#C89D43]/30 text-xs">
        <p className="font-mono text-[#E5BE58] font-bold mb-1.5 pb-1 border-b border-white/10">
          FY {label} Sourcing Volume
        </p>
        <div className="space-y-1.5">
          {payload.map((entry, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-stone-300">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: entry.color }}
                />
                {entry.name}:
              </span>
              <span className="font-mono font-semibold text-white">
                {Number(entry.value).toFixed(1)}M sq.ft
              </span>
            </div>
          ))}
          <div className="pt-1.5 mt-1 border-t border-white/10 flex justify-between font-bold">
            <span className="text-stone-300">Coordinated Total:</span>
            <span className="font-mono text-[#E5BE58]">{total.toFixed(1)}M sq.ft</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const DestinationTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as DestinationDataPoint;
    return (
      <div className="bg-[#15120E] text-white p-3.5 rounded-xl shadow-xl border border-[#C89D43]/30 text-xs max-w-xs">
        <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
          <span className="font-bold text-[#E5BE58]">{data.name}</span>
          <span className="font-mono font-bold text-stone-950 bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] px-2 py-0.5 rounded text-[10px]">
            {data.share}% Share
          </span>
        </div>
        <p className="text-[11px] text-stone-300">
          <strong className="text-white">Annual Volume:</strong> {data.volumeSqFt}
        </p>
        <p className="text-[10px] text-stone-400 mt-1">
          <strong className="text-stone-300">Discharge Hubs:</strong> {data.topPorts}
        </p>
      </div>
    );
  }
  return null;
};

interface GlobalTradeImpactProps {
  onRequestQuote?: (context?: string) => void;
}

export const GlobalTradeImpact: React.FC<GlobalTradeImpactProps> = ({
  onRequestQuote,
}) => {
  const { t, language } = useLanguage();
  const [activeChart, setActiveChart] = useState<"volume" | "destinations" | "growth">("volume");

  return (
    <section
      id="global-trade-impact"
      aria-label="Global Trade Impact & Export Volume Data"
      className="py-16 sm:py-24 bg-white dark:bg-[#0B0806] border-b border-stone-200 dark:border-stone-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-stone-200/90 dark:border-stone-800/90 gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5 text-[#C89D43]" />
                <span>{t.globalTrade.kicker}</span>
              </div>
              <SectionShareButton path="/global-trade-impact" sectionName={t.globalTrade.kicker} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#FAF6F0] leading-tight">
              {t.globalTrade.title} <span className="text-gold-gradient">{t.globalTrade.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
              {t.globalTrade.subtitle}
            </p>
          </div>

          {/* Quick Stats Micro Strip */}
          <div className="flex flex-wrap items-center gap-4 self-start md:self-auto">
            {onRequestQuote && (
              <button
                type="button"
                onClick={() => onRequestQuote("Inquiry: High Volume Annual Sourcing Contract")}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-xl transition-all shadow-gold-subtle hover:shadow-gold-glow cursor-pointer whitespace-nowrap"
              >
                <span>{language === "bn" ? "ব্যাচ বণ্টন পরিকল্পনা" : "Plan Batch Allocation"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#15120E]" />
              </button>
            )}
          </div>
        </div>

        {/* 4 High-Authority KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-white dark:bg-[#120E0B] border border-stone-200/90 dark:border-stone-800 rounded-xl p-5 shadow-2xs hover:border-[#C89D43]/50 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                Annual Sourcing Volume
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30 flex items-center justify-center transition-transform group-hover:scale-110">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono-data text-2xl sm:text-3xl font-bold text-[#15120E] dark:text-[#FAF6F0]">
              7.1M+ <span className="text-sm font-sans font-normal text-stone-500 dark:text-stone-400">sq.ft</span>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-1">
              Coordinated wet blue, crust & finished hides
            </p>
          </div>

          <div className="bg-white dark:bg-[#120E0B] border border-stone-200/90 dark:border-stone-800 rounded-xl p-5 shadow-2xs hover:border-emerald-500/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                Destination Markets
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 flex items-center justify-center transition-transform group-hover:scale-110">
                <Globe2 className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono-data text-2xl sm:text-3xl font-bold text-[#15120E] dark:text-[#FAF6F0]">
              28+ <span className="text-sm font-sans font-normal text-stone-500 dark:text-stone-400">Nations</span>
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-1">
              EU, North America, Japan, Korea, Vietnam
            </p>
          </div>

          <div className="bg-white dark:bg-[#120E0B] border border-stone-200/90 dark:border-stone-800 rounded-xl p-5 shadow-2xs hover:border-blue-500/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                Pre-Shipment Pass Rate
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/25 flex items-center justify-center transition-transform group-hover:scale-110">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono-data text-2xl sm:text-3xl font-bold text-[#15120E] dark:text-[#FAF6F0]">
              99.2%
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-1">
              Strict multi-point tannery floor inspection
            </p>
          </div>

          <div className="bg-white dark:bg-[#120E0B] border border-stone-200/90 dark:border-stone-800 rounded-xl p-5 shadow-2xs hover:border-purple-500/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 font-semibold">
                Repeat Order Velocity
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/25 flex items-center justify-center transition-transform group-hover:scale-110">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono-data text-2xl sm:text-3xl font-bold text-[#15120E] dark:text-[#FAF6F0]">
              94.6%
            </div>
            <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-1">
              Multi-season retention among global buyers
            </p>
          </div>
        </div>

        {/* Interactive Visualization Panel */}
        <div className="bg-white dark:bg-[#120E0B] border border-stone-200 dark:border-stone-800 rounded-xl p-6 sm:p-8 shadow-xs">
          
          {/* Chart Header & Tab Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-stone-100 dark:border-stone-800 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                Interactive Analytical Dashboard
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#181310] dark:text-[#FAF6F0]">
                {activeChart === "volume" && "Export Volume Trajectory (Million Sq. Ft.)"}
                {activeChart === "destinations" && "Global Export Destination Breakdown"}
                {activeChart === "growth" && "Client Growth & Container Dispatch Velocity"}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-lg self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveChart("volume")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeChart === "volume"
                    ? "bg-[#181310] dark:bg-[#C89D43] text-white dark:text-[#120E0B] shadow-xs font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Volume Trends</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveChart("destinations")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeChart === "destinations"
                    ? "bg-[#181310] dark:bg-[#C89D43] text-white dark:text-[#120E0B] shadow-xs font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                <PieIcon className="w-3.5 h-3.5" />
                <span>By Destination</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveChart("growth")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeChart === "growth"
                    ? "bg-[#181310] dark:bg-[#C89D43] text-white dark:text-[#120E0B] shadow-xs font-bold"
                    : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Client Retention</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Sourcing Volume Trajectory (Stacked Area Chart) */}
          {activeChart === "volume" && (
            <div>
              <div className="h-72 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={EXPORT_VOLUME_DATA}
                    margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="gradFinished" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C89D43" stopOpacity={0.85} />
                        <stop offset="95%" stopColor="#C89D43" stopOpacity={0.12} />
                      </linearGradient>
                      <linearGradient id="gradCrust" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E5BE58" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#E5BE58" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient id="gradWetBlue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.75} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E7E5E4" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="#78716C"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "#D6D3D1" }}
                    />
                    <YAxis
                      stroke="#78716C"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "#D6D3D1" }}
                      tickFormatter={(val) => `${val}M`}
                    />
                    <Tooltip content={<VolumeTooltip />} />
                    <Legend
                      wrapperStyle={{ paddingTop: "14px", fontSize: "11px" }}
                      formatter={(val) => (
                        <span className="text-stone-700 font-medium">{val}</span>
                      )}
                    />
                    <Area
                      type="monotone"
                      dataKey="finished"
                      name="Finished Leather"
                      stackId="1"
                      stroke="#C89D43"
                      fill="url(#gradFinished)"
                    />
                    <Area
                      type="monotone"
                      dataKey="crust"
                      name="Crust Leather"
                      stackId="1"
                      stroke="#E5BE58"
                      fill="url(#gradCrust)"
                    />
                    <Area
                      type="monotone"
                      dataKey="wetBlue"
                      name="Wet Blue Raw"
                      stackId="1"
                      stroke="#3B82F6"
                      fill="url(#gradWetBlue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                <span>Unit: Millions of Square Feet (M Sq. Ft.) per calendar year.</span>
                <span className="font-mono text-stone-600">
                  Compounded Annual Growth Rate (CAGR): +16.2%
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: Destination Distribution (Pie + Breakdown Grid) */}
          {activeChart === "destinations" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 h-64 sm:h-72 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DESTINATION_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={95}
                      paddingAngle={4}
                      dataKey="share"
                    >
                      {DESTINATION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<DestinationTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {DESTINATION_DATA.map((d, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-3.5 h-3.5 rounded-sm shrink-0"
                        style={{ backgroundColor: d.color }}
                      />
                      <div>
                        <span className="font-semibold text-xs sm:text-sm text-stone-900 block">
                          {d.name}
                        </span>
                        <span className="text-[11px] text-stone-500 block truncate">
                          Primary: {d.topPorts}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="font-mono text-xs sm:text-sm font-bold text-stone-900">
                        {d.share}% Share
                      </span>
                      <span className="text-[11px] text-stone-500 block">
                        {d.volumeSqFt} / yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Client Retention & Container Throughput */}
          {activeChart === "growth" && (
            <div>
              <div className="h-72 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={CLIENT_GROWTH_DATA}
                    margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E7E5E4" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="#78716C"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "#D6D3D1" }}
                    />
                    <YAxis
                      yAxisId="left"
                      stroke="#78716C"
                      fontSize={11}
                      tickLine={false}
                      axisLine={{ stroke: "#D6D3D1" }}
                      tickFormatter={(val) => `${val}`}
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      stroke="#80420E"
                      fontSize={11}
                      tickLine={false}
                      domain={[60, 100]}
                      tickFormatter={(val) => `${val}%`}
                    />
                    <Tooltip
                      formatter={(val, name) => [
                        name === "Repeat Order Rate" ? `${val}%` : val,
                        name,
                      ]}
                      contentStyle={{
                        backgroundColor: "#181310",
                        borderColor: "#44403C",
                        color: "#fff",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: "14px", fontSize: "11px" }}
                      formatter={(val) => (
                        <span className="text-stone-700 font-medium">{val}</span>
                      )}
                    />
                    <Bar
                      yAxisId="left"
                      dataKey="containersDispatched"
                      name="FCL Containers Dispatched"
                      fill="#C89D43"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="repeatOrderRate"
                      name="Repeat Order Rate"
                      stroke="#2563EB"
                      strokeWidth={2.5}
                      dot={{ fill: "#2563EB", r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                <span>Metrics derived from repeat commercial L/C releases and vetted buyer contracts.</span>
                <span className="font-mono text-emerald-700 font-semibold">
                  Zero container demurrage claims in 2024–2025
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Institutional Accreditation Footnote */}
        <div className="mt-8 p-4 bg-white border border-stone-200/90 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-stone-600 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All trade volumes validated via Chattogram Customs bills of export, chamber certificates, and verified proforma records.
            </span>
          </div>
          <div className="flex items-center gap-3 text-stone-600 font-mono text-[11px] self-end sm:self-auto">
            <span>Harmonized HS: 4104 / 4107 / 4112</span>
          </div>
        </div>

      </div>
    </section>
  );
};
