/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{jsx,js,ts,tsx}",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            boxShadow: {
                t: "0 -2px 4px rgba(110, 110, 110, 0.1)",
            },
        },
    },
    plugins: [],
};
