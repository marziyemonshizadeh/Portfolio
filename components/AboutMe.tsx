import { motion } from "framer-motion";

type Props = {};
// tfc
function AboutMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-evenly mx-auto px-10 max-w-7xl h-screen"
    >
      <h2 className="absolute md:top-20 top-8 tracking-[20px] text-center uppercase my-5">
        ABOUT ME
      </h2>
      <div className="absolute md:top-24 top-8 flex md:flex-row flex-col justify-center items-center md:gap-9 gap-20 md:mx-56 m-20">
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
          src="https://images.sr.roku.com/idType/roku/context/global/id/c636c4b3bad55f6cac5a2729d64d0753/images/gracenote/person/assets/1015004_v9_aa.jpg/magic/396x0/filters:quality(70)"
          // src="https://i.pinimg.com/736x/8a/3a/f8/8a3af82932d21727d75eb4f228da60fb.jpg"
          alt="about me photo"
          // className="max-h-72 object-contain md:rounded rounded-full"
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
          className="text-zinc-400 text-center md:text-left md:text-base text-sm"
        >
          <h4 className="my-4 font-semibold text-2xl text-slate-50">
            Here is the{" "}
            <span className="underline decoration-orange-400">little</span>{" "}
            background
          </h4>
          <p className="leading-10">
            I am Marzieh Menshizadeh, a computer engineer and front-end
            programmer, I am an accurate, responsible and hardworking person, I
            am eager to learn new technologies. I am very interested in math and
            programming. I started learning Front End almost two years ago and
            am currently learning TypeScript and Next js !
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
