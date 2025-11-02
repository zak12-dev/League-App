import { Player } from "@/types/ligue";
import { v4 as uuidv4 } from "uuid";

export const players: Player[] = [
  /* ─── ÉQUIPE 1 ─── */
  {
    id: uuidv4(),
    name: "Ousmane Ndiaye",
    height: 190,
    nationality: "Sénégal",
    position: "PG",
    birthDate: "1998-02-12",
    socials: { instagram: "https://instagram.com/ousmane_ndiaye" },
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    stats: generatePlayerStats(),
    records: generatePlayerRecords(),
  },
  {
    id: uuidv4(),
    name: "Cheikh Diop",
    height: 195,
    nationality: "Sénégal",
    position: "SG",
    birthDate: "1997-05-10",
    socials: { instagram: "https://instagram.com/cheikh_diop" },
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    stats: generatePlayerStats(),
    records: generatePlayerRecords(),
  },
  // ... 10 autres joueurs de l’équipe 1

  /* ─── ÉQUIPE 2 ─── */
  {
    id: uuidv4(),
    name: "Jean Kouassi",
    height: 192,
    nationality: "Côte d'Ivoire",
    position: "PG",
    birthDate: "1999-03-15",
    socials: { instagram: "https://instagram.com/jean_kouassi" },
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    stats: generatePlayerStats(),
    records: generatePlayerRecords(),
  },
  {
    id: uuidv4(),
    name: "Serge Traoré",
    height: 197,
    nationality: "Mali",
    position: "SG",
    birthDate: "2000-06-22",
    socials: { instagram: "https://instagram.com/serge_traore" },
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    stats: generatePlayerStats(),
    records: generatePlayerRecords(),
  },
  // ... 10 autres joueurs de l’équipe 2
];

/* Fonctions utilitaires pour générer stats et records réalistes */
function generatePlayerStats() {
  return {
    general: {
      pts: random(10, 25),
      cer: random(10, 30),
      pas: random(2, 10),
      int: random(0, 5),
      suite: random(0, 5),
      pir: random(15, 35),
    },
    detailed: {
      total: {
        games: 20,
        starts: 18,
        min: random(25, 35),
        pts: random(200, 400),
        fg2: `${random(50, 120)}/${random(100, 200)}`,
        fg3: `${random(20, 60)}/${random(50, 150)}`,
        ft: `${random(40, 80)}/${random(50, 100)}`,
        rebounds: {
          off: random(10, 40),
          def: random(40, 100),
          total: random(50, 120),
        },
        assists: { st: random(20, 60), to: random(10, 40) },
        blocks: { fv: random(5, 20), ag: random(0, 10) },
        fouls: { cm: random(10, 40), rv: random(5, 15) },
        pir: random(150, 400),
      },
      average: {
        games: 20,
        starts: 18,
        min: random(25, 35),
        pts: random(10, 20),
        fg2: `${random(4, 10)}/${random(8, 20)}`,
        fg3: `${random(1, 5)}/${random(2, 10)}`,
        ft: `${random(1, 5)}/${random(2, 6)}`,
        rebounds: {
          off: random(1, 5),
          def: random(3, 8),
          total: random(4, 10),
        },
        assists: { st: random(1, 4), to: random(0, 3) },
        blocks: { fv: random(0, 2), ag: random(0, 1) },
        fouls: { cm: random(1, 3), rv: random(0, 2) },
        pir: random(10, 25),
      },
    },
    games: Array.from({ length: 5 }, (_, i) => ({
      gameId: uuidv4(),
      game: `Match ${i + 1}`,
      min: random(20, 35),
      pts: random(5, 25),
      fg2: `${random(1, 10)}/${random(2, 15)}`,
      fg3: `${random(0, 5)}/${random(1, 10)}`,
      ft: `${random(0, 5)}/${random(1, 6)}`,
      rebounds: { off: random(0, 5), def: random(1, 10), total: random(2, 12) },
      assists: { st: random(0, 5), to: random(0, 3) },
      blocks: { fv: random(0, 3), ag: random(0, 2) },
      fouls: { cm: random(0, 3), rv: random(0, 2) },
      pir: random(5, 35),
    })),
  };
}

function generatePlayerRecords() {
  return {
    bestPoints: { game: "Match 3", value: random(20, 35) },
    bestAssists: { game: "Match 2", value: random(5, 12) },
    bestRebounds: { game: "Match 4", value: random(6, 15) },
    bestPir: { game: "Match 5", value: random(15, 40) },
  };
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
