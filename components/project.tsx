import Link from "next/link";

type Props = {};

import { FaCode, FaGithub } from "react-icons/fa";
const Project = (props: Props) => {
  return (
    <div className="absolute md:top-36 top-20 flex flex-col md:justify-center items-center">
      <img
        src="https://appscrip.com/wp-content/uploads/2021/09/Instagram-clone-application-885x1024.png"
        alt="w"
        className="object-contain w-52 h-52"
      />
      <h2 className="my-4 font-semibold text-2xl text-slate-300">
        Instagram Clone
      </h2>
      <p className="max-w-md leading-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta
        hic, quo, officiis maxime similique porro ipsum non, quam at velit
        consectetur maiores voluptatem! Magni natus aliquam incidunt non beatae?
      </p>
      <div className="flex justify-center items-center gap-5">
        <Link href="https://instagram-clone-g6yxm3y8y-marziehs-projects.vercel.app/">
          <FaCode />
        </Link>
        <Link
          href="https://jsonserver-instagram-clone.iran.liara.run"
          className="link hover:text-white"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default Project;
