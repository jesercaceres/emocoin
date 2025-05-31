import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./Tokenomics.css";

import SupplyImg from "../../assets/images/tokenomicsImgs/Supply.png";
import CirculatingSupplyImg from "../../assets/images/tokenomicsImgs/CirculatingSupply (2).png";
import TeamAllocationImg from "../../assets/images/tokenomicsImgs/TeamAllocation (1).png";
import CommunityPoolImg from "../../assets/images/tokenomicsImgs/pool (1).png";

const metrics = [
  { label: "Total Supply", value: "1 000 000", image: SupplyImg },
  { label: "Circulating Supply", value: "500 000", image: CirculatingSupplyImg },
  { label: "Team Allocation", value: "10%", image: TeamAllocationImg },
  { label: "Community Pool", value: "20%", image: CommunityPoolImg },
];

const Tokenomics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    const body = document.body;
    const observer = new IntersectionObserver(
      ([entry]) => {
        body.classList.toggle("page-tokenomics", entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    setTimeout(() => {
      try {
        const scrollContainers = document.querySelectorAll("[data-scroll-container]");
        if (scrollContainers.length > 0 && scrollContainers[0]['locomotive']) {
          scrollContainers[0]['locomotive'].update();
        }
      } catch (err) {
        console.warn("Locomotive update failed:", err);
      }
    }, 800);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section tokenomics" ref={sectionRef}>
      <div
        id="tokenomics"
        className="tokenomics__content"
        ref={ref}
      >
        <div
          className="tokenomics__title"
          aria-label="TOKENOMICS"
        >
          {"TOKENOMICS".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ amount: 0.3 }} // sempre que entrar no viewport
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <p className="tokenomics__subtitle">Distribution & Allocation</p>

        <div className="tokenomics__cards">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="tokenomics__card"
              data-scroll
              data-scroll-speed={i % 2 === 0 ? 1 : 1.5}
            >
              <img
                src={metric.image}
                alt={metric.label}
                className="tokenomics__icon"
                draggable={false}
              />
              <span className="tokenomics__label">{metric.label}</span>
              <span className="tokenomics__value">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
