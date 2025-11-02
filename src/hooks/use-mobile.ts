// src/hooks/use-mobile.ts
"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export default function useMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Initialisation paresseuse → pas de setState synchrone
    return (
      typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
    );
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    );

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches); // ← SEULEMENT sur changement
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
