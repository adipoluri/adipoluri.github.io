//React
import React, { Suspense, useEffect, useRef} from "react"
import { Link } from 'react-router-dom';
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


export default function LinkDrasilPage() {
    return (
    <>
        <header>
            <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
            </nav>
        </header>
    </>
  )
}
