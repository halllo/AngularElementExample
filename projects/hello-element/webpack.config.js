const path = require("path");
module.exports = {
  entry: {
    "hello-element.js": [
      path.resolve(__dirname, "../../dist/hello-element/browser/polyfills.js"),
      path.resolve(__dirname, "../../dist/hello-element/browser/styles.css"),
      path.resolve(__dirname, "../../dist/hello-element/browser/main.js"),
    ],
  },
  output: { filename: "[name]", path: path.resolve(__dirname, "../../dist/hello-element/browser") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};