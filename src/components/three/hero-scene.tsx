'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { ShaderBackground } from '@/components/canvas/shader-background';

// Calm, depth-layered star particles
function StarDust({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobile ? 180 : 420;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Biased slightly to the right to frame hero headline on the left
      arr[i * 3] = (Math.random() - 0.3) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.006;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7DB0FF"
        size={isMobile ? 0.025 : 0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

// Slender, high-precision orbital torus ring
function OrbitalRing({
  radius,
  speed,
  color,
  tiltX = 0,
  tiltY = 0,
  tiltZ = 0,
  opacity = 0.28,
}: {
  radius: number;
  speed: number;
  color: string;
  tiltX?: number;
  tiltY?: number;
  tiltZ?: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[tiltX, tiltY, tiltZ]}>
      <torusGeometry args={[radius, 0.008, 12, 120]} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
}

// Central glowing core with ambient pulsation
function LuminescentCore() {
  const innerRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (innerRef.current) {
      const scale = 1 + Math.sin(t * 0.6) * 0.035;
      innerRef.current.scale.setScalar(scale);
    }
    if (haloRef.current) {
      const haloScale = 1 + Math.sin(t * 0.6 + 0.5) * 0.05;
      haloRef.current.scale.setScalar(haloScale);
      (haloRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.14 + Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group position={[1.2, 0, 0]}>
      {/* Inner dense core */}
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshBasicMaterial color="#7DB0FF" transparent opacity={0.85} />
      </mesh>
      {/* Soft atmospheric halo */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshBasicMaterial color="#4F8CFF" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

// Satellite node tracking orbital path
function OrbitalBeacon({
  radius,
  speed,
  tiltX,
  tiltZ,
  color,
}: {
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  color: string;
}) {
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (beaconRef.current) {
      const t = clock.getElapsedTime() * speed;
      const x = Math.cos(t) * radius + 1.2;
      const y = Math.sin(t) * Math.cos(tiltX) * radius;
      const z = Math.sin(t) * Math.sin(tiltZ) * radius;
      beaconRef.current.position.set(x, y, z);
    }
  });

  return (
    <mesh ref={beaconRef}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  );
}

// Root scene composition with gentle mouse tracking
function CinematicHeroGroup({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (groupRef.current && !isMobile) {
      // Ultra-gentle damped parallax lerp
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.18,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.12,
        0.04
      );
    }
  });

  return (
    <group ref={groupRef}>
      <StarDust isMobile={isMobile} />
      <LuminescentCore />

      {/* Primary Equatorial Ring */}
      <OrbitalRing
        radius={1.4}
        speed={0.08}
        color="#4F8CFF"
        tiltX={Math.PI / 3.5}
        tiltZ={Math.PI / 6}
        opacity={0.32}
      />
      {/* Secondary Inclined Ring */}
      <OrbitalRing
        radius={2.1}
        speed={-0.05}
        color="#45D7FF"
        tiltX={Math.PI / 2.8}
        tiltY={Math.PI / 8}
        tiltZ={-Math.PI / 5}
        opacity={0.22}
      />
      {/* Outer Ethereal Ring */}
      <OrbitalRing
        radius={2.8}
        speed={0.035}
        color="#7DB0FF"
        tiltX={Math.PI / 4.2}
        tiltZ={Math.PI / 3}
        opacity={0.15}
      />

      {/* Orbiting Beacons */}
      <OrbitalBeacon radius={1.4} speed={0.35} tiltX={Math.PI / 3.5} tiltZ={Math.PI / 6} color="#7DB0FF" />
      <OrbitalBeacon radius={2.1} speed={-0.22} tiltX={Math.PI / 2.8} tiltZ={-Math.PI / 5} color="#45D7FF" />
    </group>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Verify WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGlSupported(false);
    } catch {
      setWebGlSupported(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Graceful static fallback if reduced motion, not mounted, or WebGL unavailable
  if (!mounted || shouldReduce || !webGlSupported) {
    return (
      <div
        className="absolute inset-0 bg-gradient-radial from-[rgba(79,140,255,0.07)] via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <ShaderBackground preset="hero" intensity={isMobile ? 0.9 : 1.15} className="opacity-95" />
      {!isMobile && (
        <Canvas
          camera={{ position: [0, 0, 5.4], fov: 52 }}
          dpr={[1, 1.3]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.4} />
          <CinematicHeroGroup isMobile={false} />
        </Canvas>
      )}
    </div>
  );
}
