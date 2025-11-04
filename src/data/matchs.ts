import { teams } from "./teams";
import { v4 as uuidv4 } from "uuid";

interface Match {
  id: string;
  date: string; // ISO string
  homeTeam: string;
  awayTeam: string;
  time: string; // "20:00"
  arena: string;
  sponsor?: string;
  broadcast?: string;
}

// Générer un calendrier de test pour 3 jours
export const matches: { date: string; matches: Match[] }[] = [];

// Dates de test
const dates = [
  new Date(2025, 10, 5), // 5 novembre 2025
  new Date(2025, 10, 6), // 6 novembre 2025
  new Date(2025, 10, 7), // 7 novembre 2025
];

// Heures de match pour chaque jour
const hours = ["18:00", "19:00", "20:30", "21:00"];

dates.forEach((date) => {
  const dayMatches: Match[] = [];

  // Exemple : créer un match pour chaque paire d'équipes
  for (let i = 0; i < teams.length; i++) {
    const homeTeam = teams[i];
    const awayTeam = teams[(i + 1) % teams.length]; // faire tourner les équipes

    dayMatches.push({
      id: uuidv4(),
      date: date.toISOString(),
      homeTeam: homeTeam.name,
      awayTeam: awayTeam.name,
      time: hours[i % hours.length],
      arena: homeTeam.city,
      sponsor: "Logo du commanditaire",
      broadcast: "EUROLIGUE. TÉLÉ",
    });

    // Limiter le nombre de matchs par jour pour ne pas surcharger
    if (dayMatches.length >= 5) break;
  }

  matches.push({
    date: date.toISOString(),
    matches: dayMatches,
  });
});
