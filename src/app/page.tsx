"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BarChart2 } from "lucide-react";
import HeroCarousel from "@/app/_components/HeroCarousel";
import TrendingVideos from "@/app/_components/tendance";
import SplitImageCarousel from "./_components/SplitImageCarousel";
import AroundLDB from "@/app/_components/aroundleague";
import FeaturedVideo from "./_components/Featurevideo";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  const handleVoteClick = () => {
    router.push("/sondage"); // Redirection vers la page de sondage
  };
  return (
    <div className=" bg-gray-100 ">
      <SplitImageCarousel />
      <HeroCarousel />
      <div className=" text-black py-10 px-5 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Icône en arrière-plan */}
          <BarChart2
            size={80}
            className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-[#EF8624]/30 animate-pulse z-0"
          />

          <div className="relative z-10 flex flex-col items-center space-y-4">
            <h2 className="text-3xl font-bold mb-2">Sondage des fans</h2>
            <p className="text-lg mb-4">
              Qui est le MVP du mois d’octobre ? 🏆 🏀
            </p>
            <Button
              onClick={handleVoteClick}
              className="bg-gradient-to-r from-[#EF8624] to-[#FFB347] text-1xl py-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105  relative overflow-hidden
    "
            >
              Votez maintenant
            </Button>
          </div>
        </div>
      </div>
      <div className="flex mb-10">
        <div className="space-y-10 ">
          <TrendingVideos />
          <FeaturedVideo />
        </div>

        <AroundLDB />
      </div>
    </div>
  );
}
