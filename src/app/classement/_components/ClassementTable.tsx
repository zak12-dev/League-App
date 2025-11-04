"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { teams } from "@/data/teams";

export default function ClassementTable() {
  const [selectedSeason, setSelectedSeason] = useState("2025-26");
  const [selectedConference, setSelectedConference] = useState("Toutes");
  const [selectedGroup, setSelectedGroup] = useState("Tous");

  // Calcul du classement filtré et trié
  const filteredTeams = useMemo(() => {
    return teams
      .filter((team) =>
        selectedConference === "Toutes"
          ? true
          : team.conference === selectedConference
      )
      .filter((team) =>
        selectedGroup === "Tous" ? true : team.group === selectedGroup
      )
      .filter((team) => team.seasons.includes(selectedSeason))
      .map((team) => ({
        ...team,
        diffPoints: team.pointsFor - team.pointsAgainst,
        totalPoints: team.victoire * 2 + team.defaite * 1, // barème de la ligue
      }))
      .sort((a, b) => b.totalPoints - a.totalPoints);
  }, [selectedSeason, selectedConference, selectedGroup]);

  return (
    <Card className="shadow-md border rounded-2xl bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between">
          <span>🏆 Classement Général</span>

          {/* Filtres */}
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            {/* Saison */}
            <Select onValueChange={setSelectedSeason} value={selectedSeason}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Saison" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-26">2025-26</SelectItem>
                <SelectItem value="2024-25">2024-25</SelectItem>
              </SelectContent>
            </Select>

            {/* Conférence */}
            <Select
              onValueChange={setSelectedConference}
              value={selectedConference}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Conférence" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Toutes">Toutes</SelectItem>
                <SelectItem value="Ouest">Ouest</SelectItem>
                <SelectItem value="Est">Est</SelectItem>
              </SelectContent>
            </Select>

            {/* Groupe */}
            <Select onValueChange={setSelectedGroup} value={selectedGroup}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Groupe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tous">Tous</SelectItem>
                <SelectItem value="A">Groupe A</SelectItem>
                <SelectItem value="B">Groupe B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 text-lg">
                <TableHead className="text-center w-12 py-4">#</TableHead>
                <TableHead className="py-4">Équipe</TableHead>
                <TableHead className="text-center py-4">MJ</TableHead>
                <TableHead className="text-center py-4">V</TableHead>
                <TableHead className="text-center py-4">D</TableHead>
                <TableHead className="text-center py-4">PM</TableHead>
                <TableHead className="text-center py-4">PE</TableHead>
                <TableHead className="text-center py-4">DP</TableHead>
                <TableHead className="text-center py-4">PTS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeams.map((team, index) => (
                <TableRow
                  key={team.id}
                  className="hover:bg-gray-50 transition text-lg"
                >
                  <TableCell className="text-center font-semibold py-4">
                    {index + 1}
                  </TableCell>
                  <TableCell className="flex items-center gap-2 font-medium py-4">
                    <img
                      src={team.logo}
                      alt={team.name}
                      className="w-6 h-6 rounded-full object-contain"
                    />
                    {team.name}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {team.matchesPlayed}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {team.victoire}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {team.defaite}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {team.pointsFor}
                  </TableCell>
                  <TableCell className="text-center py-4">
                    {team.pointsAgainst}
                  </TableCell>
                  <TableCell
                    className={`text-center font-semibold py-4 ${
                      team.diffPoints >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {team.diffPoints >= 0 ? "+" : ""}
                    {team.diffPoints}
                  </TableCell>
                  <TableCell className="text-center font-bold text-blue-700 py-4">
                    {team.totalPoints}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
