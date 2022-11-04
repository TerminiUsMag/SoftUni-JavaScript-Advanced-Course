function solve() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let base = super
                .toString()
                .slice(0, super.toString().length - 1);
                //.replace('Person', 'Teacher');

            return base + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let base = super.toString().slice(0, super.toString().length - 1);
            base.replace('Person', 'Student');
            return base + `, course: ${this.course})`;
        }
    }
    return { Person, Teacher, Student };
}

let classes = solve();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan", 'ivan@ivan.com', "Graphics");
console.log(t.toString());//('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');