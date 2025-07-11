import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Ttsupply from '../../assets/images/tokenomicsImgs/Supply.png';
import Csupply from '../../assets/images/tokenomicsImgs/CirculatingSupply (2).png';
import TeamAlocation from '../../assets/images/tokenomicsImgs/TeamAllocation (1).png';
import ComunnityPool from '../../assets/images/tokenomicsImgs/CommunityPool (1).png';
import './tokenomics.css';

export default function Tokenomics() {
  return (
    <section id='tokenomics' className='tokenomics'>
      {/* camadas de fundo */}
      <div className='bkg noise'></div>
      <div className='bkg dots'></div>
      <div className='bkg glitter'></div>

      <div className='container'>
        {/* Título com animação */}
        <Fade triggerOnce cascade damping={0.08} direction='up'>
          <h2 className='emo-title' aria-label='TOKENOMICS'>
            {'TOKENOMICS'.split('').map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </h2>
        </Fade>

        <p className='tk-sub'>Distribution&nbsp;&amp;&nbsp;Allocation</p>

        {/* Cards estáticos */}
        <div className='emo-grid'>

          {/* Card 1 */}
          <div className='emo-card'>
            <img src={Ttsupply} alt='Total Supply' className='emo-icon' />
            <span className='emo-label'>Total Supply</span>
            <span className='emo-value'>1 000 000</span>
            <span className='emo-sticker' />
          </div>

          {/* Card 2 */}
          <div className='emo-card'>
            <img src={Csupply} alt='Circulating Supply' className='emo-icon' />
            <span className='emo-label'>Circulating Supply</span>
            <span className='emo-value'>500 000</span>
            <span className='emo-sticker' />
          </div>

          {/* Card 3 */}
          <div className='emo-card'>
            <img src={TeamAlocation} alt='Team Allocation' className='emo-icon' />
            <span className='emo-label'>Team Allocation</span>
            <span className='emo-value'>10%</span>
            <span className='emo-sticker' />
          </div>

          {/* Card 4 */}
          <div className='emo-card'>
            <img src={ComunnityPool} alt='Community Pool' className='emo-icon' />
            <span className='emo-label'>Community Pool</span>
            <span className='emo-value'>20%</span>
            <span className='emo-sticker' />
          </div>

        </div>
      </div>
    </section>
  );
}
