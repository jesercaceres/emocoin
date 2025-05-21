import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Tokenomics.css';

// Importação das imagens
import SupplyImg from '../../assets/images/tokenomicsImgs/Supply.png';
import CirculatingSupplyImg from '../../assets/images/tokenomicsImgs/CirculatingSupply (2).png';
import TeamAllocationImg from '../../assets/images/tokenomicsImgs/TeamAllocation (1).png';
import CommunityPoolImg from '../../assets/images/tokenomicsImgs/pool (1).png';

interface Metric {
  label: string;
  value: string;
  image: string;
}

const metrics: Metric[] = [
  { label: 'Total Supply',       value: '1 000 000 ', image: SupplyImg },
  { label: 'Circulating Supply', value: '500 000 ',   image: CirculatingSupplyImg },
  { label: 'Team Allocation',    value: '10%',           image: TeamAllocationImg },
  { label: 'Community Pool',     value: '20%',           image: CommunityPoolImg },
];

const Tokenomics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const body = document.body;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            if (entry.isIntersecting) {
              body.classList.add("page-tokenomics");
            } else {
              body.classList.remove("page-tokenomics");
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
    <section
      id="tokenomics"
      className="section tokenomics"
      ref={(el) => {
        sectionRef.current = el;
        ref(el);
      }}
    >
      <div className="tokenomics__content">
        <h2 className="tokenomics__title">Tokenomics</h2>
        <p className="tokenomics__subtitle">Distribution & Allocation</p>

        <div className="tokenomics__cards">
          {metrics.map(({ label, value, image }, index) => (
            <motion.div
              key={label}
              className="tokenomics__card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={image}
                alt={label}
                className="tokenomics__icon"
                draggable={false}
              />
              <div className="tokenomics__info">
                <span className="tokenomics__label">{label}</span>
                <span className="tokenomics__value">{value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
