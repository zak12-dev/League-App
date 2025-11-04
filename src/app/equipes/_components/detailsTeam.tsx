"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FilterPlayer from "@/app/equipes/_components/FilterPlayer"; // adapte le chemin si besoin
import { teams } from "@/data/teams";

import { players } from "@/data/players";
import { coaches } from "@/data/coaches"; // crée un fichier data/coach.ts si tu n'en as pas
import { seasons } from "@/data/seasons"; // tableau des années/ saisons disponibles

export default function TeamTabs() {
  const tabs = ["Équipe", "Liste", "Jeux", "Stats"];
  const [selectedTab, setSelectedTab] = useState("Liste");
  // Équipe sélectionnée
  const [selectedTeam, setSelectedTeam] = useState(teams[0]); // par défaut la première équipe

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {tabs.map((tabLabel) => (
            <motion.li
              key={tabLabel}
              initial={false}
              animate={{
                color: tabLabel === selectedTab ? "#000" : "#666",
              }}
              style={{
                ...tab,
                fontSize: 20,
                fontWeight: tabLabel === selectedTab ? 700 : 500,
                padding: "15px 20px",
              }}
              onClick={() => setSelectedTab(tabLabel)}
            >
              {tabLabel}
              {tabLabel === selectedTab && (
                <motion.div style={underline} layoutId="underline" />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main style={contentContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab === "Liste" ? (
              <FilterPlayer
                players={players}
                coaches={coaches}
                seasons={seasons}
                teamSlug={selectedTeam.slug}
              />
            ) : (
              <h2 style={{ fontSize: 32, margin: 0 }}>{selectedTab} Content</h2>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/** Styles */

const container: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  borderRadius: 8,
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const nav: React.CSSProperties = {
  width: "250px",
  padding: "10px",
  paddingBottom: "2px",
  borderRight: "1px solid #eeeeee",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const tabsContainer: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  padding: 0,
  margin: 0,
};

const tab: React.CSSProperties = {
  padding: "20px",
  textAlign: "center",
  fontSize: 18,
  fontWeight: 600,
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#fff",
  userSelect: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  background: "linear-gradient(to right, #EF8624, #FFB347)",
};

const contentContainer: React.CSSProperties = {
  padding: 30,
  minHeight: 150,
  flex: 1,
  backgroundColor: "#f3f4f6", // bg-gray-100
  textAlign: "left",
};
