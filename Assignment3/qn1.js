{
	var dns = require('dns');
	var mum = dns.resolve4('www.mum.edu',function(err,addresses,family){console.log(addresses);})
}