module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'cs-white': '#ffffff',
      'cs-red': 'rgb(255, 59, 48)',
      'cs-yellow': 'rgb(255, 204, 0)',
      'cs-green': 'rgb(52, 199, 89)',
      'cs-blue': 'rgb(10, 122, 255)',
      'cs-gray': 'rgb(229, 229, 234)',
      'cs-gray-02': 'rgb(199, 199, 204)',
      'cs-gray-03': 'rgb(174, 174, 178)',
      'cs-gray-04': 'rgb(242, 242, 247)',
      'cs-dark-gray': 'rgb(44, 44, 46)',
      'cs-dark-red': '#d63229',
      'cs-dark-green': '#31b552',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
