import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Project from "./project";
export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center h-screen"
    >
      <h2 className="absolute md:top-20 top-8 tracking-[20px] uppercase my-5">
        PROJECTS
      </h2>
      <Swiper
        className="absolute md:top-36 top-32 my-5 select-none text-white"
        loop={true}
      >
        <SwiperSlide>
          <Project
            img="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
            title="Instagram Clone"
            description="React js - Bootstrap5"
            demoUrl="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app"
            githubUrl="https://jsonserver-instagram-clone.iran.liara.ru"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            img="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
            title="FullStack CMS"
            description="Next js - Tailwind css -Mongo db"
            demoUrl="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app"
            githubUrl="https://jsonserver-instagram-clone.iran.liara.ru"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            img="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
            title="Real Estate"
            description="Next js -Tailwind css - swiper - Mongo db"
            demoUrl="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app"
            githubUrl="https://jsonserver-instagram-clone.iran.liara.ru"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            img="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
            title="wikipedia"
            description="React js - bootstrap5"
            demoUrl="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app"
            githubUrl="https://jsonserver-instagram-clone.iran.liara.ru"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            img="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
            title="CMS"
            description="React js - Typescript"
            demoUrl="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app"
            githubUrl="https://jsonserver-instagram-clone.iran.liara.ru"
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
