{
	const http = require('http');
	const server = http.createServer();
	const fs = require('fs');
	const process = require('process');
	
	
	
	
	process.on('message', (msg) => {
		const read = fs.readFile(msg,'utf-8',function(err,data){	if(err) throw err;
						console.log('Done');
						process.send(data);
					}
				);
		//process.send(msg + ' Done');
	});
	
}