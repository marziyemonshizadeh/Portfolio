import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { project } from "@/types/typings";
import { useEffect, useState } from "react";
import "swiper/css";
import Project from "./project";

export default function Projects({ projects, title }: any) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center h-screen"
    >
      <h2 className="title">{title}</h2>
      {/* md:top-36 top-32 */}
      {domLoaded && (
        <Swiper className="absolute my-5 select-none" loop={true}>
          {projects?.map((item: project) => {
            return (
              <SwiperSlide key={item._id}>
                <Project {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {/* amazing background */}
      <div className="w-full absolute top-[30%] bg-[#fe019a]/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
}
