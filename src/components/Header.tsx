import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowUpRight, MessageSquareText, Mail, Phone, Globe, Check } from "lucide-react";
import { navigateTo } from "../utils/router";

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
  const { t, language, setLanguage, options } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.about, path: "/about" },
    { label: t.nav.leather, path: "/products" },
    { label: language === "bn" ? "লেদার গাইড" : "Glossary", path: "/glossary" },
    { label: t.nav.terms, path: "/terms" },
    { label: t.nav.knowledge, path: "/knowledge-hub" },
    { label: t.nav.process, path: "/sourcing-process" },
    { label: t.nav.quality, path: "/quality-inspection" },
    { label: t.nav.contact, path: "/quote" },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigateTo(path, true);
  };

  const currentOption = options.find((opt) => opt.code === language) || options[0];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-[#FAF8F5]/95 backdrop-blur-md ${
          isScrolled
            ? "border-b border-stone-200/90 shadow-sm py-2.5 sm:py-3"
            : "border-b border-stone-200/60 py-3 sm:py-3.5 shadow-2xs"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Zone 1: Brand Logo */}
            <a
              href="/"
              className="flex items-center group py-0.5 shrink-0 max-w-[150px] sm:max-w-[200px]"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/", true);
              }}
              title="ExportVisor - Go Global with ExportVisor"
            >
              <img
                src="/Logo3_4.png"
                alt="ExportVisor - Bangladesh Leather Sourcing & Export"
                className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Logo_3_4_-removebg-preview.png";
                }}
              />
            </a>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium text-stone-600">
              {navLinks.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="whitespace-nowrap transition-colors hover:text-[#181310] hover:underline underline-offset-4 decoration-[#C89D43] py-1"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={onOpenCompanyProfile}
                className="whitespace-nowrap text-xs font-semibold text-stone-500 hover:text-[#C89D43] transition-colors cursor-pointer py-1"
              >
                {t.nav.companyProfile}
              </button>
            </nav>

            {/* Zone 3: Desktop & Tablet Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 shrink-0">
              {/* Language Switcher - visible on tablet & desktop */}
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", { location: "header_quick_action" })
                }
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-md transition-colors shadow-2xs"
                title="Connect directly on WhatsApp"
              >
                <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                <span className="whitespace-nowrap">{t.nav.whatsApp}</span>
              </a>

              {/* Primary Request a Quote Button (desktop and tablet >=640px) */}
              <button
                onClick={() => {
                  trackEvent("request_quote_click", { location: "header" });
                  onRequestQuote();
                }}
                className="hidden sm:inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-[#181310] to-[#261E17] hover:from-[#261E17] hover:to-[#382C22] border border-[#C89D43]/40 rounded-md transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap group"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#E5BE58] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Mobile Quick Flag/Language Indicator button (<640px) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="sm:hidden flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 border border-stone-200 rounded-md"
                aria-label="Open language selection"
              >
                <span className="text-sm">{currentOption.flag}</span>
                <span className="text-[10px] font-mono uppercase font-bold text-stone-600">
                  {currentOption.code}
                </span>
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-700 hover:text-stone-900 lg:hidden focus:outline-none rounded-lg hover:bg-stone-200/60 transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
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
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF8F5] animate-fade-in">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-stone-200 bg-white">
            <div className="flex items-center">
              <img
                src="/Logo3_4.png"
                alt="ExportVisor Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Logo_3_4_-removebg-preview.png";
                }}
              />
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body - Scrollable */}
          <div className="flex-1 px-4 py-5 overflow-y-auto space-y-6">
            {/* Quick Actions (Request a Quote + WhatsApp) */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-xs font-bold bg-[#181310] text-white border border-[#C89D43]/40 shadow-xs cursor-pointer active:scale-98 transition-transform"
              >
                <span>{t.nav.requestQuote}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5BE58]" />
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("whatsapp_click", { location: "mobile_drawer" });
                }}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs active:scale-98 transition-transform"
              >
                <MessageSquareText className="w-3.5 h-3.5" />
                <span>{t.nav.whatsApp}</span>
              </a>
            </div>

            {/* Language Selector Section inside Hamburger */}
            <div className="p-3.5 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between text-stone-600">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#C89D43]" />
                  Language / ভাষা / Sprache
                </span>
                <span className="text-xs font-semibold text-[#7A5A17]">
                  {currentOption.nativeName}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
                {options.map((opt) => {
                  const isSelected = opt.code === language;
                  return (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLanguage(opt.code);
                        trackEvent("request_quote_click", {
                          action: "language_switched_mobile",
                          language: opt.code,
                        });
                      }}
                      className={`flex items-center justify-between p-2 rounded-lg text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#181310] text-white font-bold shadow-xs border border-[#C89D43]/40"
                          : "bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200/80"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-sm shrink-0">{opt.flag}</span>
                        <span className="truncate text-[11px] leading-tight font-medium">
                          {opt.nativeName}
                        </span>
                      </div>
                      {isSelected && (
                        <Check className="w-3 h-3 text-[#E5BE58] shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mb-2">
                Navigation
              </p>
              <nav className="flex flex-col space-y-1 bg-white rounded-xl border border-stone-200 overflow-hidden divide-y divide-stone-100">
                {navLinks.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.path);
                    }}
                    className="text-sm font-semibold text-stone-800 hover:text-[#C89D43] transition-colors px-4 py-3 flex items-center justify-between hover:bg-stone-50"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-stone-400" />
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCompanyProfile();
                  }}
                  className="w-full text-left text-sm font-semibold text-stone-800 hover:text-[#C89D43] transition-colors px-4 py-3 flex items-center justify-between hover:bg-stone-50 cursor-pointer"
                >
                  <span>{t.nav.companyProfile}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C89D43]/15 text-[#7A5A17]">
                    PDF
                  </span>
                </button>
              </nav>
            </div>

            {/* Contact & Office info footer */}
            <div className="p-3.5 bg-stone-100/90 rounded-xl text-xs space-y-2 text-stone-700">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#C89D43]"
              >
                <Mail className="w-4 h-4 text-[#C89D43] shrink-0" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-700"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{siteConfig.contact.whatsappFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
