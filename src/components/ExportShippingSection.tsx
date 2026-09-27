import React from "react";
import { exportShippingImg } from "../data/products";
import { Anchor, Plane, FileCheck2, Box, ShieldCheck, MapPin } from "lucide-react";

export const ExportShippingSection: React.FC = () => {
  const exportSteps = [
    {
      title: "Order Formalization & LC/TT Verification",
      desc: "Finalizing proforma invoices with agreed Incoterms (FOB Chittagong or CIF destination port), confirming shipping marks and consignee details.",
      icon: FileCheck2,
      badgeColor: "bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30",
    },
    {
      title: "Seaworthy Packing & Protection",
      desc: "Hides are rolled or flat-stacked with protective interleaving, secured on heat-treated ISPM-15 wooden pallets, and wrapped in heavy-duty moisture-barrier poly covers.",
      icon: Box,
      badgeColor: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/25",
    },
    {
      title: "Export Documentation Coordination",
      desc: "Preparation and authentication of Bill of Lading (B/L), Commercial Invoice, Detailed Packing List, Certificate of Origin (COO), and health certificates where required.",
      icon: ShieldCheck,
      badgeColor: "bg-indigo-500/10 text-indigo-600 border border-indigo-500/25",
    },
    {
      title: "Container Freight & Forwarding Coordination",
      desc: "Coordinating with accredited international freight forwarders for container placement, port terminal customs clearance at Chittagong, and vessel dispatch.",
      icon: Anchor,
      badgeColor: "bg-blue-500/10 text-blue-600 border border-blue-500/25",
    },
  ];

  return (
    <section id="export-shipping" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider mb-2">
            Global Logistics Management
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            Export Logistics & <span className="text-gold-gradient">International Shipping Support</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            International leather trade demands strict attention to moisture-barrier packaging, container stuffing protocols, and accurate customs documentation. We coordinate every export stage with professional diligence.
          </p>
        </div>

        {/* Visual & Context Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#C89D43]/30 shadow-lg bg-stone-900 aspect-[16/10] group">
            <img
              src={exportShippingImg}
              alt="International container shipping logistics terminal"
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <div className="flex items-center gap-1.5 text-[#E5BE58] font-bold mb-0.5">
                <MapPin className="w-4 h-4 text-[#E5BE58]" />
                <span>Chittagong Port & Dhaka Air Freight Gateways</span>
              </div>
              <p className="text-stone-200 text-[11px] leading-relaxed">
                Direct vessel access to European, Asian, Middle Eastern, and American trading hubs with pre-cleared customs documentation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#15120E]">
              Logistics Modes & Trade Gateways
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Export shipments from Bangladesh are coordinated through standard international trade corridors based on buyer timeline, volume requirements, and destination Incoterms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:border-blue-500/40 transition-colors group">
                <div className="flex items-center gap-2.5 mb-2 text-[#15120E] font-bold text-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Anchor className="w-4 h-4" />
                  </div>
                  <span>Sea Freight (Chittagong Port)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ideal for commercial production orders (20ft / 40ft FCL or consolidated LCL shipments). Cost-effective with standard maritime transit schedules.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:border-sky-500/40 transition-colors group">
                <div className="flex items-center gap-2.5 mb-2 text-[#15120E] font-bold text-xs">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 border border-sky-500/25 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span>Air Freight (Dhaka Airport)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Suitable for urgent pre-production sample swatches, urgent cutting trials, or rapid prototype batches via Hazrat Shahjalal International Airport (DAC).
                </p>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic pt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C89D43] shrink-0" />
              <span>* Note: ExportVisor coordinates export documentation and forwarding procedures with top licensed maritime carriers and air freight forwarders.</span>
            </p>
          </div>

        </div>

        {/* 4 Logistics Coordination Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exportSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="p-5 bg-white border border-stone-200/90 rounded-xl shadow-2xs hover:border-[#C89D43]/50 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono-data text-xs text-[#7A5A17] font-bold bg-[#FAF8F5] border border-stone-200/80 px-2 py-0.5 rounded">
                      0{idx + 1}.
                    </span>
                    <div className={`w-8 h-8 rounded-lg ${step.badgeColor} flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-[#15120E] mb-1.5 group-hover:text-[#C89D43] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-stone-100 text-[10px] uppercase font-bold text-[#7A5A17] flex items-center justify-between">
                  <span>Export Protocol</span>
                  <span className="text-stone-400">Step 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
