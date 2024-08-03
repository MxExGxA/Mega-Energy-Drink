import Image from "next/image";
import React from "react";
import Marquee from "../Marquee";

const XEdition = () => {
  return (
    <div className="xedition relative grid grid-cols-12 h-screen items-center max-2xl:bg-main-green overflow-hidden bg-main-dark">
      <Image
        src={"/images/xedition_dripping.svg"}
        fill
        alt="xedition background"
        className="xedition-bg absolute object-cover object-[0,-100px] max-lg:hidden z-0 pointer-events-none"
      />
      <div className="right col-start-6 col-end-13 z-10 max-md:col-start-2 max-md:col-end-12">
        <h1 className="text-7xl text-main-dark font-Brexon mb-5 max-sm:text-5xl">
          MEGA X Edition
        </h1>
        <div className="text-xl max-w-[800px] *:leading-7 *:mb-5 *:text-main-dark max-sm:text-lg">
          <p>
            Our most powerful formula yet, designed to deliver maximum energy
            and enhanced focus for the toughest challenges.
          </p>
          <p>
            <span className="font-Brexon text-2xl">Power Level</span>
            <br /> High
          </p>
          <p>
            <span className="font-Brexon text-2xl">Target Audience </span>
            <br />
            Perfect for athletes, gamers, and those who need an intense and
            sustained energy surge.
          </p>
        </div>
      </div>
      <Marquee word={"KIWI"} color={"dark"} opacity={0.07} size={400} />
    </div>
  );
};

export default XEdition;
