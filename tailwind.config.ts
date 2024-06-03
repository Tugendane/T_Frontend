import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                hero: "url('/hero.svg')",
                steve: "url('/person/steve.jpeg')",
                ineza: "url('/person/ineza.jpeg')",
                kenzy: "url('/person/kenzy.jpeg')",
                natasha: "url('/person/natasha.jpeg')",
                kitty: "url('/person/kitty.jpeg')",
            },
            colors: {
                primary: "#f5f5f5",
                "deep-blue": "#0E273A",
                "dark-blue": "#0E273A",
                "back-default": "#F8F8F8",
            },
            fontFamily: {
                poppins: "Poppins",
            },
            rotate: { "10": "10deg" },
        },
    },
    plugins: [nextui()],
};
export default config;
