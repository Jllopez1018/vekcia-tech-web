"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroSlides from "../data/heroSlides";

export default function Hero() {
  return (
    <section id="inicio" className="hero">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
      >

        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="hero-overlay" />

              <div className="hero-content-card">

                <span
                  className="
                    inline-block
                    mb-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[var(--brand-secondary)]
                  "
                >
                  EMBLEMA SEGURO
                </span>

                <h1
                  className="
                    text-5xl
                    lg:text-6xl
                    font-black
                    tracking-tight
                    leading-[1]
                    text-[var(--brand-primary)]
                    mb-6
                  "
                >
                  {slide.title}
                </h1>

                <p>
                  {slide.subtitle}
                </p>

                <div className="hero-actions">

                  <a
                    href="#servicios"
                    className="
                      btn-primary
                      inline-flex
                      items-center
                      gap-2
                    "
                  >
                    Conocer nuestros seguros

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300"
                    >
                      →
                    </span>
                  </a>

                  <a
                    href="#contacto"
                    className="
                      btn-secondary
                      inline-flex
                      items-center
                    "
                  >
                    Contáctanos
                  </a>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}