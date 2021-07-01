import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei"
import Layout from "./components/Layout"
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Canvas
        camera={{ position: [0, 0, 10], far: 40 }}
        flat
        gl={{ antialias: true, alpha: false }}
      >
        <pointLight position={[20, 25, 12]} intensity={4} />
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <Layout />
      </Canvas>
    </div >
  );
}

export default App;
