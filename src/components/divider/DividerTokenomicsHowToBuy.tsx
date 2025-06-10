// DividerTokenomicsHowToBuy.tsx
import './DividerTokenomicsHowToBuy.css';
import VhsOverlaySlender from '../VhsOverlay';   // caminho relativo
import { PowerGlitch } from 'powerglitch'

import { useEffect } from 'react';

export default function DividerTokenomicsHowToBuy() {
  useEffect(() => {
    PowerGlitch.glitch('.divider-text');
  }, []);

  return (
    <section className="divider-tokenomics">
      <VhsOverlaySlender />        {/* overlay WebGL + glitch */}
      <p className="divider-text">Can you feel that?</p>
    </section>
  );
}