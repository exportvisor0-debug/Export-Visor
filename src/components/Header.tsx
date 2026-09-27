import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowUpRight, MessageSquareText, Mail, Phone } from "lucide-react";

interface HeaderProps {
  onRequestQuote: (prefillProduct?: string) => void;
  onOpenCompanyProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onRequestQuote,
  onOpenCompanyProfile,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.leather, href: "#leather-products" },
    { label: t.nav.knowledge, href: "#knowledge-hub" },
    { label: t.nav.process, href: "#sourcing-process" },
    { label: t.nav.quality, href: "#quality-inspection" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3"
            : "bg-[#FAF8F5] border-b border-stone-200/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Logo */}
            <a
              href="#"
              className="flex items-center group py-0.5"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/Logo3_4.png"
                alt="ExportVisor - Bangladesh Leather Sourcing & Export"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Logo_3_4_-removebg-preview.png";
                }}
              />
            </a>

            {/* Zone 2: 4-6 clean single-line navigation links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-stone-600">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="whitespace-nowrap transition-colors hover:text-[#181310] hover:underline underline-offset-4 decoration-[#C89D43]"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={onOpenCompanyProfile}
                className="whitespace-nowrap text-xs font-semibold text-stone-500 hover:text-[#C89D43] transition-colors cursor-pointer"
              >
                {t.nav.companyProfile}
              </button>
            </nav>

            {/* Zone 3: Actions + Language Switcher */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* WhatsApp Quick Link */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { location: "header_quick_action" })
                }
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-md transition-colors shadow-2xs"
                title="Connect directly on WhatsApp"
              >
                <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                <span className="whitespace-nowrap">{t.nav.whatsApp}</span>
              </a>

              {/* Primary Request a Quote Button */}
              <button
                onClick={() => {
                  trackEvent("request_quote_click", { location: "header" });
                  onRequestQuote();
                }}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-[#181310] to-[#261E17] hover:from-[#261E17] hover:to-[#382C22] border border-[#C89D43]/40 rounded-md transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap group"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#E5BE58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-600 hover:text-stone-900 md:hidden focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#FAF8F5]">
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <div className="flex items-center">
              <img
                src="/Logo3_4.png"
                alt="ExportVisor Logo"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Logo_3_4_-removebg-preview.png";
                }}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <LanguageSwitcher align="right" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-stone-600 hover:text-stone-900"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 px-6 py-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                Navigation
              </p>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-lg font-medium text-stone-800 hover:text-[#C89D43] transition-colors py-1 border-b border-stone-200/50"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCompanyProfile();
                  }}
                  className="text-left text-lg font-medium text-stone-800 hover:text-[#C89D43] transition-colors py-1 border-b border-stone-200/50"
                >
                  {t.nav.companyProfile}
                </button>
              </nav>
            </div>

            <div className="pt-6 space-y-4">
              <div className="p-4 bg-stone-100 rounded-lg text-xs space-y-2 text-stone-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C89D43]" />
                  <span>{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C89D43]" />
                  <span>{siteConfig.contact.whatsappFormatted}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-semibold bg-emerald-600 text-white shadow-xs"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>{t.nav.whatsApp}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-bold bg-[#181310] text-white border border-[#C89D43]/40 shadow-xs"
                >
                  <span>{t.nav.requestQuote}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E5BE58]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
