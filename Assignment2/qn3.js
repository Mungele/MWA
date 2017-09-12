{
	function slow(callback){
		for (let i=0; i<= 1e9; i++ ){}
		console.log("am out");
		if (Math.random() > 0.5) {
			return callback ('Error', null)
		}
		return callback(null, {id:12345})
	}
	
	function slow1(callback){
		setTimeout(() => {console.log('Am done')},5000);
		if (Math.random() > 0.5) {
			
			return process.nextTick(function(){callback ('Error', null)})
		}
		
		return process.nextTick(function(){callback (null, {id:12345})})
		
	}
	
	function slow2(callback){
		for (let i=0; i<= 1e9; i++ ){}
		console.log("am out");
		process.nextTick(function(){
			if (Math.random() > 0.5) {
				return callback ('Error', null)
			}
			return callback(null, {id:12345})
		})
	}
	
	/* function exec (fn) {
		var status = 'Default';
		var done = function(fn)
		{this.status =fn();	}
		var error = function(fn)
		{this.status =fn();	}
	} */
	
 	function exec(fn){
		const stats = fn(callback);
		
		
		return{
			done: function (a)
		{
			console.log("In done "+ stats);
			if(this.stats === 'done'){
				console.log("In fail ");
			a(stats);
			}
			return this;
		},
			fail: function (b)
		{
			console.log("In fail ");
			if(this.stats === 'error'){
				console.log("In fail ");
			b(stats);
			}
			return this;			
		} 
		}
		
	} 
	
		
	function callback(a,b){
		if(a){
			console.log("There is an " + a);
			return 'error';
		}else{
			console.log("There is an id " + b.id);
			return 'done';
		}
	}
	
	
	
	exec(slow).done(function(data){console.log(data);})
	.fail(function(err){console.log("Error: " + err);});
}