import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei"
import Layout from "./components/Layout"
import './App.css';

const App = () => {
  return (
    <>
      <Canvas>
        <pointLight position={[20, 25, 12]} intensity={4} />
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <Layout />
      </Canvas>
    </>
  );
}

export default App;
