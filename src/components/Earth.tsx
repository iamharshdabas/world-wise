import { Float, OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import abstract006color from '/textures/abstract-006/Abstract_006_COLOR.jpg'
import earthAlphaMap from '/textures/earth.jpg'

const Earth = () => {
  const earth = useRef()
  const [earthAlpha, abstractColor] = useTexture([
    earthAlphaMap,
    abstract006color,
  ])
  const [earthSize, setEarthSize] = useState(2)
  useFrame(({ clock }) => {
    earth.current.rotation.y = clock.getElapsedTime() * 0.1
  })

  useEffect(() => {
    if (window.innerWidth < 640) {
      setEarthSize(1)
    } else if (window.innerWidth < 768) {
      setEarthSize(1.25)
    } else if (window.innerWidth < 1024) {
      setEarthSize(1.5)
    } else {
      setEarthSize(2)
    }
  }, [earthSize])

  return (
    <>
      <ambientLight />
      <Float>
        <mesh ref={earth}>
          <sphereGeometry args={[earthSize]} />
          <meshStandardMaterial
            transparent={true}
            color={'#b4befe'}
            map={abstractColor}
            alphaMap={earthAlpha}
          />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export default Earth
