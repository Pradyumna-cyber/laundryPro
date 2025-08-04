"use client";
import { useEffect } from "react";

export default function HydrationHandler() {
  useEffect(() => {
    document.documentElement.classList.add("hydrated");
  }, []);

  return null;
}
