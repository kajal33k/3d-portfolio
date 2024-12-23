/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
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

// Hook to dynamically adjust the canvas size based on screen dimensions
const useResponsiveCanvas = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, height };
};

// Main component rendering the 3D scene
const Computers = () => {
  const { width, height } = useResponsiveCanvas();

  return (
    <Canvas
      shadows
      frameloop="demand" // Improves performance by rendering only when necessary
      camera={{ position: [20, 3, 5], fov: 25 }} // Adjusted camera position for better framing
      gl={{ preserveDrawingBuffer: true }} // Allows the canvas to retain the buffer after rendering
      style={{ width: '100%', height: '100vh' }} // Ensures the canvas occupies full screen
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
        enableZoom={true}  // Allow zoom on mobile
        maxPolarAngle={Math.PI / 2} // Prevent the camera from flipping upside down
        minPolarAngle={Math.PI / 3} // Limits how far the camera can tilt down
      />
    </Canvas>
  );
};

export default Computers;
