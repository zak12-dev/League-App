"use client";

import { useParams } from "next/navigation";
import { teams } from "@/data/teams";
import DetailsTeam from "@/app/equipes/_components/detailsTeam";
import HeroStat from "@/app/equipes/_components/herostat";
import Image from "next/image";

export default function TeamPage() {
  const { slug } = useParams();
  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    return (
      <div className="p-10 text-center text-red-500">Équipe introuvable</div>
    );
  }

  return (
    <div>
      {/* 🦁 HERO SECTION Desktop */}
      <div className="relative w-full h-[300px] md:h-[700px] hidden md:block">
        <img
          src={team.heroImage}
          alt={team.name}
          className="object-cover h-[700px] w-full"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white -mt-10">
            <Image
              src={team.logo}
              alt={team.name}
              width={150}
              height={150}
              className="mx-auto mb-4 bg-white p-6 rounded-full"
            />
            <h1 className="text-7xl font-bold">
              Effectif de <br />
              {team.name}
            </h1>
            <HeroStat team={team} />
          </div>
        </div>
      </div>

      {/* 🦁 HERO SECTION Mobile */}
      <div className="relative w-full h-[300px] md:hidden">
        <img
          src={team.heroImage}
          alt={team.name}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
          <Image
            src={team.logo}
            alt={team.name}
            width={100}
            height={100}
            className="mb-2 bg-white p-3 rounded-full"
          />
          <h1 className="text-3xl font-bold text-center">{team.name}</h1>
          <HeroStat team={team} />
        </div>
      </div>

      {/* 🏀 contenu principal */}
      <DetailsTeam />
    </div>
  );
}
