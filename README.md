http-proxy-noCrash
==================

This is a small wrapper around https://github.com/nodejitsu/node-http-proxy

This wrapper solves the problem when the endpoint doesn't reply, which causes node to die.

To use this, instead of:
~~
'''var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();'''
~~

write this instead:
'''
var proxy = require('http-proxy-noCrash');
'''


