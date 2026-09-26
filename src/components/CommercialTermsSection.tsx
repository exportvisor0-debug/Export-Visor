import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Scale, Clock, CreditCard, Layers, CheckCircle2, FileSpreadsheet } from "lucide-react";

export const CommercialTermsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Commercial Framework
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310] mt-1">
            RFQ-Driven Commercial Terms
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Every export project is uniquely evaluated. Minimum quantities, production schedules, and commercial quotations are formulated strictly based on your Request for Quotation (RFQ) and technical specifications.
          </p>
        </div>

        {/* 4 Commercial Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-lg">
            <div className="w-8 h-8 rounded bg-stone-200/80 text-[#C87D3B] flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Minimum Order Quantity (MOQ)
            </span>
            <div className="font-mono-data text-lg font-bold text-[#181310] mt-1">
              Determined by RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Order volumes and minimums depend on the selected leather category, hide grading distribution, drum loading capacity, and buyer production requirements.
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-lg">
            <div className="w-8 h-8 rounded bg-stone-200/80 text-[#C87D3B] flex items-center justify-center mb-3">
              <Scale className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Tannery Quotation Basis
            </span>
            <div className="font-mono-data text-lg font-bold text-[#181310] mt-1">
              Quoted upon RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Pricing is customized to your exact technical specifications—leather grade, substance/thickness, finish type, test compliance, and total order volume.
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-lg">
            <div className="w-8 h-8 rounded bg-stone-200/80 text-[#C87D3B] flex items-center justify-center mb-3">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Production Lead Time
            </span>
            <div className="font-mono-data text-lg font-bold text-[#181310] mt-1">
              Scheduled per RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Timelines are calculated upon review of raw material availability, beamhouse drum cycles, lab dip/counter-sample approvals, and total batch yardage.
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-lg">
            <div className="w-8 h-8 rounded bg-stone-200/80 text-[#C87D3B] flex items-center justify-center mb-3">
              <CreditCard className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              International Payment Terms
            </span>
            <div className="font-mono-data text-lg font-bold text-[#181310] mt-1">
              LC / TT
            </div>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              Irrevocable Letter of Credit (LC at sight) or Telegraphic Transfer (TT) standard international banking channels for smooth cross-border trade.
            </p>
          </div>

        </div>

        {/* Commercial Clarification Footnote */}
        <div className="mt-6 p-4 border border-stone-200 rounded-md text-[11px] text-stone-500 flex items-start gap-2 bg-stone-50">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong>Transparency Notice:</strong> All commercial terms, batch commitments, and pricing quotations are finalized following technical RFQ review and proforma confirmation based on your exact grade, thickness, and volume requirements.
          </span>
        </div>

      </div>
    </section>
  );
};
