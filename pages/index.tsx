import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-zinc-800 text-zinc-500 text-lg snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden z-0">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      {/* <section id="hero" className="snap-center"> */}
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>
      {/* about me */}
      <section id="aboutMe" className="snap-center h-screen">
        <AboutMe />
      </section>
      {/* skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* connect me */}
      <section id="connectMe" className="snap-center">
        <ConnectMe />
      </section>
    </main>
  );
}
