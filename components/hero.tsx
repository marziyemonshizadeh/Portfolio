import i18n from "@/i18n";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import HerosBackgroundCircles from "./hero'sBackgroundCircles";

export default function Hero({
  // MyInfo,
  job,
  Typewriter1,
  Typewriter2,
  Typewriter3,
  Typewriter4,
  Typewriter5,
  Typewriter6,
  aboutMeTitle,
  SkillsTitle,
  // librariesTitle,
  ProjectsTitle,
  ConnectMeTitle,
}: any) {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <HerosBackgroundCircles />
      <Image
        width={100}
        height={100}
        priority={true}
        src="/images/4.jpg"
        // src={Object.assign({}, MyInfo)[0].heroPageImgUrl}
        alt="profile"
        className="relative object-cover rounded-full w-32 h-32 mx-auto select-none"
      />
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
        {/* <Link href="#libraries" className="heroBtn">
          {librariesTitle}
        </Link> */}
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
