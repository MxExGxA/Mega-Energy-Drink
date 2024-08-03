export const metadata = {
  title: "second page",
};
const HomeSecond = () => {
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="left col-start-1 col-end-4 max-md:hidden "></div>
      <div className="right col-start-4 col-end-13 max-xl:col-start-5 max-md:col-start-2 max-md:col-end-12 flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[130px] max-2xl:text-[110px] max-xl:text-[90px] max-lg:text-[70px] max-md:text-[90px] max-sm:text-center font-Brexon text-main-dark dark:text-main-green bg-clip-text -ml-1 leading-[130px] max-2xl:leading-[80px]">
            Need A Boost ?
          </h1>
          <p className="text-xl max-2xl:text-lg max-lg:text-sm max-w-[800px] max-sm:text-center text-main-dark dark:text-white mt-5 max-xl:mt-0 max-md:mt-5">
            Boost your energy and focus with Mega. Perfect for any time you need
            a quick, natural pick-me-up. Unleash your potential with Mega!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
