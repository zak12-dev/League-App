"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Slide {
  image: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

const slides: Slide[] = [
  {
    image: "images/img1.jpg",
    title:
      "BAL et Afreximbank renouvellent leur partenariat pour donner du pouvoir à la ligue",
    description: "Jusqu’à -50 % sur tous les séjours en bord de mer.",
    cta: "Réserver maintenant",
    href: "#",
  },
  {
    image: "images/img2.jpg",
    title:
      "Al Ahli Tripoli devient la première équipe africaine à monter sur le podium intercontinental",
    description:
      "Trois mois après avoir remporté le titre de la Basketball Africa League 2025, Al Ahli Tripoli est entré dans l’histoire en devenant la première équipe africaine à monter sur le podium de la Coupe continentale FIBA.",
    cta: "Voir la collection",
    href: "#",
  },
  {
    image: "images/img3.jpeg",
    title:
      "Quelle conférence BAL avait le meilleur maillot la saison dernière ?",
    description:
      "À l’occasion de la 6e édition annuelle du Jersey Day de la NBA, le lundi 20 octobre, la Basketball Africa League met le pouvoir entre vos mains. Il est temps de voter pour le meilleur maillot de conférence BAL de la saison dernière.",
    cta: "Découvrir",
    href: "#",
  },
];

export default function SplitImageCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade" // Activation du fade
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
        className="relative overflow-hidden"
        breakpoints={{
          1024: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] h-[593px]">
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <motion.img
                  key={`${slide.image}-${current}`}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: current === idx ? 1.1 : 1 }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    delay: current === idx ? 1.2 : 0,
                  }}
                />
                {/* FONDU */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none" />
              </div>

              {/* TEXTE */}
              <div className="flex flex-col justify-center p-8 md:p-12 bg-white text-black">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    current === idx
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  className="text-muted-foreground mb-6 text-lg"
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    current === idx
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={
                    current === idx
                      ? { x: 0, opacity: 1 }
                      : { x: 100, opacity: 0 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#EF8624] to-[#FFB347] rounded-full"
                    asChild
                  >
                    <a href={slide.href}>{slide.cta}</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
