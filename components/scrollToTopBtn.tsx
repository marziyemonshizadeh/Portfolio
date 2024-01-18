import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { redirect } from "react-router-dom";

type Props = {};

const ScrollToTopBtn = (props: Props) => {
  return (
    <>
      <Link
        href="#hero"
        onClick={() => redirect("#")}
        id="btn-back-to-top"
        className="rounded-full absolute bottom-0 right-0 m-6 flex items-center flex-col text-light justify-center border-0 shadow bg-pink-500 text-slate-200 w-14 h-14 z-50"
      >
        <FaArrowUp className="shadow-sm" />
      </Link>
    </>
  );
};

export default ScrollToTopBtn;
