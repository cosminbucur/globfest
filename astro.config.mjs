// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://cosminbucur.github.io",
  base: "/globfest/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
