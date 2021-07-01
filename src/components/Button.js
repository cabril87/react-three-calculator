import { Text } from "@react-three/drei"
import { useRef } from "react";


const Button = (props) => {

    const ref = useRef()

    return (
        <mesh
            position={[-1.8, 0.8, 0.3]}
            ref={ref}
        >
            <boxGeometry attach="geometry" args={props.size} />
            <meshStandardMaterial attach="material" color={props.color} />
            <Text
                anchorX="center"
                fontSize={0.3}
                position={props.contentPositon}
                color={props.buttonTextColor}
            >
                <meshPhongMaterial attach="material"/>
                {props.content} 
            </Text>
        </mesh>
    )
}

export default Button