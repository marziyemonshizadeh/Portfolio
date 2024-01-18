import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/scrollToTopBtn";
import MyInfoModel from "@/models/myInfo";
import ProjectModel from "@/models/project";
import SkillModel from "@/models/skill";
import { myInfo, project, skill } from "@/typings";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
const { default: connectToDB } = require("@/utils/db");

export default function Home({
  projects,
  skills,
  MyInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <main
      className="static bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-400  text-lg snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-400/20 z-0"
      suppressHydrationWarning
    >
      {/* navbar */}
      <Navbar />
      {router.asPath !== "/#hero" && <ScrollToTopBtn />}
      {/* hero */}
      <section id="hero" className="snap-start h-screen">
        <Hero MyInfo={MyInfo} />
      </section>
      {/* about me */}
      <section id="aboutMe" className="snap-center h-screen">
        <AboutMe MyInfo={MyInfo} />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start h-screen">
        <Skills skills={skills} />
      </section>
      {/* projects */}
      <section id="projects" className="snap-center h-screen">
        <Projects projects={projects} />
      </section>
      {/* connect me */}
      <section id="connectMe" className="snap-center h-screen">
        <ConnectMe MyInfo={MyInfo} />
      </section>
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // first connect to db
  connectToDB();
  const projects: project[] = await ProjectModel.find({});
  const skills: skill[] = await SkillModel.find({});
  const MyInfo: myInfo = await MyInfoModel.find({});
  console.log("projects = ", projects);
  console.log("skills = ", skills);
  console.log("myInfo = ", MyInfo);
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      skills: JSON.parse(JSON.stringify(skills)),
      MyInfo: JSON.parse(JSON.stringify(MyInfo)),
    },
    revalidate: 60 * 60 * 12,
  };
};
