import React from 'react';
import './Hero.css';
import emoboy from '../assets/images/emocoin.png';
import bear from '../assets/images/heroimgs/bear.png';
import banner2 from '../assets/images/heroimgs/heart.png';
import decoBottomLeft from '../assets/images/heroimgs/guitar.png';
import decoBottomRight from '../assets/images/heroimgs/book.png';

const Hero: React.FC = () => {
  return (
    <>
      <section className="image-gallery">
        <div className="image-gallery-wrapper">
          {/* pode continuar adicionando quantas quiser */}
        </div>
      </section>

      <section className="hero">
        {/* Imagens laterais decorativas */}
        <img
          src={bear}
          alt="Decor Left"
          className="hero-side-img hero-side-left"
        />
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
          className="hero-side-img hero-bottom-right shake shake-delay"
        />

        <div className="hero-content">
          <h1 className="hero-title">
            Embrace the Sadness.<br />Empower the Future.
          </h1>
          <p className="hero-subtitle">
            A meme coin for those who cried, loved, and never forgot.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Buy EmoCoin</button>
            <button className="btn-secondary">Join the EmoCrew</button>
          </div>
          <div className="hero-bubble">
            Such sadness. Much gains.
          </div>

          {/* Personagem com float */}
          <img
            src={emoboy}
            alt="Emocoin Hero"
            className="hero-image"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">⌄</div>
      </section>
    </>
  );
};

export default Hero;
