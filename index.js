var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
require('colors');

module.exports = {
	web: function(req, res, options) {
		proxy.web(req, res, options, function(error){
			console.log('An error occurred while proxying: '.redBG, error.message);
			res.status(500);
			res.end(error.message);
		});
	}
}