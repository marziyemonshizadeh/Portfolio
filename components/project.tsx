import { project } from "@/typings";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";

const Project = ({ img, title, description, demoUrl, githubUrl }: project) => {
  return (
    <div className="flex flex-col md:justify-center items-center p-2" dir="ltr">
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={img}
        alt="project image"
        className="object-contain w-52 h-52"
      />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="my-4 font-semibold text-2xl text-black dark:text-slate-300">
          {title}
        </h2>
        <p className="max-w-[800px] md:leading-9 text-sm">{description}</p>
        <div className="flex justify-center items-center gap-5 my-2">
          <Link
            href={demoUrl}
            className="link hover:text-pink-600 dark:hover:text-white"
          >
            <FaBullseye />
          </Link>
          <Link
            href={githubUrl}
            className="link hover:text-pink-600 dark:hover:text-white"
          >
            <FaGithub />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
