const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],
	output:	{
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		contetBase: __dirname + '/dist'
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	 module: {
	 	rules: [{
	 		test: /\.m?js$/,
	 		exclude: /node_modules/,
	 		use: {
	 			loader: "babel-loader",
	 			options: {
	 				presets: ['@babel/preset-env']
	 			}
	 		}
	 	}]
	 },
	 resolve: {
		 extensions: ['.js']
	 }
}
