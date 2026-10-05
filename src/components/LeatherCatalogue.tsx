import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LEATHER_PRODUCTS, LeatherProduct } from "../data/products";
import { trackEvent } from "../utils/analytics";
import {
  Search,
  ArrowUpRight,
  SlidersHorizontal,
  Info,
  ShieldAlert,
  Leaf,
  Link2,
  Copy,
  Check,
} from "lucide-react";
import { SectionShareButton } from "./SectionShareButton";
import { useLanguage } from "../context/LanguageContext";

interface LeatherCatalogueProps {
  onSelectProduct: (product: LeatherProduct) => void;
  onRequestQuote: (prefillProduct: string) => void;
}

export const LeatherCatalogue: React.FC<LeatherCatalogueProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyProductLink = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    e.preventDefault();
    const url = `https://exportvisor.com/product/${productId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(productId);
    trackEvent("copy_product_link_card", { product_id: productId });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = [
    "All",
    "Sustainable Sourcing",
    "Intermediate Stage",
    "Finished Leather",
    "Specialty Finish",
    "Semi-Processed",
  ];

  const filteredProducts = useMemo(() => {
    return LEATHER_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All"
          ? true
          : selectedCategory === "Sustainable Sourcing"
          ? Boolean(product.isSustainable)
          : product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.applications.some((app) =>
          app.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="leather-products" className="py-16 sm:py-24 bg-white dark:bg-[#0B0806] border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200/80 dark:border-stone-800/80 gap-6">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D43]/15 text-[#7A5A17] dark:text-[#E5BE58] border border-[#C89D43]/30 text-xs font-bold uppercase tracking-wider">
                {t.catalogue.kicker}
              </div>
              <SectionShareButton path="/products" sectionName={t.catalogue.kicker} />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#15120E] dark:text-[#FAF6F0] leading-tight">
              {t.catalogue.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {t.catalogue.subtitle}
            </p>
          </div>

          {/* Sourcing Availability Disclaimer Badge */}
          <div className="p-4 bg-white dark:bg-[#120E0B] border border-[#C89D43]/30 rounded-xl max-w-sm text-xs text-stone-600 dark:text-stone-300 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-[#15120E] dark:text-[#FAF6F0] mb-1">
              <Info className="w-3.5 h-3.5 text-[#C89D43]" />
              <span>{t.catalogue.sourcingNoteTitle}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-stone-500 dark:text-stone-400">
              {t.catalogue.sourcingNote}
            </p>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 dark:bg-stone-800/80 rounded-xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const isSustainableCat = cat === "Sustainable Sourcing";
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? isSustainableCat
                        ? "bg-emerald-900 text-emerald-100 shadow-xs"
                        : "bg-[#15120E] dark:bg-[#C89D43] text-white dark:text-[#120E0B] border border-[#C89D43]/50 shadow-xs"
                      : isSustainableCat
                      ? "text-emerald-800 dark:text-emerald-300 hover:text-emerald-950 hover:bg-emerald-100/60 font-bold"
                      : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-700"
                  }`}
                >
                  {isSustainableCat && <Leaf className="w-3.5 h-3.5 text-emerald-500" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by leather type, shoe, sofa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-[#181310] border border-stone-300 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C89D43]/40 focus:border-[#C89D43] text-stone-800 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 shadow-2xs"
            />
          </div>

        </div>

        {/* Product Cards Grid with Framer Motion Stagger */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white border border-stone-200 rounded-lg p-8">
            <p className="text-stone-500 text-sm">
              No leather types match your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 text-xs font-semibold text-[#C89D43] hover:text-[#D6AC4B] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.05 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 36px -4px rgba(200, 157, 67, 0.28)",
                  borderColor: "rgba(200, 157, 67, 0.65)",
                }}
                transition={{ duration: 0.28 }}
                className="bg-white dark:bg-[#120E0B] border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-200 group"
              >
                <div>
                  {/* Card Media Container */}
                  <div
                    className="relative aspect-[4/3] bg-stone-900 overflow-hidden cursor-pointer"
                    onClick={() => {
                      trackEvent("product_detail_view", { product_id: product.id });
                      onSelectProduct(product);
                    }}
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} hide sample`}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                    {/* Sustainable / LWG Sourcing Badge Indicator */}
                    {product.isSustainable && (
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-xs text-emerald-400 border border-emerald-500/40 text-[10px] font-semibold tracking-wide shadow-xs">
                        <Leaf className="w-3 h-3 text-emerald-400" />
                        <span>LWG & Eco-Compliant</span>
                      </div>
                    )}

                    {/* Clean unboxed category label at bottom of image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-medium tracking-wide">
                        {product.category}
                      </span>
                      {product.badgeLabel && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5BE58] px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs border border-[#C89D43]/40">
                          {product.badgeLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#15120E] dark:text-[#FAF6F0] group-hover:text-[#C89D43] transition-colors">
                        <a
                          href={`/product/${product.id}`}
                          title={`${product.name} - Bangladesh Leather Sourcing & Export`}
                          aria-label={`View technical specifications for ${product.name}`}
                          onClick={(e) => {
                            e.preventDefault();
                            trackEvent("product_detail_view", { product_id: product.id });
                            onSelectProduct(product);
                          }}
                          className="hover:underline"
                        >
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Eco-Compliant Sourcing Tag */}
                    {product.isSustainable && (
                      <div className="flex items-center gap-1.5 p-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 rounded-lg text-[11px] text-emerald-900 dark:text-emerald-300">
                        <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="font-bold text-emerald-950 dark:text-emerald-200">LWG / Eco:</span>
                        <span className="truncate text-emerald-800 dark:text-emerald-300">{product.sustainabilityNote}</span>
                      </div>
                    )}

                    {/* Unboxed Metadata Parameters with typographic separators */}
                    <div className="text-[11px] text-stone-500 dark:text-stone-400 space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-stone-700 dark:text-stone-300 font-semibold">Origin:</span>
                        <span>{product.origin}</span>
                        <span aria-hidden="true" className="text-stone-300 dark:text-stone-600">·</span>
                        <span className="text-stone-700 dark:text-stone-300 font-semibold">Thickness:</span>
                        <span className="text-[#7A5A17] dark:text-[#E5BE58] font-semibold">{product.thicknessRange.split(",")[0]}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-stone-700 dark:text-stone-300 font-semibold">MOQ & Volume:</span>
                        <span>Determined per RFQ</span>
                        <span aria-hidden="true" className="text-stone-300 dark:text-stone-600">·</span>
                        <span className="text-stone-700 dark:text-stone-300 font-semibold">Schedule:</span>
                        <span>Per RFQ</span>
                      </div>
                    </div>

                    {/* Pricing Benchmark Note */}
                    <div className="p-2.5 bg-[#FBF8F1] dark:bg-[#181310] border border-[#C89D43]/25 dark:border-[#C89D43]/35 rounded-lg text-[11px] text-stone-700 dark:text-stone-300 leading-snug">
                      <span className="font-bold text-[#7A5A17] dark:text-[#E5BE58]">Commercial Terms:</span>{" "}
                      Quoted upon RFQ based on grade, substance, finish specifications, and batch volume.
                    </div>

                    {/* Applications Preview */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-500 block">
                        Typical Applications
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-1 font-medium">
                        {product.applications.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 dark:border-stone-800 mt-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        trackEvent("product_detail_view", { product_id: product.id });
                        onSelectProduct(product);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-100 dark:bg-stone-800 hover:bg-[#C89D43]/15 text-xs font-bold text-stone-800 dark:text-stone-200 hover:text-[#7A5A17] dark:hover:text-[#E5BE58] border border-stone-200 dark:border-stone-700 hover:border-[#C89D43]/40 cursor-pointer transition-all shadow-2xs"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C89D43]" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleCopyProductLink(e, product.id)}
                      title={`Copy direct link: /product/${product.id}`}
                      className="p-1.5 rounded-md text-stone-400 dark:text-stone-500 hover:text-[#C89D43] hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                      aria-label={`Copy link for ${product.name}`}
                    >
                      {copiedId === product.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Link2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      trackEvent("request_quote_click", {
                        location: "product_card",
                        product_name: product.name,
                      });
                      onRequestQuote(product.name);
                    }}
                    className="inline-flex items-center px-3.5 py-2 text-xs font-bold text-white bg-[#15120E] hover:bg-[#221C16] border border-[#C89D43]/40 rounded-lg transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap group/btn"
                  >
                    <span>{t.catalogue.requestQuote}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#E5BE58] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Global Sourcing Footer CTA inside Catalogue */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-[#1D1712] to-stone-900 text-white border border-[#C89D43]/35 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <div className="text-[11px] font-mono text-[#E5BE58] uppercase tracking-wider mb-1 font-bold">
              Custom Leather Formulation
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              {t.catalogue.customPromptTitle}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl leading-relaxed">
              {t.catalogue.customPromptDesc}
            </p>
          </div>
          <button
            onClick={() => onRequestQuote("Custom Leather Sourcing")}
            className="px-6 py-3.5 text-xs font-bold bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] text-[#15120E] rounded-lg whitespace-nowrap cursor-pointer transition-all shadow-gold-subtle hover:shadow-lg"
          >
            {t.catalogue.customPromptCta}
          </button>
        </div>

      </div>
    </section>
  );
};
