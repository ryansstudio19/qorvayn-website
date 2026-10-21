'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Vector3, BufferGeometry, LineBasicMaterial, Line, type Group, type Mesh } from 'three';

const NODE_CONFIGS = [
  { position: [-2.1, 0.2, 0] as [number, number, number], color: '#4F8CFF' },
  { position: [2.1, 0.35, -0.4] as [number, number, number], color: '#45D7FF' },
  { position: [0, -1.4, 0.4] as [number, number, number], color: '#6EE7B7' },
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
  const meshRef = useRef<Mesh>(null);

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
    const points = [new Vector3(...start), new Vector3(...end)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({
      color: '#4F8CFF',
      transparent: true,
      opacity: 0.2,
    });
    return new Line(geometry, material);
  }, [start, end]);

  return <primitive object={lineObject} />;
}

function EcosystemGroup() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime() * 0.04;
      groupRef.current.rotation.y = Math.sin(t) * 0.16;
    }
  });

  return (
    <group ref={groupRef}>
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

export function EcosystemSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 50 }}
      dpr={[1, 1.3]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <EcosystemGroup />
    </Canvas>
  );
}
