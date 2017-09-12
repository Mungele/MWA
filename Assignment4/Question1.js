{
	
	const http = require('http');
	const server = http.createServer();
	const {fork} =require('child_process');
	const url = require('url');
	
	server.on('request',(req,res)=>{
		const myurl = url.parse(req.url).query;
		console.log(myurl);
		if(myurl){
			const childProcess = fork('readFile.js');
			childProcess.send(myurl);
			
			childProcess.on('message', read =>{
				res.writeHead(200,{'Content-type':'text/plain'});
				res.end(read);
			});
		}
	});

	server.listen(4000);
	
	}