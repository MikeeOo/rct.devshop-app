/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/preline/dist/*.js"],
    theme: {
        extend: {
            fontFamily: {
                main: ["Noto Sans", "sans-serif"],
                // headings: ["Space Grotesk", "sans-serif"],
                headings: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss", require("@tailwindcss/forms"), require("preline/plugin")],
};
