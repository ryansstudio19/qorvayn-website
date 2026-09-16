'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

function SignalRings() {
  const rings = [0, 1, 2, 3];
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.035;
    }
  });

  return (
    <group ref={groupRef}>
      {rings.map((index) => (
        <SingleRing key={index} index={index} />
      ))}
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshBasicMaterial color="#45D7FF" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function SingleRing({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseScale = 0.9 + index * 0.65;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const s = baseScale + Math.sin(t * 0.5 + index * 0.8) * 0.1;
      meshRef.current.scale.setScalar(s);
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.11 + Math.sin(t * 0.45 + index) * 0.04;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.008, 8, 80]} />
      <meshBasicMaterial color="#4F8CFF" transparent opacity={0.11} />
    </mesh>
  );
}

export function SignalScene() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGlSupported(false);
    } catch {
      setWebGlSupported(false);
    }

    return () => window.removeEventListener('resize', check);
  }, []);

  if (!mounted || shouldReduce || !webGlSupported) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(69,215,255,0.05)_0%,transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-75 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 52 }}
        dpr={isMobile ? [1, 1] : [1, 1.3]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <SignalRings />
      </Canvas>
    </div>
  );
}
