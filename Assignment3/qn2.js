{
	const http = require('http');
	const server = http.createServer();
	const fs = require('fs');
	
	
	const read = fs.readFileSync('Kedesh67.jpg',function(err){	if(err) throw err;
						console.log('Done');
					}
				);
	//This will not work since the file is read async so 
	//the server will send response before finishing reading the file.
	const read1 = fs.readFile('Kedesh67.jpg',function(err){	if(err) throw err;
						console.log('Done');
					}
				);
	
 	server.on('request', function(req,res){
			res.writeHead(200,{'Content-type':'image/jpg'});
			res.end(read, 'binary');
	});
	 
	
	/* const readable = fs.createReadStream( 'Kedesh67.jpg');
	server.on('request', function(req,res){
			res.writeHead(200,{'Content-type':'image/jpg'});
			readable.on("data", function(data) {
				res.write(data);
			})

			readable.on("end", function() {
				res.end();
			})
	});*/
	server.listen(4000); 

}