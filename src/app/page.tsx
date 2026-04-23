import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Leadership />
      <Projects />
      <Contact />
    </main>
  );
}





