# JavaScript Debugging Exercises

Fix the code in each exercise so that it works as described.

---

### 1. Broken Console Message

Goal: Print `Hello JavaScript` in the console.

```js
consol.log("Hello JavaScript);
```

---

### 2. Comment Chaos

Goal: Keep the comment and print `Starting...` in the console.

```js
/* This is a comment
console.log("Starting...");
*/
console.log("Starting...");
```

---

### 3. Invalid Variable Names

Goal: Fix the variable names and print them.

```js
let 1name = "Alex";
let user-name = "alex_123";
let best score = 100;

console.log(1name, user-name, best score);
```

---

### 4. Const Problem

Goal: Store your city in a variable that should not change and print it.

```js
const city;
city = "Thessaloniki";
console.log(city);
```

---

### 5. Uninitialized Confusion

Goal: Create a variable without a value, then give it a value and print it.

```js
let mystery = ;
mystery = "Solved";
console.log(mystery);
```

---

### 6. Prompt and Alert Mixup

Goal: Ask the user for their name and then alert `Hello, <name>`.

```js
let name = prompt;
alert("Hello, " + Name);
```

---

### 7. String Quotes Error

Goal: Fix the string so it prints correctly.

```js
let phrase = 'It's a nice day to learn "JavaScript"!';
console.log(phrase);
```

---

### 8. Wrong Type Check

Goal: Ask for any input and print its value and type.

```js
let input = prompt("Give me something);
console.log("Value: " + input);
console.log("Type: " + typeOf input);
```

---

### 9. Broken Calculator

Goal: Ask for two numbers and print their sum.

```js
let first = prompt("First number:");
let second = prompt("Second number:");

let sum = first + second;
console.log("Sum is: " + sum);
```

---

### 10. Even or Odd Mistake

Goal: Check if a number is even or odd and print the correct message.

```js
let number = Number(prompt("Give a number:"));

if (number / 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

---

### 11. Age Comparison Bug

Goal: Ask for age and print if the user is 18 or older.

```js
let age = prompt("Your age:");

if (age >= 18) {
  console.log("You are an adult");
} 
if (age < 18) {
  console.log("You are not an adult");
}
else {
  console.log("Invalid");
}
```

---

### 12. Strict vs Loose Confusion

Goal: Compare a number and a string correctly and print the results.

```js
let a = 10;
let b = "10";

console.log(a === b);
console.log(a = b);
```

---

### 13. Logical Operator Mist

Goal: Print whether the age is between 13 and 19 (teen).

```js
let age = Number(prompt("Age:"));

let isTeen = age >= 13 && <= 19;

console.log("Teen:", isTeen);
```

---

### 14. Length Property Error

Goal: Print the length of the name.

```js
let fullName = prompt("Full name:");
console.log("Length:", fullName.lenght);
```

---

### 15. Character Access Problems

Goal: Print the first, third, and last character of the word.

```js
let word = prompt("Word:");

let first = word(0);
let third = word[3];
let last = word[word.length];

console.log(first, third, last);
```

---

### 16. Escape Sequence Bug

Goal: Fix the string so it prints on two lines:
First line: `Hello`
Second line: `World`

```js
let message = "Hello\nWorld\";
console.log(message);
```

---

### 17. += Misuse

Goal: Use `+=` to append text and print `Today is a sunny day`.

```js
let message = "Today is ";
message =+ "a sunny day";
console.log(message);
```

---

### 18. Decimal Math Issue

Goal: Multiply two decimal numbers and print the result.

```js
let x = 2.5;
let y = 1.2;

let result = x y;
console.log("Result:", result);
```

---

### 19. Boolean Logic Check

Goal: Print true if the user is under 18 or over 65.

```js
let age = Number(prompt("Age:"));

let result = age < 18 && age > 65;
console.log(result);
```

---

### 20. Simple Profile Formatting

Goal: Print the info in three lines:
`Name: ...`
`Age: ...`
`Hobby: ...`

```js
let name = prompt("Name:");
let age = prompt("Age:");
let hobby = prompt("Hobby:");

let profile = "Name: " + name + "\n" + "Age: " + age + "\n" + "Hobby: " hobby;
console.log(profile);
```
