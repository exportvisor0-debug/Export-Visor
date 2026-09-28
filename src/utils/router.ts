import { useEffect, useCallback } from "react";
import { SECTION_ROUTES, getRouteByPath, getRouteById } from "../config/routes";

export function scrollToSection(sectionId: string, smooth: boolean = true) {
  const elem = document.getElementById(sectionId);
  if (elem) {
    // Add header height offset
    const yOffset = -72;
    const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: smooth ? "smooth" : "auto",
    });
    return true;
  }
  return false;
}

export function navigateTo(path: string, smooth: boolean = true) {
  const route = getRouteByPath(path);
  if (route) {
    if (window.location.pathname !== route.path) {
      window.history.pushState(null, "", route.path);
    }
    document.title = route.title;
    scrollToSection(route.id, smooth);
  } else if (path.startsWith("#")) {
    const id = path.substring(1);
    const r = getRouteById(id);
    if (r) {
      if (window.location.pathname !== r.path) {
        window.history.pushState(null, "", r.path);
      }
      document.title = r.title;
    }
    scrollToSection(id, smooth);
  } else {
    // Fallback
    window.history.pushState(null, "", path);
  }
}

/**
 * Custom React hook that handles:
 * 1. Initial route resolution on page load
 * 2. URL synchronization as user scrolls through sections
 * 3. Popstate (Back/Forward buttons) support
 */
export function useSectionRouter() {
  const handleInitialRoute = useCallback(() => {
    // 1. Check if we arrived via SPA redirect from 404.html
    let redirectPath = sessionStorage.getItem("spa_redirect");
    if (redirectPath) {
      sessionStorage.removeItem("spa_redirect");
      window.history.replaceState(null, "", redirectPath);
    } else if (window.location.search && window.location.search.startsWith("?")) {
      const queryParam = window.location.search.substring(1).split("&")[0];
      if (queryParam.startsWith("/")) {
        redirectPath = queryParam;
        window.history.replaceState(null, "", redirectPath);
      }
    }

    // 2. Check path or hash
    const pathname = window.location.pathname;
    const hash = window.location.hash;

    let targetRoute = getRouteByPath(pathname);
    if (!targetRoute && hash) {
      targetRoute = getRouteById(hash.replace(/^#/, ""));
    }

    if (targetRoute && targetRoute.id !== "hero") {
      // Delay slightly for initial render/images
      setTimeout(() => {
        scrollToSection(targetRoute.id, false);
        document.title = targetRoute.title;
      }, 100);
    }
  }, []);

  useEffect(() => {
    handleInitialRoute();

    // Listen to Back / Forward navigation
    const handlePopState = () => {
      const route = getRouteByPath(window.location.pathname);
      if (route) {
        document.title = route.title;
        scrollToSection(route.id, true);
      }
    };

    window.addEventListener("popstate", handlePopState);

    // Scroll spy using IntersectionObserver
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -40% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const route = getRouteById(sectionId);
          if (route) {
            // Update URL without adding redundant history stack entries
            if (window.location.pathname !== route.path) {
              window.history.replaceState(null, "", route.path);
              document.title = route.title;
            }
          }
        }
      });
    }, observerOptions);

    // Observe each section
    SECTION_ROUTES.forEach((route) => {
      const elem = document.getElementById(route.id);
      if (elem) {
        observer.observe(elem);
      }
    });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      observer.disconnect();
    };
  }, [handleInitialRoute]);

  return { navigateTo, scrollToSection };
}
