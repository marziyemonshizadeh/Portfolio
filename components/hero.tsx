import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import HerosBackgroundCircles from "./hero'sBackgroundCircles";
type Props = {};

export default function Hero({ MyInfo }: any) {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <HerosBackgroundCircles />
      <Image
        width={100}
        height={100}
        src={Object.assign({}, MyInfo)[0].heroPageImgUrl}
        alt="profile"
        className="relative object-cover rounded-full w-32 h-32 mx-auto"
      />
      <h2 className="uppercase md:tracking-[20px] tracking-[10px] text-center">
        Computer Engineer
      </h2>
      <h1 className="flex dark:text-slate-100 text-slate-800 font-semibold md:text-4xl text-2xl">
        <Typewriter
          words={[
            "Hi I Am Marzieh Monshizadeh",
            "I am fronted developer",
            "<LoveCoding👩‍💻​/>",
            "<Math/>",
            "<Music🎧/>",
            "And <coffee☕/>",
            "Hi I Am Marzieh Monshizadeh",
          ]}
          loop={5}
          delaySpeed={2000}
          cursorStyle="_"
          cursorColor="rgb(236 72 153 / var(--tw-text-opacity))"
          cursor
        />
      </h1>
      <section className="z-20">
        <Link href="#aboutMe" className="heroBtn">
          AboutMe
        </Link>
        <Link href="#skills" className="heroBtn">
          Skills
        </Link>
        <Link href="#projects" className="heroBtn">
          Projects
        </Link>
        <Link href="#connectMe" className="heroBtn">
          ConnectMe
        </Link>
      </section>
    </div>
  );
}
