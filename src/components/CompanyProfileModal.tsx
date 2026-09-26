import React from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { X, Printer, Download, Mail, Phone, MapPin, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    trackEvent("company_profile_view", { action: "print" });
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl border border-stone-200 overflow-hidden my-auto max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#181310] text-[#C87D3B] flex items-center justify-center font-serif text-xs font-bold">
              EV
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
              ExportVisor Corporate Brief & Scope
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-50 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded transition-colors"
              aria-label="Close profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Profile Content */}
        <div className="overflow-y-auto flex-1 p-8 sm:p-10 space-y-8 bg-white text-stone-800">
          
          {/* Header Block */}
          <div className="border-b border-stone-300 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold tracking-tight text-[#181310]">
                  Export<span className="text-[#C87D3B]">Visor</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                  · Corporate Profile
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right text-xs text-stone-500 space-y-1">
              <p>Origin: Dhaka, Bangladesh</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>WhatsApp: {siteConfig.contact.whatsappFormatted}</p>
            </div>
          </div>

          {/* Executive Overview */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C87D3B]">
              1. Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              ExportVisor is a Bangladesh-based B2B leather sourcing agency acting as an international buyer’s liaison and inspection coordinator. We connect global footwear manufacturers, leather goods brands, and wholesale importers with vetted tanneries across Bangladesh. We do not manufacture finished goods; our core specialization is sourcing and exporting genuine leather (Wet Blue, Crust, and Finished Leather) strictly aligned with buyer technical specifications.
            </p>
          </div>

          {/* Sourcing Scope */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C87D3B]">
              2. Sourcing Scope & Product Classifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                <strong className="block text-stone-900 mb-1">Wet Blue Leather</strong>
                <p className="text-stone-600 leading-relaxed">
                  Full substance, grain splits, and drop splits for international re-tanning mills.
                </p>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                <strong className="block text-stone-900 mb-1">Crust Leather</strong>
                <p className="text-stone-600 leading-relaxed">
                  Chrome-tanned and vegetable-tanned crust, natural milling crust ready for coloration.
                </p>
              </div>
              <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                <strong className="block text-stone-900 mb-1">Finished Leather</strong>
                <p className="text-stone-600 leading-relaxed">
                  Full grain, top grain, corrected grain, aniline, semi-aniline, and pigmented leathers.
                </p>
              </div>
            </div>
          </div>

          {/* Commercial Framework */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C87D3B]">
              3. Commercial Framework & RFQ Evaluation
            </h2>
            <div className="border border-stone-200 rounded divide-y divide-stone-200 text-xs">
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-semibold text-stone-700">Minimum Order Quantity (MOQ)</span>
                <span className="col-span-2 text-stone-800">
                  Determined per RFQ (Tailored to leather type, grade distribution & drum capacity)
                </span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-semibold text-stone-700">Tannery Quotation Basis</span>
                <span className="col-span-2 text-stone-800">
                  Formulated upon RFQ review (Governed by substance, finish, testing & volume)
                </span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-semibold text-stone-700">Production Lead Time</span>
                <span className="col-span-2 text-stone-800">
                  Scheduled per RFQ & proforma invoice agreement
                </span>
              </div>
              <div className="grid grid-cols-3 p-2.5">
                <span className="font-semibold text-stone-700">International Payment Terms</span>
                <span className="col-span-2 text-stone-800">
                  Irrevocable Letter of Credit (LC at sight) or Telegraphic Transfer (TT)
                </span>
              </div>
            </div>
          </div>

          {/* Operational Coordination Workflow */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#C87D3B]">
              4. Key Buyer Services
            </h2>
            <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
              <li>Tannery matching and vetting tailored to product machinery requirements.</li>
              <li>Translation of buyer tech packs, thickness tolerances, and color swatches.</li>
              <li>Counter-sample coordination and courier dispatch.</li>
              <li>On-site quality and inspection coordination prior to packaging.</li>
              <li>Export packaging compliance (heat-treated pallets, moisture barrier wrap).</li>
              <li>Export logistics and documentation (Bill of Lading, COO, Commercial Invoice).</li>
            </ul>
          </div>

          {/* Official Contacts Block */}
          <div className="pt-4 border-t border-stone-300 text-xs text-stone-600 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <p className="font-semibold text-stone-900">ExportVisor Sourcing Desk</p>
              <p>Email: {siteConfig.contact.email}</p>
              <p>WhatsApp: {siteConfig.contact.whatsappFormatted}</p>
            </div>
            <div>
              <p className="font-semibold text-stone-900">Registered Hub</p>
              <p>{siteConfig.company.hqLocation}</p>
              <p>© 2026 ExportVisor. All rights reserved.</p>
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 border-t border-stone-200 bg-[#FAF8F5] flex items-center justify-between print:hidden">
          <span className="text-xs text-stone-500">
            ExportVisor B2B Leather Sourcing Agency · Bangladesh
          </span>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-colors"
          >
            Submit Sourcing Inquiry
          </button>
        </div>

      </div>
    </div>
  );
};
