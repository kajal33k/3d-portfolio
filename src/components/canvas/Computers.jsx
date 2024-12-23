/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Component to load and render the computer model
const ComputerModel = () => {
  // Load the GLTF model using the useGLTF hook
  const { scene } = useGLTF('./desktop_pc/scene.gltf');

  return (
    <primitive 
      object={scene} 
      scale={0.5} // Reduced the size of the model
      position={[0, -1.0, 0]} // Adjusted position to align the model properly
      dispose={null} // Ensures proper disposal of memory for the object
    />
  );
};

// Preload the GLTF assets
useGLTF.preload('./desktop_pc/scene.gltf');

// Main component rendering the 3D scene
const Computers = () => {
  return (
    <Canvas
      shadows
      frameloop="demand" // Improves performance by rendering only when necessary
      camera={{ position: [4, 4, 6], fov: 50 }} // Adjusted camera position for better framing
      gl={{ preserveDrawingBuffer: true }} // Allows the canvas to retain the buffer after rendering
    >
      {/* Configure ambient lighting */}
      <ambientLight intensity={0.5} />

      {/* Directional light for shadows and dynamic lighting */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} // Improves shadow resolution
        shadow-mapSize-height={1024} 
      />

      {/* Add 3D content */}
      <Suspense fallback={null}>
        <ComputerModel />
        <Preload all />
      </Suspense>

      {/* Add interactivity with OrbitControls */}
      <OrbitControls 
        enableZoom 
        maxPolarAngle={Math.PI / 2} // Prevent the camera from flipping upside down
        minPolarAngle={Math.PI / 3} // Limits how far the camera can tilt down
      />
    </Canvas>
  );
};

export default Computers;
