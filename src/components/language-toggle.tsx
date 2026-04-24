"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={() => setLanguage(language === "es" ? "en" : "es")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border hover:border-green-500/50 transition-all text-sm font-medium"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{language}</span>
      </motion.button>
    </div>
  );
}