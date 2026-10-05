import React, { useState } from "react";
import { LeatherProduct } from "../data/products";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
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
  Share2,
  Copy,
  Check,
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
  const { language } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const productUrl = `https://exportvisor.com/product/${product.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productUrl);
    setCopiedLink(true);
    trackEvent("copy_product_link", { product_id: product.id });
    setTimeout(() => setCopiedLink(false), 2500);
  };

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
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-[#15100C]">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C89D43]">
              {product.category}
            </span>
            <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
            <span className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              Origin: {product.origin}
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-stone-300 dark:text-stone-700">·</span>
            <button
              onClick={handleCopyLink}
              title="Copy direct product link for sharing"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-stone-500" />
                  <span>/product/{product.id}</span>
                </>
              )}
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800 rounded-md transition-colors cursor-pointer"
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
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-stone-50/70 dark:bg-[#15100C] border border-stone-200 dark:border-stone-800 rounded-md">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">
                    MOQ & Batch Volume
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310] dark:text-[#FAF6F0]">
                    Determined per RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">
                    Quotation Basis
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310] dark:text-[#FAF6F0]">
                    Quoted upon RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">
                    Production Lead Time
                  </span>
                  <span className="font-mono-data text-xs font-semibold text-[#181310] dark:text-[#FAF6F0]">
                    Scheduled per RFQ
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">
                    Sourcing Origin
                  </span>
                  <span className="text-xs font-semibold text-[#181310] dark:text-[#FAF6F0]">
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
            
            <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/70 dark:bg-[#15100C]">
              <div className="flex items-center gap-2 mb-2 text-stone-900 dark:text-[#FAF6F0] font-bold text-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Quality & Inspection Protocol</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {product.qualityInspection}
              </p>
            </div>

            <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-xl bg-stone-50/70 dark:bg-[#15100C]">
              <div className="flex items-center gap-2 mb-2 text-stone-900 dark:text-[#FAF6F0] font-bold text-xs">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 flex items-center justify-center">
                  <Package className="w-4 h-4" />
                </div>
                <span>Export Packaging & Shipping</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {product.packagingShipping}
              </p>
            </div>

          </div>

          {/* Buyer Requirements Guidance */}
          <div className="p-4 bg-stone-50 dark:bg-[#15100C] border border-stone-200 dark:border-stone-800 rounded-xl text-xs space-y-1">
            <span className="font-bold text-[#7A5A17] dark:text-[#E5BE58] uppercase tracking-wider block text-[10px]">
              Buyer Specification Guide
            </span>
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              {product.buyerRequirementsNote}
            </p>
            <p className="text-[11px] text-[#C89D43] dark:text-[#E5BE58] font-semibold pt-1">
              Availability: {product.availabilityNote}
            </p>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-[#15100C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-500 dark:text-stone-400">
            Selected product: <strong className="text-stone-800 dark:text-stone-200">{product.name}</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyLink}
              title="Copy direct product URL"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">
                    {language === "bn" ? "লিংক কপি হয়েছে" : "Link Copied"}
                  </span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#C89D43]" />
                  <span>{language === "bn" ? "শেয়ার করুন" : "Share Product"}</span>
                </>
              )}
            </button>

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
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
            >
              <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "bn" ? "হোয়াটসঅ্যাপে যোগাযোগ" : "Ask on WhatsApp"}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-[#15120E] bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] rounded-lg transition-all shadow-gold-subtle cursor-pointer"
            >
              <span>{language === "bn" ? "এই লেদারের জন্য কোটেশন নিন" : "Request Quote for This Leather"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#15120E]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
