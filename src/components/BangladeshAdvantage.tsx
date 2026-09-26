import React from "react";
import { MapPin, Globe, CheckCircle2, Factory, Shield, Layers } from "lucide-react";

export const BangladeshAdvantage: React.FC = () => {
  return (
    <section id="bangladesh-sourcing" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Origin Ecosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Source Leather from Bangladesh
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Bangladesh possesses an established, resource-rich leather tanning sector with direct access to domestic raw bovine hides, organized industrial tanning estates, and competitive export manufacturing capabilities.
          </p>
        </div>

        {/* 2-Column Split: Ecosystem Facts & Strategic Map/Hub Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Sourcing Realities */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310]">
                The Bangladesh Sourcing Advantage
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                For international footwear manufacturers, leather goods producers, and raw leather re-tanners, Bangladesh offers distinct advantages when navigated through an experienced on-the-ground agency:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Factory className="w-5 h-5 text-[#C87D3B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#181310]">
                        Centralized Tannery Industrial Estate (Savar, Dhaka)
                      </h4>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        Tanneries in Bangladesh have transitioned to the centralized Tannery Industrial Estate at Savar, facilitating clustered production, standardized effluent treatment infrastructure (CETP), and specialized chemical beamhouse operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-[#C87D3B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#181310]">
                        Inherent Raw Material Quality
                      </h4>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        Bangladesh bovine and goat skins are widely recognized for their fine fiber structure, tight grain characteristics, and natural tensile resilience, making them highly versatile across footwear uppers and supple leather accessories.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#C87D3B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#181310]">
                        Competitive Value & Direct Tannery Linkage
                      </h4>
                      <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                        Sourcing directly from Bangladesh tanneries with ExportVisor eliminates multi-tiered international trading markups, giving you transparent pricing and direct production oversight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
              <span className="font-semibold text-stone-800">Our Role:</span> ExportVisor does not replace the tannery; we make the tannery accessible, accountable, and transparent to international buyers.
            </div>
          </div>

          {/* Right Column: Bangladesh Map & Sourcing Hub Card */}
          <div className="lg:col-span-5 bg-[#181310] text-white rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C87D3B_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#E8A366] font-bold">
                  Sourcing Hub Profile
                </span>
                <span className="font-mono-data text-xs text-stone-400">
                  Dhaka / Savar
                </span>
              </div>

              <div>
                <h4 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                  Industrial Leather Axis
                </h4>
                <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                  Located strategically in the South Asian manufacturing corridor with direct maritime access to global trade lanes.
                </p>
              </div>

              {/* Schematic Map Representation */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="text-stone-400">Primary Tannery Cluster</span>
                  <span className="font-semibold text-white">Savar Industrial Estate</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="text-stone-400">Primary Sea Freight Port</span>
                  <span className="font-semibold text-white">Chittagong Port (CTG)</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="text-stone-400">Air Cargo Hub</span>
                  <span className="font-semibold text-white">Dhaka Airport (DAC)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Typical Lead Time</span>
                  <span className="font-semibold text-[#E8A366]">15–20 Days</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C87D3B]" />
                  <span>Direct tannery coordination in Dhaka</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C87D3B]" />
                  <span>Full container load (FCL) & LCL consolidation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C87D3B]" />
                  <span>Multi-country export documentation support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Timezone: GMT+6</span>
              <span className="text-[#E8A366]">ExportVisor Field Presence</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
