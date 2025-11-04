"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { teams } from "@/data/teams";
import { ArrowRight } from "lucide-react";

interface MatchCardProps {
  matchNumber: number;
  homeTeam: string;
  awayTeam: string;
  time: string;
  arena: string;
  sponsor?: string;
  broadcast?: string;
  matchDate: string;
}

export default function MatchCard({
  matchNumber,
  homeTeam,
  awayTeam,
  time,
  arena,
  sponsor,
  broadcast,
  matchDate,
}: MatchCardProps) {
  const router = useRouter();

  const handleVoteClick = () => {
    router.push("/brodcast"); // Redirection vers la page de billets
  };
  const [countdown, setCountdown] = useState("");

  const homeLogo = teams.find((t) => t.name === homeTeam)?.logo;
  const awayLogo = teams.find((t) => t.name === awayTeam)?.logo;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const matchTime = new Date(matchDate);
      const diff = matchTime.getTime() - now.getTime();

      if (diff > 0) {
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      } else {
        setCountdown("00:00:00");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [matchDate]);

  return (
    <Card className="p-4 shadow-md shadow-[#FFB347] rounded-xl border h-max-[400px]">
      <div className="flex justify-between items-center mb-2">
        {/* Heure et arène */}
        <div className=" items-center text-start ">
          <p className="text-gray-700 font-semibold mb-2 text-lg">{time}</p>
          <p className="text-gray-700 mb-2 text-lg">{arena}</p>
        </div>

        {/* Zone des équipes alignée verticalement */}
        <div className="flex items-center space-x-10">
          {/* Colonne équipe locale : texte + logo */}
          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-center mb-1">
              <span className="font-bold text-[20px]">{homeTeam}</span>
              {homeLogo && (
                <img
                  src={homeLogo}
                  alt={homeTeam}
                  className="w-8 h-8 ml-2 object-contain"
                />
              )}
            </div>
          </div>

          <span className="font-bold text-xl text-gray-400">VS</span>

          {/* Colonne équipe extérieure : logo + texte */}
          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-center mb-1 gap-10">
              {awayLogo && (
                <img
                  src={awayLogo}
                  alt={awayTeam}
                  className="w-8 h-8 mr-2 object-contain"
                />
              )}
              <span className="font-bold [20px]-">{awayTeam}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={handleVoteClick}
          className="bg-gradient-to-r from-[#EF8624] to-[#FFB347] text-1xl py-3 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          TV
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
