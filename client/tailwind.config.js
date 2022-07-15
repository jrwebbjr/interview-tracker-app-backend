module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      owd: ['omnium-wide', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      dosis: ['Dosis', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ]
}