"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Lemniscate (∞) curve with Z-weave so the
   tube goes OVER and UNDER the center ring
───────────────────────────────────────────── */
class LemniscateCurve extends THREE.Curve<THREE.Vector3> {
  private a: number;

  constructor(a = 1.8) {
    super();
    this.a = a;
  }

  getPoint(t: number, target = new THREE.Vector3()): THREE.Vector3 {
    const θ = t * Math.PI * 2;
    const d = 1 + Math.sin(θ) ** 2;
    const x = (this.a * Math.cos(θ)) / d;
    const y = (this.a * Math.sin(θ) * Math.cos(θ)) / d;
    // Z-weave creates the over/under interlocking effect
    const z = Math.sin(θ * 2) * this.a * 0.24;
    return target.set(x, y, z);
  }
}

/* ─────────────────────────────────────────────
   The 3-D logo mesh
───────────────────────────────────────────── */
function LogoMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  /* Tube following the ∞ path */
  const tubeGeo = useMemo(() => {
    const curve = new LemniscateCurve(1.8);
    return new THREE.TubeGeometry(curve, 400, 0.055, 20, true);
  }, []);

  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        metalness: 0.5,
        roughness: 0.12,
        emissive: "#ffffff",
        emissiveIntensity: 0.08,
      }),
    []
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow Y spin + subtle mouse-tracking tilt
    groupRef.current.rotation.y =
      state.clock.elapsedTime * 0.2 + mouse.x * 0.28;
    groupRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.11) * 0.18 + mouse.y * 0.14;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.08} floatIntensity={0.5}>
      <group ref={groupRef} scale={4.2} position={[0, 0, 0]}>

        {/* ── Infinity tube ── */}
        <mesh geometry={tubeGeo} material={mat} />

        {/* ── Center circle ring (the globe in the logo) ── */}
        <mesh material={mat}>
          <torusGeometry args={[1.0, 0.055, 20, 140]} />
        </mesh>

      </group>
    </Float>
  );
}

/* ─────────────────────────────────────────────
   Full scene
───────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]}    intensity={5}   color="#ffffff" />
      <pointLight position={[-5, -3, 4]}  intensity={2}   color="#ffffff" />
      <pointLight position={[0, -6, -4]}  intensity={1.5} color="#ffffff" />

      {/* Star field */}
      <Stars
        radius={90}
        depth={55}
        count={2600}
        factor={2.2}
        saturation={0}
        fade
        speed={0.4}
      />

      {/* Logo */}
      <LogoMesh />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 72 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Scene />
    </Canvas>
  );
}
