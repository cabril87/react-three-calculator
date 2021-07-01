import React from 'react'
import { Text } from "@react-three/drei"


const Display = (props) => {
    return (
        <mesh position={[0, 2.3, 0.2]}  >
        <boxGeometry attach="geometry" args={[4.5, 1.8, 0.4]} />
        <meshStandardMaterial color='green' />
        <Text
  
          anchorX="center"
          fontSize={0.9}
          position={props.displayPositon}
          color='black'
        >
          <meshPhongMaterial attach="material" />
  
          {props.displayContent}
  
        </Text>
      </mesh>
    )
}

export default Display
