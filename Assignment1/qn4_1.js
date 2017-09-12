function startjs(){ 
 'use strict'
 
 
	const btn = document.getElementById("calculate");

	//const temp = new BMICalculator();

	btn.onclick= BmiCalculator;
	
	
	function isNumber(x){
			
			var reg = new RegExp("(^[0-9]+$)");
			
			console.log(reg.test(x));
			
			return reg.test(x);
		};
	
	function BmiCalculator(){
			
			let height = document.getElementsByName("height")[0].value;
			
			let weight = document.getElementsByName("weight")[0].value;
			
			console.log(weight);
			
			console.log(height);
			
			//i get issue that isNumberis not a function
			const isheight = isNumber(height);
			const isweight = isNumber(weight);
			
			if (!isheight||	!isweight){
			
				document.getElementById("output").innerHTML = "Enter valid numerical input for both fields";

			}else{
				
				document.getElementById("output").innerHTML = " ";
				
				const temp = new BMICalculator(height,weight);
				
				const bmi = temp.BMI();
				
				
				if(bmi <= 25 && bmi >= 19){
				
					document.getElementById("output").innerHTML = "Your BMI is "+bmi+" you are Healthy ";

				}else{
					
					document.getElementById("output").innerHTML = "Your BMI is "+bmi+" you are not Healthy watchOut!! ";
				
				}	
			}
		};
	class BMICalculator{
			
		constructor( height, weight) {
			this.height = height;
			this.weight = weight;
		} 
		
				
		BMI(){
			/* let height = document.getElementsByName("height")[0].value;
			
			let weight = document.getElementsByName("weight")[0].value; */
			
			let weightV = this.weight * 0.45;
			
			let heightV = this.height * 0.025;
			
			let heightSqr = heightV * heightV;
			
			const val = weightV/heightSqr;
			
			return val;
		};
			
		
		
		
	}
	
}
window.onload=startjs;