import React from "react";
import { siteConfig } from "../config/siteConfig";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
}) => {
  // Size classes
  const iconSize = size === "sm" ? "w-7 h-7" : size === "lg" ? "w-11 h-11" : "w-9 h-9";
  const textClasses =
    size === "sm"
      ? "text-lg tracking-tight"
      : size === "lg"
      ? "text-2xl tracking-tight"
      : "text-xl tracking-tight";

  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG: Crafted specifically for ExportVisor leather sourcing */}
      <div
        className={`${iconSize} rounded-md flex items-center justify-center relative overflow-hidden transition-transform duration-200 hover:scale-105 shadow-xs ${
          isLight
            ? "bg-gradient-to-br from-[#FAF8F5] to-[#EAE3DB] text-[#1E1713] border border-white/20"
            : "bg-gradient-to-br from-[#1E1713] via-[#2A1F19] to-[#3B2920] text-[#E8A366] border border-[#3B2920]"
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Stylized Leather Hide Contour & Compass Mark */}
          <path
            d="M 18,5 C 23,5 26,7 29,10 C 27,13 28,16 31,18 C 28,20 27,23 29,26 C 26,29 23,31 18,31 C 13,31 10,29 7,26 C 9,23 8,20 5,18 C 8,16 9,13 7,10 C 10,7 13,5 18,5 Z"
            fill={isLight ? "#1E1713" : "#C87D3B"}
            fillOpacity={isLight ? "0.15" : "0.25"}
            stroke={isLight ? "#1E1713" : "#C87D3B"}
            strokeWidth="1.2"
          />
          {/* Precision V Symbol */}
          <path
            d="M 12,13 L 18,24 L 24,13"
            stroke={isLight ? "#1E1713" : "#FAF8F5"}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Precision Crosshair / Compass Pip */}
          <circle
            cx="18"
            cy="13"
            r="1.8"
            fill={isLight ? "#C87D3B" : "#E8A366"}
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-semibold font-body tracking-tight ${textClasses} ${
            isLight ? "text-white" : "text-[#181310]"
          }`}
        >
          Export<span className="text-[#C87D3B]">Visor</span>
        </span>
        <span
          className={`text-[9px] uppercase tracking-[0.2em] font-medium mt-0.5 ${
            isLight ? "text-stone-400" : "text-stone-500"
          }`}
        >
          Leather Sourcing · BD
        </span>
      </div>
    </div>
  );
};
