/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Agora você pode usar classes como 'bg-primary' ou 'text-accent'
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        muted: "var(--muted)",
        textColor: "var(--text)", // 'text' é palavra reservada, melhor usar textColor
      },
    },
  },
  plugins: [],
};
