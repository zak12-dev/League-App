"use client";

import { useState, useEffect } from "react";
import MatchCard from "./MatchCard";

interface Match {
  date: string;
  matches: {
    homeTeam: string;
    awayTeam: string;
    time: string;
    arena: string;
    sponsor?: string;
    broadcast?: string;
  }[];
}

interface CalendarListProps {
  data: Match[];
  selectedTeam: string;
}

export default function CalendarList({ data }: CalendarListProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateIndex = () => {
      const now = new Date();
      let newIndex = 0;

      for (let i = 0; i < data.length; i++) {
        const dayEnd = new Date(data[i].date);
        dayEnd.setHours(23, 59, 59, 999);
        if (dayEnd < now) {
          newIndex = i + 1;
        }
      }

      if (newIndex !== startIndex) {
        setStartIndex(newIndex);
      }

      // relancer après 1 seconde
      timeoutId = setTimeout(updateIndex, 1000);
    };

    updateIndex();

    return () => clearTimeout(timeoutId); // cleanup correct
  }, [data, startIndex]);

  const visibleDays = data.slice(startIndex, startIndex + 3);

  return (
    <div className="space-y-8">
      {visibleDays.map((day) => (
        <div key={day.date} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-gray-700 text-[20px]">
              {new Date(day.date).toLocaleDateString()} ({day.matches.length}{" "}
              jeux)
            </p>
          </div>

          <div className="space-y-4">
            {day.matches.map((match, index) => {
              const [hours, minutes] = match.time.split(":");
              const matchDate = new Date(day.date);
              matchDate.setHours(Number(hours), Number(minutes), 0, 0);

              return (
                <MatchCard
                  key={index}
                  matchNumber={index + 1}
                  homeTeam={match.homeTeam}
                  awayTeam={match.awayTeam}
                  time={match.time}
                  arena={match.arena}
                  sponsor={match.sponsor}
                  broadcast={match.broadcast}
                  matchDate={matchDate.toISOString()}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
