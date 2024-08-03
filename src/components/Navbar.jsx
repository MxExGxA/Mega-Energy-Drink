import Image from "next/image";
import Logo from "./Logo";
import DarkLightToggler from "./DarkLightToggler";

const Navbar = () => {
  return (
    <div className="absolute bg-transparent h-20 w-full py-5 flex justify-center z-40">
      <div className="wrapper w-[80%] flex justify-between">
        {/* <Image
          src={"/images/logo.svg"}
          width={80}
          height={60}
          alt="logo"
          className=""
        /> */}
        <Logo />
        <DarkLightToggler />
      </div>
    </div>
  );
};

export default Navbar;
