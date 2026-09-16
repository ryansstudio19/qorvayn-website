'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import type { ProductId } from '@/data/products';

function RynekaVisual() {
  const groupRef = useRef<THREE.Group>(null);
  const beacon1Ref = useRef<THREE.Mesh>(null);
  const beacon2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.12;
    }
    if (beacon1Ref.current) {
      const angle = t * 0.6;
      beacon1Ref.current.position.set(Math.cos(angle) * 1.6, Math.sin(angle * 0.8) * 0.5, Math.sin(angle) * 1.6);
    }
    if (beacon2Ref.current) {
      const angle = -t * 0.45;
      beacon2Ref.current.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 0.7, Math.sin(angle * 0.9) * 2.2);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh>
        <sphereGeometry args={[0.38, 32, 32]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.88} />
      </mesh>
      {/* Atmospheric Halo */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.16} />
      </mesh>

      {/* Orbital Rings */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.1, 0.008, 12, 100]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 2.8, Math.PI / 6, 0]}>
        <torusGeometry args={[1.6, 0.008, 12, 100]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[-Math.PI / 3.2, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.008, 12, 100]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.25} />
      </mesh>

      {/* Satellite Beacons */}
      <mesh ref={beacon1Ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.9} />
      </mesh>
      <mesh ref={beacon2Ref}>
        <sphereGeometry args={[0.038, 16, 16]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function SkypicsVisual() {
  const groupRef = useRef<THREE.Group>(null);
  const frame1Ref = useRef<THREE.Group>(null);
  const frame2Ref = useRef<THREE.Group>(null);
  const frame3Ref = useRef<THREE.Group>(null);
  const horizonRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.18;
      groupRef.current.position.y = Math.sin(t * 0.35) * 0.04;
    }
    if (frame1Ref.current) {
      frame1Ref.current.rotation.z = Math.sin(t * 0.12) * 0.05;
      frame1Ref.current.rotation.x = Math.cos(t * 0.15) * 0.06;
    }
    if (frame2Ref.current) {
      frame2Ref.current.rotation.z = -Math.cos(t * 0.1) * 0.04;
      frame2Ref.current.rotation.y = Math.sin(t * 0.14) * 0.08;
    }
    if (frame3Ref.current) {
      frame3Ref.current.rotation.z = Math.sin(t * 0.09) * 0.03;
      frame3Ref.current.position.y = Math.cos(t * 0.25) * 0.03;
    }
    if (horizonRef.current) {
      horizonRef.current.rotation.z = t * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Primary Viewfinder Frame (3:2 aspect ratio) */}
      <group ref={frame1Ref} position={[0.2, 0.05, 0.1]}>
        {/* Outer Frame */}
        <mesh>
          <ringGeometry args={[1.08, 1.1, 4, 1, Math.PI / 4]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.65} />
        </mesh>
        {/* Subtle Glass Tint Panel */}
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.5, 1.05]} />
          <meshBasicMaterial color="#38BDF8" transparent opacity={0.04} />
        </mesh>
        {/* Focus Crosshair Indicator */}
        <mesh position={[0, 0, 0.01]}>
          <ringGeometry args={[0.08, 0.09, 24]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.8} />
        </mesh>
        {/* Golden Ratio / Focal Node */}
        <mesh position={[0.28, 0.2, 0.02]}>
          <sphereGeometry args={[0.022, 16, 16]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.9} />
        </mesh>
      </group>

      {/* Background Depth Frame (Staggered perspective & soft violet tone) */}
      <group ref={frame2Ref} position={[-0.7, 0.35, -0.45]}>
        <mesh>
          <ringGeometry args={[0.82, 0.835, 4, 1, Math.PI / 4]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.45} />
        </mesh>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[1.15, 0.8]} />
          <meshBasicMaterial color="#8B5CF6" transparent opacity={0.03} />
        </mesh>
      </group>

      {/* Foreground Accent Frame (Offset perspective) */}
      <group ref={frame3Ref} position={[0.85, -0.3, 0.35]}>
        <mesh>
          <ringGeometry args={[0.62, 0.635, 4, 1, Math.PI / 4]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[0.85, 0.6]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.03} />
        </mesh>
      </group>

      {/* Atmospheric Horizon Ring (Thin celestial disc) */}
      <mesh ref={horizonRef} rotation={[1.2, 0.2, 0]} position={[0, -0.2, -0.2]}>
        <ringGeometry args={[1.8, 1.82, 64]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.35} />
      </mesh>

      {/* Secondary Soft Twilight Horizon */}
      <mesh rotation={[1.1, -0.3, 0.2]} position={[0, -0.3, -0.4]}>
        <ringGeometry args={[1.5, 1.515, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.25} />
      </mesh>

      {/* Celestial Focal Points / Stars */}
      {[
        { pos: [-1.4, 0.8, -0.6] as [number, number, number], r: 0.018, color: '#38BDF8', op: 0.7 },
        { pos: [1.3, 0.9, -0.5] as [number, number, number], r: 0.02, color: '#FFFFFF', op: 0.85 },
        { pos: [-0.9, -0.7, -0.3] as [number, number, number], r: 0.015, color: '#8B5CF6', op: 0.6 },
        { pos: [1.2, -0.6, 0.1] as [number, number, number], r: 0.018, color: '#00E5FF', op: 0.75 },
      ].map((star, idx) => (
        <mesh key={idx} position={star.pos}>
          <sphereGeometry args={[star.r, 16, 16]} />
          <meshBasicMaterial color={star.color} transparent opacity={star.op} />
        </mesh>
      ))}
    </group>
  );
}

