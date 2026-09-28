import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What leather types does ExportVisor source from Bangladesh?",
      a: "ExportVisor specializes strictly in leather sourcing. We coordinate supply for Wet Blue, Crust Leather (natural, milling, vegetable, and chrome tanned), Finished Leather (Full Grain, Top Grain, Corrected Grain), Aniline & Semi-Aniline, and Pigmented leathers from reputable Bangladesh tanneries based on buyer technical requirements.",
    },
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Minimum Order Quantities (MOQ) are evaluated on a Request for Quotation (RFQ) basis. They depend on the specific leather grade, tannage type (wet blue, crust, or finished), color selection, and tannery drum capacities. We evaluate each buyer requirement to recommend viable lot sizes.",
    },
    {
      q: "How is leather pricing determined?",
      a: "Pricing is calculated strictly upon submission of an RFQ. It is governed by raw hide selection, substance/thickness tolerances, finish complexity, chemical standards, testing requirements, and overall order volume.",
    },
    {
      q: "Can buyers request specific custom leather specifications and colors?",
      a: "Yes. Sourcing to exact buyer specifications is our core business. Buyers can provide target thickness (e.g. 1.1–1.3 mm, 1.4–1.6 mm), temper (soft, medium, firm), grain pattern, and master Pantone references or physical cuttings. We coordinate counter-sample development with matching local tanneries.",
    },
    {
      q: "Can international buyers request leather samples before committing to bulk orders?",
      a: "Yes. Swatches and reference cuttings can be coordinated for technical review. Once specifications and commercial terms are aligned, counter-samples can be developed and dispatched via express international courier for your testing and approval.",
    },
    {
      q: "What is the typical production lead time?",
      a: "Production lead times depend on the RFQ specifics—such as whether raw hides are in stock or require fresh sorting, beamhouse drum cycles, lab dip/counter-sample approvals, and overall order yardage. A realistic delivery schedule is provided with your quotation.",
    },
    {
      q: "What international payment terms are accepted?",
      a: "Transactions are conducted using standard international commercial instruments: Irrevocable Letter of Credit at sight (LC) or Telegraphic Transfer (TT) through recognized international commercial banks.",
    },
    {
      q: "Can buyers arrange on-site or third-party inspections?",
      a: "Absolutely. ExportVisor provides internal buyer-aligned inspection coordination at the tannery level throughout the tanning, finishing, and packing stages. In addition, international third-party inspection firms (such as SGS, Intertek, or Bureau Veritas) can be facilitated upon buyer request.",
    },
    {
      q: "Is ExportVisor a leather goods manufacturer or a sourcing partner?",
      a: "ExportVisor is specifically a leather sourcing and export agency in Bangladesh. We focus exclusively on sourcing and exporting genuine leather (wet blue, crust, and finished hides) and do not position ourselves as finished footwear or handbag makers.",
    },
    {
      q: "How does ExportVisor support international buyers?",
      a: "We act as your local sourcing team in Bangladesh: identifying capable tanneries, negotiating indicative terms, communicating technical tech packs in detail, overseeing production schedules, supervising multi-point quality checks, and managing export documentation.",
    },
    {
      q: "How can I contact ExportVisor to request a quotation?",
      a: "You can submit an inquiry through our online Request a Quote system, email us directly at info@exportvisor.com, or message our team on WhatsApp at +880 1570-264394. We respond promptly with technical feedback and commercial feasibility.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#C89D43]" />
              <span>Commercial Inquiries & Policies</span>
            </div>
            <SectionShareButton path="/faq" sectionName="FAQ" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] leading-tight mt-1">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
            Direct, factual answers regarding sourcing procedures, minimum orders, commercial benchmarks, and export logistics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-stone-200 border-t border-b border-stone-200">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left py-2 focus:outline-none cursor-pointer group"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#15120E] group-hover:text-[#C89D43] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-stone-400 group-hover:text-stone-900 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-amber-50 text-[#C89D43]" : "bg-stone-100"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-2 pr-6 text-xs sm:text-sm text-stone-600 leading-relaxed animate-fade-in">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
