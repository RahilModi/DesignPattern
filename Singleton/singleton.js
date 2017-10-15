/*
*	Singleton Pattern
*/
let Singleton = (function(){
	let instance;

	//returns an instance  of object class.
	let createInstance = ()=>{
		console.log("No Instance has been created...");
		var object = new Object("I am the Instacne");
		return object;
	}

	return{
		getInstance: () =>{
			if(!instance){
				instance = createInstance();
			}
			return instance;
		}
	};
})();

let instance1 = Singleton.getInstance();  
let instance2 = Singleton.getInstance();

if(instance1 === instance2){
	console.log("Both instances are the same");
}