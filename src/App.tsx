import React from "react";
import { useLocoScroll } from "./hooks/useLocoScroll";
import Tokenomics from "./sections/tokenomics/Tokenomics";
import Hero from "./sections/hero/Hero";
import Header from "./layout/Header";
import WhatIsEmocoin from "./sections/WhatIsEmoCoin/WhatIsEmocoin";
import HowToBuy from "./sections/howToBuy/HowToBuy";

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
      </div>
    </>
  );
};

export default App;
