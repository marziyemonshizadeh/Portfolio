import Project from "./project";
import ScrollToTopBtn from "./scrollToTopBtn";

export default function Projects() {
  return (
    <div className="relative flex justify-center h-screen">
      <h2 className="absolute md:top-20 top-8 tracking-[20px] uppercase my-5">
        PROJECTS
      </h2>
      <Project />
      <ScrollToTopBtn />
    </div>
  );
}
