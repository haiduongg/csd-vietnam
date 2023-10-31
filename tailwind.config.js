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
        xl: '1240px',
      },
    },

    extend: {
      colors: {
        dark: '#0F0F0F',
        text: '#1B1464',
        textContrast: '#f3f0e3',
        primary: '#F4781F',
        secondary: '#E3E6E8',
        accent: '#8A738C',
        tertiary: '#45a549',
        additional: '#dc0000',
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
