{

	const Rx = require('@reactivex/rxjs');
	const os = require('os');
	
	let checkSystem = new Promise((resolve, reject)=>{
			if(os.totalmem/1e9 < 2){
				reject('This app needs at least 2GB of RAM' + os.totalmem);
			}
			else if(os.cpus().length < 2){
				reject('Processor is not supported');
			}else{
				resolve('System is checked successfully');
			}
		});		
		
	Rx.Observable.fromPromise(checkSystem)
			.subscribe((e)=> console.log(e));
	console.log("Checking System");
}