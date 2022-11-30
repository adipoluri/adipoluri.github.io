//React
import React, {useMemo } from "react"
//Three
import { useFrame, useThree} from "@react-three/fiber"
import { Matrix4, Vector3, MathUtils, Color} from "three"
import { Physics, useSphere } from "@react-three/cannon"
import state from "../config"
import "../styles.css"
import niceColors from "nice-color-palettes"
import { useBlock } from "./Blocks"


const rfs = MathUtils.randFloatSpread
const tempColor = new Color()
const swatchIndex = state.palette.singleColorMode ? state.palette.ballSingle : state.palette.ballMultiple[MathUtils.randInt(0,15)]
console.info("Using Pallet #" + String(swatchIndex))
const colours = Array.from({ length: 200 }, () => ({ color: niceColors[swatchIndex][Math.floor(Math.random() * 5)], scale: 0.25 + Math.random() }))


function Balls({ mat = new Matrix4(), vec = new Vector3(), ...props }) {
  const {mobile} = useBlock()
  const ballAmount = mobile ? state.ballCount/2 : state.ballCount;
  console.info("Set Ballcount to " + String(ballAmount))
   
  const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.1, position: [rfs(20), rfs(20), -50+rfs(20)] }))
  const colorArray = useMemo(() => Float32Array.from(new Array(ballAmount).fill().flatMap((_, i) => tempColor.set(colours[i].color).toArray())), [ballAmount])
    
  useFrame((threeState) => {
    for (let i = 0; i <ballAmount; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat)
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-35).toArray(), [Math.sin(threeState.clock.elapsedTime), -Math.sin(threeState.clock.elapsedTime),0])
    }
  })

  return( 
    <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, ballAmount]} >
        <sphereGeometry args={[1, 32, 32]}>
            <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
        </sphereGeometry>
      <meshToonMaterial vertexColors />
    </instancedMesh>
  )
}
  
function MouseHandler() {
    const viewport = useThree((state) => state.viewport)
    const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
    return useFrame((threeState) => {
      api.position.set((state.mouse[0] * viewport.width) / 2, (state.mouse[1] * viewport.height) / 2, -Math.sin(2*threeState.clock.elapsedTime))
    })
  }


  export default function PhysicsBalls(){
    return(
        <Physics gravity={[2, 2, 0]} iterations={10}>
            <MouseHandler />
            <Balls />
        </Physics>
    )
  }