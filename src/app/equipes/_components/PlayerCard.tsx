"use client";

import React from "react";
import { Player } from "@/types/ligue";
import styles from "@/styles/_components/cardplayer.module.css";

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

export default function PlayerCard({ player, onClick }: PlayerCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={player.photo} alt={player.nom} className={styles.photo} />
      <div>
        <div className={styles.prenom}>{player.prenom}</div>
        <div className={styles.nom}>{player.nom}</div>
      </div>
      <div className={styles.position}>{player.number}</div>
    </div>
  );
}
