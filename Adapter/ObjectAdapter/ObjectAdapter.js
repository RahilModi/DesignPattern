/*
* 	It is often used to make existing classes work with other Interface without modifying source code. Example US plug works with European socket with the help of Adapter.
*	Adaptee class 
*/
class Adaptee{
	constructor(){}

	printMessage(msg){
		console.log("Inside Adaptee's printMessage Method");
		console.log(msg)
	}
}

/*
*	TargetObject class 
*/
class Adapter{
	constructor(){
		this.adaptee = new Adaptee();
	}

	sayHello(msg){
		console.log("Inside Adapter's sayHello Method");
		this.adaptee.printMessage(msg);
	}

}

/*
*	Client Class
*/
class ClientTest{
	constructor(){}

	runTest(){
		this.adapter = new Adapter();
		this.adapter.sayHello("Hello....");
	}
}

let client = new ClientTest();
console.log("Using Object Adapter: ")
client.runTest();

