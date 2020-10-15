const path = require('path')
const HTMLplugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	plugins: [
		new HTMLplugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.js']
	}
}