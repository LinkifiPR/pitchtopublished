"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  return null;
}
