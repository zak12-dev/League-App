"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

// Composant principal
export default function AroundLDB() {
  // Titres d'actualités NBA
  const newsLinks = [
    {
      label: "LeBron James signe un nouveau record",
      href: "/actualites/lebron-record",
    },
    {
      label: "Les Warriors remportent le match contre les Lakers",
      href: "/actualites/warriors-lakers",
    },
    { label: "Joel Embiid MVP du mois", href: "/actualites/embiid-mvp" },
    {
      label: "Rumeurs de transfert : Giannis Antetokounmpo",
      href: "/actualites/giannis-transfer",
    },
    {
      label: "LeBron James signe un nouveau record",
      href: "/actualites/lebron-record",
    },
    {
      label: "Les Warriors remportent le match contre les Lakers",
      href: "/actualites/warriors-lakers",
    },
    { label: "Joel Embiid MVP du mois", href: "/actualites/embiid-mvp" },
    {
      label: "LeBron James signe un nouveau record",
      href: "/actualites/lebron-record",
    },
    {
      label: "Les Warriors remportent le match contre les Lakers",
      href: "/actualites/warriors-lakers",
    },
    { label: "Joel Embiid MVP du mois", href: "/actualites/embiid-mvp" },
    {
      label: "Rumeurs de transfert : Giannis Antetokounmpo",
      href: "/actualites/giannis-transfer",
    },
    {
      label: "LeBron James signe un nouveau record",
      href: "/actualites/lebron-record",
    },
    {
      label: "Les Warriors remportent le match contre les Lakers",
      href: "/actualites/warriors-lakers",
    },
    { label: "Joel Embiid MVP du mois", href: "/actualites/embiid-mvp" },
    {
      label: "Rumeurs de transfert : Giannis Antetokounmpo",
      href: "/actualites/giannis-transfer",
    },
  ];

  return (
    <div className="max-w-[320px] mx-auto py-8  px-4 bg-white ">
      {/* Titre principal */}
      <div className="flex items-center justify-between ">
        <h2 className="text-1xl font-bold mb-3 ">Autour de la LDB</h2>
        <div className="flex justify-end -mt-4 ">
          <button className="flex items-center gap-2 bg-none">
            <a
              href="/videos"
              className="flex text-[12px] items-center gap-2  hover:underline"
            >
              Voir plus <ArrowRight className="w-3 h-3" />
            </a>
          </button>
        </div>
      </div>
      <Separator className="my-3" />

      {/* Sous-titres cliquables */}
      <div className="flex flex-col    mb-4">
        {newsLinks.map((link, idx) => (
          <React.Fragment key={idx}>
            <a
              href={link.href}
              className="text-lg md:text-sm text-gray-600 hover:underline transition-colors duration-200"
            >
              {link.label}
            </a>
            {idx !== newsLinks.length - 1 && (
              <Separator className="my-3 w-3" />
              // Separator vertical
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Ligne séparatrice horizontale */}
      <div className="border-t border-gray-300 mt-2" />
    </div>
  );
}
