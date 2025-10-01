let name = "Tracey";
console.log(name);

let interestRate = 0.3; // local variable
interestRate = 1;
console.log(interestRate);

//global variable
rate = 6; // global variable
console.log(rate);

//constant
const anotherInterestRate = 0.3;
console.log(anotherInterestRate);

//primitive types

let firstName = "Tracey";
let age = 29;
let isStudent = true;
let lastName = "Onim";
let middleName;
let maidenName = undefined;
let selectedColor = null;

// reference types
//object
let person = {
    name: "Tracey",
    age: 29,
    nationality: "Kenyan",
    gender: "female"
};

let selection = "gender";
console.log(person[selection]);
console.log(person["age"]);
person.name = "Tracey Onim";
person['age'] = 30;
console.log(person.name);
console.log(person);

//array
let selectedColors = ["red", "blue",];
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]);
selectedColors[2] = "green";
console.log(selectedColors);
selectedColors[3] = "purple";
selectedColors[4] = "yellow";
console.log(selectedColors);
console.log(selectedColors.length);

// functions
function greet(firstName, lastName) {
    console.log("Hello " + firstName + " "  + lastName + " " + "its nice to meet you");
}

greet("Tracey", "Onim");
greet("Jane", "Doe");

function square(number) {
  return number * number;
}

console.log(square(2));
