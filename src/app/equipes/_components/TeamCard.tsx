"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "@/styles/_components/TeamCard.module.css";

interface TeamCardProps {
  team: {
    id: string;
    name: string;
    logo: string;
    slug: string;
  };
}

export default function TeamCard({ team }: TeamCardProps) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => router.push(`/equipes/${team.slug}`)}
    >
      <Card className={`${styles.card} cursor-pointer`}>
        <CardContent className={styles.cardContent}>
          <div className={styles.logoContainer}>
            <img src={team.logo} alt={team.name} className={styles.logo} />
          </div>
          <h3 className={styles.title}>{team.name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
