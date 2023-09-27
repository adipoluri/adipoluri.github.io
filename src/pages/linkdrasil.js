//React
import React, { Suspense, useEffect, useRef} from "react"
import { Link } from 'react-router-dom';
//Three
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html, MeshReflectorMaterial, BakeShadows } from "@react-three/drei"
import {Flex} from "@react-three/flex"
//locals
import "../styles.css"
import state from "../config"
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { Instances, Computers } from '../components/Computers'
import {BiHomeHeart} from "react-icons/bi";
import TypeIt from 'typeit-react'
import {useBlock} from "../components/Blocks"


function Background() {
return (
    <>
        <color attach="background" args={['black']} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
        <group position={[-0, -1, 0]}>
            <Instances>
                <Computers scale={0.5} />
            </Instances>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
                blur={[300, 30]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.7}
                color="#0e0e0f"
                metalness={0.8}
            />
            </mesh>
            <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="red" />
        </group>
    </>
)
}




export default function LinkDrasilPage() {
    return (
        <>
            <div className="yggdrasil">
                <a className="yggdrasil-link" href="">
                    <BiHomeHeart fill={state.palette.accentColor} size={'3em'} />
                </a>
            </div>
            <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 4.5], fov: 45, near: 1, far: 40 }} eventSource={document.getElementById('root')} eventPrefix="client">
                <Suspense fallback={<Html center className="loading" children="Initializing..." />}>
                    <Background/>
                    {/* Postprocessing */}
                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={4} />
                        <DepthOfField target={[0, 0, 13]} focalLength={0.4} bokehScale={5} height={700} />
                    </EffectComposer>
                    <BakeShadows />
                </Suspense>
            </Canvas>
            <div class="header">
                <span class="active">ART</span>
                <span>ABOUT</span>
                <span>VISIT</span>
                <span>SHOP</span>
                <span>spagjetti</span>
            </div>
            <div class="middle">
                <h2>The</h2>
                <h1>THREE GRACES</h1>
                <TypeIt options={{
                            lifeLike:true,
                            speed: 30,
                            waitUntilVisible: true,
                            afterComplete:true,
                        }}>
                            <strong>Linkdrasil,</strong> the sacred tree of Links
                </TypeIt>
            </div>
        </>
    )
}



function LinkBox(){
    const ref = useRef()
    useFrame((state) => (ref.current.position.x = 4*Math.sin(state.clock.getElapsedTime())))
    return (
      <mesh scale={10} position={[-10, 0.25, 0]} ref={ref}>
        <boxGeometry />
        <meshStandardMaterial />
        <Html
          distanceFactor={1.5}
          position={[10, 10, 0.51]}
          transform
          occlude
          >
          <span>Size</span>
        </Html>
      </mesh>
    ) 
}
