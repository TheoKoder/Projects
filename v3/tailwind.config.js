module.exports = {
  content: [
  // Scans HTML & TypeScript files for Tailwind classes
    "./src/**/*.{html,ts}",  
  ],
  theme: {
    extend: {
      // fontFamily:{
      //   'roborto':["Helvetica Neue", "sans-serif"]
      // },
      // colours:{
      //   "primary-color": "#002b5c",
      //   "secondary-color": "rgb(43, 13, 209)",
      //   "color-title":" black",
      //   "hover-color": "rgb(171, 171, 255)",
      //   "content-color":"lightgray",
      //   "error-color": "red",
      //   "main-color": "#f9f9f9",
      //   "box-shadow-light": "0 4px 8px rgba(19, 18, 18, 0.1)",
      //   "box-shadow-primary":"0 2px 4px rgba(0, 0, 0, 0.1)",
      //     //$secondary-color: blue;
      //   "top-menu-bg":"#002b5c",
      //   "seacrhCard-color":"#f5f5f5",
      //   "second-bar-color": "#6390c3",
      // }
    },
  },
  plugins: [],
}
