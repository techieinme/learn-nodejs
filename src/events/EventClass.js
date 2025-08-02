const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor(name){
    super();

    this._name = name
  }

  get name(){
    return this._name;
  }

}


const personObject = new Person("Lakshmi");

personObject.on("name",()=>{
  console.log(personObject.name)
})

personObject.emit("name")
personObject.emit("name")