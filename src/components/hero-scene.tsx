"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Central morphing orb ── */
function MainOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y =
      state.clock.elapsedTime * 0.12 + mouse.x * 0.18;
    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.07 + mouse.y * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={meshRef} scale={2.1}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#4f46e5"
          distort={0.38}
          speed={2.5}
          roughness={0.05}
          metalness={0.9}
          emissive="#312e81"
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}

/* ── Orbiting wireframe rings ── */
function Ring({
  rotation,
  scale,
  opacity,
  speed,
}: {
  rotation: [number, number, number];
  scale: number;
  opacity: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * speed;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
  });

  return (
    <mesh ref={ref} rotation={rotation} scale={scale}>
      <torusGeometry args={[1, 0.007, 8, 90]} />
      <meshBasicMaterial color="#818cf8" transparent opacity={opacity} />
    </mesh>
  );
}

/* ── Small floating satellite spheres ── */
function Satellite({
  offset,
  radius,
  size,
  speed,
}: {
  offset: number;
  radius: number;
  size: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * radius * 0.5;
    ref.current.position.z = Math.sin(t) * radius * 0.6;
  });

  return (
    <mesh ref={ref} scale={size}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color="#818cf8"
        emissive="#4f46e5"
        emissiveIntensity={1.2}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}

/* ── Full scene ── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[6, 6, 6]}   intensity={2.5} color="#818cf8" />
      <pointLight position={[-6, -4, 4]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[0, -8, -4]} intensity={0.8} color="#a78bfa" />

      <Stars
        radius={90}
        depth={55}
        count={2800}
        factor={2.2}
        saturation={0}
        fade
        speed={0.4}
      />

      <MainOrb />

      <Ring rotation={[Math.PI / 2, 0, 0]}            scale={3.2} opacity={0.18} speed={0.09} />
      <Ring rotation={[Math.PI / 4, Math.PI / 6, 0]}  scale={4.1} opacity={0.10} speed={0.06} />
      <Ring rotation={[-Math.PI / 3, Math.PI / 4, 0]} scale={5.0} opacity={0.06} speed={0.04} />

      <Satellite offset={0}    radius={3.2} size={0.08} speed={0.55} />
      <Satellite offset={2.1}  radius={3.8} size={0.05} speed={0.38} />
      <Satellite offset={4.5}  radius={2.8} size={0.06} speed={0.70} />
      <Satellite offset={1.3}  radius={4.4} size={0.04} speed={0.28} />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
