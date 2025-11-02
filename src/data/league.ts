import { League } from "@/types/ligue";
import { teams } from "./teams";
import { v4 as uuidv4 } from "uuid";

export const leagueMock: League = {
  id: uuidv4(),
  name: "Ligue Africaine de Basketball",
  season: "2025-2026",
  logo: "/logos/league.png",
  teams,
};
