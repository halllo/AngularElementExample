const path = require("path");
module.exports = {
  entry: {
    "angular-element-example.js": [
      path.resolve(__dirname, "dist/browser/polyfills.js"),
      path.resolve(__dirname, "dist/browser/styles.css"),
      path.resolve(__dirname, "dist/browser/main.js"),
    ],
  },
  output: { filename: "[name]", path: path.resolve(__dirname, "dist/browser") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};