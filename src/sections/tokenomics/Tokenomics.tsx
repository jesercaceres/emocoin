import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './tokenomics.css';

/* ------------------------------------------------------------------ */
/* Dados de demonstração                                              */
const metrics = [
  { label: 'Total Supply',       value: '1 000 000' },
  { label: 'Circulating Supply', value: '500 000'   },
  { label: 'Team Allocation',    value: '10 %'      },
  { label: 'Community Pool',     value: '20 %'      },
];

/* ------------------------------------------------------------------ */
export default function Tokenomics() {
  return (
    <section id='tokenomics' className='tokenomics'>
      {/* camadas de fundo */}
      <div className='bkg noise'></div>
      <div className='bkg dots'></div>
      <div className='bkg glitter'></div>

      <div className='container'>
        {/* Título com animação via react-awesome-reveal */}
        <Fade
          triggerOnce        /* anima apenas na 1ª vez que entra na viewport */
          cascade            /* anima cada filho de .emo-title em sequência  */
          damping={0.08}     /* atraso entre letras                          */
          direction='up'     /* “slide-up + fade”                            */
        >
          <h2 className='emo-title' aria-label='TOKENOMICS'>
            {'TOKENOMICS'.split('').map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </h2>
        </Fade>

        <p className='tk-sub'>Distribution&nbsp;&amp;&nbsp;Allocation</p>

        {/* Grid de cards (hover CSS) */}
        <div className='emo-grid'>
          {metrics.map((m, i) => (
            <div key={i} className='emo-card'>
              <svg className='emo-icon' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='45'
                        fill='var(--accent-pink)' opacity='.18' />
                <path d='M30 60 L50 30 L70 60 Z'
                      fill='var(--accent-pink)' />
              </svg>

              <span className='emo-label'>{m.label}</span>
              <span className='emo-value'>{m.value}</span>

              <span className='emo-sticker' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}