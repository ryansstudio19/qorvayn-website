'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

const NODE_CONFIGS = [
  { position: [-2.1, 0.2, 0] as [number, number, number], color: '#4F8CFF' }, // RYNEKA
  { position: [2.1, 0.35, -0.4] as [number, number, number], color: '#45D7FF' }, // SkyPics
  { position: [0, -1.4, 0.4] as [number, number, number], color: '#6EE7B7' },  // GoalWear
];

function FloatingNode({
  position,
  color,
  offset,
}: {
  position: [number, number, number];
  color: string;
  offset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * 0.5 + offset;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.12;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.24, 28, 28]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

function ConnectionLine({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const lineObject = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: '#4F8CFF',
      transparent: true,
      opacity: 0.2,
    });
    return new THREE.Line(geometry, material);
  }, [start, end]);

  return <primitive object={lineObject} />;
}

function EcosystemGroup({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * 0.04;
      groupRef.current.rotation.y = Math.sin(t) * 0.16;
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.85 : 1}>
      {NODE_CONFIGS.map((node, i) => (
        <FloatingNode
          key={i}
          position={node.position}
          color={node.color}
          offset={i * 2}
        />
      ))}
      <ConnectionLine
        start={NODE_CONFIGS[0].position}
        end={NODE_CONFIGS[1].position}
      />
      <ConnectionLine
        start={NODE_CONFIGS[1].position}
        end={NODE_CONFIGS[2].position}
      />
      <ConnectionLine
        start={NODE_CONFIGS[2].position}
        end={NODE_CONFIGS[0].position}
      />
    </group>
  );
}

export function EcosystemScene() {
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

  if (!mounted || shouldReduce || !webGlSupported || isMobile) {
    return (
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,140,255,0.06)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-75 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 50 }}
        dpr={isMobile ? [1, 1] : [1, 1.3]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <EcosystemGroup isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
