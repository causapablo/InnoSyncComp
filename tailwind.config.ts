import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1130px",
      xl: "1200px",
      "2xl": "1660px",
    },
    colors: {
      white: "#ffffff",
      gray: "#F0F1F5",
      goldenrod: "#daa520",
      honoluluBlue: "#0074b2",
      oxfordBlue: "#001f3f",
      jet: "#333333",
      black : "#000000"
    },
    fontFamily:{
      Dancing : ['Dancing Script', 'cursive'],
      SubTitle : ['Poppins', 'sans-serif'],
      Grotesk : ['Space Grotesk', 'sans-serif'],
      Title  : ['Work Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
