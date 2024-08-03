"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "../../public/Can";
import { Environment, Html, OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";

const Scene = () => {
  const windowRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    windowRef.current = window;
    window.addEventListener("resize", (e) => {
      setWidth(e.target.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", (e) => {
        setWidth(e.target.innerWidth);
      });
  }, []);

  useEffect(() => {
    setWidth(windowRef.current.innerWidth);
  }, [windowRef]);

  return (
    <>
      <Canvas className="bg-transparent !pointer-events-none">
        <OrthographicCamera
          makeDefault
          position={[0, 1.6, 100]}
          zoom={210 * (width * 0.00055)}
        />
        <directionalLight intensity={0.1} position={[-300, 0, -300]} />

        <ambientLight intensity={2} />

        <Environment
          files={"/neon_photostudio_2k.exr"}
          environmentIntensity={1}
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