function GoalwearVisual() {
  const groupRef = useRef<THREE.Group>(null);
  const geoRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.04;
    }
    if (geoRef.current) {
      geoRef.current.rotation.x = Math.sin(t * 0.25) * 0.15;
      geoRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.22;
      ringRef.current.rotation.z = Math.sin(t * 0.18) * 0.2;
    }
    if (beaconRef.current) {
      const angle = t * 0.8;
      beaconRef.current.position.x = Math.cos(angle) * 1.35;
      beaconRef.current.position.z = Math.sin(angle) * 1.35;
      beaconRef.current.position.y = Math.sin(t * 1.2) * 0.35;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Metallic Icosahedron / Football Sphere Wireframe */}
      <mesh ref={geoRef}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshBasicMaterial color="#CBD5E1" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Inner Radiant Core */}
      <mesh>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshBasicMaterial color="#00FF66" transparent opacity={0.2} />
      </mesh>

      {/* Inclined Stadium Orbit Ring in Electric Lime Green */}
      <mesh ref={ringRef} rotation={[1.1, 0.4, 0]}>
        <ringGeometry args={[1.25, 1.27, 64]} />
        <meshBasicMaterial color="#00FF66" transparent opacity={0.7} />
      </mesh>

      {/* Secondary Silver Orbital Ring */}
      <mesh rotation={[0.6, -0.5, 0.3]}>
        <ringGeometry args={[1.45, 1.465, 64]} />
        <meshBasicMaterial color="#E2E8F0" transparent opacity={0.35} />
      </mesh>

      {/* Drifting Lime Green Beacon Light */}
      <mesh ref={beaconRef}>
        <sphereGeometry args={[0.038, 16, 16]} />
        <meshBasicMaterial color="#00FF66" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

export function ProductScene({ variant }: { variant: ProductId }) {
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
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,140,255,0.06)_0%,transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none opacity-75 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 50 }}
        dpr={isMobile ? [1, 1] : [1, 1.3]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {variant === 'ryneka' && <RynekaVisual />}
        {variant === 'skypics' && <SkypicsVisual />}
        {variant === 'goalwear' && <GoalwearVisual />}
      </Canvas>
    </div>
  );
}
