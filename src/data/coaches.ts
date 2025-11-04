import { Coach } from "@/types/ligue";
import { v4 as uuidv4 } from "uuid";

export const coaches: Coach[] = [
  // Équipe 1
  {
    id: uuidv4(),
    teamSlug: "lions-dakar",
    nom: " BA",
    prenom: "AMADOU",
    role: "ENTRAINEUR CHEF",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "lions-dakar",
    nom: "NDIAYE",
    prenom: "CHEICK ",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "lions-dakar",
    nom: " DIOP",
    prenom: "FATOU",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "lions-dakar",
    nom: "FALL",
    prenom: "MOUSSA ",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },

  // Équipe 2
  {
    id: uuidv4(),
    teamSlug: "elephants-abidjan",
    nom: " KOUADIO",
    prenom: "JEAN-LUC",
    role: "ENTRAINEUR CHEF",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "elephants-abidjan",
    nom: " EHOUMAN",
    prenom: "PATRICK",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "elephants-abidjan",
    nom: " N'GORAN",
    prenom: "ALINE",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: uuidv4(),
    teamSlug: "elephants-abidjan",
    nom: " N'DRI",
    prenom: "BORIS",
    role: "ENTRAINEUR ADJOINT",
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];
