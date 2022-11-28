//React
import React, { Suspense, useEffect, useRef} from "react"
import { Link } from 'react-router-dom';
//Three
import { Canvas, useLoader, useFrame} from "@react-three/fiber"
import { Html} from "@react-three/drei"
import { TextureLoader, LinearFilter} from "three"
import lerp from "lerp"
//locals
import { Text, MultilineText } from "../components/Text"
import Diamonds from "../components/diamonds/Diamonds"
import Plane from "../components/Plane"
import { Block, useBlock } from "../components/blocks"
import state from "../config"
import "../styles.css"
import Dots from "../components/dot";
import PhysicsBalls from "../components/balls"

function Background() {
    return (
      <> 
        <PhysicsBalls />
        <Diamonds />
        <Dots />
      </>
    )
  }


//Landing
function Landing() {
    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
    const pixelWidth = w * state.zoom 
    return (
        <>
        <Block factor={1} offset={0}>
            <Block factor={1.0}>
            <Html className="top-left" position={[-canvasWidth / 2, canvasHeight / 2, 0]}>
                adi poluri .tech
            </Html>
            </Block>
            <Block factor={1.2}>
            <Text left size={w * 0.15} position={[-w / 3.2, 0.5, -1]} color={state.palette.textColor}>
                ADI
            </Text>
            </Block>
            <Block factor={1.0}>
            <Html className="bottom-left" style={{ width: pixelWidth}} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
            CS Student @ UBC,{mobile ? <br /> : " "}Software Engineer,{mobile ? <br /> : " "} temp add text here.
            </Html>
            </Block>
        </Block>
        </>
    )
}

//Introduction
function Introduction() {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  
  const image = useLoader(TextureLoader,(state.introduction.image))
  image.minFilter = LinearFilter

  const size = state.introduction.aspect < 1 && !mobile ? 0.6 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const factor = state.introduction.factor
  const offset = state.introduction.offset
  const aspect = state.introduction.aspect
  const index = state.introduction.index
  const text = state.introduction.text
  const header = state.introduction.header
  
  return (
    <Block factor={factor} offset={offset}>
        <group position={[-alignRight, 0, 0]}>
            <Html className="top-heading" position={[((-w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                {header}
            </Html>
            <group position={[0, 0, 5]}>
                <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 100]} frustumCulled={false} />
            </group>
            <Html
                style={{ width: pixelWidth}}
                position={[(-w * size) / 2, (-w * size) / 2 / aspect - 0.2, 10]}
                className="blur-box"
                >
            <div tabIndex={index}>
                {text}
                <strong>
                    {text}
                </strong>
                <a href="google.com">
                    alex vo
                </a>
            </div>
            
            </Html>
            <Block factor={0.2}>
            <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((w) / 2) * size, (w * size) / aspect / 1, -1]}>
                {"Me"}
            </Text>
            </Block>
        </group>
    </Block>
  )
}

//Experience, Education, Projects etc.
function Content() {
  const { contentMaxWidth: w, canvasWidth, canvasHeight } = useBlock()
  return (
    <> 
      <Introduction />
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
      ))}
      <Block factor={1.25} offset={8}>
        <Html style={{ color: "white" }} className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
          Culture is not your friend.
        </Html>
      </Block>
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


export default function Home() {
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
                <Background/>
                <Landing />
                <Content />
            </Suspense>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll} onPointerMove={onPointerMove}>
            {new Array(state.sections).fill().map((_, index) => (
            <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
            ))}
        </div>
    </>
  )
}
