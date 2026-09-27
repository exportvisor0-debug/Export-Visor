import React from "react";
import { Scale, Clock, CreditCard, Layers, CheckCircle2 } from "lucide-react";

export const CommercialTermsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider mb-2">
            Transparent Commercial Policy
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15120E] mt-1">
            RFQ-Driven <span className="text-gold-gradient">Commercial Terms & Standards</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2.5 leading-relaxed">
            Every export shipment is uniquely calibrated. Minimum quantities, drum processing schedules, and commercial quotations are formulated strictly based on your Request for Quotation (RFQ) and technical specifications.
          </p>
        </div>

        {/* 4 Commercial Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: MOQ */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-emerald-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                Flexible MOQ
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Minimum Order Quantity (MOQ)
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              Determined by RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              Order volumes and minimums depend on selected leather category, hide grading distribution, drum loading capacity, and buyer production requirements.
            </p>
          </div>

          {/* Card 2: Quotation */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-[#C89D43]/60 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#C89D43] border border-[#C89D43]/30 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-[#7A5A17] border border-amber-200 font-semibold">
                Direct Mill FOB/CIF
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Tannery Quotation Basis
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              Quoted upon RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              Pricing is customized to your exact technical specifications—leather grade, substance/thickness, finish type, test compliance, and total order volume.
            </p>
          </div>

          {/* Card 3: Lead Time */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-blue-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 border border-blue-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-semibold">
                Scheduled Batches
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              Production Lead Time
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              Scheduled per RFQ
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              Timelines are calculated upon review of raw material availability, beamhouse drum cycles, lab dip/counter-sample approvals, and total batch yardage.
            </p>
          </div>

          {/* Card 4: Payment Terms */}
          <div className="p-6 bg-[#FAF8F5] border border-stone-200/90 hover:border-purple-500/40 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-md group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/25 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-semibold">
                Trade Security
              </span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
              International Payment Terms
            </span>
            <div className="font-mono-data text-xl font-bold text-[#15120E] mt-1">
              LC / TT
            </div>
            <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
              Irrevocable Letter of Credit (LC at sight) or Telegraphic Transfer (TT) standard international banking channels for smooth cross-border trade.
            </p>
          </div>

        </div>

        {/* Commercial Clarification Footnote */}
        <div className="mt-8 p-4 border border-[#C89D43]/30 rounded-xl text-[11px] text-stone-600 flex items-start gap-3 bg-[#FBF8F1] shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-stone-900">Transparency Notice:</strong> All commercial terms, batch commitments, and pricing quotations are finalized following technical RFQ review and proforma confirmation based on your exact grade, thickness, and volume requirements.
          </span>
        </div>

      </div>
    </section>
  );
};
