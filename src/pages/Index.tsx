// src/pages/Home.tsx
import Header from '../layout/Header';
import Hero from '../sections/hero/Hero'
import WhatIsEmoCoin from '../sections/WhatIsEmoCoin/WhatIsEmocoin';
import Tokenomics from '../sections/tokenomics/Tokenomics';
import HowToBuy from '../sections/howToBuy/HowToBuy';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatIsEmoCoin />
      <Tokenomics />
      <HowToBuy />
      
    </>
  );
};

export default Home;
