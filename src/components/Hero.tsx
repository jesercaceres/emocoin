// src/components/Hero.tsx
import React, { useEffect, useRef } from "react";
import "./Hero.css";
import emoboy from "../assets/images/emocoin.png";
import bear from "../assets/images/heroimgs/bear.png";
import banner2 from "../assets/images/heroimgs/heart.png";
import decoBottomLeft from "../assets/images/heroimgs/guitar.png";
import decoBottomRight from "../assets/images/heroimgs/book.png";

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.body;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // quando o Hero estiver majoritariamente visível, remove a classe que deixa azul
          if (entry.target === ref.current && entry.isIntersecting) {
            body.classList.remove("page-whatis");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // opcional: indicador de scroll que leva à seção “WhatIsEmocoin”
  const scrollToWhatIs = () => {
    const el = document.getElementById("whatis");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" ref={ref} className="hero">
      {/* Imagens laterais decorativas */}
      <img src={bear} alt="Decor Left" className="hero-side-img hero-side-left" />
      <img
        src={banner2}
        alt="Decor Right"
        className="hero-side-img hero-side-right pulse"
      />

      {/* Imagens decorativas inferiores */}
      <img
        src={decoBottomLeft}
        alt="Bottom Left"
        className="hero-side-img hero-bottom-left shake shake-delay"
      />
      <img
        src={decoBottomRight}
        alt="Bottom Right"
        className="hero-side-img hero-bottom-right flicker"
      />

      <div className="hero-content">
        <h1 className="hero-title">
          Embrace the Sadness.
          <br />
          Empower the Future.
        </h1>
        <p className="hero-subtitle">
          A meme coin for those who cried, loved, and never forgot.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Buy EmoCoin</button>
          <button className="btn-secondary">Join the EmoCrew</button>
        </div>
        <div className="hero-bubble">Such sadness. Much gains.</div>

        {/* Personagem com float */}
        <img src={emoboy} alt="Emocoin Hero" className="hero-image" />
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToWhatIs}>
        ⌄
      </div>
    </section>
  );
};

export default Hero;
