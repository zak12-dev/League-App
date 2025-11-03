"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import Navbar from "@/app/_components/navbar";
import BouttonDarkMode from "@/app/_components/bouttondarkmode";
import Bouttonuser from "@/app/_components/bouttonuser";
import ButtonLang from "@/app/_components/bouttonLang";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" w-full mx-auto bg-[#111111ef] text-white">
      {/* Desktop - inchangé */}
      <div className="hidden md:flex items-center justify-between px-3 py-4">
        {/* Logo */}
        <div>
          <Image src="/images/logo/logo.jpeg" alt="" width={80} height={80} />
        </div>

        {/* Navbar centré */}
        <div className="flex-1 flex ml-5 -mt-3">
          <Navbar />
        </div>

        {/* Menubar à droite */}
        <div className="flex gap-2 mr-5">
          <Image src="/images/logo/logoNBA.png" alt="" width={25} height={25} />
          <Image
            src="/images/logo/logoG.jpg"
            alt=""
            width={30}
            height={30}
            className="rounded-md"
          />
          <Image
            src="/images/logo/wnba.png"
            alt=""
            width={25}
            height={25}
            className="rounded-md"
          />
        </div>

        {/* Boutons utilisateur / dark mode / langue */}
        <div className="flex-wrap space-y-2">
          <Bouttonuser />
          <Separator className="" />
          <div className="flex justify-center">
            <BouttonDarkMode />
            <ButtonLang />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-3 py-4">
        {/* Logo */}
        <div className="">
          <Image src="/images/logo/logo.jpeg" alt="" width={60} height={60} />
        </div>
        <div>
          <h1
            className="text-[#EF8624] text-4xl mr-40
          "
          >
            L-D-B
          </h1>
        </div>

        {/* Hamburger */}
        <button
          className="p-2 text-white rounded -"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={48} />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <div className="md:hidden ">
          <Navbar /> {/* liens */}
        </div>
      )}
    </header>
  );
}
