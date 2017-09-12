{
	const Emitter = require('events');
	const clock = new Emitter();
	//clock.on('tick',function(){console.log('tick')});

	//setInterval(()=>{clock.emit ('tick')},1000);
	
	 class Clock extends Emitter{
		 constructor(){
			 super();
			 this.tick ='tick';
			 //this.on(this.tick,function(){console.log(this.tick)});
			 //setInterval(()=>{this.emit (this.tick)},1000);
		 }
		 start(){
			 setInterval(()=>{this.emit (this.tick)},1000);
		 }
	 }

	 const test = new Clock();
	 test.on('tick',function(){console.log('woo hoo')})
	 test.start();
}