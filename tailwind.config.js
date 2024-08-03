/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#1abc9c',
      },
    },
  },
  plugins: [
    forms({
      strategy: 'base', // only generate global styles
      strategy2: 'class', // only generate classes
    }),
  ],
}

