import { motion } from "framer-motion";

function AboutMe({ title, description, aboutMeLitleBg }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-evenly mx-auto px-10 max-w-7xl h-screen"
    >
      <h2 className="title md:mb-0 mb-8 ">{title}</h2>
      {/* md:top-24 top-8 */}
      {/* md:gap-9 gap-20 */}
      <div
        className="absolute flex md:flex-row flex-col justify-center items-center 
       md:mx-56 m-20"
      >
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          className="text-center md:text-start md:text-base text-sm"
        >
          <h4 className="my-4 font-semibold text-2xl text-slate-800 dark:text-zinc-50 underlineStyle">
            {aboutMeLitleBg}
            {/* Here is the <span className="underlineStyle">little</span>{" "}
            background */}
          </h4>
          <div className="md:leading-10">{description}</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
