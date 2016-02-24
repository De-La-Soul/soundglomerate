var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
      'bootstrap-loader',
      './client'
  ],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  resolve: {
      modulesDirectories: ['node_modules', 'client'],
      extension: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015']} },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'autoprefixer?browsers=last 3 versions', 'sass?outputStyle=expanded'] },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
    ]
  }
};
