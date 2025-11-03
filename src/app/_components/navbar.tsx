"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import useMobile from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import BouttonDarkMode from "@/app/_components/bouttondarkmode";
import Bouttonuser from "@/app/_components/bouttonuser";
import ButtonLang from "@/app/_components/bouttonLang";

export default function NavigationMenuDemo() {
  const isMobile = useMobile();
  const pathname = usePathname();

  const links = [
    { name: "Actualité", href: "/actualite" },
    { name: "Jeux", href: "/jeux" },
    { name: "Calendrier", href: "/calendrier" },
    { name: "Équipes", href: "/equipes" },
    { name: "Joueurs", href: "/joueurs" },
    { name: "Stats", href: "/stats" },
    { name: "Classement", href: "/classement" },
    { name: "Vidéos", href: "/videos" },
    { name: "Boutique", href: "/Boutique" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Version Desktop
  if (!isMobile) {
    return (
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex-wrap items-center text-white text-md font-bold h-5 space-x-2">
          {links.map((link, index) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <React.Fragment key={link.href}>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center justify-center h-9 text-[20px] font-bold transition-all duration-200 hover:underline hover:decoration-[#EF8624] decoration-2 hover:underline-offset-4 ${
                        isActive
                          ? "underline decoration-[#EF8624] underline-offset-4"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {index < links.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-6 w-px bg-white border-0"
                  />
                )}
              </React.Fragment>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  // Version Mobile

  return (
    <>
      {/* Menu mobile */}

      <>
        {/* Contenu menu */}
        <div
          className="fixed top-24
          left-40 w-64 h-[800px] 
          bg-[#111111ef] p-4 z-50 shadow-lg flex flex-col gap-3 "
        >
          <NavigationMenu viewport={true}>
            <NavigationMenuList
              className="flex flex-col text-white space-y-2 -mt-30
            "
            >
              {links.map((link, index) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <React.Fragment key={link.href}>
                    <NavigationMenuItem>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className={`inline-flex items-center justify-start h-9 text-[23px] font-bold transition-all duration-200 hover:underline hover:decoration-[#EF8624] decoration-2 hover:underline-offset-4 ${
                            isActive
                              ? "underline decoration-[#EF8624] underline-offset-4"
                              : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Séparateur horizontal */}
                    {index < links.length - 1 && (
                      <Separator
                        orientation="horizontal"
                        className="h-px w-full bg-white border-0"
                      />
                    )}
                  </React.Fragment>
                );
              })}
              <div className="flex flex-col gap-2 mt-10">
                <Bouttonuser />
                <div className="flex justify-center">
                  <BouttonDarkMode />
                  <ButtonLang />
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </>
    </>
  );
}
