let cat = {
    name: "May",
    age: 7,
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }
};//Object definiton with name property, age property and sayMyName function which is referencing the name of the object from the context of the function.

let func = cat.sayMyName;//Not working properly since there is no context to the "this." keyword.

let dog = {
    name: 'Ares',
    age: 1,
    sayMyName: func
}//Another Object definition with name, age and the same function which was not working on its own but in this object with property 'name' is working as it should.

let owner = {
    firstName:'Nikolai',//property.
    lastName:'Nachev',//property.
    age:23,//property.
    address :{//object property.
        country : "Bulgaria",//property of the object in the object.
        city:"Sofia",//property of the object in the object.
        district: "Somewhere"//property of the object in the object.
    },
    sayMyAddress(){
        console.log(`My address is :\n${this.address.country}, ${this.address.city}, ${this.address.district}`);
    }
};//Composition is Nested objects.

cat.owner = owner;//Adding the owner with the address object to the cat object for even bigger Composition.

cat.sayMyName();//Calling the first function which is in the cat object.
func();//Calling the same function but if it was not in the cat object.
dog.sayMyName();//Calling the same func but after setting it the dog object to reference it with the keyword 'this.'.

cat.owner.sayMyAddress();//Calling the function of the owner of the cat which is referencing the object withing the owner object of the cat.