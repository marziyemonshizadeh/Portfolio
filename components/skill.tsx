import { motion } from "framer-motion";

type Props = {
  img: string;
  directionLeft?: boolean;
  Percent: number;
};

const Skill = ({ img, directionLeft, Percent }: Props) => {
  return (
    <div className="relative group flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={img}
        alt="skill"
        className="md:w-20 md:h-20 w-12 h-12 object-contain border border-gray-400 rounded-full p-2.5 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 hover:opacity-50  transition duration-300 ease-in-out group-hover:bg-slate-300 md:w-20 md:h-20 w-12 h-12 rounded-full z-0">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl font-bold text-black">{Percent}% ccc</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
