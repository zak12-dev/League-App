"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import useMobile from "@/hooks/use-mobile";

export default function LoginButton() {
  const isMobile = useMobile();

  const handleLogin = () => {
    // Ici tu peux ouvrir un modal ou rediriger vers la page de connexion
    console.log("Se connecter");
  };

  // Desktop
  if (!isMobile) {
    return (
      <Button
        onClick={handleLogin}
        className="bg-[#EF8624] hover:bg-orange-400 text-white ]"
      >
        Se connecter
      </Button>
    );
  }

  // Mobile (affichage séparé)
  return (
    <div className="flex justify-center md:hidden my-2">
      <Button
        onClick={handleLogin}
        className="w-full bg-[#EF8624] hover:bg-orange-400 text-white text-[25px]"
      >
        Se connecter
      </Button>
    </div>
  );
}
