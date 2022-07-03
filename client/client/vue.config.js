const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
	transpileDependencies: false,
	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin()
		],
		resolve: {
			fallback: {
				"fs": 'empty'
			}
		},
		node: false,
		target: 'node'
	}
})
