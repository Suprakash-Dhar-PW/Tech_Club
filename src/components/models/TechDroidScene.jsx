import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, Cylinder, Box, MeshDistortMaterial, Torus } from '@react-three/drei';

function DroidBody() {
  const group = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(group.current) {
        group.current.position.y = Math.sin(t) * 0.15;
        group.current.rotation.y = Math.sin(t / 2) * 0.1; 
    }
  });

  return (
    <group ref={group} scale={2.2}>
        <Sphere args={[0.6, 32, 32]} position={[0, 1.2, 0]}><MeshDistortMaterial color="#e0e7ff" metalness={0.9} roughness={0.1} distort={0.15} speed={2} /></Sphere>
        <Box args={[0.7, 0.15, 0.45]} position={[0, 1.2, 0.35]}><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={3} /></Box>
        <Cylinder args={[0.4, 0.55, 1.2, 32]} position={[0, 0.2, 0]}><meshStandardMaterial color="#1e1b4b" metalness={0.8} roughness={0.2} /></Cylinder>
        <Sphere args={[0.18, 32, 32]} position={[0, 0.3, 0.35]}><meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={4} /></Sphere>
        <Torus args={[1.1, 0.02, 16, 100]} position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} /></Torus>
    </group>
  );
}

const TechDroidScene = () => (
  <div className="absolute inset-0 z-0 opacity-80">
    <Canvas camera={{ position: [0, 0, 7] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#22d3ee" intensity={3} />
      <pointLight position={[-10, 5, -10]} color="#7c3aed" intensity={3} />
      <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}><DroidBody /></Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} />
    </Canvas>
  </div>
);

export default TechDroidScene;