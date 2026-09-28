/**
 * ExportVisor Analytics & Event Dispatch Helper
 * 
 * Supports Google Analytics 4 (gtag.js) custom event tracking.
 */

import { siteConfig } from "../config/siteConfig";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | "request_quote_click"
  | "inquiry_form_submit"
  | "whatsapp_click"
  | "email_click"
  | "linkedin_click"
  | "facebook_click"
  | "instagram_click"
  | "product_detail_view"
  | "sample_request_click"
  | "company_profile_view"
  | "phone_click"
  | "share_link_copied";

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters: Record<string, unknown> = {}
) {
  try {
    const payload = {
      ...parameters,
      timestamp: new Date().toISOString(),
      ga_id: siteConfig.analytics.gaMeasurementId,
    };

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`[ExportVisor Analytics] ${eventName}:`, payload);
    }
  } catch (error) {
    console.error("[ExportVisor Analytics] Error dispatching event:", error);
  }
}
