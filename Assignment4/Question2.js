{

	const os = require('os');
	
	var checkSystem= function(){
		return new Promise((resolve, reject)=>{
			if(os.totalmem/1e9 < 2){
				reject('This app needs at least 2GB of RAM' + os.totalmem);
			}
			else if(os.cpus().length < 2){
				reject('Processor is not supported');
			}else{
				resolve('System is checked successfully');
			}
		});		
	}		

	checkSystem()
		.then(function(result){ console.log(result);})
		.catch(function(error){ console.log(error);});
	console.log("Checking System");
	
	

}