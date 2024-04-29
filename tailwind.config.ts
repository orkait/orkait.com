import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography";


const childrenSupport = ({ addVariant }: {
    addVariant: (name: string, variant: string) => void;
}) => {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
};

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ['light']
    },
    plugins: [tailwindTypography, childrenSupport, daisyui],
};
export default config;
