import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex md:justify-around justify-between items-start md:p-3 p-2 sticky top-0 z-50">
      <motion.section
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row gap-2"
      >
        <Link
          href="https:/t.me/Marzieh_monshizadeh"
          className="link hover:text-cyan-500"
        >
          <FaTelegramPlane />
        </Link>
        <Link
          href="https://www.instagram.com/marzieh___monshizadeh/"
          className="link hover:text-pink-500"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marzieh-monshizadeh-175a061a0/"
          className="link hover:text-sky-700"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/marziyemonshizadeh/"
          className="link hover:text-white"
        >
          <FaGithub />
        </Link>
      </motion.section>
      <motion.section
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-3"
      >
        <Link href="#connectMe" className="link hidden md:inline-flex">
          Get In Touch
        </Link>
        <Link href="#connectMe" className="link">
          <FaEnvelope />
        </Link>
      </motion.section>
    </nav>
  );
}

export default Navbar;
