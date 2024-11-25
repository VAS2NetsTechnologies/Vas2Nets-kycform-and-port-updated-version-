/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poet: ["Poetsen One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        coverImg: "url('assets/admin/img/coverImg.jpg')",
        covering: "url('assets/form/images/Bg-cover.jpg')",
        onboarding:
          "url('assets/vecteezy_red-and-white-business-background-blank-modern-background_11114117.jpg')",
        loginBg: "url('assets/bgtwo.jpg')",
      },
    },
  },
  plugins: [],
};
