import React from "react";
import { motion } from "framer-motion";
import "./HowToBuy.css";

import metamaskIcon from "../../assets/images/howToBuyImgs/metamaskIcon.png";
import moneyBagIcon from "../../assets/images/howToBuyImgs/moneyBagIcon.png";
import swapIcon from "../../assets/images/howToBuyImgs/swapIcon.png";

const steps = [
  {
    icon: metamaskIcon,
    title: "Get a Wallet",
    subtitle: "Because even sadness needs a safe place.",
    desc: "Install MetaMask or any wallet compatible with Ethereum or BNB.",
  },
  {
    icon: moneyBagIcon,
    title: "Buy ETH or BNB",
    subtitle: "Every tear has its price.",
    desc: "Use Binance or Coinbase to purchase ETH/BNB and send it to your wallet.",
  },
  {
    icon: swapIcon,
    title: "Swap for $EMO",
    subtitle: "Now convert pain into chain.",
    desc: "Use Uniswap or PancakeSwap to trade ETH/BNB for $EMO.",
  },
];

const HowToBuy = () => {
  const disableAnimation = typeof window !== "undefined" && window.location.hash === "#howToBuy";

  return (
    <motion.section
      id="howToBuy"
      className="section htb"
      initial={disableAnimation ? false : "hidden"}
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="htb__content">
        <h2 className="htb__title">HOW TO BUY $EMO</h2>
        <p className="htb__subtitle">
          The path to despair is simple. Just follow the steps.
        </p>

        <div className="htb__steps">
          {steps.map((step, index) => (
            <div key={index} className={`htb__card htb__card--${index}`}>
              <div className="htb__icon">
                <img src={step.icon} alt={step.title} draggable={false} />
              </div>
              <div className="htb__info">
                <h3 className="htb__step-title">{step.title}</h3>
                <p className="htb__step-subtitle">{step.subtitle}</p>
                <p className="htb__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowToBuy;
