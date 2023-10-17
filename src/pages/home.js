//React
import React, { Suspense, useEffect, useRef} from "react"
//Three
import { Canvas, useLoader, useFrame} from "@react-three/fiber"
import { Html} from "@react-three/drei"
import { TextureLoader, LinearFilter} from "three"
import lerp from "lerp"
//locals
import { Text } from "../components/Text"
import Diamonds from "../components/diamonds/Diamonds"
import Plane from "../components/Plane"
import { Block, useBlock } from "../components/Blocks"
import state from "../config"
import "../styles.css"
import Dots from "../components/Dot";
import PhysicsBalls from "../components/Balls"
import {ReactComponent as LinkDrasil} from '../icons/yggdrasil.svg';
import { AiFillGithub,AiOutlineYoutube,AiOutlineLink,AiFillHeart } from "react-icons/ai";
import {MdOutlineWavingHand} from "react-icons/md"
import {SiDevpost} from "react-icons/si"
import TypeIt from "typeit-react";

var parse = require('html-react-parser');

//Background
function Background() {
    return (
      <> 
        {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
            <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
        </Block>
        ))}
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
                    <Text left size={w * 0.15} position={[-w/3.2, mobile ? -2 : 0.5, -1]} color={state.palette.textColor}>
                        ADI POLURI . TECH !
                    </Text>
                </Block>
                <Block factor={1.0}>
                    <Html className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2.5, 0]}>
                        <TypeIt options={{
                            speed: 3,
                            waitUntilVisible: true,
                        }}>
                            CS Student @ UBC,{mobile ? <br /> : " "}Software Engineer,{mobile ? <br /> : " "} Game Dev, Photographer 
                        </TypeIt>
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
  

  const size = state.introduction.aspect < 1 && !mobile ? 0.5 : 1
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const {factor,offset,aspect,index,text,header} = state.introduction
  
  return (
    <Block factor={factor} offset={offset}>
        <group position={[-alignRight, 0, 0]}>
            <Block factor={0.2}>
                <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((w) / 2) * size, (w * size) / aspect / 1, -1]}>
                    {"Me"}
                </Text>
            </Block>
            <Html className="top-heading" position={[((-w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                {header}
            </Html>
            <group position={[0, 0, 4]}>
                <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 100]} frustumCulled={false} />
            </group>
            <Html
                style={{ width: pixelWidth}}
                position={[(-w * size) / 2, (-w * size) / 2 / aspect - 0.2, 10]}
                className="blur-box both"
                >
            <div tabIndex={index}>
                Hey there! I'm <b>Adi Poluri</b>, and I'm thrilled to have you drop by my website. I'm a 4th year Computer Science student @ <a href="https://www.ubc.ca/">UBC</a> in beautiful Vancouver, British Columbia.  
                I'm incredibly passionate about technology, and my mission is to craft unique and interesting experiences for everyone to enjoy. 
                <br/><br/>
                When I'm not knee-deep in work or tinkering with my <a href="https://github.com/adipoluri">projects</a>, you'll probably catch me 
                going on adventures and <a href="https://www.instagram.com/cometlinear/?hl=en">taking some sweet pics</a> 📸, 
                cooking up some <a href="https://4d1games.itch.io/">pixelated games</a> 👾, 
                and maybe even <a href="https://www.youtube.com/watch?v=WbInvB3xzDs&t=19s">training some AI minions</a> 🦾. At this stage in my life, my goal is to maintain a perpetual sense of curiosity and excitement about the world that surrounds us!
                <br/><br/>
                If you have any questions or would like to collaborate on a project, I am always interested in meeting new people so feel free to send me an <a href = "mailto: adipoluri@gmail.com">email</a> or shoot me a dm on <a href="https://twitter.com/adipoluri" target="_blank" rel="noreferrer">Twitter</a>, <a href="https://www.instagram.com/adi.poluri/" target="_blank" rel="noreferrer">Instagram</a>, or <a href="https://www.linkedin.com/in/adityapoluri/" target="_blank" rel="noreferrer">LinkedIn</a>.
                <br/><br/>
                Thanks for dropping by! <br/>🚀💻🎶🎮               

            </div>
            </Html>
        </group>
    </Block>
  )
}


