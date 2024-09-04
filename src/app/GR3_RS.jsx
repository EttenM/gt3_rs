import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  Preload,
  useGLTF,
  useScroll,
} from "@react-three/drei";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useFrame } from "react-three-fiber";

const GR3_RS = () => {
  const gt3_rs = useGLTF("./GT3 RS/scene.gltf");

  const tl = useRef();
  // const camera = useRef();

  return (
    <mesh color="0xbfe3dd" castShadow receiveShadow>
      {/* <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[1, 0, 1]}
        theatreKey="Camera"
      /> */}
      <primitive
        object={gt3_rs.scene}
        scale={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

export default GR3_RS;
