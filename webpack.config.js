const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//const pug = require('pug');
//const PugPlugin = require('pug-plugin');

module.exports = {
   mode: 'development',
   //entry: './src/index.ts',
   entry:["./src/styles/style.scss", "./src/index.ts"],
   devtool: 'inline-source-map',
   performance: {
      hints: false,
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000
   },

   devServer: {
      port: 9001,
      compress: true,
      hot: true,
      static: {
         directory: path.join(__dirname, 'dist')
      }
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg)$/i,
            type: 'asset/resource'
         },
         {
            test: /\.html$/,
            use: ["html-loader"],
         },
         {
            test: /\.json$/,
            loader: 'json-loader'
         },
         {
           // test: /\.pug$/,
           // use: 'pug-html-loader',
            
          //  loader: PugPlugin.loader,
            //loader: 'pug-loader',
         //  options: {
           //   pretty: true
          //  }
         },

      ],
   },





   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   output: {
      filename: 'script.js',
      path: path.resolve(__dirname, 'dist'),
   },
   plugins: [
      new htmlWebpackPlugin({
         title: 'Books',
         template: './src/index.html'

      }),

     // new PugPlugin(),

      new CopyWebpackPlugin({
         patterns: [
            { from: 'src/assets/jpg', to: 'jpg' },
            { from: 'src/assets//png', to: 'png' },
           // { from: 'src/svg', to: 'svg' },
           // { from: 'src/css', to: 'css' },
         ]
      })
   ]

};