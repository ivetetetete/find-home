/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Values
        background: "#ffffff",
        foreground: "oklch(0.145 0 0)",
        card: {
          DEFAULT: "#ffffff",
          foreground: "oklch(0.145 0 0)",
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.145 0 0)",
        },
        primary: {
          DEFAULT: "#1833A8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E8EEF9",
          foreground: "#1833A8",
        },
        muted: {
          DEFAULT: "#F5F7FB",
          foreground: "#5C6B8A",
        },
        accent: {
          DEFAULT: "#3D5FCE",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#d4183d",
          foreground: "#ffffff",
        },
        border: "rgba(24, 51, 168, 0.1)",
        input: {
          DEFAULT: "transparent",
          background: "#f3f3f5",
        },
        switch: {
          background: "#cbced4",
        },
        ring: "#1833A8",
        chart: {
          1: "oklch(0.646 0.222 41.116)",
          2: "oklch(0.6 0.118 184.704)",
          3: "oklch(0.398 0.07 227.392)",
          4: "oklch(0.828 0.189 84.429)",
          5: "oklch(0.769 0.188 70.08)",
        },
        sidebar: {
          DEFAULT: "oklch(0.985 0 0)",
          foreground: "oklch(0.145 0 0)",
          primary: "#030213",
          "primary-foreground": "oklch(0.985 0 0)",
          accent: "oklch(0.97 0 0)",
          "accent-foreground": "oklch(0.205 0 0)",
          border: "oklch(0.922 0 0)",
          ring: "oklch(0.708 0 0)",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        md: "calc(0.625rem - 2px)",
        sm: "calc(0.625rem - 4px)",
      },
    },
  },
  plugins: [],
}