import React, { useState, useMemo } from "react";
import { LEATHER_PRODUCTS, LeatherProduct } from "../data/products";
import { trackEvent } from "../utils/analytics";
import { Search, ArrowUpRight, SlidersHorizontal, Info, ShieldAlert, Leaf } from "lucide-react";

interface LeatherCatalogueProps {
  onSelectProduct: (product: LeatherProduct) => void;
  onRequestQuote: (prefillProduct: string) => void;
}

export const LeatherCatalogue: React.FC<LeatherCatalogueProps> = ({
  onSelectProduct,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <section id="leather-products" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200/80 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C87D3B] mb-2">
              Sourcing Catalogue
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#181310] leading-tight">
              Export-Grade Bangladesh Leather
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Explore our core leather sourcing classifications. Every shipment is tailored to buyer technical specifications, substance tolerances, and intended applications.
            </p>
          </div>

          {/* Sourcing Availability Disclaimer Badge */}
          <div className="p-4 bg-stone-100/90 border border-stone-200 rounded-lg max-w-sm text-xs text-stone-600">
            <div className="flex items-center gap-1.5 font-semibold text-stone-800 mb-1">
              <Info className="w-3.5 h-3.5 text-[#C87D3B]" />
              <span>Sourcing Note</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              All leather varieties are sourced and processed according to specific buyer orders and tannery availability. Final commercial parameters are confirmed upon technical review.
            </p>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const isSustainableCat = cat === "Sustainable Sourcing";
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? isSustainableCat
                        ? "bg-emerald-900 text-emerald-100 shadow-xs"
                        : "bg-[#181310] text-white shadow-xs"
                      : isSustainableCat
                      ? "text-emerald-800 hover:text-emerald-950 hover:bg-emerald-100/60 font-semibold"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-200"
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
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C87D3B] focus:border-[#C87D3B] text-stone-800 placeholder-stone-400"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
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
              className="mt-3 text-xs font-semibold text-[#C87D3B] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-stone-200 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
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
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Sustainable Sourcing Badge Indicator */}
                    {product.isSustainable && (
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/90 backdrop-blur-xs text-emerald-400 border border-emerald-500/40 text-[10px] font-semibold tracking-wide shadow-xs">
                        <Leaf className="w-3 h-3 text-emerald-400" />
                        <span>Sustainable Sourcing</span>
                      </div>
                    )}

                    {/* Clean unboxed category label at bottom of image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="font-medium tracking-wide">
                        {product.category}
                      </span>
                      {product.badgeLabel && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E8A366]">
                          {product.badgeLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3
                        className="font-display text-2xl font-semibold text-[#181310] group-hover:text-[#C87D3B] transition-colors cursor-pointer"
                        onClick={() => {
                          trackEvent("product_detail_view", { product_id: product.id });
                          onSelectProduct(product);
                        }}
                      >
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Eco-Compliant Sourcing Tag */}
                    {product.isSustainable && (
                      <div className="flex items-center gap-1.5 p-2 bg-emerald-50 border border-emerald-200/80 rounded text-[11px] text-emerald-900">
                        <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-emerald-950">Eco-Compliant:</span>
                        <span className="truncate text-emerald-800">{product.sustainabilityNote}</span>
                      </div>
                    )}

                    {/* Unboxed Metadata Parameters with typographic separators */}
                    <div className="text-[11px] text-stone-500 space-y-1.5 pt-2 border-t border-stone-100">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-stone-700 font-medium">Origin:</span>
                        <span>{product.origin}</span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-stone-700 font-medium">Thickness:</span>
                        <span>{product.thicknessRange.split(",")[0]}</span>
                      </div>
                      
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-stone-700 font-medium">MOQ & Volume:</span>
                        <span>Determined per RFQ</span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-stone-700 font-medium">Schedule:</span>
                        <span>Per RFQ</span>
                      </div>
                    </div>

                    {/* Pricing Benchmark Note */}
                    <div className="p-2.5 bg-[#FAF8F5] border border-stone-200/70 rounded text-[11px] text-stone-600 leading-snug">
                      <span className="font-semibold text-stone-800">Commercial Terms:</span>{" "}
                      Quoted upon RFQ based on grade, substance, finish specifications, and batch volume.
                    </div>

                    {/* Applications Preview */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                        Typical Applications
                      </span>
                      <p className="text-xs text-stone-600 line-clamp-1">
                        {product.applications.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      trackEvent("product_detail_view", { product_id: product.id });
                      onSelectProduct(product);
                    }}
                    className="text-xs font-semibold text-stone-700 hover:text-[#181310] underline underline-offset-4 cursor-pointer"
                  >
                    View Specifications
                  </button>

                  <button
                    onClick={() => {
                      trackEvent("request_quote_click", {
                        location: "product_card",
                        product_name: product.name,
                      });
                      onRequestQuote(product.name);
                    }}
                    className="inline-flex items-center px-3.5 py-2 text-xs font-semibold text-white bg-[#181310] hover:bg-[#2C211B] rounded-md transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#C87D3B]" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Global Sourcing Footer CTA inside Catalogue */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-stone-200 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#181310]">
              Need a Custom Leather Specification or Specific Color Match?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              ExportVisor coordinates custom tannage formulation, lab dip approvals, and physical counter-samples based on your master physical swatch.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote("Custom Leather Sourcing")}
            className="px-5 py-3 text-xs font-semibold text-white bg-[#181310] hover:bg-[#2C211B] rounded-md whitespace-nowrap cursor-pointer transition-colors shadow-xs"
          >
            Submit Custom Specification
          </button>
        </div>

      </div>
    </section>
  );
};
