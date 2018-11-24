const tunnel = require('reverse-tunnel-ssh');
const httpProxy = require('http-proxy');

var portalPort = 8000

tunnel({
  host: '',
  username: '',
  password: '',
  dstHost: '0.0.0.0', // bind to all IPv4 interfaces
  dstPort: 8002,
  //srcHost: '127.0.0.1', // default
  srcPort: 50000 
}, function(error, clientConnection) {
  //
});

var portalProxy =  httpProxy.createProxyServer({target:'http://localhost:'+portalPort}).listen(50000);
portalProxy.on('proxyRes', function(proxyRes, req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
});