/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3fa',
          100: '#d7e2f2',
          200: '#afc5e5',
          300: '#84a4d1',
          400: '#5a7fb5',
          500: '#3d6296',
          600: '#2c4a76',
          700: '#1e3a63',
          800: '#16294a',
          900: '#0f1f3a',
          950: '#081527',
          DEFAULT: '#0f1f3a',
        },
        secondary: {
          50: '#eff6fb',
          100: '#d7ebf6',
          200: '#afd7ed',
          300: '#7ebfe0',
          400: '#4aa1cf',
          500: '#2b84b8',
          600: '#1e6693',
          700: '#1a5277',
          800: '#183f5c',
          900: '#152f45',
          950: '#0e2233',
          DEFAULT: '#1e6693',
        },
        accent: {
          50: '#eefdf3',
          100: '#d3fbe1',
          200: '#a6f7c3',
          300: '#6eed9d',
          400: '#3ddc76',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#22c55e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
