import Image from "next/image";
import Marquee from "../Marquee";

const HomeFirst = () => {
  return (
    <div
      id="home"
      className="home-first grid grid-cols-12 grid-rows-none h-full"
    >
      <div className="left flex flex-col items-center justify-center col-start-2 col-end-8 max-md:col-start-2 max-md:col-end-12 ">
        <div className="w-fit max-md:w-auto max-md:flex max-md:flex-col max-md:items-center">
          <h1 className="relative w-fit max-md:text-center text-[160px] max-xl:text-[120px] max-md:text-[160px] max-sm:text-[100px] text-main-dark dark:text-main-green leading-[120px] max-xl:leading-[90px] max-md:leading-[120px] max-sm:leading-[75px] -ml-2 bg-clip-text font-Brexon">
            MEGA
            <br />
            ENERGY
            <br />
            DRINK.
            <p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-8xl max-lg:text-6xl font-water-brush">
              X Edition
            </p>
          </h1>
          <p className="text-xl max-sm:text-sm max-sm:text-center  max-w-[800px] text-main-dark dark:text-white -ml-2 mt-8">
            The new X Edition delivers an unmatched energy boost and sharper
            focus. Conquer any challenge with Mega X edition.
          </p>
          <button className="w-2/3 max-md:w-full max-sm:text-lg bg-main-dark py-4 max-sm:py-3 -ml-2 max-sm:ml-auto mt-8 rounded-md text-main-green dark:text-main-dark dark:bg-main-green text-2xl hover:text-white hover:dark:text-white transition-colors duration-300">
            Boost
          </button>
        </div>
      </div>
      <div className="relative max-md:hidden right col-start-8 col-end-13  overflow-hidden"></div>
    </div>
  );
};

export default HomeFirst;
