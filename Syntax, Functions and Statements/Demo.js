let number = 10;
console.log(number);

number = "Ivan";
console.log(number);

number = true;
console.log(number);

number = [1, 2, 3, "Ivan", true];
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);

let cat = {
    name: "May",
    age: 3,
    gender: "Female",
}
console.log(cat.name);
console.log(cat.age);
console.log(cat.gender);

number = 9;
if (number < 10) {
    console.log("The number is less than 10");
};

function sayMyName(name = 'default', age = 18) {
    console.log(`My name is ${name}! And I am ${age} years old!`);
    return "Returned by 'sayMyName' function";
}
sayMyName("Nikolai", 23);
sayMyName("Gosho");

let result = sayMyName();
console.log(result);

let sumFunc = function (x, y) {
    return x + y;
}

console.log(`This is the sum of 3 and 7 calculated by the variable - function "sumFunc" = ${sumFunc(3, 7)}`);

cat.meow = function () {
    console.log("Meoww!!!");
}

cat.meow();

