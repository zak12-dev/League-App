"use client";

import React from "react";
import { Coach } from "@/types/ligue";
import styles from "@/styles/_components/cardcoach.module.css";

interface CoachCardProps {
  coach: Coach;
  onClick?: () => void;
}

export default function CoachCard({ coach, onClick }: CoachCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={coach.photo} alt={coach.nom} className={styles.photo} />
      <div className="ml-10 space-y-8">
        <div className={styles.role}>{coach.role}</div>
        <div>
          <div className={styles.prenom}>{coach.prenom}</div>
          <div className={styles.nom}>{coach.nom}</div>
        </div>
      </div>
    </div>
  );
}
