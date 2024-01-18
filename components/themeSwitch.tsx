"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

type Props = {};

function ThemeSwitch({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <IoMdSunny className="hover:text-amber-400 text-2xl" />;
  if (resolvedTheme === "dark") {
    return (
      <IoMdSunny
        onClick={() => setTheme("light")}
        className="hover:text-amber-400 text-2xl"
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <IoMdMoon
        onClick={() => setTheme("dark")}
        className="hover:text-black text-2xl"
      />
    );
  }
}

export default ThemeSwitch;
