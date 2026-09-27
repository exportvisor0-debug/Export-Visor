import React, { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustComplianceStrip } from "./components/TrustComplianceStrip";
import { AboutSection } from "./components/AboutSection";
import { LeatherCatalogue } from "./components/LeatherCatalogue";
import { CommercialTermsSection } from "./components/CommercialTermsSection";
import { SourcingProcess } from "./components/SourcingProcess";
import { QualityInspectionSection } from "./components/QualityInspectionSection";
import { LeatherKnowledgeHub } from "./components/LeatherKnowledgeHub";
import { LeatherMarketInsights } from "./components/LeatherMarketInsights";
import { ExportShippingSection } from "./components/ExportShippingSection";
import { BangladeshAdvantage } from "./components/BangladeshAdvantage";
import { GlobalTradeImpact } from "./components/GlobalTradeImpact";
import { WhyExportVisor } from "./components/WhyExportVisor";
import { QuoteInquirySection } from "./components/QuoteInquirySection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { ProductDetailModal } from "./components/ProductDetailModal";
import { CompanyProfileModal } from "./components/CompanyProfileModal";
import { QuoteInquiryModal } from "./components/QuoteInquiryModal";
import { FloatingActions } from "./components/FloatingActions";
import { LeatherProduct } from "./data/products";

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<LeatherProduct | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<string>("");
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setQuotePrefill(productName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleScrollToQuoteSection = (productName?: string) => {
    if (productName) {
      setQuotePrefill(productName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  const handleExploreLeather = () => {
    const catalogueElem = document.getElementById("leather-products");
    if (catalogueElem) {
      catalogueElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#C89D43]/25 selection:text-[#7A5A17]">
      
      {/* 1. Header (Sticky Top Bar with 3-Zone Contract + Multilingual Language Switcher) */}
      <Header
        onRequestQuote={() => handleOpenQuoteModal()}
        onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreLeather={handleExploreLeather}
          onRequestQuote={() => handleOpenQuoteModal()}
          onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)}
        />

        {/* 2.1 Trust & Compliance Strip */}
        <TrustComplianceStrip />

        {/* 3. About ExportVisor */}
        <AboutSection
          onOpenProfile={() => setIsCompanyProfileOpen(true)}
          onRequestQuote={() => handleScrollToQuoteSection()}
        />

        {/* 4. Leather Product Catalogue */}
        <LeatherCatalogue
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onRequestQuote={(prodName) => handleScrollToQuoteSection(prodName)}
        />

        {/* 5. Confirmed Commercial Benchmarks & Terms (RFQ-Driven) */}
        <CommercialTermsSection />

        {/* 6. 10-Stage Sourcing & Export Process */}
        <SourcingProcess
          onRequestQuote={() => handleScrollToQuoteSection()}
        />

        {/* 7. Quality & Inspection Coordination */}
        <QualityInspectionSection />

        {/* 8. Leather Knowledge Hub (Wet Blue vs Finished Technical Advisory) */}
        <LeatherKnowledgeHub
          onRequestQuote={(prefill) => handleScrollToQuoteSection(prefill)}
        />

        {/* 9. Leather Market Insights (Bangladesh Industry Trends & Sourcing Intelligence) */}
        <LeatherMarketInsights
          onRequestQuote={(context) => handleScrollToQuoteSection(context)}
        />

        {/* 10. Export Logistics & Shipping */}
        <ExportShippingSection />

        {/* 10. Source Leather from Bangladesh (Ecosystem) */}
        <BangladeshAdvantage />

        {/* 11. Global Trade Impact & Export Volume Data Visualization */}
        <GlobalTradeImpact
          onRequestQuote={(context) => handleScrollToQuoteSection(context)}
        />

        {/* 12. Why Partner with ExportVisor */}
        <WhyExportVisor />

        {/* 12. Request a Quote / Inquiry Form (Primary Lead Generation) */}
        <QuoteInquirySection
          prefilledProduct={quotePrefill}
          onClearPrefill={() => setQuotePrefill("")}
        />

        {/* 13. B2B Commercial FAQ */}
        <FAQSection />
      </main>

      {/* 14. Corporate Footer */}
      <Footer
        onOpenCompanyProfile={() => setIsCompanyProfileOpen(true)}
        onRequestQuote={(productName) => handleScrollToQuoteSection(productName)}
      />

      {/* Floating WhatsApp & Quick Quote */}
      <FloatingActions
        onRequestQuote={() => handleOpenQuoteModal()}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => {
          setSelectedProduct(null);
          handleScrollToQuoteSection(productName);
        }}
      />

      {/* Company Profile Modal */}
      <CompanyProfileModal
        isOpen={isCompanyProfileOpen}
        onClose={() => setIsCompanyProfileOpen(false)}
        onRequestQuote={() => {
          setIsCompanyProfileOpen(false);
          handleScrollToQuoteSection();
        }}
      />

      {/* Quick Quote Modal */}
      <QuoteInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefilledProduct={quotePrefill}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
