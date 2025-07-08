import React from "react";
import { useLocoScroll } from "./hooks/useLocoScroll";
import Tokenomics from "./sections/tokenomics/Tokenomics";
import Hero from "./sections/hero/Hero";
import Header from "./layout/Header";
import WhatIsEmocoin from "./sections/WhatIsEmoCoin/WhatIsEmocoin";
import DividerTokenomicsHowToBuy from "./components/divider/DividerTokenomicsHowToBuy";
import HowToBuy from "./sections/howToBuy/HowToBuy";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  const scrollRef = useLocoScroll();

  return (
    <>
      <Header />
      <div id="scroll-container" data-scroll-container ref={scrollRef}>
        <Hero />
        <WhatIsEmocoin />
        <Tokenomics />
        <HowToBuy />
        <Footer />
      </div>
    </>
  );
};

export default App;
