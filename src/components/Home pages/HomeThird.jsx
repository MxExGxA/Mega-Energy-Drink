"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeThird = () => {
  const ref = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".text-stroke").forEach((child, i) => {
      tl.to(child, {
        y: () => 100 * (i + 1),
        opacity: 1 / (i + 1),
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-12 h-full items-center">
      <div className="relative *:absolute col-start-4 col-end-10 max-2xl:col-start-2 max-2xl:col-end-12 flex flex-col items-center h-4/5 *:text-[110px] max-xl:*:text-[70px] max-md:*:text-[50px] max-sm:*:text-[30px] font-Brexon ">
        <h1 className="text-main-dark dark:text-main-green bg-clip-text z-10 ">
          Open and Go !
        </h1>
        <h1 className="opacity-0 text-stroke dark:text-stroke-dark">
          Open and Go !
        </h1>
        <h1 className="opacity-0 text-stroke dark:text-stroke-dark">
          Open and Go !
        </h1>
        <h1 className="opacity-0 text-stroke dark:text-stroke-dark">
          Open and Go !
        </h1>
        <h1 className="opacity-0 text-stroke dark:text-stroke-dark">
          Open and Go !
        </h1>
        <h1 className="opacity-0 text-stroke dark:text-stroke-dark">
          Open and Go !
        </h1>
      </div>
    </div>
  );
};

export default HomeThird;
