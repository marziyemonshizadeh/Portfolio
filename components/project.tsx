import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  img: string;
  demoUrl: string;
  githubUrl: string;
  title: string;
  description: string;
};

import { FaCode, FaGithub } from "react-icons/fa";
const Project = ({ img, title, description, demoUrl, githubUrl }: Props) => {
  return (
    <div className="flex flex-col md:justify-center items-center">
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
        <h2 className="my-4 font-semibold text-2xl text-slate-300">{title}</h2>
        <p className="max-w-md leading-9">{description}</p>
        <div className="flex justify-center items-center gap-5 my-2">
          <Link href={demoUrl} className="link hover:text-white">
            <FaCode />
          </Link>
          <Link href={githubUrl} className="link hover:text-white">
            <FaGithub />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
