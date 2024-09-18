const path = require('path');

module.exports = {
  entry: './src/index.js', // O index.js no diretório src/app
  output: {
    filename: 'main.js', // O bundle final será main.js
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolver arquivos .ts e .js
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplicar o ts-loader para arquivos TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Servir a partir da pasta dist
    },
    compress: true,
    port: 4444,
    hot: true, // Habilitar Hot Module Replacement
    headers: {
      'Access-Control-Allow-Origin': '*', // Permitir CORS
    },
  },
  mode: 'development',
};
