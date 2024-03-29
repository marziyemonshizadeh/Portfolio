import Providers from "@/components/provider";
import "@/styles/globals.css";
import { useTheme } from "next-themes";
import type { AppProps } from "next/app";
import { BreakpointProvider } from "react-socks";

export default function App({ Component, pageProps }: AppProps) {
  const { resolvedTheme } = useTheme();
  return (
    <BreakpointProvider>
      <div
        className={`${resolvedTheme === "dark" ? "dark" : ""}`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </div>
    </BreakpointProvider>
  );
}
