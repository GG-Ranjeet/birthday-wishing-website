import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {  useFrame } from "@react-three/fiber";
import {
    useScroll,
} from "@react-three/drei"; // Optional helper for camera controls
import { CakeModel, CandleModel } from "./Models";

export default function RotatingMesh(props) {
    const meshRef = useRef();
    const spinRef = useRef();
    const candleRef = useRef();
    const originRef = useRef();
    const scroll = useScroll();

    
    const candleFinalPosition = new THREE.Vector3(0,0.94,0);
    const candleInitPostion = new THREE.Vector3(0,0,0);
    //cam
    const frontView = new THREE.Vector3(0, 0, 2);
    const topView = new THREE.Vector3(0, 1.3, 0);
    const rightView = new THREE.Vector3(0, 1, 0);

    const cakeInitialPos = new THREE.Vector3(0, -1, 0);
    const cakeLerpPos = new THREE.Vector3(-0.2, 0, 0);
    const cakeBottonPos = new THREE.Vector3(0, 0, 0);

    // forward/backword(white), rotates, left/right(pink)
    const pi = 3.141 / 10;
    const startRotation = new THREE.Euler(0, pi * 33, 0);
    const topViewRotation = new THREE.Euler(pi, pi * 33, pi);
    const endRotation = new THREE.Euler(0, pi * 13, 0);

    const startQuaternion = new THREE.Quaternion().setFromEuler(startRotation);
    const topViewQuaternion = new THREE.Quaternion().setFromEuler(topViewRotation);
    const endQuaternion = new THREE.Quaternion().setFromEuler(endRotation);



    useFrame((state, delta) => {
        const camera = state.camera;

        const page1 = scroll.curve(0.0, 0.2);
        const page2 = scroll.curve(0.2, 0.5);
        const page3 = scroll.curve(0.5, 0.9);
        const page4 = scroll.curve(0.9, 1.0);


        const camTarget = new THREE.Vector3();
        const posTarget = new THREE.Vector3();
        const qTarget = new THREE.Quaternion();
        const lookAtPos = new THREE.Vector3();
        const candleTarget = new THREE.Vector3();

        // position={[0, 0.93, 0]}   

        // PAGE 1 → front idle view
        camTarget.copy(topView);
        posTarget.copy(cakeInitialPos);
        qTarget.copy(startQuaternion);
        lookAtPos.copy(originRef.current.position);
        candleTarget.copy(candleInitPostion);


        if (page2 > 0) {
            camTarget.lerpVectors(frontView, topView, page2);
            posTarget.lerpVectors(
                cakeInitialPos, 
                cakeLerpPos, 
                page2);
            qTarget.slerpQuaternions(startQuaternion, topViewQuaternion, page2);
        }
        
        if (page3>0){
            // posTarget.lerpVectors(
            //     cakeLerpPos, 
            //     cakeInitialPos,
            //     page2);
            candleTarget.lerpVectors(candleInitPostion, candleFinalPosition, page3);
        }

        // spinRef.current.quaternion.slerp(qTarget, 0.1);
        // if (scroll.offset < 0.1 || scroll.offset > 0.9) {
            //     spinRef.current.rotation.y +=delta*100;
            // }
            
            
        candleRef.current.position.lerp(candleTarget, 0.08);
        camera.position.lerp(camTarget, 0.08);
        meshRef.current.position.lerp(posTarget, 0.1);
        meshRef.current.quaternion.slerp(qTarget, 0.1);

        camera.lookAt(lookAtPos);


    })
    
    return (
        <group>
            <group ref={meshRef}>
                <group ref={spinRef}>

                    <CakeModel {...props}></CakeModel>
                    <CandleModel
                        ref={candleRef}
                        scale={0.15}
                        position={[0, 0.93, 0]}
                    />

                </group>
            </group>

            <group ref={originRef}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.00001, 0.00001, 0.00001]} /> {/* Box size: 1x1x1 */}
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </group>
        </group>
    );
}
