"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  GithubIcon,
  TwitchIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  const footerColumns = [
    {
      title: "Organisation de la ligue",
      links: ["Notre entreprise", "Notre équipe", "Carrières", "Contact"],
    },
    {
      title: "Invitation de l'ABN",
      links: ["Design", "Développement", "Marketing", "Support"],
    },
    {
      title: "À travers la ligue",
      links: ["Blog", "FAQ", "Guides", "Tutoriaux"],
    },
    {
      title: "Boutique",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com", name: "Facebook" },
    { icon: TwitterIcon, href: "https://twitter.com", name: "Twitter" },
    { icon: InstagramIcon, href: "https://instagram.com", name: "Instagram" },
    { icon: LinkedinIcon, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: YoutubeIcon, href: "https://youtube.com", name: "YouTube" },
    { icon: GithubIcon, href: "https://github.com", name: "GitHub" },
    { icon: TwitchIcon, href: "https://twitch.tv", name: "Twitch" },
  ];

  return (
    <footer className="bg-[#111111ef] text-white px-6 py-10">
      {/* ====== VERSION DESKTOP ====== */}
      <div className="hidden md:grid max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold mb-4">{col.title}</h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white hover:text-white hover:underline transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ====== VERSION MOBILE (ACCORDÉON) ====== */}
      <div className="md:hidden ">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {footerColumns.map((col) => (
            <AccordionItem
              key={col.title}
              value={col.title}
              className="border-b border-white"
            >
              <AccordionTrigger className="text-white font-semibold text-sm uppercase">
                {col.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-2 pl-3 mt-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white hover:underline transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* ====== SÉPARATEUR ====== */}
      <Separator className="my-4" />

      {/* ====== BAS DE PAGE (SOCIAL + COPYRIGHT) ====== */}
      <div className="mt-5 text-white text-sm flex flex-col-reverse md:flex-row justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Votre entreprise. Tous droits réservés.
        </div>

        <div className="flex gap-4 jjustify-start">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label={social.name}
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
