import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { MessageSquareText, ArrowUpRight, X } from "lucide-react";

interface FloatingActionsProps {
  onRequestQuote: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onRequestQuote,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating actions after scrolling past the hero
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick contact and inquiry options"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
    >
      {/* WhatsApp Tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#181310] text-white p-3 rounded-lg shadow-lg border border-stone-800 text-xs max-w-xs animate-fade-in relative mb-1">
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10">
            <span className="font-semibold text-[#E8A366] text-[11px] uppercase tracking-wider">
              Direct Sourcing Desk
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-white"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-stone-200 text-[11px] leading-relaxed">
            Message our Bangladesh team directly on WhatsApp for real-time specification review & price indications.
          </p>
          <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#181310] rotate-45 border-r border-b border-stone-800" />
        </div>
      )}

      <div className="flex items-center gap-2 pointer-events-auto">
        
        {/* Floating Quick Quote Button */}
        <button
          onClick={() => {
            trackEvent("request_quote_click", { location: "floating_action" });
            onRequestQuote();
          }}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#181310] hover:bg-[#2C211B] text-white text-xs font-semibold rounded-full shadow-lg border border-stone-700 hover:shadow-xl transition-all cursor-pointer"
        >
          <span>Request Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C87D3B]" />
        </button>

        {/* Floating WhatsApp Button */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group relative cursor-pointer"
          aria-label="Chat with ExportVisor on WhatsApp"
        >
          <MessageSquareText className="w-6 h-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>

      </div>
    </aside>
  );
};
