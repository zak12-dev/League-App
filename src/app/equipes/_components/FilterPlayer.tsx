"use client";

import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import CoachCard from "./CoachCard";
import { Player, Coach } from "@/types/ligue";

interface FilterPlayerProps {
  players: Player[];
  coaches: Coach[];
  seasons: string[];
  teamSlug: string; // slug de l'équipe sélectionnée
}
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterPlayer({
  players,
  coaches,
  seasons,
  teamSlug,
}: FilterPlayerProps) {
  const [selectedSeason, setSelectedSeason] = useState("2025-26");
  const [search, setSearch] = useState("");
  // 🔍 Filtrage (tu pourras adapter selon les propriétés disponibles dans ton type Team)

  // Filtrer uniquement les joueurs de l'équipe sélectionnée
  const teamPlayers = players.filter((p) => p.teamSlug === teamSlug);

  // Grouper par poste
  const playersByPosition = teamPlayers.reduce((acc, player) => {
    if (!acc[player.position]) acc[player.position] = [];
    acc[player.position].push(player);
    return acc;
  }, {} as Record<string, Player[]>);

  // Filtrer par recherche si besoin
  const filteredPlayersByPosition: Record<string, Player[]> = {};
  Object.entries(playersByPosition).forEach(([position, players]) => {
    filteredPlayersByPosition[position] = players.filter((p) =>
      p.nom.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Filtrer les coachs de la même équipe
  const teamCoaches = coaches.filter(
    (c) =>
      c.teamSlug === teamSlug &&
      c.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full py-8 px-4 ">
      {/* Filtres */}
      {/* Filtres */}
      <div className="flex flex-col md:flex-row gap-4 mb-15 items-center">
        <Select
          onValueChange={(value) => setSelectedSeason(value)}
          value={selectedSeason}
        >
          <SelectTrigger className="w-[180px] h-13 bg-white border border-gray-300 rounded-md">
            <SelectValue>{selectedSeason}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {[
              "2025-26",
              "2024-25",
              "2023-24",
              "2022-23",
              "2021-22",
              "2020-21",
              "2019-20",
              "2018-19",
              "2017-18",
              "2016-17",
              "2015-16",
              "2014-15",
              "2013-14",
              "2012-13",
              "2011-12",
              "2010-11",
            ].map((saison) => (
              <SelectItem key={saison} value={saison}>
                {saison}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Joueurs */}
      {Object.entries(filteredPlayersByPosition).map(([position, players]) => (
        <div key={position} className="mb-15 ">
          <h4 className="text-[30px] font-bold mb-10">{position}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  space-y-5">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      ))}

      {/* Coaches */}
      <h3 className="text-[30px] font-bold mb-10">Coachs</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
        {teamCoaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
}
