import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    const body = document.body;
    const observer = new IntersectionObserver(
      ([entry]) => {
        body.classList.toggle("page-tokenomics", entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section tokenomics" ref={sectionRef}>
      <div id="tokenomics" className="tokenomics__content" ref={ref}>
        <h2 className="tokenomics__title">TOKENOMICS</h2>
        <p className="tokenomics__subtitle">Distribution & Allocation</p>

        <div className="tokenomics__cards">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="tokenomics__card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={metric.image}
                alt={metric.label}
                className="tokenomics__icon"
                draggable={false}
              />
              <span className="tokenomics__label">{metric.label}</span>
              <span className="tokenomics__value">{metric.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
