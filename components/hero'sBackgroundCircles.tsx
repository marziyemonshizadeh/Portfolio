import { motion } from "framer-motion";
type Props = {};

const HerosBackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="realative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] h-[200px] w-[200px] md:inline-flex hidden rounded-full mt-52 animate-ping"></div>
      <div className="absolute border border-[#333333] h-[300px] w-[300px] md:inline-flex hidden rounded-full mt-52 animate-ping"></div>
      <div className="absolute border border-zinc-700 h-[350px] w-[350px] md:inline-flex hidden rounded-full mt-52 animate-ping"></div>
      {/* <div className="absolute border border-red-600 h-[650px] w-[650px] rounded-full mt-52 animate-pulse"></div>
      <div className="absolute border border-white h-[800px] w-[800px] rounded-full mt-52"></div> */}
    </motion.div>
  );
};
export default HerosBackgroundCircles;
