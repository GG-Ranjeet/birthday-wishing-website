import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    ScrollControls,
    Scroll,
    useGLTF,
    useScroll,
} from "@react-three/drei"; // Optional helper for camera controls
import RotatingMesh from "./component/RotatingMesh";
// vertical, horizontal, distance
import styles from "./component/styles";



export default function BirthdayCake() {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 5] }} className="gradient">
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Debug helpers – you can remove these later */}
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[2, 0.01, 3]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.01, 0.01, 0.01]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <ScrollControls pages={3} damping={0.15} snap>
          <RotatingMesh />
          <Scroll html>
            {/* Three full-screen sections */}
            <div style={styles.container}>
              <section style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>🎂 The Cake is Ready!</h1>
                  <p style={styles.subtitle}>Scroll down to see it transform</p>
                </div>
              </section>

              <section style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>🕯️ Watch the candle appear</h1>
                  <p style={styles.subtitle}>As you scroll, the candle floats onto the cake</p>
                </div>
              </section>

              <section style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>✨ Happy Birthday!</h1>
                  <p style={styles.subtitle}>The cake now spins gently – enjoy the moment</p>
                  <button style={styles.button} onClick={() => alert('🎉')}>
                    Celebrate
                  </button>
                </div>
              </section>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

