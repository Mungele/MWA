{
	'use strict'
	const person ={
		 name: 'Default',
		 teach: function (subject){
			 return this.name+ " is now teaching " + subject  ;
		 }
	}
	
	const teacherA = Object.create(person);
	const teacherB = Object.create(person);
	
	teacherA.name = "Asaad";
	
	teacherB.name = "Rakesh";
	
	console.log(teacherA.teach('MWA'));
	
	console.log(teacherB.teach('WAP'));
};