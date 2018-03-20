require = require('@std/esm')(module, {
	cjs: true
});

require("@babel/polyfill");

require('@babel/register')({
	babelrc: false,
	presets: [
		['@babel/preset-env', {loose: true, modules: false}],
		['@babel/preset-react'],
		['@babel/preset-stage-3']
	]
});

module.exports = require('./index.mjs').default
