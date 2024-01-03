import AboutMe from "@/components/modules/AboutMe/AboutMe";
import ConnectMe from "@/components/modules/ConnectMe/ConnectMe";
import Projects from "@/components/modules/Projects/Projects";
import Skills from "@/components/modules/Skills/Skills";
import Header from "@/components/modules/header/header";
import Hero from "@/components/modules/hero/hero";
import Navbar from "@/components/modules/navbar/navbar";

export default function Home() {
  return (
    <main className="bg-zinc-800 text-zinc-500 text-lg snap-y snap-mandatory  z-0">
      {/* navbar */}
      <Navbar />
      <Header />
      {/* hero */}
      {/* <section id="hero" className="snap-center"> */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* about me */}
      <AboutMe />
      {/* skills */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* connect me */}
      <ConnectMe />
    </main>
  );
}
