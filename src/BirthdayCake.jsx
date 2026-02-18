import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    ScrollControls,
    Scroll,
    useGLTF,
    useScroll,
} from "@react-three/drei"; 
import RotatingMesh from "./component/RotatingMesh";
import confetti from "canvas-confetti";
import styles from "./component/styles";



export default function BirthdayCake() {
  const [celebrating, setCelebrating] = useState(false);

  const handleCelebrate = () => {
    setCelebrating(true);
    // Fire confetti from the bottom center of the screen
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6, x: 0.5 },
      startVelocity: 25,
      colors: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#f368e0"],
    });
    // Optional: add a second burst after a short delay
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5, x: 0.3 },
      });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5, x: 0.7 },
      });
    }, 200);
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 5] }} className="gradient">
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Optional debug helpers */}
        {/* <mesh position={[0, -1, 0]}>
          <boxGeometry args={[2, 0.01, 3]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.01, 0.01, 0.01]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}

        <ScrollControls pages={3} damping={0.15} snap>
          <RotatingMesh />
          <Scroll html>
            <div style={styles.container}>
              <section className="section" style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>🎂 Hey honey!</h1>
                  <p style={styles.subtitle}>Happy Birthday, I tried to make a simple website to celebrate your day 👇!</p>
                </div>
              </section>

              <section className="section" style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>🤐</h1>
                  <p style={styles.subtitle}>I forgot how to talk now haha, still remembering those good old days</p>
                </div>
              </section>

              <section className="section last-section" style={styles.section}>
                <div style={styles.card}>
                  <h1 style={styles.title}>✨ Happy Birthday </h1>
                  <p style={styles.subtitle}>Lets Celebrate and enjoy your moment </p>
                  <button
                    style={styles.button}
                    onClick={handleCelebrate}
                    onMouseEnter={(e) => (e.target.style.background = "#ff5252")}
                    onMouseLeave={(e) => (e.target.style.background = "#ff6b6b")}
                  >
                    Celebrate 🎉
                  </button>
                </div>
              </section>
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* Responsive style adjustments */}
      <style>{`
        /* Base: all sections centered by default */
        .section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }

        /* Last section always aligned to the top */
        .section.last-section {
          align-items: flex-start;
          padding-top: 10vh; /* give some breathing room */
        }

        /* On mobile: all sections (except last) bottom-aligned */
        @media (max-width: 768px) {
          .section {
            align-items: flex-end !important;
            padding-bottom: 10vh !important;
            padding-top: 0 !important;
          }
          .section.last-section {
            align-items: flex-start !important;
            padding-top: 10vh !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

