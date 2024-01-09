import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import HerosBackgroundCircles from "./hero'sBackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen space-y-8 overflow-hidden">
      <HerosBackgroundCircles />
      <img
        src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDQzMTI5NzY3NTM1ODA2/short-captions-for-profile-pictures.png"
        alt="profile"
        className="relative object-cover rounded-full w-32 h-32 mx-auto"
      />
      <h2 className="uppercase md:tracking-[20px] tracking-[10px] text-center">
        Computer Engineer
      </h2>
      <h1 className="flex text-slate-100 font-semibold md:text-4xl text-2xl">
        <Typewriter
          words={[
            "Hi I Am Marzieh Monshizadeh",
            "I am fronted developer",
            "<LoveCoding/>",
            "<LoveSolvingMath/>",
            "And Drink coffee",
            "Hi I Am Marzieh Monshizadeh",
          ]}
          loop={5}
          delaySpeed={2000}
          cursorStyle="_"
          cursorColor="rgb(236 72 153 / var(--tw-text-opacity))"
          cursor
          // typeSpeed={70}
          // deleteSpeed={50}
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
      {/* <Header /> */}
    </div>
  );
}
