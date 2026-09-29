import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { useLanguage } from "../context/LanguageContext";
import {
  MessageSquareText,
  X,
  Send,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Maximize2,
  Minimize2,
  Clock,
  ExternalLink,
} from "lucide-react";

interface LiveChatMessage {
  id: string;
  sender: "agent" | "user";
  text: string;
  time: string;
  suggestedAction?: {
    label: string;
    topic: string;
  };
}

interface LiveChatSimulationProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onRequestConsultation: (topic?: string) => void;
}

export const LiveChatSimulation: React.FC<LiveChatSimulationProps> = ({
  isOpen,
  onOpen,
  onClose,
  onRequestConsultation,
}) => {
  const { language } = useLanguage();
  const [hasUnread, setHasUnread] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<LiveChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting =
    language === "bn"
      ? "স্বাগতম! এক্সপোর্টভাইজর বাংলাদেশ লেদার সোর্সিং ডেস্কে আপনাকে স্বাগতম। আমরা সাভার থেকে সরাসরি ট্যানারি সোর্সিং, AQL ২.৫ ইন্সপেকশন এবং রপ্তানি পরিবহন সমন্বয় করি।"
      : "Welcome to ExportVisor! We coordinate direct tannery sourcing, on-site AQL 2.5 inspection, and sea/air export logistics from Bangladesh.";

  const secondaryPrompt =
    language === "bn"
      ? "আপনার কাঙ্ক্ষিত চামড়ার স্পেসিফিকেশন বা অর্ডারের বিষয়ে আমাদের সোর্সিং টিম কীভাবে সহায়তা করতে পারে?"
      : "How can our technical sourcing desk assist your leather procurement today?";

  // Initialize messages
  useEffect(() => {
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages([
      {
        id: "msg-1",
        sender: "agent",
        text: initialGreeting,
        time: now,
      },
      {
        id: "msg-2",
        sender: "agent",
        text: secondaryPrompt,
        time: now,
      },
    ]);
  }, [language]);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const quickChips = [
    {
      label: language === "bn" ? "ফ্যাক্টরি মূল্য ও MOQ কোটেশন" : "Factory Pricing & MOQ",
      topic: "Direct Tannery Pricing & Volume MOQ",
      response:
        language === "bn"
          ? "ওয়েট ব্লুর জন্য সাধারণত ৩,০০০–৫,০০০ বর্গফুট এবং ফিনিশড চামড়ার কালার প্রতি ২,০০০ বর্গফুট থেকে অর্ডার সমন্বয় করা হয়। আপনার কাঙ্ক্ষিত স্পেসিফিকেশন অনুযায়ী আমরা সরাসরি ফ্যাক্টরি মূল্য প্রস্তাব প্রস্তুত করতে পারি।"
          : "Standard indicative MOQs start from 3,000–5,000 sq ft for wet blue and 2,000 sq ft per color for finished leather. We can prepare direct factory-floor commercial terms for your exact volumes.",
    },
    {
      label: language === "bn" ? "ফিজিক্যাল লেদার স্যাম্পল রিকোয়েস্ট" : "Request Physical Samples",
      topic: "Physical Leather Samples / Counter-Swatches",
      response:
        language === "bn"
          ? "বায়ারের কালার সোয়াচ ও স্পেসিফিকেশন অনুযায়ী সাভারের ট্যানারিতে ল্যাব-ডিপ ও ফুল হাইড কাউন্টার-স্যাম্পল প্রস্তুত করে DHL বা FedEx এর মাধ্যমে আন্তর্জাতিকভাবে পাঠানো হয়।"
          : "We coordinate custom lab-dip swatches and full-hide counter-samples formulated to your Pantone/caliper specs, dispatched via express DHL/FedEx directly to your facility.",
    },
    {
      label: language === "bn" ? "AQL ২.৫ অন-সাইট ইন্সপেকশন" : "AQL 2.5 Quality Inspection",
      topic: "AQL 2.5 Quality Inspection Coordination",
      response:
        language === "bn"
          ? "আমাদের নিজস্ব টেকনিক্যাল ইন্সপেক্টররা ট্যানারিতে উপস্থিত থেকে প্রতিটি চামড়ার পুরুত্ব (±০.১ মিমি), ক্রকিং ফাস্টনেস ও পৃষ্ঠের ত্রুটি প্যাক করার পূর্বে নিরীক্ষা করেন।"
          : "ExportVisor inspectors conduct piece-by-piece calibration on-site in Savar: verifying thickness tolerance (±0.1 mm), rub fastness, and surface grading prior to container stuffing.",
    },
    {
      label: language === "bn" ? "চট্টগ্রাম বন্দর ও শিপিং শিডিউল" : "Port Transit & Shipping Schedule",
      topic: "Port Logistics & Shipping Transit Times",
      response:
        language === "bn"
          ? "চট্টগ্রাম সমুদ্র বন্দর (BDCGP) থেকে ২০ ফুট ও ৪০ ফুট কনটেইনারে ইউরোপ, এশিয়া ও আমেরিকায় নিয়মিত ফিডার ভ্যাসেলের মাধ্যমে সময়মতো রপ্তানি নিশ্চিত করা হয়।"
          : "We coordinate 20ft/40ft FCL and LCL container bookings from Chittagong Port (BDCGP) with tier-1 shipping lines under FOB, CIF, or CFR terms.",
    },
  ];

  const handleOpenChat = () => {
    onOpen();
    setHasUnread(false);
    trackEvent("live_chat_open", { location: "floating_widget" });
  };

  const handleCloseChat = () => {
    onClose();
  };

  const handleSelectChip = (chip: (typeof quickChips)[0]) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: LiveChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: chip.label,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    trackEvent("live_chat_message", { chip_topic: chip.topic });

    setTimeout(() => {
      setIsTyping(false);
      const agentMsg: LiveChatMessage = {
        id: `agent-${Date.now()}`,
        sender: "agent",
        text: chip.response,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedAction: {
          label:
            language === "bn"
              ? "কনসালটেশন রিকোয়েস্ট করুন"
              : "Request a Consultation",
          topic: chip.topic,
        },
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 650);
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: LiveChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    trackEvent("live_chat_message", { query_length: query.length });

    setTimeout(() => {
      setIsTyping(false);
      const agentMsg: LiveChatMessage = {
        id: `agent-${Date.now()}`,
        sender: "agent",
        text:
          language === "bn"
            ? `আপনার বার্তার জন্য ধন্যবাদ! "${query}" বিষয়ে আমাদের অন-সাইট সোর্সিং টিম সরাসরি ফ্যাক্টরির সাথে পর্যালোচনা করে বিস্তারিত তথ্য দিতে পারে। আপনি কি একটি ফ্রি টেকনিক্যাল কনসালটেশন শিডিউল করতে চান?`
            : `Thank you for sharing your requirement: "${query}". Our on-site sourcing desk in Savar evaluates technical feasibility and direct tannery capacity for this. Would you like to schedule a formal consultation?`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestedAction: {
          label:
            language === "bn"
              ? "কনসালটেশন রিকোয়েস্ট করুন"
              : "Request a Consultation",
          topic: "Custom Tannery Formulation (Thickness, Temper, Finish)",
        },
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 700);
  };

  const handleActionClick = (topic?: string) => {
    trackEvent("consultation_modal_open", { source: "live_chat_action", topic });
    onRequestConsultation(topic);
  };

  if (!isOpen) return null;

  return (
    <aside
      aria-label="ExportVisor Live Sourcing Desk Chat"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-stone-200/90 flex flex-col overflow-hidden animate-fade-in font-sans"
    >
      {/* Chat Window Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-[#181310] via-[#241C15] to-[#181310] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D6AC4B] to-[#7A5A17] flex items-center justify-center text-white font-serif font-bold text-sm shadow-xs border border-white/20">
                  EV
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#181310]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white tracking-wide truncate">
                    ExportVisor Sourcing Desk
                  </h3>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E5BE58] shrink-0" />
                </div>
                <p className="text-[10px] text-stone-300 truncate">
                  {language === "bn"
                    ? "সাভার ট্যানারি ক্লাস্টার · সরাসরি সক্রিয়"
                    : "Savar Tannery Cluster, Bangladesh · Online"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleCloseChat}
                className="p-1.5 text-stone-400 hover:text-white rounded-md transition-colors cursor-pointer"
                aria-label="Minimize Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-Header Notice / Trust Micro-Badge */}
          <div className="bg-[#FAF8F5] px-3.5 py-1.5 border-b border-stone-200 flex items-center justify-between text-[10px] text-stone-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3 h-3 text-[#C89D43]" />
              <span>{language === "bn" ? "গড় প্রতিক্রিয়া: তাৎক্ষণিক" : "Avg Response: Immediate"}</span>
            </span>
            <span className="font-mono text-[#7A5A17] font-semibold">
              Dhaka UTC+6
            </span>
          </div>

          {/* Chat Message Scrollable Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F9F7F4]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-2xs ${
                    msg.sender === "user"
                      ? "bg-[#181310] text-white rounded-br-xs font-medium"
                      : "bg-white text-stone-800 border border-stone-200/90 rounded-bl-xs"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                <span className="text-[9px] text-stone-400 mt-1 px-1">
                  {msg.time}
                </span>

                {/* Direct High-Intent Modal Trigger CTA Button */}
                {msg.suggestedAction && (
                  <div className="mt-2 w-full max-w-[85%] animate-fade-in">
                    <button
                      type="button"
                      onClick={() => handleActionClick(msg.suggestedAction?.topic)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#D6AC4B] to-[#C89D43] hover:from-[#E5BE58] hover:to-[#D6AC4B] text-[#15120E] text-xs font-bold transition-all shadow-gold-subtle hover:shadow-md cursor-pointer group"
                    >
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#15120E]" />
                        <span>{msg.suggestedAction.label}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#15120E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Simulated Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 bg-white border border-stone-200 rounded-xl w-fit shadow-2xs animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
                <span className="text-[10px] text-stone-400 ml-1">Sourcing desk typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Option Suggestion Chips */}
          <div className="p-2.5 bg-white border-t border-stone-200 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-stone-400 px-1">
              <span>{language === "bn" ? "প্রস্তাবিত বিষয়সমূহ" : "Quick Inquiries"}</span>
              <button
                type="button"
                onClick={() => handleActionClick("General Leather Sourcing Consultation")}
                className="text-[#C89D43] hover:underline font-semibold"
              >
                {language === "bn" ? "কনসালটেশন নিন ↗" : "Book Call ↗"}
              </button>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {quickChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectChip(chip)}
                  className="shrink-0 px-2.5 py-1 text-[11px] font-medium text-stone-700 bg-stone-100 hover:bg-stone-200/80 hover:text-stone-900 border border-stone-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input Bar */}
          <form
            onSubmit={handleSendCustomMessage}
            className="p-3 bg-white border-t border-stone-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                language === "bn"
                  ? "আপনার প্রশ্ন বা স্পেসিফিকেশন লিখুন..."
                  : "Ask about MOQ, pricing, or leather specs..."
              }
              className="flex-1 px-3.5 py-2 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C89D43] focus:border-[#C89D43] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-8 h-8 rounded-xl bg-[#181310] hover:bg-[#261E17] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0 shadow-xs cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5 text-[#E5BE58]" />
            </button>
          </form>

          {/* Bottom WhatsApp Fallback */}
          <div className="px-3 py-1.5 bg-[#FAF8F5] border-t border-stone-200 text-center">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "chat_footer" })}
              className="text-[10px] text-stone-500 hover:text-emerald-700 inline-flex items-center gap-1 font-medium"
            >
              <span>{language === "bn" ? "অথবা সরাসরি হোয়াটসঅ্যাপে কথা বলুন" : "Prefer direct WhatsApp messaging?"}</span>
              <span className="text-emerald-600 font-semibold underline">WhatsApp ↗</span>
            </a>
          </div>
        </aside>
  );
};