function Experience() {
    const { contentMaxWidth: w, canvasWidth, margin, mobile} = useBlock()
    const alignRight = (canvasWidth - w - margin) / 2
    const pixelWidth = (canvasWidth-margin) * state.zoom
    const {factor,offset,aspect} = state.experience
    const stackType = mobile ? "" : "flex"
    const paddingTitle = mobile ? "0" : "2rem" 
    const paddingDescription = mobile ? "1rem 0 0 0"  : "2rem 2rem 2rem 0" 
    
    return (
        <Block factor={factor} offset={offset}>
            <group position={[-alignRight, 0, 0]}>
                <Block factor={0.2}>
                    <Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[w/ 2, w / aspect, -1]}>
                        {"Exp"}
                    </Text>
                </Block> 
                <Html position={[-w / 2, w / aspect / 2, 10]}>
                    <div className="experience-container">
                        <div className="top-heading">
                                {state.experience.header}
                        </div>
                        <div style={{flex:1, padding:"0 0 40vh 0"}}> 
                            {state.experience.sections.map(({ employer, employerLink, title, duration, description, technologies}, index) => (
                            <div key={employer} className="blur-box" style={{ width: pixelWidth}} tabIndex={index}>
                                <div style={{display:stackType}}>  
                                    <div className="entry title" style={{margin:paddingTitle}}>
                                        {employerLink===""?employer:<a href={employerLink} target="_blank" rel="noreferrer">{ employer }</a>}
                                        <br/>
                                        { title }
                                        <br/>
                                        <div className="winner title">
                                            { duration }
                                        </div>
                                        <div>
                                            <hr color="grey" />
                                        </div> 
                                        <div className="technology-list"> 
                                            {technologies.join(" • ")}
                                        </div>
                                    </div>
                                    <div className="entry description" style={{padding:paddingDescription}}> 
                                        { parse(description) }
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="top-heading">
                                {state.projects.header}
                        </div>
                        
                        <div style={{flex:1, padding:"0 0 10vh 0"}}>
                            {state.projects.sections.map(({ projectName, winner, githubLink, ytLink, imLink, relevantLink, devpostLink, technologies, description }, index) => (
                                <div key={projectName} className="blur-box" style={{ width: pixelWidth}} tabIndex={index}>
                                    <div style={{display:stackType}}>  
                                        <div className="entry title" style={{margin:paddingTitle}}>
                                            {githubLink===""?projectName:<a href={githubLink} target="_blank" rel="noreferrer">{ projectName }</a>}
                                            <div className="winner title">
                                                {winner===""?"":winner}
                                            </div> 
                                            <div>
                                                <hr color="grey" />
                                            </div>   
                                            <div>
                                            <div className="technology-list"> 
                                                {technologies.join(" • ")}
                                            </div>
                                            </div>
                                            {githubLink===""?"":<a className="icon" href={githubLink} target="_blank" rel="noreferrer"><AiFillGithub /></a>}
                                            {ytLink===""?"":<a className="icon" href={ytLink} target="_blank" rel="noreferrer"><AiOutlineYoutube /></a>}
                                            {relevantLink===""?"":<a className="icon" href={relevantLink} target="_blank" rel="noreferrer"><AiOutlineLink /></a>}
                                            {devpostLink===""?"":<a className="icon" href={devpostLink} target="_blank" rel="noreferrer"><SiDevpost /></a>}
                                            <div className="projectImage">
                                                {imLink===""?"":
                                                <a href={ytLink} target="_blank" rel="noopener noreferrer">
                                                    <img src={imLink} alt="If you see this something broke 🧐" className="projectImage"/>
                                                </a>
                                                }
                                            </div>
                                        </div>
                                        <div className="entry description" style={{padding:paddingDescription}}> 
                                            { parse(description) }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="footer-heading">
                        Thanks for stopping by <MdOutlineWavingHand/>. Feel free follow me on <a href="https://twitter.com/adipoluri" target="_blank" rel="noreferrer">Twitter</a>, <a href="https://www.instagram.com/adi.poluri/" target="_blank" rel="noreferrer">Instagram</a>, or <a href="https://www.linkedin.com/in/adityapoluri/" target="_blank" rel="noreferrer">LinkedIn</a>, or even send me an <a href="mailto:adipoluri@gmail.com">Email</a>.
                        </div>
                    </div>
                    <div className="footer">
                        Built with <AiFillHeart/> by Adi Poluri <a href="https://github.com/adipoluri/adipoluri.github.io" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    </div>
                </Html>
            </group>
        </Block>
    )
}


//Experience, Education, Projects etc.
function Content() {
    return (
        <> 
            <Introduction />
            <Experience />
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
        {/* 
        <div className="yggdrasil">
            <a className="yggdrasil-link" href="#/linkdrasil" >
                <LinkDrasil fill={state.palette.accentColor} width="2.5em" height="2.5em" />
            </a>
        </div>
        */}
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
            <div style={{ height: `1000vh` }} />
        </div>
    </>
  )
}


