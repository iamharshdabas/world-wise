import { Canvas } from '@react-three/fiber'
import Earth from './Earth'
import { Suspense } from 'react'

const Experience = () => {
  return (
    <div className="absolute h-screen w-screen">
      <Canvas>
        <Suspense>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Experience
