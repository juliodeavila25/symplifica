// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      spacing:{
        '100': '30rem',
        '110': '45rem',
        '120':'59rem',

      },
      colors: {
        rose: colors.rose,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        violet: colors.violet,
        indigo: colors.indigo,
        blue: colors.blue,
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        green: colors.green,
        lime: colors.lime,
        yellow: colors.yellow,
        amber: colors.amber,
        orange: colors.orange,
        red: colors.red,
        'warm-gray': colors.warmGray,
        'true-gray': colors.trueGray,
        gray: colors.gray,
        'cool-gray': colors.coolGray,
        'blue-gray': colors.blueGray,
        default: colors.gray, // Custom
        sy: {
          '100': '#1BEAE4',
          '200': '#7CFCF4',
          '300': '#424C5A',
          '400': '#566273'
        },
        success:{
          "100": '#13B954'
        },
        escala:{
            orange:'#F34F37',
            blue:'#e6f2f8',
            black:'#140c28',
            bluet:'#34768a',
            dark:'#322C2E',
            gray:'#ADA4A4'
        },
        sy_shadow:{
          '100':'#566477'
        },
        symplifica: {
          'blue-100': '#EBF8FF',
          'blue-150': '#D7FFFC',
          'blue-200': '#BEE3F8',
          'blue-300': '#7CFCF4',
          'blue-350': '#ACFCF4',
          'blue-400': '#1BEAE4',
          'blue-500': '#4299E1',
          'blue-600': '#3182CE',
          'blue-700': '#2B6CB0',
          'blue-800': '#2C5282',
          'blue-900': '#2A4365',
          'gray-50': '#F7F7F7',
          'gray-100': '#E5E5E5',
          'gray-150': '#BACCDD',
          'gray-200': '#E8E8E8',
          'gray-250': '#DADADA',
          'gray-300': '#B8B9BC',
          'gray-350':'#94A3AF',
          'gray-400': '#AEAEAE',
          'gray-600': '#6B757E',
          'gray-700': '#424C5A',
          'gray-800': '#565656',
          'gray-900': '#333A41',
          'gray-950':'#D9D9D9',
          'turquoise-100': '#048780',
          'turquoise-200': '#006D67',
          'turquoise-300': '#00544E',
          'turquoise-400': '#003C37',
          'turquoise-500': '#002622',
          'green-300': '#32a753',
          'green-400': '#13b954',
          'yellow-400': '#F9BB00',
          'yellow-500': '#F9A600',
          'red-500': '#E74133',
          'pink-100': '#FFD6D6',
          'yellow-100': '#FFFDD6',
          'orange-200': '#FFA24D',
          'red-200':'#FF4D4D',
          
        },
        
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      } 
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      inner: 'inset 0px -9px 4px -3px rgba(0, 0, 0, 0.25)',
      leftInner:'inset -6px 0px 4px -2px rgba(0, 0, 0, 0.25)'
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'hover', 'focus'],
      opacity: ['disabled'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      cursor: [
        "disabled"
    ]
    }
  },
}