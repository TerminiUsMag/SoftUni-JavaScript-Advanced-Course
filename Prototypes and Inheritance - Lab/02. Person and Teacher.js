//Write a class Person and a class Teacher which extends Person. 
//•	The Person class should have a name and an email
//•	The Teacher class should have a name, an email, and a subject

function solve() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }
    return { Person, Teacher };
}

let classes = solve();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('Pesho', 'email','Maths');

console.log(t.name);