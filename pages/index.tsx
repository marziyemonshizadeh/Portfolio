import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/scrollToTopBtn";
import ProjectModel from "@/models/project";
import { GetStaticProps, InferGetStaticPropsType } from "next";
const { default: connectToDB } = require("@/utils/db");
type Project = {
  _id: null | undefined;
  img: string;
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
};
export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className="static bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-400  text-lg snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-400/20 z-0"
      suppressHydrationWarning
    >
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
        <Projects projects={projects} />
      </section>
      {/* connect me */}
      <section id="connectMe" className="snap-center">
        <ConnectMe />
      </section>
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // first connect to db
  connectToDB();
  const projects: Project = await ProjectModel.find({});
  console.log("projects = ", projects);
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 60 * 60 * 12,
  };
};
