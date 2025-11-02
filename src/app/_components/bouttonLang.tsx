"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export default function LanguageSwitcher() {
  const [selected, setSelected] = React.useState(languages[0]);

  const handleSelect = (lang: (typeof languages)[0]) => {
    setSelected(lang);
    // Ici tu peux ajouter la logique pour changer la langue globale
    // ex: i18n.changeLanguage(lang.code)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center px-4  text-white rounded hover:text-[#EF8624]  transition">
        <Globe /> <span className="ml-2">▾</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-36 bg-white border ">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className="text-black hover:bg-gray-700"
            onClick={() => handleSelect(lang)}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
