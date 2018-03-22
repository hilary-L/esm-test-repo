require = require('esm')(module, {
	cjs: {
		namedExports: true,
		cache: true,
		extensions: true,
		interop: false,
		paths: true,
		topLevelReturn: true,
		vars: true
	},
	warnings: true,
	debug: true
});

require("@babel/polyfill")

require('@babel/register')({
	babelrc: false,
	presets: [
		['@babel/preset-env', {loose: true, modules: false}],
		['@babel/preset-react'],
		['@babel/preset-stage-3']
	]
});

module.exports = require('./index.mjs').default
