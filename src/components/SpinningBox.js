import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor,useGLTF } from '@react-three/drei'

const lime = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf";

export function SpinningBox({ scale, ...props }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(true)
  useCursor(hovered)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  const { nodes } = useGLTF(lime)
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? scale * 0.2 : scale * 0.5}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      geometry={nodes['tree-lime'].geometry}>
      <meshStandardMaterial color={hovered ? '#39FF14' : 'black'} />
    </mesh>
  )
}

