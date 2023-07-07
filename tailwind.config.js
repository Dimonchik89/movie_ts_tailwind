module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "card": "repeat(auto-fit, minmax(150px, 1fr))"
      }
    },
    colors: {
      darkBlue: '#032241',
      white: "#fff",
      lightGreen: "#1ed5a9",
      lightBlue: "#01b4e4",
      olive: "#c0fecf",
      orange: "#d27701",
      lightGray: '#e3e3e3'
    },
    screens: {
      "sm": "700px",
      "md": "900px",
      "lg": "1040px",
      "xl": "1240px",
      "2xl": "1300px",
    },
    container: {
      padding: {
        sm: '20px',
        lg: '20px',
        xl: '20px',
        '2xl': '30px',
      },
    },
  },
  plugins: [],
}

