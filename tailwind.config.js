/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: 'class', // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
  },
  variants: {},
  daisyui: {
    darkTheme: true,
    themes: [
      {
        dark: {
          primary: '#abfcd0',
          secondary: '#f492b0',
          accent: '#28fcee',
          neutral: '#1E1A28',
          'base-100': '#45484A',
          info: '#315FDD',
          success: '#82E3B7',
          warning: '#A77F11',
          error: '#E4585B',
        },
        light: {
          primary: '#abfcd0',
          secondary: '#f492b0',
          accent: '#28fcee',
          neutral: '#1E1A28',
          'base-100': '#45484A',
          info: '#315FDD',
          success: '#82E3B7',
          warning: '#A77F11',
          error: '#E4585B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
