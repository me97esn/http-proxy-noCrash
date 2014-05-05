var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
require('colors');

module.exports = {
    web: function (req, res, options, callback) {
        proxy.web(req, res, options);

        if (callback) {
            proxy.on('proxyRes', callback);
        }
    }
}