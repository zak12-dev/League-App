"use client";

import React from "react";
import { MoveRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function FeaturedVideo() {
  const videoData = {
    src: "/videos/video1.mp4",
    title: "Video en vedette",
    soustitre:
      "Revivez les moments forts du dernier match avec les meilleures actions",
    ctaHref: "/videos/lakers-vs-warriors",
  };

  return (
    <a
      href={videoData.ctaHref}
      className="block max-w-4xl ml-8 mb-10  px-8 py-8 cursor-pointer group hover:no-underline bg-white "
    >
      {/* Titre et separator */}
      <h2 className="text-3xl font-bold mb-2">Vidéo en vedette</h2>
      <Separator className="mb-6" />

      {/* Contenu flex */}
      <div className="flex flex-col md:flex-row overflow-hidden shadow-lg rounded-xl border border-gray-100 py-5">
        {/* Vidéo */}
        <div className="flex-1">
          <video
            src={videoData.src}
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texte à droite */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 bg-white">
          <h3 className="text-gray-700 mb-4 text-lg md:text-md font-semibold">
            {videoData.title}
          </h3>
          {/* Sous-titre qui se souligne au hover sur toute la card */}
          <p className="text-2xl md:text-3xl font-bold mb-2 transition-all duration-200 group-hover:underline">
            {videoData.soustitre}{" "}
            <span className="inline-block align-baseline">
              <MoveRight className="w-5 h-5 inline" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center gap-2 bg-none">
          <a
            href="/videos"
            className="flex text-sm items-center gap-2  hover:underline"
          >
            Voir plus <ArrowRight className="w-5 h-5" />
          </a>
        </button>
      </div>
    </a>
  );
}
