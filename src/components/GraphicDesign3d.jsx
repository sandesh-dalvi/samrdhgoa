import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls,
  Lightformer,
} from "@react-three/drei";
import { motion } from "framer-motion";

function Model({ scale }) {
  const { scene } = useGLTF("/3ddesign.glb");

  return <primitive object={scene} scale={scale} />;
}

const GraphicDesign3d = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0 }}
      // whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className=" mt-6 md:mt-1 relative isolate  w-[300px] h-[300px] md:w-[300px] lg:h-[350px]  lg:w-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] flex justify-center items-center "
    >
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 90 }}
        style={{ position: "absolute" }}
      >
        {/* <color attach="background" args={["#101010"]} /> */}
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.5, Math.PI / 4]}
        >
          <Stage environment={null}>
            <directionalLight />
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </motion.div>
  );
};

export default GraphicDesign3d;
