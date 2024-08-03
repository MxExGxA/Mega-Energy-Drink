import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HomeFirst from "@/components/Home pages/HomeFirst";
import HomeSecond from "@/components/Home pages/HomeSecond";
import HomeThird from "@/components/Home pages/HomeThird";
import Navbar from "@/components/Navbar";
import Lite from "@/components/products/Lite";
import Original from "@/components/products/Original";
import XEdition from "@/components/products/XEdition";
import Section from "@/components/Section";
import Where from "@/components/Where";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-main-green dark:bg-main-dark font-poppins transition-colors duration-300">
      <div className="wrapper" id="wrapper">
        <Navbar />
        <Section>
          <HomeFirst />
        </Section>
        <Section>
          <HomeSecond />
        </Section>
        <Section className={"max-md:hidden"}>
          <HomeThird />
        </Section>
        <Section>
          <Lite />
        </Section>
        <Section>
          <Original />
        </Section>
        <Section>
          <XEdition />
        </Section>
        <Section>
          <Where />
        </Section>
        <Section>
          <Contact />
        </Section>
        <Section className="max-md:!h-fit">
          <Footer />
        </Section>
      </div>

      <div className="fixed top-0 left-0 right-0 bottom-0 !pointer-events-none z-40 max-md:hidden">
        <Scene />
      </div>
    </main>
  );
}
