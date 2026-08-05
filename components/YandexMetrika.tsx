"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

export default function YandexMetrika() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (typeof window.ym === "function") {
      window.ym(111319045, "hit", pathname + (search.toString() ? `?${search}` : ""));
    }
  }, [pathname, search]);

  return null;
}