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
    },
    screens: {
      xmo: { min: "100px", max: "500px" },
      lg: { min: "90rem" },
      mo: { max: "900px" },
      md: [{ min: "900px", max: "1280px" }],
    },
    width: {
      container: "75rem",
      full: "100%",
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
export default config;
