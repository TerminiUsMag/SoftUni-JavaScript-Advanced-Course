let cat = {
    name: "May",
    age: 7,
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }
};//Object definiton with name age and sayMyName function which is referencing the object from the context of the function.

let func = cat.sayMyName;//Not working properly since there is no context to the "this." keyword.

let dog = {
    name: 'Ares',
    age: 1,
    sayMyName: func
}//Another Object definition with name, age and the same function which was not working on its own but in this object with property 'name' is working as it should.

let owner = {
    firstName:'Nikolai',
    lastName:'Nachev',
    age:23,
    address :{
        country : "Bulgaria",
        city:"Sofia",
        district: "Somewhere"
    },
    sayMyAddress(){
        console.log(`My address is :\n${this.address.country}, ${this.address.city}, ${this.address.district}`);
    }
};//Composition is Nested objects.

cat.owner = owner;//Adding the owner with the address object to the cat object for even bigger Composition.

cat.sayMyName();
func();
dog.sayMyName();

cat.owner.sayMyAddress();