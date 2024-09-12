import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    // usePolling: true, // causes cpu overhead but needed while working in docker in windows
    server: {
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel({
            input: ["resources/sass/app.scss", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
});
