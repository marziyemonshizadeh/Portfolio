import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
// const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/scrollToTopBtn";
import MyInfoModel from "@/models/myInfo";
import ProjectModel from "@/models/project";
import SkillModel from "@/models/skill";
import { myInfo, project, skill } from "@/types/typings";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import connectToDB from "@/utils/db";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Home({
  projects,
  skills,
  // libraries,
  MyInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { t } = useTranslation();
  // Disable right click
  // useEffect(() => {
  //   const handleContextmenu = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextmenu);
  //   return function cleanup() {
  //     document.removeEventListener("contextmenu", handleContextmenu);
  //   };
  // }, []);

  return (
    <div
      className="static bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-400  text-lg snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-400/20 z-0 select-none"
      dir={`${i18n.language == "en" ? "ltr" : "rtl"}`}
    >
      {/* navbar */}
      <Navbar />
      {router.asPath !== "/#hero" && <ScrollToTopBtn />}
      {/* hero */}
      <div id="hero" className="snap-start h-screen">
        <Hero
          MyInfo={MyInfo}
          job={t("job")}
          Typewriter1={t("Typewriter1")}
          Typewriter2={t("Typewriter2")}
          Typewriter3={t("Typewriter3")}
          Typewriter4={t("Typewriter4")}
          Typewriter5={t("Typewriter5")}
          Typewriter6={t("Typewriter6")}
          aboutMeTitle={t("aboutMeTitle")}
          SkillsTitle={t("SkillsTitle")}
          librariesTitle={t("librariesTitle")}
          ProjectsTitle={t("ProjectsTitle")}
          ConnectMeTitle={t("ConnectMeTitle")}
        />
      </div>
      {/* about me */}
      <div id="aboutMe" className="snap-center h-screen">
        <AboutMe
          // MyInfo={MyInfo}
          title={t("aboutMeTitle")}
          aboutMeLitleBg={t("aboutMeLitleBg")}
          description={t("description")}
        />
      </div>
      {/* skills */}
      <div id="skills" className="snap-start h-screen">
        <Skills skills={skills} title={t("SkillsTitle")} />
      </div>
      {/* projects */}
      <div id="projects" className="snap-center h-screen">
        <Projects projects={projects} title={t("ProjectsTitle")} />
      </div>
      {/* connect me */}
      <div id="connectMe" className="snap-center h-screen">
        <ConnectMe
          MyInfo={MyInfo}
          title={t("ConnectMeTitle")}
          nameInput={t("nameInput")}
          nameInputError={t("nameInputError")}
          emailInput={t("emailInput")}
          emailInputError={t("emailInputError")}
          subjectInput={t("subjectInput")}
          subjectInputError={t("subjectInputError")}
          bodyInput={t("bodyInput")}
          bodyInputError={t("bodyInputError")}
          SubmitBtnTxt={t("SubmitBtnTxt")}
        />
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // first connect to db
  connectToDB();
  console.log("connect to db in root :)");
  const projects: project[] = await ProjectModel.find({});
  const skills: skill[] = await SkillModel.find({});
  const MyInfo: myInfo = await MyInfoModel.find({});
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
      skills: JSON.parse(JSON.stringify(skills)),
      MyInfo: JSON.parse(JSON.stringify(MyInfo)),
    },
    revalidate: 60 * 60 * 12,
  };
};
