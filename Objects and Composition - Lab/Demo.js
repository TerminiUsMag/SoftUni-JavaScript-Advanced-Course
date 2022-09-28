let cat = {
    name: "May",
    age: 7,
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }
};

let func = cat.sayMyName;//Not working properly since there is no context to the "this." keyword.

let dog = {
    name: 'Ares',
    age: 1,
    sayMyName: func
}

cat.sayMyName();
func();
dog.sayMyName();