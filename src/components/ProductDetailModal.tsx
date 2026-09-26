import React from "react";
import { LeatherProduct } from "../data/products";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import {
  X,
  ArrowUpRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Clock,
  Coins,
  CheckCircle2,
  FileText,
  MessageSquareText,
  Leaf,
} from "lucide-react";

interface ProductDetailModalProps {
  product: LeatherProduct | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
              {product.category}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 font-medium">
              Origin: {product.origin}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          
          {/* Top Overview Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Image Preview */}
            <div className="md:col-span-5 relative rounded-lg overflow-hidden bg-stone-900 aspect-[4/3] border border-stone-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Sustainable Sourcing badge overlay */}
              {product.isSustainable && (
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-xs text-emerald-400 border border-emerald-500/40 text-[10px] font-semibold tracking-wide shadow-xs">
                  <Leaf className="w-3 h-3 text-emerald-400" />
                  <span>Sustainable Sourcing</span>
                </div>
              )}

              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Photographed Leather Sample
              </div>
            </div>

            {/* Title & Core Overview */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#181310] tracking-tight">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Eco-Compliant Sourcing Callout */}
              {product.isSustainable && (
                <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-md flex items-start gap-2.5 text-xs text-emerald-900">
                  <Leaf className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-950 font-semibold">
                      Sustainable & Eco-Compliant Tanning Available
                    </strong>
                    <span className="text-emerald-800 leading-relaxed block mt-0.5">
                      {product.sustainabilityNote}. Sourced in alignment with the Savar Tannery Estate Central Effluent Treatment Plant (CETP), REACH chemical standards, and optional vegetable/chrome-free formulations.
                    </span>
                  </div>
                </div>
              )}

              {/* Commercial Metrics Strip */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#FAF8F5] border border-stone-200 rounded-md">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500">
                    MOQ & Batch Volume
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310]">
                    Determined per RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500">
                    Quotation Basis
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310]">
                    Quoted upon RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500">
                    Production Lead Time
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310]">
                    Scheduled per RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500">
                    Sourcing Origin
                  </span>
                  <span className="text-xs font-semibold text-[#181310]">
                    Bangladesh Tanneries
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500 italic">
                * Note: Minimum order quantities, production lead times, and commercial quotations are established upon technical RFQ review based on your required substance, grade distribution, finish, and volume.
              </p>
            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            <div className="bg-stone-50 px-4 py-3 border-b border-stone-200 font-semibold text-xs text-stone-700 uppercase tracking-wider">
              Technical Sourcing Parameters
            </div>
            <div className="divide-y divide-stone-200 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Material & Substrate</span>
                <span className="sm:col-span-2 text-stone-900 font-semibold">
                  {product.materialType}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Available Thicknesses</span>
                <span className="sm:col-span-2 text-stone-900 font-semibold">
                  {product.thicknessRange}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Available Finishes</span>
                <span className="sm:col-span-2 text-stone-900">
                  {product.availableFinishes.join(" · ")}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Color Options</span>
                <span className="sm:col-span-2 text-stone-900">
                  {product.colorOptions}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Size & Area Measurement</span>
                <span className="sm:col-span-2 text-stone-900">
                  {product.sizeMeasurement}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Environmental Compliance</span>
                <span className="sm:col-span-2 text-stone-900">
                  {product.isSustainable ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-800 font-semibold">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{product.sustainabilityNote}</span>
                    </span>
                  ) : (
                    <span className="text-stone-700">
                      Standard Savar CETP effluent compliance · REACH audit available on RFQ
                    </span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 hover:bg-stone-50/50">
                <span className="font-medium text-stone-600">Applications</span>
                <span className="sm:col-span-2 text-stone-900">
                  {product.applications.join(", ")}
                </span>
              </div>

            </div>
          </div>

          {/* Quality & Inspection Coordination Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 border border-stone-200 rounded-lg bg-[#FAF8F5]">
              <div className="flex items-center gap-2 mb-2 text-stone-800 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-[#C87D3B]" />
                <span>Quality & Inspection Protocol</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {product.qualityInspection}
              </p>
            </div>

            <div className="p-4 border border-stone-200 rounded-lg bg-[#FAF8F5]">
              <div className="flex items-center gap-2 mb-2 text-stone-800 font-semibold text-xs">
                <Package className="w-4 h-4 text-[#C87D3B]" />
                <span>Export Packaging & Shipping</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {product.packagingShipping}
              </p>
            </div>

          </div>

          {/* Buyer Requirements Guidance */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-1">
            <span className="font-bold text-stone-800 uppercase tracking-wider block text-[10px]">
              Buyer Specification Guide
            </span>
            <p className="text-stone-600 leading-relaxed">
              {product.buyerRequirementsNote}
            </p>
            <p className="text-[11px] text-[#C87D3B] font-medium pt-1">
              Availability: {product.availabilityNote}
            </p>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t border-stone-200 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            Selected product: <strong className="text-stone-800">{product.name}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/8801570264394?text=Hello%20ExportVisor%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(
                product.name
              )}%20specifications.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", {
                  product_name: product.name,
                  location: "product_modal",
                })
              }
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-50 transition-colors"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-all shadow-xs"
            >
              <span>Request Quote for This Leather</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#C87D3B]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
