require('babel-register')({
	presets: ['es2015']
});
//require('css-modules-require-hook/preset');

var env = process.env.NODE_ENV || 'prod';
require('./serverProd.js');
