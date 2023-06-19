/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'munnar': "url('./component/images/42201179.jpg')",
        'fortkochi': "url('./component/images/Ramada-Resort-By-Wyndham-Kochi-Facilities.jpg')",
        'alappuzha': "url('./component/images/Overview.jpg')",
        'kovalam': "url('./component/images/226314283.jpg')",
        'kumarakam': "url('./component/images/Overview.jpg')",

        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
