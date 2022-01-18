const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");

module.exports = (env) => {
	dotenv.config();

	return {
		// Entry point
		entry: path.join(__dirname, "src", "index.js"),
		mode: env.development ? "development" : "production",
		target: "web",

		//Output directory
		output: {
			path: path.resolve(__dirname, "build"),
		},

		// Some tweaks
		performance: {
			hints: false
		},

		// Declare rules
		module: {
			rules: [
				// Here how to manage *.js and *.jsx files
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"]
						}
					}
				},
				// Here how to manage styles files
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{ loader: "style-loader" },
						{ loader: "css-loader" },
						{ loader: "sass-loader" }
					]
				},
				// Here how to manage simple files
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{ loader: "file-loader" }
					]
				}
			],
		},

		// Which files to resolve without implicit declaration
		resolve: {
			extensions: ["", ".js", ".jsx"],
		},

		// Declare plugins
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, "public", "index.html"),
			}),
			new webpack.DefinePlugin({
				"process.env": JSON.stringify(dotenv.config().parsed),
			}),
			new CopyWebpackPlugin([
				{ from: "public/cover.jpg" },
				{ from: "public/manifest.json" },
				{ from: "public/robots.txt" },
				{ from: "public/singer-text.png" },
				{ from: "public/singer.png" }
			])
		],

		// Setup development server
		devServer: {
			static: path.join(__dirname, "public"),
			compress: true,
			port: 3000,
			hot: true,
		},
	};
};
