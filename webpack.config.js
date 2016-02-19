module.exports = {
  entry: "./modules/js/entry.js",
  output : {
    path: __dirname,
    filename: "./build/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?minimize&optimizationLevel=5&progressive=true' }
    ]
  }
}