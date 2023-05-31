/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      finn: '#643a71',
      amethyst: '#8b5fbf',
      french_mauve: '#d183c9',
      rose_pompadour: '#e3879e',
      pink: '#fec0ce',
      white: 'rgba(255, 255, 255, 0.8)',
      night: '#0d160b',
    },
    extend: {},
  },
  plugins: [],
}
