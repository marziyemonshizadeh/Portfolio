import Providers from "@/components/provider";
import "@/styles/globals.css";
// import { useTheme } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
// import { BreakpointProvider } from "react-socks";

export default function App({ Component, pageProps }: AppProps) {
  // const { resolvedTheme } = useTheme();
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return (
    // <BreakpointProvider>
    //   <div
    //     className={`${resolvedTheme === "dark" ? "dark" : ""}`}
    //     suppressHydrationWarning={true}
    //   >
    <Providers>
      <Component {...pageProps} />
    </Providers>
    //   </div>
    // </BreakpointProvider>
  );
}
