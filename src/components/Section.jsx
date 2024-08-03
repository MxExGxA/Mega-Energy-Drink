import Image from "next/image";

const Section = ({ children, className }) => {
  return (
    <section className={`relative h-screen overflow-hidden ${className}`}>
      <Image
        src={"/images/noise.png"}
        fill
        className="h-screen absolute top-0 object-cover left-0 mix-blend-soft-light opacity-50 z-50 pointer-events-none max-sm:hidden"
        quality={100}
        alt="noise image"
      />
      {children}
    </section>
  );
};

export default Section;
