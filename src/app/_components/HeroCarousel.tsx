"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link"; // Ajout du Link
import { ArrowRight } from "lucide-react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/img1.jpg",
      title: "Match de la Semaine",
      text: "Découvrez les moments forts de la rencontre entre les Warriors et les Lakers.",
      href: "/actualite/match-semaine", // URL cible
    },
    {
      image: "/images/img2.jpeg",
      title: "Top Performances",
      text: "Les meilleurs joueurs de la semaine : statistiques et highlights.",
      href: "/actualite/top-performances",
    },
    {
      image: "/images/img3.jpeg",
      title: "Focus Équipe",
      text: "Zoom sur les Celtics et leur nouvelle stratégie offensive.",
      href: "/actualite/focus-equipe",
    },
    {
      image: "/images/img4.jpg",
      title: "Rookie Watch",
      text: "Les jeunes talents qui montent cette saison sont trop fort.",
      href: "/actualite/rookie-watch",
    },
    {
      image: "/images/img5.jpg",
      title: "Classement Actualisé",
      text: "Découvrez les nouvelles positions de vos équipes favorites.",
      href: "/actualite/classement-actualise",
    },
  ];

  return (
    <section className="relative text-black bg-white py-8 px-3    ">
      <div className="max-w-6xl mx-auto relative">
        {/* Container titre + flèches */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl text-black font-bold">A ne pas manquer</h1>

          {/* Boutons de navigation */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="swiper-prev bg-gradient-to-r from-[#EF8624] to-[#FFB347] hover:bg-orange-500 text-white rounded-full pointer-events-auto"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="swiper-next bg-gradient-to-r from-[#EF8624] to-[#FFB347] hover:bg-orange-500 text-white rounded-full pointer-events-auto"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={false}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
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
            className="pb-10"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="group relative">
                <Link href={slide.href} className="block">
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden relative ">
                    {/* Insigne "NOUVEAU" */}
                    <div className="absolute top-2 left-2 z-20">
                      <span className="bg-gradient-to-r from-[#EF8624] to-[#FFB347]  hover:bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        NOUVEAU
                      </span>
                    </div>

                    <div className="overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={600}
                        height={400}
                        className="w-full h-60 object-cover transform transition-transform duration-[2000ms] ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
                      <p className="text-sm text-black">{slide.text}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination (petits points) */}
        <div className="swiper-pagination !bottom-0 mt-15 z-50"></div>
        <div className="flex justify-end mt-6">
          <button className="flex items-center gap-2 bg-none">
            <a
              href="/actualite"
              className="flex text-sm items-center gap-2  hover:underline"
            >
              Voir plus <ArrowRight className="w-5 h-5" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
