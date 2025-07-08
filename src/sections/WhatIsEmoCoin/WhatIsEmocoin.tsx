import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./WhatIsEmocoin.css";
import emoMascot from "../../assets/images/whatIsEmocoinImgs/emo-girl.png";

const WhatIsEmocoin: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const disableAnimation = typeof window !== "undefined" && window.location.hash === "#whatis";

  useEffect(() => {
    const body = document.body;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            if (entry.isIntersecting) {
              body.classList.add("page-whatis");
            } else {
              body.classList.remove("page-whatis");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="whatis"
      ref={sectionRef}
      className="section whatis-container"
      initial={disableAnimation ? false : "hidden"}
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="whatis-text">
        <motion.h1
          className="neon-sign"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What is EmoCoin?
        </motion.h1>

        <motion.h2
          className="whatis-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A peer-to-peer tokenized emotion network,
          <br />
          <span className="highlight">favored by broken hearts worldwide.</span>
        </motion.h2>

        {[...Array(3)].map((_, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            {[
              `At its core, EmoCoin is the unapologetic memecoin born out of heartache and glitter. It is an open-source peer-to-peer cryptocurrency that uses blockchain technology to tokenize sadness, poetry, and eyeliner.`,
              `EmoCoin represents a decentralized way to store emotional value on-chain, validated by a decentralized network of people who have cried to early 2000s playlists.`,
              <>
                Beyond technology, EmoCoin is a movement—summarized in the{" "}
                <a href="/manifesto" className="whatis-link">
                  Emo Manifesto
                </a>
                , and supported by an unapologetically emotional community just like you.{" "}
                <a href="/learn" className="whatis-link">
                  Learn more.
                </a>
              </>,
            ][i]}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="whatis-image-placeholder"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={emoMascot} alt="EmoCoin Mascot" className="whatis-image" />
      </motion.div>
    </motion.section>
  );
};

export default WhatIsEmocoin;
  