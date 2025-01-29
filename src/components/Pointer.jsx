import {useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Bounds, Edges } from '@react-three/drei'
// use ↓ "DebugLayerMaterial as LayerMaterial" ↓ here for integrated leva debug panels
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import { useControls } from 'leva'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Pointer(props) {
    return (
        <group {...props}>
            <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
                    <Cursor scale={[0.5, 1, 0.5]} />
            </group>
        </group>
    )
}

function Cursor(props) {
    const meshRef = useRef()
    const materialRef = useRef()
    const { nodes } = useGLTF('/cursor.glb')
    const [hovered, setHovered] = useState(false);

    // Animate gradient
    useFrame((state) => {
        const sin = Math.sin(state.clock.elapsedTime / 2)
        const cos = Math.cos(state.clock.elapsedTime / 2)
        materialRef.current.layers[0].origin.set(cos / 2, 0, 0)
        materialRef.current.layers[1].origin.set(cos, sin, cos)
        materialRef.current.layers[2].origin.set(sin, cos, sin)
        materialRef.current.layers[3].origin.set(cos, sin, cos)
    })

    useGSAP(() => {
        gsap
            .timeline({
                repeat: -1,
                repeatDelay: 0.5,
            })
            .to(meshRef.current.rotation, {
                y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                duration: 2.5,
                stagger: {
                    each: 0.15,
                },
            });
    });

    return (
        <mesh ref={meshRef} {...props} geometry={nodes.Cube.geometry} onPointerEnter={() => setHovered(true)}>
            <LayerMaterial ref={materialRef} toneMapped={false}>
                <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * 0.7} far={0.5} origin={[0, 0, 0]} />
                <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * 0.7} far={2} origin={[0, 1, 1]} />
                <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * 0.7} far={3} origin={[0, 1, -1]} />
                <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * 0.7} far={1.5} origin={[1, -1, -1]} />
                <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
            </LayerMaterial>
            <Edges color="white" />
        </mesh>
    )
}
