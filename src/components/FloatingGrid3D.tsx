import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function GridPlane() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 30, 30]} />
      <meshBasicMaterial color="#00ff00" wireframe opacity={0.15} transparent />
    </mesh>
  );
}

const FloatingGrid3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <GridPlane />
      </Canvas>
    </div>
  );
};

export default FloatingGrid3D;
