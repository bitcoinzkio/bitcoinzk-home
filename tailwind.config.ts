import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ns: "Nunito Sans",
        ms: "Montserrat",
        le: "Lexend",
        hn: "Helvetica Neue",
      },
      screens: {
        lg: { min: "90rem" },
        mo: { max: "900px" },
        md: [{ min: "900px", max: "1280px" }],
        xmd: [{ min: "1280px", max: "1750px" }],
        bmd: [{ min: "900px", max: "950px" }],
      },
      width: {
        container: "1280px",
        TContainer: "56.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
