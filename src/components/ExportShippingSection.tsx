import React from "react";
import { exportShippingImg } from "../data/products";
import { Anchor, Plane, FileCheck2, Box, ShieldCheck, MapPin } from "lucide-react";

export const ExportShippingSection: React.FC = () => {
  const exportSteps = [
    {
      title: "Order Formalization & LC/TT Verification",
      desc: "Finalizing proforma invoices with agreed Incoterms (FOB Chittagong or CIF destination port), confirming shipping marks and consignee details.",
      icon: FileCheck2,
    },
    {
      title: "Seaworthy Packing & Protection",
      desc: "Hides are rolled or flat-stacked with protective interleaving, secured on heat-treated wooden pallets, and wrapped in heavy-duty moisture-barrier poly covers.",
      icon: Box,
    },
    {
      title: "Export Documentation Coordination",
      desc: "Preparation and authentication of Bill of Lading (B/L), Commercial Invoice, Detailed Packing List, Certificate of Origin (COO), and health certificates where required.",
      icon: ShieldCheck,
    },
    {
      title: "Container Freight & Forwarding Coordination",
      desc: "Coordinating with accredited international freight forwarders for container placement, port terminal customs clearance at Chittagong, and vessel dispatch.",
      icon: Anchor,
    },
  ];

  return (
    <section id="export-shipping" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Global Logistics Management
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Export Logistics & International Shipping Support
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            International leather trade demands strict attention to moisture barrier packaging, container stuffing protocols, and accurate customs documentation. We coordinate every export stage with professional diligence.
          </p>
        </div>

        {/* Visual & Context Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 relative rounded-lg overflow-hidden border border-stone-200 shadow-md bg-stone-900 aspect-[16/10]">
            <img
              src={exportShippingImg}
              alt="International container shipping logistics terminal"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <div className="flex items-center gap-1.5 text-[#E8A366] font-semibold mb-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Chittagong Port & Dhaka Air Freight Gateways</span>
              </div>
              <p className="text-stone-200 text-[11px]">
                Connecting Bangladesh tanneries with major global shipping routes to Europe, Asia, North America, and beyond.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310]">
              Logistics Modes & Gateways
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Export shipments from Bangladesh are coordinated through standard international trade corridors based on buyer timeline and volume requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border border-stone-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-xs">
                  <Anchor className="w-4 h-4 text-[#C87D3B]" />
                  <span>Sea Freight (Chittagong Port)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Ideal for commercial production orders (20ft / 40ft FCL or consolidated LCL shipments). Cost-effective with standard maritime transit schedules.
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-stone-900 font-semibold text-xs">
                  <Plane className="w-4 h-4 text-[#C87D3B]" />
                  <span>Air Freight (Dhaka Airport)</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Suitable for urgent pre-production sample swatches, urgent cutting trials, or rapid prototype batches via Hazrat Shahjalal International Airport (DAC).
                </p>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 italic pt-1">
              * Note: ExportVisor coordinates export documentation and forwarding procedures. Shipping operations are executed in collaboration with licensed carriers and freight forwarders.
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
                className="p-5 bg-white border border-stone-200 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-data text-xs text-stone-400 font-bold">
                      0{idx + 1}.
                    </span>
                    <Icon className="w-4 h-4 text-[#C87D3B]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#181310] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-100 text-[10px] uppercase font-bold text-stone-400">
                  Export Protocol
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
