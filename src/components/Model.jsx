import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Model = () => {
  const mesh = useRef();
  const { nodes, animations } = useGLTF("/can.glb");
  const { viewport } = useThree();
  const { actions } = useAnimations(animations, mesh);

  console.log(animations[0]);
  useFrame(() => {
    mesh.current.position.x = viewport.width * 0.32;
  });

  useEffect(() => {
    actions.CircleAction.play();
  }, []);

  return (
    <group ref={mesh} scale={viewport.width / 10}>
      <mesh {...nodes.Circle.children[0]}></mesh>
      <mesh {...nodes.Circle.children[1]}></mesh>
    </group>
  );
};

export default Model;
