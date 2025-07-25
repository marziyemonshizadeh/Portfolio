import i18n from "@/i18n";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import HerosBackgroundCircles from "./hero'sBackgroundCircles";

export default function Hero({
  job,
  Typewriter1,
  Typewriter2,
  Typewriter3,
  Typewriter4,
  Typewriter5,
  Typewriter6,
  aboutMeTitle,
  SkillsTitle,
  ProjectsTitle,
  ConnectMeTitle,
}: any) {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <HerosBackgroundCircles />
      <img
        width={100}
        height={100}
        // src="/images/5.jpg"
        src="https://icon-library.com/images/female-user-icon/female-user-icon-24.jpg"
        alt="profile"
        className="relative object-cover rounded-full w-32 h-32 mx-auto select-none"
      />
      {/* <Image
        width={100}
        height={100}
        priority={true}
        src="/images/4.jpg"
        alt="profile"
        className="relative object-cover rounded-full w-32 h-32 mx-auto select-none"
      /> */}
      <h2
        className={`uppercase text-center  ${
          i18n.language == "en"
            ? "md:tracking-[20px] tracking-[10px]"
            : "tracking-[2px]"
        }`}
      >
        {job}
      </h2>
      <div className="flex dark:text-slate-100 text-slate-800 font-semibold md:text-4xl text-2xl">
        <Typewriter
          words={[
            `${Typewriter1}`,
            `${Typewriter2}`,
            `${Typewriter3}`,
            `${Typewriter4}`,
            `${Typewriter5}`,
            `${Typewriter6}`,
            `${Typewriter1}`,
          ]}
          loop={5}
          delaySpeed={2000}
          cursorStyle="_"
          cursorColor="rgb(236 72 153 / var(--tw-text-opacity))"
          cursor
        />
      </div>
      <div className="z-20">
        <Link href="#aboutMe" className="heroBtn">
          {aboutMeTitle}
        </Link>
        <Link href="#skills" className="heroBtn">
          {SkillsTitle}
        </Link>
        <Link href="#projects" className="heroBtn">
          {ProjectsTitle}
        </Link>
        <Link href="#connectMe" className="heroBtn">
          {ConnectMeTitle}
        </Link>
      </div>
    </div>
  );
}
