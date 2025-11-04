"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TeamCard from "@/app/equipes/_components/TeamCard";
import { teams } from "@/data/teams"; // ✅ On importe les vraies données

export default function TeamFilter() {
  const [search, setSearch] = useState("");
  const [season, setSeason] = useState<string>("2025-26");

  // 🔍 Filtrage (tu pourras adapter selon les propriétés disponibles dans ton type Team)
  const filteredTeams = teams.filter((team) => {
    const matchesSearch = team.name
      .toLowerCase()
      .includes(search.toLowerCase());
    // si tu n’as pas encore de `seasons` dans tes données réelles :
    const matchesSeason = team.seasons.includes(season);
    return matchesSearch && matchesSeason;
  });

  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-[500px] flex flex-col md:flex-row gap-2 mb-8">
        <Input
          type="text"
          placeholder="Rechercher une équipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 h-13 bg-white"
        />
        <Select onValueChange={(value) => setSeason(value)} value={season}>
          {" "}
          <SelectTrigger className="w-[180px] h-13 bg-white border border-gray-300 rounded-md">
            {" "}
            <SelectValue placeholder="Saison en cours" />{" "}
          </SelectTrigger>{" "}
          <SelectContent>
            {" "}
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
                {" "}
                {saison}{" "}
              </SelectItem>
            ))}{" "}
          </SelectContent>{" "}
        </Select>
      </div>

      {filteredTeams.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {filteredTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-8">
          Aucune équipe trouvée pour la saison {season}.
        </p>
      )}
    </div>
  );
}
