"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import CalendarList from "./_components/CalendarList";
import { matches as matchData } from "@/data/matchs"; // ton fichier réel
import { teams } from "@/data/teams";

// Définition du type pour les jours du calendrier
type CalendarDay = {
  date: string; // date complète du jour
  matches: {
    homeTeam: string;
    awayTeam: string;
    time: string;
    arena: string;
    sponsor?: string;
    broadcast?: string;
  }[];
};

export default function CalendarPage() {
  const [selectedSeason, setSelectedSeason] = useState("2025-26");
  const [selectedType, setSelectedType] = useState("Saison régulière");
  const [selectedTeam, setSelectedTeam] = useState("Toutes");

  // Filtrer les matchs selon la saison et l'équipe sélectionnée
  const filteredMatches: CalendarDay[] = matchData.filter((day) =>
    day.matches.some((m) => {
      // Ici tu peux ajouter le filtrage selon la saison ou type si dispo dans matchData
      const teamMatch =
        selectedTeam === "Toutes" ||
        m.homeTeam.includes(selectedTeam) ||
        m.awayTeam.includes(selectedTeam);
      return teamMatch;
    })
  );

  return (
    <div className="container px-3 bg-gray-100">
      <div className="  px-8 py-17 bg-gradient-to-r from-white to-gray-300 mb-10">
        {" "}
        <h1 className=" text-5xl font-bold"> Equipes </h1>
      </div>

      {/* Filtres */}
      <Card className=" mb-2">
        <CardContent className="flex flex-col md:flex-row gap-4">
          {/* Saison */}
          <Select onValueChange={setSelectedSeason} value={selectedSeason}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Saison" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-26">2025-26</SelectItem>
              <SelectItem value="2024-25">2024-25</SelectItem>
            </SelectContent>
          </Select>

          {/* Type de saison */}
          <Select onValueChange={setSelectedType} value={selectedType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type de saison" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Saison régulière">Saison régulière</SelectItem>
              <SelectItem value="Playoffs">Playoffs</SelectItem>
            </SelectContent>
          </Select>

          {/* Sélection équipe */}
          <Select onValueChange={setSelectedTeam} value={selectedTeam}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sélectionner l’équipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Toutes">Toutes les équipes</SelectItem>
              {teams.map((team) => (
                <SelectItem key={team.id} value={team.name}>
                  {team.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Affichage du calendrier */}
      <CalendarList data={filteredMatches} selectedTeam={selectedTeam} />
    </div>
  );
}
