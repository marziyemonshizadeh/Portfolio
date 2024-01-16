import Providers from "@/components/provider";
import "@/styles/globals.css";
import { useTheme } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { resolvedTheme } = useTheme();
  return (
    <div className={`${resolvedTheme === "dark" ? "dark" : ""}`}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </div>
  );
}
