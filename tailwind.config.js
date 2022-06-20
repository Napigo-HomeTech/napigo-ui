/** @type {import('tailwindcss').Config} */

const moduleColors = {
  primary: '#037C66',
  'primary-focus': '#03705C',
  'primary-content': '#FDFDFD',
  secondary: '#002B3D',
  'secondary-focus': '#042533',
  'secondary-content': '#FDFDFD',
  accent: '#E09F6D',
  'accent-focus': '#D49463',
  'accent-content': '#FDFDFD',
  info: '#99D2E6',
  'info-focus': '#88C5DB',
  'info-content': '#002B3D',
  warning: '#FBBD23',
  'warning-focus': '#E9B229',
  'warning-content': '#382800',
  success: '#78E8B4',
  'success-focus': '#6BDAA6',
  'success-content': '#003320',
  error: '#F87272',
  'error-focus': '#EB6666',
  'error-content': '#470000',
};
const darkBaseColors = {
  'modal-backdrop': 'rgba(0, 0, 0, 0.6)',
  'base-100': '#000000',
  'base-200': '#191A1C',
  'base-300': '#222326',
  'base-content-100': '#FDFDFD',
  'base-content-200': 'rgba(253, 253, 253, 0.6)',
  'base-content-300': 'rgba(253, 253, 253, 0.4)',
  'base-content-400': 'rgba(253, 253, 253, 0.2)',
};
const lightBaseColors = {
  'modal-backdrop': 'rgba(0, 0, 0, 0.6)',
  'base-100': '#FDFDFD',
  'base-200': '#191A1C',
  'base-300': '#222326',
  'base-content-100': '#FDFDFD',
  'base-content-200': 'rgba(253, 253, 253, 0.6)',
  'base-content-300': 'rgba(253, 253, 253, 0.4)',
  'base-content-400': 'rgba(253, 253, 253, 0.2)',
};

const commonVariables = {
  '--btn-text-case': 'uppercase',
  '--rounded-btn': '0.25rem',
};
module.exports = {
  //   mode: 'jit',
  //   purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: 'class', // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],

  themes: {
    extends: {},
  },

  daisyui: {
    themes: [
      {
        light: {
          ...moduleColors,
          ...lightBaseColors,
          ...commonVariables,
        },
        dark: {
          ...moduleColors,
          ...darkBaseColors,
          ...commonVariables,
        },
      },
    ],
    darkTheme: true,
  },
};
