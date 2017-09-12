function startjs(){ 
'use strict'
	const items = Array.from(document.querySelectorAll('[data-time]'));
	
	//console.log(items);

	/* for( const item of items){
		console.log(item)
	} */
	
	const convert = function (str){
		
		//str separate by the the : then convert to seconds
		const arrayChar =str.split(':',2);
		
		const min = parseInt(arrayChar[0]);
		
		const sec = parseInt(arrayChar[1]) + (60 * min);
		
		return sec;
	}
	
	//var result = items.filter(obt => obt.getAttribute("data-time")=="5:17");
	const result1 = items.filter(obj => obj.innerHTML=="ECMA6 Video")
	.map(obj => convert(obj.getAttribute("data-time"))).reduce((x,y) => x+y);
	
	console.log(result1);
	
	const result2 = items.filter(obj => obj.innerText.includes("ECMA6"))
	.map(obj => convert(obj.attributes['data-time'].nodeValue)).reduce((x,y)=> x+y);
	
	console.log(result2);
	
}
window.onload=startjs;