"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Marquee = ({ word, color, opacity, size }) => {
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to(".marquee", {
      xPercent: `-25`,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div
      style={{ opacity: opacity, fontSize: size }}
      className={`marquee absolute h-screen flex flex-col justify-around *:flex w-fit text-main-${color} leading-[300px] font-Brexon overflow-hidden pointer-events-none`}
    >
      <div className="mar-top *:ml-10">
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
      </div>
      <div className="mar-center *:ml-10">
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
      </div>
      <div className="mar-bottom *:ml-10">
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
        <h1>{word}</h1>
      </div>
    </div>
  );
};

export default Marquee;
