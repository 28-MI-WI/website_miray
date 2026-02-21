/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'site': '1100px',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'], // Global
        condensed: ['"Roboto Condensed"', 'sans-serif'], // For Nav
      },
      spacing: {
        'nav': '80px',
        'section-gap': 'calc((100dvh - 80px) / 23)',
      },
      height: {
        'nav': '80px', // Explicitly add this here too
        'hero': 'calc(100dvh - 80px)',
        'about': 'auto', // Erlaubt das Mitwachsen auf Mobile
        'md-about': 'calc((100dvh - 80px) / 2)', // Nur auf Desktop fest
      },
      minHeight: {
      'about': 'calc((100dvh - 80px) / 2)',
      },
    },
  },
  plugins: [],
}
