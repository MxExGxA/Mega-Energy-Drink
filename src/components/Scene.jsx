"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Model } from "../../public/Can";
import {
  Environment,
  Html,
  OrthographicCamera,
  useProgress,
} from "@react-three/drei";
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

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return (
      <Html
        center
        className="bg-black w-screen h-screen flex flex-col justify-center items-center text-2xl text-white z-50"
      >
        {progress} % loaded
        <p className="text-sm mt-5">
          "If this is your first time visiting this site it may take some time,
          please be patient"
        </p>
      </Html>
    );
  }

  return (
    <>
      <Canvas className="bg-transparent !pointer-events-none">
        <Suspense fallback={<Loader />}>
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
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
