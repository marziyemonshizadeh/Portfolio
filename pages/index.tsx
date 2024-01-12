import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/scrollToTopBtn";
const { default: connectToDB } = require("@/utils/db");

export default function Home() {
  return (
    <main className="static  bg-zinc-800 text-zinc-500 text-lg snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-400/20 z-0">
      {/* navbar */}
      <Navbar />
      <ScrollToTopBtn />
      {/* hero */}
      <section id="hero" className="snap-start h-screen">
        <Hero />
      </section>
      {/* about me */}
      <section id="aboutMe" className="snap-center h-screen">
        <AboutMe />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
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
export async function getStaticProps() {
  // first connect to db
  connectToDB();
  // const messages = await MessageModel.find({});
  // console.log("messages = ", messages);
  return {
    props: {
      // messages: JSON.parse(JSON.stringify(messages)),
    },
    revalidate: 60 * 60 * 12,
  };
}
