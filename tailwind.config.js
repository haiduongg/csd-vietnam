/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1440px',
      },
    },

    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      colors: {
        black: {
          none: '#fff',
          50: '#f6f6f6',
          100: '#f2f2f2', //hover light
          200: '#e7e7e7',
          300: '#c4c4c4',
          400: '#a6a6a6',
          500: '#7c7c7c',
          600: '#686868',
          700: '#494949',
          800: '#272727', //hover dark
          900: '#0F0F0F',
          full: '#000',
        },
        dark: '#0F0F0F',
        text: '#1B1464',
        textContrast: '#f3f0e3',
        primary: {
          50: '#fef8e3',
          100: '#fcedb7',
          200: '#fbe18a',
          300: '#fad65d',
          400: '#facc3f',
          500: '#f9c331',
          600: '#f8b62b',
          700: '#f7a427',
          800: '#f69424',
          900: '#f4781f',
        },
        secondary: {
          50: '#e7e7f2',
          100: '#c2c4e0',
          200: '#9a9ecb',
          300: '#7478b7',
          400: '#585ca8',
          500: '#3d409a',
          600: '#383990',
          700: '#2f2f85',
          800: '#282679',
          900: '#1b1464',
        },
        warning: '#edb95e',
        error: '#e23636',
        success: '#82dd55',
        hover: { dark: '#272727', light: '#f2f2f2' },
      },
      fontSize: {
        h1: '2.875rem',
        h2: '2.25rem',
        h3: '1.4375rem',
        h4: '1rem',
        h5: '0.83rem',
        h6: '0.67rem',
      },
    },
  },
  plugins: [],
};
