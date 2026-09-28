import React, { useState } from "react";
import { Link2, Check, Share2 } from "lucide-react";
import { getFullUrl } from "../config/routes";
import { trackEvent } from "../utils/analytics";

interface SectionShareButtonProps {
  path: string;
  sectionName: string;
  variant?: "badge" | "icon" | "minimal";
  className?: string;
}

export const SectionShareButton: React.FC<SectionShareButtonProps> = ({
  path,
  sectionName,
  variant = "badge",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const fullUrl = getFullUrl(path);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopied(true);
        trackEvent("share_link_copied", { path, section: sectionName });
        setTimeout(() => setCopied(false), 2400);
      }).catch(() => {
        // Fallback
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    } else {
      // Fallback prompt or input
      const textarea = document.createElement("textarea");
      textarea.value = fullUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleCopy}
        title={`Copy direct link for ${sectionName} (${getFullUrl(path)})`}
        aria-label={`Copy link for ${sectionName}`}
        className={`inline-flex items-center justify-center p-1.5 rounded-md text-stone-400 hover:text-[#C89D43] hover:bg-[#C89D43]/10 border border-transparent hover:border-[#C89D43]/20 transition-all cursor-pointer ${className}`}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-600 animate-scale-up" />
        ) : (
          <Link2 className="w-3.5 h-3.5" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      title={`Share direct link to this section (${getFullUrl(path)})`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
        copied
          ? "bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-2xs"
          : "bg-stone-100 hover:bg-[#C89D43]/15 text-stone-600 hover:text-[#7A5A17] border border-stone-200/80 hover:border-[#C89D43]/30"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-600 animate-scale-up" />
          <span>Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3 h-3 text-stone-400 group-hover:text-[#7A5A17]" />
          <span>Share Section</span>
        </>
      )}
    </button>
  );
};
