// src/components/VhsOverlayNoPause.tsx
import { Canvas } from '@react-three/fiber';
import {
  EffectComposer,
  Noise,
  Scanline,
  ChromaticAberration,
  Glitch,
} from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { Vector2 } from 'three';

export default function VhsOverlayNoPause() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'normal', // ou 'screen' se quiser integrar com fundo
      }}
    >
      <Canvas
        orthographic
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true }}
        dpr={0.7}
      >
        <mesh>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial color="#200" />
        </mesh>

        <EffectComposer multisampling={0}>
          {/* Ruídos e distorções adicionais */}
          <Noise opacity={0.9} premultiply />
          <Scanline opacity={0.8} density={0.8} />
          <ChromaticAberration offset={new Vector2(0.03, 0.03)} />

          {/* Glitch 1: forte, contínuo */}
          <Glitch
            mode={GlitchMode.CONSTANT_WILD}
            delay={new Vector2(0.001, 0.005)}
            duration={new Vector2(1, 1)}
            strength={new Vector2(3, 5)}
            ratio={1}
            active={true}
          />

          {/* Glitch 2: camada adicional para sobreposição */}
          <Glitch
            mode={GlitchMode.CONSTANT_WILD}
            delay={new Vector2(0.002, 0.004)}
            duration={new Vector2(1, 1)}
            strength={new Vector2(2, 4)}
            ratio={1}
            active={true}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
