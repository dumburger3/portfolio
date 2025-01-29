import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"

const Python = (props) => {
    const pythonRef = useRef()
    const {scene} = useGLTF('./models/python.glb')

    useGSAP(() => {
        const pythonPosition = props.position // get the pythonPosition value from the props
        gsap.to(pythonRef.current.position, {
            y: pythonPosition[1] + 0.5, // update the y position based on the pythonPosition value
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })

    return (
        <mesh {...props} ref={pythonRef} rotation={[-0.38, Math.PI / 6, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Python