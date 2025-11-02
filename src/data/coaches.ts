import { Coach } from "@/types/ligue";
import { v4 as uuidv4 } from "uuid";

export const coaches: Coach[] = [
  // Équipe 1
  { id: uuidv4(), name: "Amadou Ba", role: "Head Coach" },
  { id: uuidv4(), name: "Cheikh Ndiaye", role: "Assistant Coach" },
  { id: uuidv4(), name: "Fatou Diop", role: "Trainer" },
  { id: uuidv4(), name: "Moussa Fall", role: "Physio" },

  // Équipe 2
  { id: uuidv4(), name: "Jean-Luc Kouadio", role: "Head Coach" },
  { id: uuidv4(), name: "Patrick Ehouman", role: "Assistant Coach" },
  { id: uuidv4(), name: "Aline N'Goran", role: "Trainer" },
  { id: uuidv4(), name: "Boris N'Dri", role: "Physio" },
];
