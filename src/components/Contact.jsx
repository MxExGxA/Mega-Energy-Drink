"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-12 h-full items-center overflow-hidden"
    >
      <div className="relative col-start-1 col-end-13 flex flex-col items-center justify-center">
        <h1 className="font-Brexon text-7xl max-lg:text-6xl max-sm:text-5xl text-main-dark dark:text-main-green mb-20 max-md:mb-10">
          Contact US
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="max-lg:hidden">
            <Image
              src={"/images/triple.png"}
              width={900}
              height={900}
              alt="triplle cans image"
              className="-mx-20 "
            />
          </div>
          <div className="w-1/3 max-lg:w-2/3 max-sm:w-full max-sm:mx-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col *:bg-transparent *:border-2 *:border-main-dark *:dark:border-main-green text-xl text-main-dark dark:text-main-green *:p-3 *:my-2 *:rounded-md *:placeholder:text-main-dark *:dark:placeholder:text-main-green *:placeholder:opacity-80 *:outline-none "
            >
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                placeholder="Your Message..."
                className="resize-none h-52"
              />
              <button className="!bg-main-dark dark:!bg-main-green !text-main-green dark:!text-main-dark hover:!text-white hover:dark:!text-white transition-colors duration-300 ">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
