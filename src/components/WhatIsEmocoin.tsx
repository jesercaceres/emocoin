import React from "react";
import "./WhatIsEmocoin.css";
import emoMascot from "../assets/images/emogirlNeon.png";

const WhatIsEmocoin: React.FC = () => {
  return (
    <section className="whatis-container">
      <div className="whatis-text">
        <h1 className="neon-sign">What is EmoCoin?</h1>
        <h2 className="whatis-subtitle">
          A peer-to-peer tokenized emotion network,
          <br />
          <span className="highlight">favored by broken hearts worldwide.</span>
        </h2>

        <p>
          At its core, EmoCoin is the unapologetic memecoin born out of
          heartache and glitter. It is an open-source peer-to-peer
          cryptocurrency that uses blockchain technology to tokenize sadness,
          poetry, and eyeliner.
        </p>
        <p>
          EmoCoin represents a decentralized way to store emotional value
          on-chain, validated by a decentralized network of people who have
          cried to early 2000s playlists.
        </p>
        <p>
          Beyond technology, EmoCoin is a movement—summarized in the
          <a href="/manifesto" className="whatis-link">
            {" "}
            Emo Manifesto
          </a>
          , and supported by an unapologetically emotional community just like
          you.
          <a href="/learn" className="whatis-link">
            {" "}
            Learn more.
          </a>
        </p>
      </div>

      <div className="whatis-image-placeholder">
        <img
          src={emoMascot}
          alt="EmoCoin Mascot"
          className="whatis-image"
        />
      </div>
    </section>
  );
};

export default WhatIsEmocoin;
