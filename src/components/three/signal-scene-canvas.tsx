'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Group, Mesh, MeshBasicMaterial } from 'three';

function SignalRings() {
  const rings = [0, 1, 2, 3];
  const groupRef = useRef<Group>(null);

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
  const meshRef = useRef<Mesh>(null);
  const baseScale = 0.9 + index * 0.65;

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      const s = baseScale + Math.sin(t * 0.5 + index * 0.8) * 0.1;
      meshRef.current.scale.setScalar(s);
      (meshRef.current.material as MeshBasicMaterial).opacity =
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

export function SignalSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 52 }}
      dpr={[1, 1.3]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <SignalRings />
    </Canvas>
  );
}
