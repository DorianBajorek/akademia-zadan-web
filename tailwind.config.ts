import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Aplikacja Next.js 13
    "./components/**/*.{js,ts,jsx,tsx}",  // Komponenty, jeśli masz je w folderze `components`
    "./pages/**/*.{js,ts,jsx,tsx}",  // Jeśli przypadkowo używasz jeszcze folderu `pages`, warto go uwzględnić
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Zmienna CSS dla tła
        foreground: "var(--foreground)",  // Zmienna CSS dla tekstu
      },
    },
  },
  plugins: [],
} satisfies Config;
