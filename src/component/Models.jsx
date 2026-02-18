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


export function CakeModel(props) {
    const { scene } = useGLTF("/models/cake.glb");

    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.material.transparent = false;
                obj.material.opacity = 1;
                obj.material.depthWrite = true;
            }
        });
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={props.scale}
            position={props.position}
            {...props}
        />
    );
}
export function CandleModel(props) {
    const { scene } = useGLTF("/models/candle.glb");

    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.material.transparent = false;
                obj.material.opacity = 1;
                obj.material.depthWrite = true;
            }
        });
    }, [scene]);

    return (
        <primitive
            object={scene}
            scale={props.scale}
            position={props.position}
            {...props}
        />
    );
}