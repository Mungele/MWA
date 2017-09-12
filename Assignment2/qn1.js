{
	const sample = [1,2,3,4,5,6,7,8];
	
	Array.prototype.even = function (){
		const result = this.filter(x => x % 2 === 0);
		console.log(result);
	}
	
	Array.prototype.odd = function (){
		const result1 = this.filter(x => x % 2 !== 0);
		console.log(result1);
	}
	
	 
	sample.even();
	sample.odd();
}