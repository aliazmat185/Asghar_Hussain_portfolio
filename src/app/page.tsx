import Hero from "@/components/sections/Hero";
import Platforms from "@/components/sections/Platforms";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Engagement from "@/components/sections/Engagement";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <About />
      <Process />
      <Engagement />
      <FAQ />
      <Contact />
    </>
  );
}
