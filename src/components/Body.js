import React from 'react'

const Body = () => {
    return (
        <mesh position={[0, -0.5, 0]}>
        <boxGeometry attach="geometry" args={[5, 8, 0.5]} />
        <meshStandardMaterial color='red' />
      </mesh>
    )
}

export default Body