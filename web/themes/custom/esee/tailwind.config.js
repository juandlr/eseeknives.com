/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './js/**/*.js',
  ],
  safelist: [
    'bg-pigeonGray',
    'text-lightOlive',
    'text-center',
    'py-10',
    'px-5',
    'text-2xl',
    'block',
    'text-darkOlive',
    'group-hover:text-oliveGreen',
    'font-medium',
    'font-open-sans',
    'uppercase',
    'mt-5',
    'bg-darkOlive',
    'mb-4',
    'text-white',
    'no-underline',
    'py-3',
    'px-8',
    'tracking-wider'
  ],
  theme: {
    extend: {
      colors: {
        mossyGreen: '#828473',
        forestGreen: '#3a7641',
        oliveGreen: '#575e4e',
        fernGreen: '#434827',
        darkOlive: '#404835',
        lightOlive: '#718c4c',
        snowGray: '#fdfdfd',
        cloudGray: '#eeede8',
        pigeonGray: '#dedcd3',
        silverGray: '#bdbdbd',
        ashGray: '#64615d',
        slateGray: '#252525',
        ivory: '#e5e5df',

        gray: {
          '100': '#fdfdfd',  // snowGray
          '300': '#eeede8',  // cloudGray
          '500': '#dedcd3',  // pigeonGray
          '700': '#bdbdbd',  // gray
          '800': '#64615d',  // ashGray
          '900': '#252525',  // slateGray
        },
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
