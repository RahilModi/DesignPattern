//Example of class Adapter
/*
*	AdapteeParent class 
*/
class AdapteeParent{
	constructor() {}
	
	printMessage(msg){
		console.log(msg);
	}
}
/*
*	Adapter class
*/
class Adapter extends AdapteeParent{

	constructor(){super()}

	sayHello(msg){
		super.printMessage(msg);
	}
}
/*
*	Client Class
*/
class Client{

	constructor(){}

	runtest(){
		let a = new Adapter();
		a.sayHello("hello...");
	}
}

let c = new Client();
console.log("Using Class Adapter: ")
c.runtest();