import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function App() {

  return (
    <div className="h-screen bg-black">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Stars speed={0}/>
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-5xl text-white flex flex-col gap-5">
          <h1>Hello There</h1>
          <h2>My Name is <span className="text-violet-600">Uli Raudales</span></h2>
          <p className='text-2xl'>I am a Software Developer</p>
          <button className=''>Start</button>
        </div>
      </div>
    </div>
  )
}

export default App
