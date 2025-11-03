"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { text } from "stream/consumers";
import { Separator } from "@/components/ui/separator";

export default function TrendingVideos() {
  const videos = [
    {
      src: "https://www.youtube.com/watch?v=pUctpfv6A0M", // Top 100 Dunks (compilation)
      title: "Top 100 Dunks of the Season",
      href: "https://www.youtube.com/watch?v=pUctpfv6A0M",
    }, // source: YouTube. :contentReference[oaicite:0]{index=0}

    {
      src: "https://youtu.be/ckDPu1DuGaE", // Warriors vs Lakers (highlights / full game highlights)
      title: "Warriors vs Lakers - Full Game ",
      href: "https://www.youtube.com/watch?v=gpssIL2D3wY",
    }, // source: YouTube. :contentReference[oaicite:1]{index=1}

    {
      src: "https://www.youtube.com/watch?v=YGSscdiooeA", // Top assists compilation
      title: "Top 50 Assists Of The 2024-25 Season",
      href: "https://www.youtube.com/watch?v=YGSscdiooeA",
    }, // source: YouTube. :contentReference[oaicite:2]{index=2}

    {
      src: "https://www.youtube.com/watch?v=SEGCH3NJUJs", // Top rookie plays
      title: "Top Rookie Plays of the 2024 Season",
      href: "https://www.youtube.com/watch?v=SEGCH3NJUJs",
    }, // source: YouTube. :contentReference[oaicite:3]{index=3}

    {
      src: "https://www.youtube.com/watch?v=XJEqAlIA1f4", // Epic moments / compilation
      title: "The Most EPIC NBA Moments",
      href: "https://www.youtube.com/watch?v=XJEqAlIA1f4",
    }, // source: YouTube. :contentReference[oaicite:4]{index=4}
  ];

  return (
    <section className="relative text-black bg-white py-8 px-8 ml-8 max-w-4xl">
      <div className="max-w-4xl mx-auto relative">
        {/* Titre + navigation */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Les tendances actuelles</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="video-prev bg-gradient-to-r from-[#EF8624] to-[#FFB347] hover:bg-orange-500 text-white rounded-full pointer-events-auto"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="video-next bg-gradient-to-r from-[#EF8624] to-[#FFB347] hover:bg-orange-500 text-white rounded-full pointer-events-auto"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Separator className="my-4" />

        {/* Swiper container */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={false}
          navigation={{
            nextEl: ".video-next",
            prevEl: ".video-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 "
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="group">
              <a
                href={video.href}
                className="block rounded-xl overflow-hidden relative border border-gray-100"
              >
                <video
                  src={video.src}
                  className="w-full h-60 object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                  autoPlay={false}
                  muted
                  loop
                  controls
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold ">{video.title}</h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-0 mt-5 z-50"></div>
      </div>
    </section>
  );
}
