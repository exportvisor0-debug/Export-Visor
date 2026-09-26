import React from "react";
import { heroLeatherImg } from "../data/products";
import { CheckCircle2, ShieldCheck, Eye, Layers, Ruler, Palette } from "lucide-react";

export const QualityInspectionSection: React.FC = () => {
  const qualityFactors = [
    {
      factor: "Raw Material & Origin",
      desc: "Selected Bangladesh bovine hides, heavy steer, or goat skins evaluated for structural fiber density, natural grain integrity, and minimal flay cuts.",
      icon: Layers,
    },
    {
      factor: "Substance & Thickness Tolerance",
      desc: "Uniform splitting and shaving calibrated with micrometer dial gauges across butt, belly, and shoulder sections within ±0.1 mm tolerances.",
      icon: Ruler,
    },
    {
      factor: "Grain Condition & Grade Sorting",
      desc: "Graded into Table Runs (TR) or specified tiers (A/B/C/D) based on surface cleanliness, vein visibility, tick marks, and scar coverage.",
      icon: Eye,
    },
    {
      factor: "Color Match & Finish Fastness",
      desc: "Visual comparison under standard D65 illuminants, checking wet/dry Veslic rub fastness, finish adhesion, and flexing endurance.",
      icon: Palette,
    },
  ];

  return (
    <section id="quality-inspection" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Inspection & Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Understanding Leather Quality & Inspection Coordination
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Leather is an organic material whose performance and value depend directly on raw hide selection, chemical balance, and precision finishing. ExportVisor coordinates rigorous checks to ensure alignment with buyer technical data sheets.
          </p>
        </div>

        {/* Top Feature Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310]">
              How Inspection Coordination Works
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              International buyers cannot always travel to Bangladesh for every production batch. ExportVisor acts as the buyer's objective technical coordinator inside partner tanneries.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg text-xs space-y-1">
                <span className="font-bold text-stone-800 uppercase tracking-wider text-[10px] block">
                  Stage 1: Crust & Wet Blue Sorting Inspection
                </span>
                <p className="text-stone-600 leading-relaxed">
                  Inspecting intermediate hides prior to dyeing to verify grade breakdown, temper, and absence of underlying grain defects.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg text-xs space-y-1">
                <span className="font-bold text-stone-800 uppercase tracking-wider text-[10px] block">
                  Stage 2: In-Process Finish & Color Review
                </span>
                <p className="text-stone-600 leading-relaxed">
                  Checking initial drum dyeing strikes, spray line uniformity, and surface feel against buyer approved master cuttings.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg text-xs space-y-1">
                <span className="font-bold text-stone-800 uppercase tracking-wider text-[10px] block">
                  Stage 3: Final Pre-Shipment Inspection & Area Audit
                </span>
                <p className="text-stone-600 leading-relaxed">
                  Auditing electronic area measurement printouts, pack counts, moisture retention, pallet stability, and export markings.
                </p>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic pt-2">
              * Independent third-party inspection agencies (e.g. SGS, Intertek, Bureau Veritas) can also be accommodated at buyer request and cost.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-lg overflow-hidden border border-stone-200 shadow-md bg-stone-900 aspect-[4/3]">
              <img
                src={heroLeatherImg}
                alt="Leather grading and inspection inspection table"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <div className="font-semibold text-[#E8A366] mb-0.5">
                  On-Site Inspection Coordination
                </div>
                <p className="text-stone-200 text-[11px]">
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
                className="p-5 border border-stone-200 rounded-lg bg-stone-50/50 hover:bg-stone-50 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-white border border-stone-200 text-[#C87D3B] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#181310] mb-1.5">
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
