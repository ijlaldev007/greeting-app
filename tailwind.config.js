/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'heading': '25px',
        'subheading': '18px',
        'label': '18px',
        'placeholder': '14px',
        'greeting-item': '16px',
        'button': '22px',
      },
      fontWeight: {
        'heading': '600',
        'subheading': '400',
        'label': '600',
        'placeholder': '400',
        'greeting-item': '600',
        'button': '600',
      },
      colors: {
        'heading': '#272727',
        'subheading': '#595959',
        'label': '#272727',
        'placeholder': '#BEBEBE',
        'greeting-item': '#272727',
        'primary': '#C90082',
        'secondary': '#FFA600',
      },
      lineHeight: {
        tight: '100%',
      },
      letterSpacing: {
        normal: '0%',
      },
    },
  },
  plugins: [],
};
