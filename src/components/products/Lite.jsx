import Image from "next/image";
import Marquee from "../Marquee";

const Lite = () => {
  return (
    <div
      id="products"
      className="relative lite grid grid-cols-12 h-screen items-center overflow-hidden max-2xl:bg-main-blue bg-main-dark"
    >
      <Image
        src={"/images/lite_dripping.svg"}
        fill
        alt="lite background"
        className="lite-bg absolute object-cover object-[0,-100px] max-lg:hidden z-0 pointer-events-none"
      />
      <div className="left relative col-start-1 col-end-6 flex justify-center max-md:hidden z-10"></div>
      <div className="right col-start-6 col-end-13 z-10 max-md:col-start-2 max-md:col-end-12">
        <h1 className="text-7xl text-main-dark font-Brexon mb-5 max-sm:text-5xl">
          MEGA Lite
        </h1>
        <div className="text-xl max-w-[800px] *:leading-7 *:mb-5 *:text-main-dark max-sm:text-lg">
          <p>
            A milder version of the classic energy drink, perfect for a gentle
            boost without the intense kick.
          </p>
          <p>
            <span className="font-Brexon text-2xl ">Power Level</span> <br />
            Low
          </p>
          <p>
            <span className="font-Brexon text-2xl">Target Audience </span>
            <br /> Ideal for those who need a light energy lift, such as during
            mid-day slumps or light workouts.
          </p>
        </div>
      </div>
      <Marquee word={"MINT"} color={"dark"} opacity={0.07} size={400} />
    </div>
  );
};

export default Lite;
