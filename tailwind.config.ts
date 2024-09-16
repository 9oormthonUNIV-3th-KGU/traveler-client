import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)'],
      },
      colors: {
        gray: {
          50: '#F5F6F8', // background_elevated
          100: '#EDEFF2',
          200: '#DFE1E6',
          300: '#D4D7DE',
          400: '#B4B8C5',
          500: '#A0A3B4',
          600: '#8A8BA1',
          700: '#77798B',
          800: '#616272', // text_secondary
          900: '#52535D',
          950: '#303136', // text_primary
        },
        primary: {
          100: '#ECE7FF',
          200: '#DAD2FF',
          300: '#BFAEFF',
          400: '#A080FF',
          500: '#824DFF', // main_primary
          600: '#7B34FE',
          700: '#6517EA',
          800: '#5513C4',
          900: '#4812A0',
        },
        red: {
          100: '#FFF5F6',
          200: '#FFCAD3',
          300: '#FF4D6C',
        },
        blue: {
          100: '#EEF7FF',
          200: '#CAE8FF',
          300: '#067DFD',
        },
      },
    },
  },
  plugins: [],
}
export default config
