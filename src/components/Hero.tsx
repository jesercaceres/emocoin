import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="/hero-emo.png"
          alt="Emocoin Hero"
          className="hero-image"
        />
        <h1 className="hero-title">
          Embrace the Sadness.<br />Empower the Future.
        </h1>
        <p className="hero-subtitle">
          A meme coin for those who cried, loved, and never forgot.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">🖤 Buy EmoCoin</button>
          <button className="btn-secondary">Join the EmoCrew</button>
        </div>
        <div className="hero-bubble">
          Such sadness. Much gains.
        </div>
      </div>
    </section>
  );
};

export default Hero;
