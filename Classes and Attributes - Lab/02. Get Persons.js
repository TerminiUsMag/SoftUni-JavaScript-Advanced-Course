function solve() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    let arrayOfPeople = [];

    arrayOfPeople.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    arrayOfPeople.push(new Person('SoftUni'));
    arrayOfPeople.push(new Person('Stephan', 'Johnson', 25));
    arrayOfPeople.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return arrayOfPeople;
}

let arra = solve();
console.log();