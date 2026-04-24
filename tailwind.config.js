module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFCA08',
          teal: '#00715D',
          dark: '#091F1B',
          gray: '#f7f7f7',
          text: '#666666',
        },
        t10: {
          rose:    '#e8547a',
          roseDark:'#c0392b',
          purple:  '#9b59b6',
          dark:    '#1a1a2e',
          deeper:  '#2d1330',
          deepest: '#4a2050',
          light:   '#fdf4f6',
        },
        t2: {
          light: '#f9f9f9',
          dark: '#121d18',
          darkTeal: '#121d18',
          secondary: '#ffa415',
          gray: '#6c6e76',
          primary: '#007b39',
          border: '#e2e2e2',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        floatBalloon: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-5deg)' },
          '50%':      { transform: 'translateY(-20px) rotate(5deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float:         'float 6s ease-in-out infinite',
        'float-slow':  'float 8s ease-in-out infinite',
        'float-delay': 'float 5s ease-in-out infinite 1.5s',
        balloon:       'floatBalloon 8s ease-in-out infinite',
        marquee:       'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
