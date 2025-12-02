import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import profileImg from '../assets/profile-portfolio_.png';

function AnimatedProfileImage() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, profileImg);
  useFrame((state) => {
    if (meshRef.current) {
      const x = state.mouse.x * 0.05;
      const y = state.mouse.y * 0.05;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x, 0.05);
      const scaleFactor = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
      meshRef.current.scale.set(scaleFactor * 2, scaleFactor * 2, scaleFactor * 2);
    }
  });


  return (
    <mesh ref={meshRef} scale={2}>
      <circleGeometry args={[1, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.5}
        transparent={true}
        alphaTest={0.01}
      />
    </mesh>
  );
}


const HeroProfile3D = () => {
  return (
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-gradient-to-br from-muted to-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0xffffff, 1); // ✅ White background, fully opaque
        }}
      >

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        <Suspense fallback={null}>
          <AnimatedProfileImage />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default HeroProfile3D;
