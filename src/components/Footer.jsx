"use client";
import Link from "next/link";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";

const Footer = () => {
  const windRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    windRef.current = window;
  }, []);

  const scrlTo = (id) => {
    gsap.to(windRef.current, { duration: 1, scrollTo: id });
  };

  return (
    <div
      id="about"
      className="grid grid-cols-12 grid-rows-10 max-md:grid-rows-9 h-screen max-md:h-auto items-center overflow-hidden dark:bg-main-dark bg-main-green py-10"
    >
      <div className="left col-start-1 col-end-5 max-xl:col-end-13 row-span-8 max-xl:row-span-4 h-full flex flex-col justify-around items-center border-r max-xl:border-none dark:border-gray-400 border-main-dark">
        <div className="top flex flex-col items-center">
          <h1 className="font-Brexon text-5xl max-2xl:text-4xl dark:text-main-green text-main-dark">
            MEGA ENERGY DRINK
          </h1>
          <h2 className="text-white text-4xl font-Caveat font-bold mt-2 opacity-90">
            Unleash the Power Within!
          </h2>
        </div>
        <div className="bottom flex flex-col w-full px-20 max-2xl:p-10 max-xl:p-2">
          <h1 className="dark:text-main-green text-main-dark text-3xl">
            Newsletter Signup
          </h1>
          <h2 className="text-main-dark dark:text-white mb-2">
            Stay updated with the latest news
          </h2>
          <input
            className="border-2 dark:border-main-green border-main-dark rounded-md bg-transparent placeholder:dark:text-main-green placeholder:text-main-dark p-3 mb-2 outline-none dark:text-main-green text-main-dark"
            type="text"
            placeholder="Email"
          />
          <button className="dark:bg-main-green bg-main-dark text-main-green dark:text-main-dark p-3 rounded-md hover:text-white transition-colors duration-300">
            Sign up
          </button>
        </div>
      </div>
      <div className="right col-start-5 max-xl:col-start-1 col-end-13 max-md:col-start-5 row-span-8 max-xl:row-span-4 max-xl:row-start-6 max-md:row-start-5 h-full flex items-center dark:text-white text-main-dark font-light">
        <div className="flex max-md:flex-col max-md:items-start w-full justify-around text-lg max-sm:text-sm max-md:*:mb-5">
          <ul className="*:mb-2">
            <h3 className="text-xl font-bold -ml-5">Quick Links</h3>
            <li onClick={() => scrlTo("#home")} className="cursor-pointer">
              home
            </li>
            <li onClick={() => scrlTo("#products")} className="cursor-pointer">
              products
            </li>
            <li onClick={() => scrlTo("#where")} className="cursor-pointer">
              where to buy
            </li>
            <li onClick={() => scrlTo("#contact")} className="cursor-pointer">
              contact us
            </li>
            <li onClick={() => scrlTo("#about")} className="cursor-pointer">
              about us
            </li>
          </ul>
          <ul className="*:mb-2">
            <h3 className="text-xl font-bold -ml-5">Follow US</h3>
            <li>
              <Link
                href={"https://www.facebook.com/elsayed.elghazy.5"}
                target="_blank"
              >
                Facebook
              </Link>
            </li>
            <li>Instagram</li>
            <li>
              <Link href={"https://x.com/MxExGxA11"} target="_blank">
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
          <ul className="*:mb-2">
            <h3 className="text-xl font-bold -ml-5">Contact US</h3>
            <li>support@example.com</li>
            <li>+1 (800) 123-4567</li>
            <li> 123 Energy street, Power City</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-16 dark:bg-main-green bg-main-dark col-start-1 col-end-13 self-end row-start-10 max-md:row-start-9 max-md:row-end-10 row-end-11 flex justify-center items-center">
        <p className="dark:text-main-dark text-white max-sm:text-[12px]">
          Copyright © 2024 MEGA | Crafted by{"     "}
          <Link
            href={"https://www.linkedin.com/in/elsayed-elghazy-1851011b1/"}
            target="_blank"
            className="font-semibold dark:text-main-dark text-main-green hover:text-white dark:hover:text-white transition-colors duration-300"
          >
            Elsayed Elghazy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
