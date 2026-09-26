import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import {
  Send,
  CheckCircle2,
  MessageSquareText,
  Mail,
  Copy,
  Check,
  AlertCircle,
  Paperclip,
  UploadCloud,
} from "lucide-react";

interface QuoteInquirySectionProps {
  prefilledProduct?: string;
  onClearPrefill?: () => void;
}

export const QuoteInquirySection: React.FC<QuoteInquirySectionProps> = ({
  prefilledProduct = "",
  onClearPrefill,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    product: prefilledProduct || "Crust Leather",
    quantity: "",
    leatherType: "Bovine / Cowhide",
    thickness: "1.2 - 1.4 mm",
    color: "Natural / Tan",
    finish: "Milling Crust / Natural",
    application: "Footwear Uppers",
    targetPrice: "",
    message: "",
  });

  const [files, setFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Update product if prefilled prop changes
  React.useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: string[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        newFiles.push(e.target.files[i].name);
      }
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const buildSummaryText = () => {
    return `*ExportVisor Leather Sourcing Inquiry*
---------------------------------------
• Full Name: ${formData.fullName}
• Company: ${formData.companyName}
• Country: ${formData.country}
• Business Email: ${formData.email}
• WhatsApp / Phone: ${formData.phone}
• Product: ${formData.product}
• Required Quantity: ${formData.quantity}
• Leather Type: ${formData.leatherType}
• Thickness: ${formData.thickness}
• Color: ${formData.color}
• Finish: ${formData.finish}
• Intended Application: ${formData.application}
• Target Price (USD): ${formData.targetPrice || "Negotiable / Based on quotation"}
• Additional Specifications: ${formData.message || "None specified"}
• Attachments: ${files.length > 0 ? files.join(", ") : "None"}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.companyName || !formData.email || !formData.country) {
      setErrorMsg("Please complete all required fields (Name, Company, Country, and Business Email).");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    trackEvent("inquiry_form_submit", {
      product: formData.product,
      company: formData.companyName,
      country: formData.country,
      quantity: formData.quantity,
    });
  };

  const handleSendViaWhatsApp = () => {
    trackEvent("whatsapp_click", { location: "inquiry_submit_action" });
    const encodedText = encodeURIComponent(buildSummaryText());
    window.open(`https://wa.me/8801570264394?text=${encodedText}`, "_blank");
  };

  const handleSendViaEmail = () => {
    trackEvent("email_click", { location: "inquiry_submit_action" });
    const subject = encodeURIComponent(
      `Leather Sourcing Inquiry: ${formData.product} - ${formData.companyName} (${formData.country})`
    );
    const body = encodeURIComponent(buildSummaryText());
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(buildSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B]">
            Direct Sourcing Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight mt-1">
            Request a Quotation & Leather Specification Review
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Submit your technical leather requirements below. Our Bangladesh sourcing team will review tannery feasibility, availability, and prepare an indicative commercial offer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Sourcing Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-lg space-y-5">
              <h3 className="font-display text-xl font-semibold text-[#181310]">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Prefer immediate technical consultation? Connect directly with our team via WhatsApp or email.
              </p>

              <div className="space-y-4 pt-1">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "inquiry_sidebar" })}
                  className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-md hover:border-emerald-500 transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquareText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                      WhatsApp Commercial Desk
                    </span>
                    <span className="text-xs font-semibold text-stone-900 group-hover:text-emerald-700">
                      {siteConfig.contact.whatsappFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.emailUrl}
                  onClick={() => trackEvent("email_click", { location: "inquiry_sidebar" })}
                  className="flex items-center gap-3 p-3 bg-white border border-stone-200 rounded-md hover:border-[#C87D3B] transition-colors group"
                >
                  <div className="w-9 h-9 rounded bg-amber-50 text-[#C87D3B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                      Official Inquiries Email
                    </span>
                    <span className="text-xs font-semibold text-stone-900 group-hover:text-[#C87D3B]">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Operating Timezone:</span>
                  <span className="font-semibold text-stone-700">Dhaka, Bangladesh (GMT+6)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Standard Response:</span>
                  <span className="font-semibold text-stone-700">Within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Sourcing Parameters Reminder */}
            <div className="p-5 border border-stone-200 rounded-lg space-y-3 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                RFQ Sourcing Guidelines
              </span>
              <ul className="text-xs text-stone-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">•</span>
                  <span><strong>MOQ & Volumes:</strong> Tailored to your RFQ and tannery drum capacity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">•</span>
                  <span><strong>Quotation:</strong> Formulated based on grade, substance, finish & lot size.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C87D3B] font-bold">•</span>
                  <span><strong>Payment:</strong> International LC at sight or TT.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Inquiry Form / Confirmation State */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-stone-200 rounded-lg shadow-xs">
              
              {submitted ? (
                /* Success Confirmation State with subtle animated checkmark */
                <div className="space-y-6 text-center py-6 sm:py-10 animate-fade-in">
                  <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                    {/* Expanding pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ring-glow pointer-events-none" />
                    
                    {/* Circle Container */}
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/40 flex items-center justify-center shadow-xs animate-circle-scale">
                      <svg
                        viewBox="0 0 48 48"
                        className="w-8 h-8 text-emerald-600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeOpacity="0.2"
                        />
                        <path
                          d="M14 24.5 L21 31.5 L34 17.5"
                          stroke="currentColor"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-checkmark-draw"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="max-w-lg mx-auto">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#181310]">
                      Inquiry Received Successfully
                    </h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                      Thank you for contacting ExportVisor. Your inquiry has been received. Our team will review your requirements and get back to you with commercial feasibility and indicative terms.
                    </p>
                  </div>

                  {/* Immediate Dispatch Action Buttons */}
                  <div className="p-4 bg-white border border-stone-200 rounded-lg max-w-xl mx-auto text-left space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                        Accelerate Your Response
                      </span>
                      <button
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? "Copied to clipboard" : "Copy Inquiry"}</span>
                      </button>
                    </div>

                    <p className="text-xs text-stone-500">
                      You can instantly transmit this inquiry directly to our desk on WhatsApp or launch your mail client:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <button
                        onClick={handleSendViaWhatsApp}
                        className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
                      >
                        <MessageSquareText className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        onClick={handleSendViaEmail}
                        className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors border border-stone-300 cursor-pointer"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Email Client</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-stone-500 hover:text-stone-800 underline cursor-pointer"
                    >
                      Submit another inquiry or edit details
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {prefilledProduct && (
                    <div className="p-3 bg-stone-100 border border-stone-200 rounded-md flex items-center justify-between text-xs">
                      <span>
                        Inquiring for: <strong>{prefilledProduct}</strong>
                      </span>
                      {onClearPrefill && (
                        <button
                          type="button"
                          onClick={onClearPrefill}
                          className="text-[#C87D3B] hover:underline font-medium cursor-pointer"
                        >
                          Change product
                        </button>
                      )}
                    </div>
                  )}

                  {/* Section 1: Contact Information */}
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block mb-3">
                      1. Company & Contact Details
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. David Vance"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Vance Leather Footwear Ltd"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Country / Region *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="e.g. Italy, Germany, USA, Japan..."
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sourcing@company.com"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          WhatsApp / Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000 (includes country code)"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Leather Specification */}
                  <div className="pt-2 border-t border-stone-200">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block mb-3">
                      2. Leather Requirements
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Leather Category
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        >
                          <option value="Crust Leather">Crust Leather</option>
                          <option value="Finished Leather">Finished Leather</option>
                          <option value="Wet Blue Leather">Wet Blue Leather</option>
                          <option value="Full Grain Leather">Full Grain Leather</option>
                          <option value="Top Grain Leather">Top Grain Leather</option>
                          <option value="Corrected Grain Leather">Corrected Grain Leather</option>
                          <option value="Aniline & Semi-Aniline">Aniline & Semi-Aniline</option>
                          <option value="Pigmented Leather">Pigmented Leather</option>
                          <option value="Buyer-Specified Custom Leather">Buyer-Specified Custom Leather</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Required Quantity (sq ft)
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 10,000 sq ft or 20ft FCL"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Target Thickness
                        </label>
                        <input
                          type="text"
                          name="thickness"
                          value={formData.thickness}
                          onChange={handleChange}
                          placeholder="e.g. 1.1 - 1.3 mm"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Preferred Color / Shade
                        </label>
                        <input
                          type="text"
                          name="color"
                          value={formData.color}
                          onChange={handleChange}
                          placeholder="e.g. Tan, Black, Cognac, or Swatch"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Finish / Surface Type
                        </label>
                        <input
                          type="text"
                          name="finish"
                          value={formData.finish}
                          onChange={handleChange}
                          placeholder="e.g. Smooth, Pull-up, Milled, Matte"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Target Price (USD/sq ft)
                        </label>
                        <input
                          type="text"
                          name="targetPrice"
                          value={formData.targetPrice}
                          onChange={handleChange}
                          placeholder="Optional (e.g. $1.05)"
                          className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                        />
                      </div>

                    </div>
                  </div>

                  {/* Section 3: Intended Application & Tech Pack Notes */}
                  <div className="pt-2 border-t border-stone-200 space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Intended Application
                      </label>
                      <input
                        type="text"
                        name="application"
                        value={formData.application}
                        onChange={handleChange}
                        placeholder="e.g. Footwear Uppers, Handbags, Small Leather Goods, Furniture Upholstery..."
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Additional Specifications, Grading Expectations or Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify any special tests, grain selection ratio (TR, A/B/C), destination port, or sampling requests..."
                        className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B]"
                      />
                    </div>

                    {/* File Attachment Simulation */}
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Reference Tech Pack / Swatch Photo (Optional)
                      </label>
                      <div className="border border-dashed border-stone-300 rounded-md p-3 bg-white text-center hover:bg-stone-50 transition-colors relative cursor-pointer">
                        <input
                          type="file"
                          multiple
                          onChange={handleSimulatedFileUpload}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
                          <UploadCloud className="w-4 h-4 text-[#C87D3B]" />
                          <span>Click to attach specifications or photos (PDF, PNG, JPG)</span>
                        </div>
                      </div>

                      {files.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-stone-600">
                          {files.map((file, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 bg-stone-200/80 px-2 py-0.5 rounded"
                            >
                              <Paperclip className="w-3 h-3 text-stone-500" />
                              <span>{file}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-all shadow-xs hover:shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#C87D3B]" />
                      <span>Send Sourcing Inquiry to ExportVisor</span>
                    </button>
                    <p className="text-center text-[11px] text-stone-500 mt-2">
                      Inquiries are handled strictly confidentially. Commercial terms confirmed upon technical review.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
