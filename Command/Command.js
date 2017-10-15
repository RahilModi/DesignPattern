/*
*	Command Pattern : Behavioral Design Pattern - an object is used to encapsulate all the information needed to an action on an event. 
*	Four Parts : Command, Receiver, Invoker(MenuItem), client.
*/
//command class ha receiver as a property which stores the message.
class Command{
	constructor(){
		this.theReciever = null;
	}
	//executes the command
	execute(){
		this.theReciever.doAction();
	}

	//saves the reciever
	setReceiver(target){
		this.theReciever = target;
	}
}

class Receiver{
	constructor(Message){
		this.Message = Message;
	}

	//prints the command message
	doAction(){
		console.log(this.Message);
	}
}

//Contains the command as a property
class MenuItem{
	constructor(){
		this.theCommand  = null;
	}

	setCommand(cmd){
		this.theCommand = cmd;
	}

	//invoke the command
	invoke(){
		this.theCommand.execute();
	}
}


//contains the map named as menuItems
class Menu{
	constructor(){
		this.menuItems = new Map();
	}

	addMenuItem(item,key){
		this.menuItems.set(key,item);
	}

	selectMenuItem(key){
		if(this.menuItems.get(key)){
			this.menuItems.get(key).invoke();
		}else{
			console.log("Key not found");
		}
	}
}


class Client{
	constructor(){
		this.helloMessage = "Hello World!";
		this.goodbyeMessage = "Goodbye Message";
		this.appMenu = new Menu();
	}

	getMenu(){
		return this.appMenu;
	}

	runSetup(){
		let hello = new MenuItem();
		let goodbye = new MenuItem() ;
        let sayHello = new Command();
        let sayGoodbye = new Command();

        // set the reciever inside the 
        sayHello.setReceiver(new Receiver(this.helloMessage));
        sayGoodbye.setReceiver(new Receiver(this.goodbyeMessage));

        hello.setCommand(sayHello);
        goodbye.setCommand(sayGoodbye);

        // stores "hello" as key and menuItem hello which has a command named sayHello.
        this.appMenu.addMenuItem(hello, "hello");
        // stores "goodbye" as key and menuItem goodbye which has a command named sayGoodbye.
        this.appMenu.addMenuItem(goodbye, "goodbye");
	}
}

let c = new Client() ;
c.runSetup() ;
let m = c.getMenu() ;
m.selectMenuItem("hello") ;
m.selectMenuItem("goodbye") ;
m.selectMenuItem("n/a") ;