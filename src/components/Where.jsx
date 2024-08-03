import { FaSearchLocation, FaStore, FaTruck } from "react-icons/fa";

const Where = () => {
  return (
    <div
      id="where"
      className="grid grid-cols-12 h-full items-center overflow-hidden dark:bg-main-dark bg-main-green"
    >
      <div className="relative col-start-1 col-end-13 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-Brexon dark:text-main-green text-main-dark max-md:text-6xl max-sm:text-4xl max-sm:text-center">
          Where to Buy ?
        </h1>
        <div
          className="flex flex-wrap max-lg:justify-center *:border-2 *:dark:border-main-green *:border-main-dark
        *:flex *:flex-col *:items-center *:justify-between *:p-10 *:max-sm:p-2 *:h-48 *:max-sm:h-36 *:w-56 *:max-sm:w-36 *:mx-5 my-20 max-sm:my-10 max-lg:*:my-5 max-md:my-10 *:cursor-pointer *:rounded-md"
        >
          <div className="max-sm:!justify-center hover:bg-main-dark *:hover:text-main-green hover:dark:bg-main-green *:hover:dark:text-main-dark transition-colors *:transition-colors duration-300 *:duration-300">
            <FaSearchLocation className="text-5xl max-sm:text-3xl max-sm:mb-3 text-main-dark dark:text-main-green" />
            <h2 className="text-xl max-sm:text-lg text-main-dark dark:text-main-green">
              Store Locator
            </h2>
          </div>
          <div className="max-sm:!justify-center hover:bg-main-dark *:hover:text-main-green hover:dark:bg-main-green *:hover:dark:text-main-dark transition-colors *:transition-colors duration-300 *:duration-300">
            <FaStore className="text-5xl max-sm:text-3xl max-sm:mb-3 text-main-dark dark:text-main-green" />
            <h2 className="text-xl max-sm:text-lg text-main-dark dark:text-main-green">
              Online Store
            </h2>
          </div>
          <div className=" max-sm:!justify-center hover:bg-main-dark *:hover:text-main-green hover:dark:bg-main-green *:hover:dark:text-main-dark transition-colors *:transition-colors duration-300 *:duration-300">
            <FaTruck className="text-5xl max-sm:text-3xl max-sm:mb-3 text-main-dark dark:text-main-green" />
            <h2 className="text-xl max-sm:text-lg text-main-dark dark:text-main-green">
              Bulk Orders
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Where;
