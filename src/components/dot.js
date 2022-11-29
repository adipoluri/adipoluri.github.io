import React, {useRef, useMemo} from "react"
import { useFrame} from "@react-three/fiber"
import { Matrix4, Vector3} from "three"
import { useBlock } from "./Blocks" 

export default function Dots() {
    const { contentMaxWidth: w} = useBlock()

    const ref = useRef()
    const { vec, transform, positions,distances} = useMemo(() => {
        const vec = new Vector3()
        const transform = new Matrix4()
        const positions = [...Array(6400)].map((_, i) => {
          const position = new Vector3()
          position.x = (i % 80)*0.7
          position.y = Math.floor(i/80)*0.7
          return position
        })
        const distances = positions.map(pos => pos.length())
        return { vec, transform, positions, distances}
    }, [])

    const roundedSquareWave = (t, delta, a, f) => {
        return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
    }

    useFrame(({ clock }) => {
        for (let i = 0; i < 6400; ++i) {
            const t = clock.elapsedTime - distances[i] / 80
            const wave = roundedSquareWave(t, 0.1, 1, 0.15)
            const scale = 1 + wave * 0.125
            vec.copy(positions[i]).addScalar(-2*w).multiplyScalar(scale)
            transform.setPosition(vec)
            ref.current.setMatrixAt(i, transform)
        }
        ref.current.instanceMatrix.needsUpdate = true
    })
    return (
      <instancedMesh ref={ref} args={[null, null, 6400]}>
        <circleGeometry args={[0.01]} />
        <meshBasicMaterial color={0xFFFF00}/>
      </instancedMesh>
    )
  }
