import Link from "next/link";
import {
  FaBars,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
function Navbar() {
  return (
    <nav className="flex md:justify-around justify-between bg-zinc-800 md:p-3 p-2 sticky top-0 z-50">
      <section className="flex flex-row gap-2">
        <Link href="t.me/Marzieh_monshizadeh" className="link">
          <FaTelegramPlane />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marzieh-monshizadeh-175a061a0/"
          className="link"
        >
          <FaLinkedinIn />
        </Link>
        <Link href="https://github.com/marziyemonshizadeh/" className="link">
          <FaGithub />
        </Link>
      </section>
      <section>
        <Link href="#" className="link hidden md:inline-flex">
          Get In Touch
        </Link>
        <FaBars className="inline-flex md:hidden" />
      </section>
    </nav>
  );
}

export default Navbar;
