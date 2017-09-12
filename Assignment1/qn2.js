{ 
'use strict'
	
	var library = [
	{ prof:'Asaad Saad',course:'WAP', courseID:'CS452'},
	{ prof:'Rakesh Shrestha',course:'WAA', courseID:'CS545'},
	{ prof:'Steve Nolle',course:'SWE', courseID:'CS425'}
	];
	
	// To sort using stream you must have a collection.
	const result = library.map(obj => obj.course).sort().map(obj => library.find(item => item.course === obj));
	//const result1 = library.
	console.log(result);
	
};