module.exports = {
  purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          spacing: {
            "row": "calc(100% + 2rem)",
          },
          colors:{
            bggray:"#222326",
            bggrayinput:"#333333",
          },
        },
    },
    variants: {
        extend: {
            filter: ['hover', 'focus'],
            brightness: ['hover', 'focus'],
        },
    },
    plugins: [],
}
