function startjs(){ 
 'use strict'
 
 
	const btn = document.getElementById("calculate");


	
	

	
	
	class BMICalculator{
			
		/* constructor( height, width) {
			this.height = height;
			this.weight = weight;
		} */
		
		isNumber(x){
			
			var reg = new RegExp("(^[0-9]+$)");
			
			console.log(reg.test(x));
			
			return reg.test(x);
		};
		
		BMI(){
			/* let height = document.getElementsByName("height")[0].value;
			
			let weight = document.getElementsByName("weight")[0].value; */
			
			let weightV = weight * 0.45;
			
			let heightV = height * 0.025;
			
			let heightSqr = heightV * heightV;
			
			const val = weightV/heightSqr;
			
			return val;
		};
			
		BmiCalculator(){
			
			let height = document.getElementsByName("height")[0].value;
			
			let weight = document.getElementsByName("weight")[0].value;
			
			console.log(weight);
			
			console.log(height);
			
			//i get issue that isNumberis not a function
			const isheight = this.isNumber(height);
			const isweight = this.isNumber(weight);
			
			if (!isheight||	!isweight){
			
				document.getElementById("output").innerHTML = "Enter valid numerical input for both fields";

			}else{
				
				document.getElementById("output").innerHTML = " ";
				
				const bmi = BMI(height,weight);
				
				if(bmi <= 25 && bmi >= 19){
				
					document.getElementById("output").innerHTML = "Your BMI is "+bmi+" you are Healthy ";

				}else{
					
					document.getElementById("output").innerHTML = "Your BMI is "+bmi+" you are not Healthy watchOut!! ";
				
				}	
			}
		};
		
		
	}
	const temp = new BMICalculator();

	btn.onclick=temp.BmiCalculator;
}
window.onload=startjs;