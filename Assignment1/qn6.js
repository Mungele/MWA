{

	const forbidden = ['house','nice','exam','quiz','today','letter','results','hard'];
	const  sampleString = "The quiz today was not that hard but the results were more interesting";
	
	var filterfun = function (Words) {
		const stringArray = this.split(' ');
		const result = stringArray.map(obj => replace(obj, Words)).join(' ');
		console.log(result);
		
	}
	function replace (obj, Words ){
		const result =Words.find(word => obj === word );
		if(result){
			return "***";
		}else{
			return obj;
		}
	}
	String.prototype.filter= filterfun;
	sampleString.filter(forbidden);
};