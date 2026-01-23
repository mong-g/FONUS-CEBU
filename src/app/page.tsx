import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Offers />
      <Services />
      <Programs />
      <Benefits />
      <About />
      <Values />
      <Contact />
    </div>
  );
}