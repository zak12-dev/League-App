/* ──────────────────────────────────────────────── */
/*                    LIGUE                       */
/* ──────────────────────────────────────────────── */
export interface League {
  id: string;
  name: string;
  season: string;
  logo: string;
  teams: Team[];
}

/* ──────────────────────────────────────────────── */
/*                     ÉQUIPE                      */
/* ──────────────────────────────────────────────── */
export interface Team {
  id: string;
  name: string;
  city: string;
  logo: string;
  players: Player[];
  coaches: Coach[];
  roster: TeamRoster; // effectif (par poste)
  matches: TeamMatches; // matchs (passés / futurs)
  stats: TeamStats; // statistiques globales
}

/**
 * Regroupe les membres selon leur rôle sur le terrain
 */
export interface TeamRoster {
  guards: Player[]; // Arrières (PG / SG)
  forwards: Player[]; // Ailiers (SF / PF)
  centers: Player[]; // Pivots (C)
  coaches: Coach[]; // Staff technique
}

/**
 * Informations sur les matchs de l’équipe
 */
export interface TeamMatches {
  nextImmediate: Game | null; // prochain match immédiat
  upcoming: Game[]; // matchs à venir
  past: GameResult[]; // résultats des matchs passés
}

/**
 * Représente un match
 */
export interface Game {
  id: string;
  opponent: string; // équipe adverse
  date: string; // ex: "2025-02-10T18:00:00Z"
  location: string;
  home: boolean; // true = domicile, false = extérieur
}

/**
 * Représente le résultat d’un match joué
 */
export interface GameResult extends Game {
  scoreFor: number;
  scoreAgainst: number;
  win: boolean;
}

/**
 * Statistiques de l’équipe
 */
export interface TeamStats {
  general: TeamGeneralStats; // statistiques globales collectives
  players: TeamPlayerStats[]; // statistiques par joueur
}

/**
 * Statistiques générales de l’équipe
 */
export interface TeamGeneralStats {
  pts: number;
  ast: number;
  reb: number;
  stl: number;
  blk: number;
  pir: number;
}

/**
 * Statistiques des joueurs dans le contexte de l’équipe
 */
export interface TeamPlayerStats {
  id: string;
  player: string; // nom du joueur
  gp: number; // games played
  gs: number; // games started
  min: number;
  pts: number;
  fg2: string; // format "8/15" ou "53%"
  fg3: string;
  ft: string;
  or: number; // offensive rebounds
  dr: number; // defensive rebounds
  tr: number; // total rebounds
  ast: number;
  stl: number;
  to: number;
  blk: number;
  blka: number;
  fc: number; // fautes commises
  fd: number; // fautes reçues
  pir: number; // performance index rating
}

/* ──────────────────────────────────────────────── */
/*                     JOUEUR                      */
/* ──────────────────────────────────────────────── */

export interface Player {
  id: string;
  name: string;
  height: number;
  nationality: string;
  position: "PG" | "SG" | "SF" | "PF" | "C";
  birthDate: string;
  socials?: PlayerSocials;
  photo: string;
  stats: PlayerStats;
  records?: PlayerRecords; // Meilleures performances en carrière
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  photo?: string;
}

export interface PlayerSocials {
  instagram?: string;
  twitter?: string;
  facebook?: string;
}

/* Stats du joueur (inchangées) */
export interface PlayerStats {
  general: GeneralStats;
  detailed: DetailedStats;
  games: GameStats[];
}

/* Meilleures performances du joueur (records) */
export interface PlayerRecords {
  bestPoints: { game: string; value: number };
  bestAssists: { game: string; value: number };
  bestRebounds: { game: string; value: number };
  bestPir: { game: string; value: number };
}

/* Déjà définis précédemment : */
export interface GeneralStats {
  pts: number;
  cer: number;
  pas: number;
  int: number;
  suite: number;
  pir: number;
}
export interface DetailedStats {
  total: DetailedStatsItem;
  average: DetailedStatsItem;
}
export interface DetailedStatsItem {
  games: number;
  starts: number;
  min: number;
  pts: number;
  fg2: string; // pourcentage ou valeur "6/10"
  fg3: string;
  ft: string;
  rebounds: {
    off: number;
    def: number;
    total: number;
  };
  assists: {
    st: number; // steals
    to: number; // turnovers
  };
  blocks: {
    fv: number; // favorable (contres réussis)
    ag: number; // against (contres subis)
  };
  fouls: {
    cm: number; // commises
    rv: number; // reçues
  };
  pir: number;
}
export interface GameStats {
  gameId: string;
  game: string; // ex: "Panthères vs Aigles"
  min: number;
  pts: number;
  fg2: string;
  fg3: string;
  ft: string;
  rebounds: {
    off: number;
    def: number;
    total: number;
  };
  assists: {
    st: number;
    to: number;
  };
  blocks: {
    fv: number;
    ag: number;
  };
  fouls: {
    cm: number;
    rv: number;
  };
  pir: number;
}
