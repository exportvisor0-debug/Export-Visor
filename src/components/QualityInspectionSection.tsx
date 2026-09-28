import React from "react";
import { heroLeatherImg } from "../data/products";
import { CheckCircle2, ShieldCheck, Eye, Layers, Ruler, Palette } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

export const QualityInspectionSection: React.FC = () => {
  const qualityFactors = [
    {
      factor: "Raw Material & Origin",
      desc: "Selected Bangladesh bovine hides, heavy steer, or goat skins evaluated for structural fiber density, natural grain integrity, and minimal flay cuts.",
      icon: Layers,
      color: "bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30",
    },
    {
      factor: "Substance & Thickness Tolerance",
      desc: "Uniform splitting and shaving calibrated with micrometer dial gauges across butt, belly, and shoulder sections within ±0.1 mm tolerances.",
      icon: Ruler,
      color: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/25",
    },
    {
      factor: "Grain Condition & Grade Sorting",
      desc: "Graded into Table Runs (TR) or specified tiers (A/B/C/D) based on surface cleanliness, vein visibility, tick marks, and scar coverage.",
      icon: Eye,
      color: "bg-blue-500/10 text-blue-600 border border-blue-500/25",
    },
    {
      factor: "Color Match & Finish Fastness",
      desc: "Visual comparison under standard D65 illuminants, checking wet/dry Veslic rub fastness, finish adhesion, and flexing endurance.",
      icon: Palette,
      color: "bg-purple-500/10 text-purple-600 border border-purple-500/25",
    },
  ];

  return (
    <section id="quality-inspection" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              Inspection & Technical Standards
            </div>
            <SectionShareButton path="/quality-inspection" sectionName="Quality & Inspection" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            Understanding Leather Quality & <span className="text-gold-gradient">AQL 2.5 Inspection</span> Coordination
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Leather is an organic material whose performance and value depend directly on raw hide selection, chemical balance, and precision finishing. ExportVisor coordinates rigorous checks to ensure alignment with buyer technical data sheets.
          </p>
        </div>

        {/* Top Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#15120E]">
              How Inspection Coordination Works
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              International buyers cannot always travel to Bangladesh for every production batch. ExportVisor acts as the buyer's objective technical coordinator inside partner tanneries.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#FAF8F5] border border-stone-200/90 rounded-xl text-xs space-y-1 shadow-2xs hover:border-[#C89D43]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#C89D43]/20 text-[#7A5A17] font-mono font-bold text-[10px] flex items-center justify-center">1</span>
                  <span className="font-bold text-[#15120E] uppercase tracking-wider text-[11px] block">
                    Stage 1: Crust & Wet Blue Sorting Inspection
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed pl-7">
                  Inspecting intermediate hides prior to dyeing to verify grade breakdown, temper, and absence of underlying grain defects.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-stone-200/90 rounded-xl text-xs space-y-1 shadow-2xs hover:border-[#C89D43]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#C89D43]/20 text-[#7A5A17] font-mono font-bold text-[10px] flex items-center justify-center">2</span>
                  <span className="font-bold text-[#15120E] uppercase tracking-wider text-[11px] block">
                    Stage 2: In-Process Finish & Color Review
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed pl-7">
                  Checking initial drum dyeing strikes, spray line uniformity, and surface feel against buyer approved master cuttings.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-stone-200/90 rounded-xl text-xs space-y-1 shadow-2xs hover:border-[#C89D43]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-[#C89D43]/20 text-[#7A5A17] font-mono font-bold text-[10px] flex items-center justify-center">3</span>
                  <span className="font-bold text-[#15120E] uppercase tracking-wider text-[11px] block">
                    Stage 3: Final Pre-Shipment Inspection & Area Audit
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed pl-7">
                  Auditing electronic area measurement printouts, pack counts, moisture retention, pallet stability, and export markings.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic pt-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C89D43]" />
              <span>* Independent third-party inspection agencies (e.g. SGS, Intertek, Bureau Veritas) can also be accommodated at buyer request and cost.</span>
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-[#C89D43]/30 shadow-lg bg-stone-900 aspect-[4/3] group">
              <img
                src={heroLeatherImg}
                alt="Leather grading and inspection inspection table"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-bold text-[#E5BE58] mb-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5BE58]" />
                  <span>On-Site Inspection Coordination</span>
                </div>
                <p className="text-stone-200 text-[11px] leading-relaxed">
                  Verifying thickness consistency, grain smoothness, and surface condition hide by hide before packing.
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
