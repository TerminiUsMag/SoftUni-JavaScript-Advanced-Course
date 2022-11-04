let animal = {
    name: "Sharo",
    age: 7,
    alive: true
}

let cat = Object.create(animal);

cat.canMeow = true;
cat.name = 'Mey';
cat.age = 8;
cat.gender = 'female';

let dog = Object.create(animal);

dog.canMeow = false;
dog.canBark = true;
dog.name = 'Rex';
dog.age = 10;
dog.alive = true;

let arr = [cat, dog];

for (let entry of arr) {
    if (!entry.canMeow) {
        console.log("It's a dog!");
    }
    else
        console.log("It's a cat");
}


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

let myPerson = new Person("Nikolai", 'Nachev');

console.log(myPerson.fullName());

class Alien {

    constructor(name, planet) {
        this.name = name;
        this.planet = planet;
    }

    speak = function () {
        console.log('##$@^@*#^&&%&*($!)@$))(*(!*@)!@(*$*&G^^&BD&^&*!@Y&^G&^*HS*S(IY^');
    }

}

class AlienSoldier extends Alien{
    constructor(name, planet, rank){
        super(name,planet);
        this.rank = rank;
    }

    fire = ()=>{
        console.log('PEW PEW PEW PEW PEW PEW');
    }
}


let myAlien = new Alien('zicks','Gamora');
let mySoldierAlien = new AlienSoldier('killem','Gamora','Captain');

myAlien.speak();
mySoldierAlien.speak();
//myAlien.fire();
mySoldierAlien.fire();