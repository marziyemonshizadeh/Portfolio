import { skill } from "@/typings";
import { motion } from "framer-motion";
import Skill from "./skill";

export default function Skills({ skills, title }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen  flex flex-col items-center justify-center space-y-8 overflow-hidden"
    >
      <h2 className="title">{title}</h2>
      {/* md:top-36 top-28 */}
      <div className="absolute  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-1 m-7">
        {skills?.map((item: skill) => {
          return <Skill key={item._id} {...item} />;
        })}
      </div>
    </motion.div>
  );
}
