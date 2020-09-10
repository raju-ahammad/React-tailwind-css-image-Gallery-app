// npm i -D tailwindcss postcss-cli autoprefixer
// "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
//"watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"

const tailwindcss = require("tailwindcss")

module.exports = {
    plugins: [
      // ...
      tailwindcss("./tailwind.js"),
      require('autoprefixer'),
      // ...
    ]
  }