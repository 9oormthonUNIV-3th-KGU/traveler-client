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
          100: '#D7F4DF',
          200: '#B2E8C3',
          300: '#80D5A0',
          400: '#4CBB7A',
          500: '#289A5B', // main_primary
          600: '#1B804B',
          700: '#15673D',
          800: '#135232',
          900: '#11432B',
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
      boxShadow: {
        'all-sides':
          '0 4px 6px rgba(0, 0, 0, 0.05), 0 -4px 6px rgba(0, 0, 0, 0.05), 4px 0 6px rgba(0, 0, 0, 0.05), -4px 0 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
export default config
