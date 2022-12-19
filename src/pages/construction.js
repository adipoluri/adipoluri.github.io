//React
import React, { Suspense, useEffect, useRef} from "react"
//Three
import { Canvas, useFrame} from "@react-three/fiber"
import { Html} from "@react-three/drei"
import lerp from "lerp"
//locals
import { Block, useBlock } from "../components/Blocks"
import Plane from "../components/Plane"
import state from "../config"
import "../styles.css"
import Dots from "../components/Dot";
import PhysicsBalls from "../components/Balls"

//Landing
function Landing() {
    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
    return (
        <>
            <PhysicsBalls />
            <Dots />
            <Html className="center-heading" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
                <div>
                    🛠⚙️Under Construction... 👷🏾‍♂️🏗 
                </div>
            </Html>
        </>
    )
}

//Fade-in
function Startup() {
    const ref = useRef()
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.015)))
    return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

//Lighting Setup
function Lighting() {
    return (
      <> 
        <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <directionalLight
            castShadow
            intensity={4.0}
            position={[50, 50, 25]}
            shadow-mapSize={[256, 256]}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            fog={true}
        />
      </>
    )
  }


export default function ConstructionPage() {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  const onPointerMove = (e) => (state.mouse = [(e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1])
  return (
    <>
        <Canvas shadows dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
            <Suspense fallback={<Html center className="loading" children="Initializing..." />}>
                <Startup />
                <Lighting />
                <Landing />
            </Suspense>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll} onPointerMove={onPointerMove}>
            <div style={{ height: `100vh` }} />
        </div>
    </>
  )
}
