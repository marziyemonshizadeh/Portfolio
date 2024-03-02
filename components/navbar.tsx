import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import i18n from "@/i18n";
import ThemeSwitch from "./themeSwitch";

function Navbar() {
  const changeLanguage = (event: { target: { value: string | undefined } }) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <nav className="flex md:justify-around justify-between items-start md:p-3 p-2 sticky top-0 z-50">
      <motion.section
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row gap-2"
      >
        {/* telegrm */}
        <Link
          href="https:/t.me/Marzieh_monshizadeh"
          className="link hover:text-cyan-500"
        >
          <FaTelegramPlane />
        </Link>
        {/* Linkedin */}
        <Link
          href="https://www.linkedin.com/in/marzieh-monshizadeh-175a061a0/"
          className="link hover:text-sky-700"
        >
          <FaLinkedinIn />
        </Link>
        {/* Github */}
        <Link
          href="https://github.com/marziyemonshizadeh/"
          className="link dark:hover:text-white hover:text-black"
        >
          <FaGithub />
        </Link>
        {/* mail */}
        <Link href="mailto:marziehmonshizade@yahoo.com" className="link">
          <FaEnvelope />
        </Link>
      </motion.section>
      <motion.section
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-3"
      >
        <select
          className="appearance-none p-1 rounded-full"
          aria-label=".form-select-sm"
          onChange={changeLanguage}
          defaultValue="en"
        >
          <option value="en">En</option>
          <option value="fa">fa</option>
        </select>
        <Link href="#">
          <ThemeSwitch />
        </Link>
      </motion.section>
    </nav>
  );
}

export default Navbar;
