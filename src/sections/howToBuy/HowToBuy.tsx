import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./HowToBuy.css";

import metamaskIcon from "../../assets/images/howToBuyImgs/metamaskIcon.png";
import moneyBagIcon from "../../assets/images/howToBuyImgs/moneyBagIcon.png";
import swapIcon     from "../../assets/images/howToBuyImgs/swapIcon.png";

const steps = [
  {
    icon: metamaskIcon,
    title: "Get a Wallet",
    subtitle: "Because even sadness needs a safe place.",
    desc: "Install MetaMask or any wallet compatible with Ethereum or BNB."
  },
  {
    icon: moneyBagIcon,
    title: "Buy ETH or BNB",
    subtitle: "Every tear has its price.",
    desc: "Use Binance or Coinbase to purchase ETH/BNB and send it to your wallet."
  },
  {
    icon: swapIcon,
    title: "Swap for $EMO",
    subtitle: "Now convert pain into chain.",
    desc: "Use Uniswap or PancakeSwap to trade ETH/BNB for $EMO."
  }
];

const HowToBuy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="section htb" id="howToBuy" ref={sectionRef}>
      <motion.div
        className="htb__content"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* ---------- título ---------- */}
        <div className="htb__title-wrapper">
          {"HOW TO BUY $EMO".split("").map((ch, i) => (
            <motion.span
              key={i}
              className="htb__title-letter"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.35, ease: "easeOut" }}
            >
              {ch}
            </motion.span>
          ))}
        </div>

        <p className="htb__subtitle">
          The path to despair is simple. Just follow the steps.
        </p>

        {/* ---------- cards ---------- */}
        <div className="htb__steps">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              className="htb__card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="htb__icon">
                <img src={s.icon} alt={s.title} draggable={false} />
              </div>
              <div className="htb__info">
                <h3 className="htb__step-title">{s.title}</h3>
                <p className="htb__step-subtitle">{s.subtitle}</p>
                <p className="htb__step-desc">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowToBuy;