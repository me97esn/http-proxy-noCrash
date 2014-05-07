var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();
require('colors');

proxy.on('error', function(e) {
  console.log('An error occurred while proxying'.redBG, e.message)
});

module.exports = {
    web: function (req, res, options, callback) {
        proxy.web(req, res, options);

        if (callback) {
            proxy.on('proxyRes', callback);
        }
    }
}