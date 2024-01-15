import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Key } from "react";
import "swiper/css";
import Project from "./project";
type Prop = {
  _id: Key | null | undefined;
  img: string;
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
};
export default function Projects({ projects }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center h-screen"
    >
      <h2 className="title">PROJECTS</h2>
      <Swiper
        className="absolute md:top-36 top-32 my-5 select-none"
        loop={true}
      >
        {projects?.map((item: Prop) => {
          return (
            <SwiperSlide key={item._id}>
              <Project
                img={item.img}
                title={item.title}
                description={item.description}
                demoUrl={item.demoUrl}
                githubUrl={item.githubUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* amazing background */}
      <div className="w-full absolute top-[30%] bg-[#fe019a]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}
