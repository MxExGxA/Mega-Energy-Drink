import Image from "next/image";
import Marquee from "../Marquee";

const Original = () => {
  return (
    <div className="original relative grid grid-cols-12 h-full items-center max-2xl:bg-main-yellow overflow-hidden bg-main-dark">
      <Image
        alt="original background"
        src={"/images/original_dripping.svg"}
        fill
        className="original-bg absolute object-cover object-[0,-100px] max-lg:hidden z-0 pointer-events-none"
      />
      <div className="left col-start-3 col-end-9 max-md:col-start-2 max-md:col-end-12">
        <h1 className="text-7xl text-main-dark font-Brexon mb-5 max-sm:text-5xl">
          MEGA Original
        </h1>
        <div className="text-xl max-w-[800px] *:leading-7 *:mb-5 *:text-main-dark max-sm:text-lg">
          <p>
            The classic energy drink that provides a balanced and reliable
            energy boost to power through daily activities.
          </p>
          <p>
            <span className="font-Brexon text-2xl">Power Level</span> <br />
            Medium
          </p>
          <p>
            <span className="font-Brexon text-2xl">Target Audience </span>
            <br /> Suitable for anyone needing a steady energy boost, including
            professionals, students, and fitness enthusiasts.
          </p>
        </div>
      </div>
      <Marquee word={"PINEAPPLE"} color={"dark"} opacity={0.07} size={400} />
    </div>
  );
};

export default Original;
