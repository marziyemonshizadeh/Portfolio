import { motion } from "framer-motion";

function AboutMe({ MyInfo }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-evenly mx-auto px-10 max-w-7xl h-screen"
    >
      <h2 className="title md:mb-0 mb-8 ">ABOUT ME</h2>
      {/* md:top-24 top-8 */}
      <div className="absolute flex md:flex-row flex-col justify-center items-center md:gap-9 gap-20 md:mx-56 m-20">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          src={Object.assign({}, MyInfo)[0].aboutMePageImgUrl}
          alt="about me photo"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[200px] xl:h-[300px]"
        />
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
          viewport={{ once: true }}
          className="text-center md:text-left md:text-base text-sm"
        >
          <h4 className="my-4 font-semibold text-2xl text-slate-800 dark:text-zinc-50">
            Here is the <span className="underlineStyle">little</span>{" "}
            background
          </h4>
          <p className="md:leading-10">
            {Object.assign({}, MyInfo)[0].description}
            {/* I am Marzieh Menshizadeh, a computer engineer and front-end
            programmer, I am an accurate, responsible and hardworking person, I
            am eager to learn new technologies. I am very interested in math and
            programming. I started learning Front End almost two years ago and
            am currently learning TypeScript and Next js ! */}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
