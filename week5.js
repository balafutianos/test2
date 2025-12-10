
// Broken Console Message

console.log("Hello JavaScript");

console.log("Starting...");

// Invalid Variable Names
let name1 = "Alex";
let user_name = "alex_123";
let best_score = 100;

console.log(name1, user_name, best_score);

// Missing Variable Declaration Keywords
const city = "Thessaloniki";

// Uninitialized Variables
console.log(city);

let mystery

mystery = "Solved";

console.log(mystery);


// Prompt and Alert Mixup
let guyName = prompt("Enter your name:");
alert("Hello, " + guyName);

// String Quotes Error

let phrase = " It's a nice day to learn Javascript! "
console.log(phrase);

// Wrong Type Check

let input = prompt("Give me something");


// Broken Calculator

let first = Number(prompt("First number: "))
let second = Number(prompt("Second Number : "))

let sum = first + second

// Even or Odd Mistake
alert("Sum is " +sum)

let number = Number(prompt("Give a number:"));

if (number / 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


// Age Verification Bug
let age = prompt("Your age:");

if (age >= 0 && age < 18) {
  console.log("You are not an adult");
} 
else if (age >= 18) {
  console.log("You are an adult");
}
else {
  console.log("Invalid");
}






// Logical Operator Mist
let age2 = Number(prompt("Age:"));

let isTeen = age2 >= 13 && age2 <= 19;

console.log("Teen:", isTeen);

// Length Property Error
let fullName = prompt("Full name:");
console.log("Length:", fullName.lenght);

// Character Access Problems
let word = prompt("Word:");

let firstt = word[1];
let third = word[2];
let last = word[word.length-1];

console.log(firstt, third, last);

// Escape Sequence Bug
let message = "Hello\nWorld";
console.log(message);

// += Misuse
let message1 = "Today is ";
let message2 = "a sunny day";
message1 += message2;
console.log(message1);

// Decimal Math Issue
let x = 2.5;
let y = 1.2;

let result = x * y;
console.log("Result:", result);