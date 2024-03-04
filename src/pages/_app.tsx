import "@/styles/globals.css";
import { ColorSchemeContext } from "@/utils/context";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState("");

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: any) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    handleChange(mediaQueryList);
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  console.log("colorScheme", colorScheme);

  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <Component {...pageProps} />
    </ColorSchemeContext.Provider>
  );
}
