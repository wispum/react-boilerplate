const CleanWebPackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: {
		main: './src/index.js',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve('./dist'),
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: ['node_modules'],
				loader: 'eslint-loader',
				include: path.resolve('./src'),
				options: {
					fix: true,
				}
			},
			{
				test: /\.js$/,
				exclude: ['node_modules'],
				use: [{loader: 'babel-loader'}],
			},
			{
				test: /\.s(a|c)ss$/,
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader',
				},{
					loader: 'sass-loader'
				}],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'index.html'
		}),
		new CleanWebPackPlugin(['dist'])
	]
}