'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils, type Group, type Mesh, type MeshBasicMaterial, type Points as ThreePoints } from 'three';

function StarDust() {
  const pointsRef = useRef<ThreePoints>(null);
  const count = 420;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
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
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#7DB0FF"
        size={0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </points>
  );
}

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
  const meshRef = useRef<Mesh>(null);

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

function LuminescentCore() {
  const innerRef = useRef<Mesh>(null);
  const haloRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (innerRef.current) {
      const scale = 1 + Math.sin(t * 0.6) * 0.035;
      innerRef.current.scale.setScalar(scale);
    }
    if (haloRef.current) {
      const haloScale = 1 + Math.sin(t * 0.6 + 0.5) * 0.05;
      haloRef.current.scale.setScalar(haloScale);
      (haloRef.current.material as MeshBasicMaterial).opacity =
        0.14 + Math.sin(t * 0.8) * 0.04;
    }
  });

  return (
    <group position={[1.2, 0, 0]}>
      <mesh ref={innerRef}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshBasicMaterial color="#7DB0FF" transparent opacity={0.85} />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshBasicMaterial color="#4F8CFF" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

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
  const beaconRef = useRef<Mesh>(null);

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

function CinematicHeroGroup() {
  const groupRef = useRef<Group>(null);

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.18,
        0.04
      );
      groupRef.current.rotation.x = MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.12,
        0.04
      );
    }
  });

  return (
    <group ref={groupRef}>
      <StarDust />
      <LuminescentCore />

      <OrbitalRing
        radius={1.4}
        speed={0.08}
        color="#4F8CFF"
        tiltX={Math.PI / 3.5}
        tiltZ={Math.PI / 6}
        opacity={0.32}
      />
      <OrbitalRing
        radius={2.1}
        speed={-0.05}
        color="#45D7FF"
        tiltX={Math.PI / 2.8}
        tiltY={Math.PI / 8}
        tiltZ={-Math.PI / 5}
        opacity={0.22}
      />
      <OrbitalRing
        radius={2.8}
        speed={0.035}
        color="#7DB0FF"
        tiltX={Math.PI / 4.2}
        tiltZ={Math.PI / 3}
        opacity={0.15}
      />

      <OrbitalBeacon radius={1.4} speed={0.35} tiltX={Math.PI / 3.5} tiltZ={Math.PI / 6} color="#7DB0FF" />
      <OrbitalBeacon radius={2.1} speed={-0.22} tiltX={Math.PI / 2.8} tiltZ={-Math.PI / 5} color="#45D7FF" />
    </group>
  );
}

export function HeroSceneCanvas() {
  return (
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
      <CinematicHeroGroup />
    </Canvas>
  );
}
