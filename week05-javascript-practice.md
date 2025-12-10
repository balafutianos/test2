# Level 1 - Foundation Exercises

### 1. Console Message

Print a short message in the console.

### 2. Comments

Write one single-line comment and one multi-line comment at the top of your file.

### 3. Basic Variables

Create a variable for your first name, a variable for your age, and a boolean variable that shows if you like pizza. Print them.

### 4. Uninitialized Variable

Create a variable without a value. Later in the file, assign it a value and print it.

### 5. Data Type Check

Ask the user for any text using `prompt()`. Print the value and print its data type using `typeof`.

### 6. Fix the Names

Rewrite these variable names so they are valid:

```
let 2name;
let user-name;
let best score;
```

### 7. Case Sensitivity Test

Create a variable named `myCity`. Assign a value. Try printing `mycity`.

### 8. Favorite Animal

Ask the user: “What is your favorite animal?” Show an alert saying:
`I like <animal> too!`

### 9. Fun Fact

Ask the user for their birth year. Print a message in the console using that value.

### 10. Pocket Calculator

Ask the user for two numbers. Print their sum, difference, product, and quotient.
Use `Number()` to convert the inputs.

### 11. Step Counter

Start with `let steps = 0`. Increase it three times and decrease it once. Print the final value.

### 12. Even or Odd

Ask the user for a number. Determine if it is even or odd using `%`. Show the result in the console and in an alert.

### 13. Age Comparison

Ask the user for their age. Check and print:

* if age is 18 or older
* if age is less than 13

### 14. Teen or Senior

Using the same age value, check and print:

* if age is between 13 and 19
* if age is under 5 or over 70

### 15. Three Strings

Create one string using single quotes, one using double quotes, and one using backticks. Print them.

### 16. Escape Characters

Fix this string so it works correctly:

```
let quote = 'He said "JavaScript is fun!"';
```

### 17. Greeting Message

Ask the user for their name. Create a message by joining strings, then print or alert it.

### 18. Name Length

Ask the user for their full name. Print how many characters it has.

### 19. Character Access

Using the same name, print the first character, the third character, and the last character.

---

# Level 2 - Practice & Deeper Understanding

### 1. Temperature Conversion

Ask the user for a temperature in Celsius. Convert it to Fahrenheit and print the result.

### 2. Circle Area

Ask the user for a radius. Calculate and print the area of a circle using `3.14 * r * r`.

### 3. Simple Interest

Ask the user for principal, rate, and time. Calculate the simple interest using `(principal * rate * time) / 100` and print it.

### 4. Average of Scores

Ask the user for five test scores. Calculate and print the average.

### 5. Price After Discount

Ask for a product’s price.
If price > 100, apply a 20% discount.
Else if price > 50, apply a 10% discount.
Otherwise, no discount.
Print the final price.

### 6. Bus Distribution

Ask the user for:

* total number of students
* capacity of each bus
  Calculate how many full buses are needed and how many students are left.

### 7. Strict vs Loose Comparison

Create two variables: a number like `10` and a string like `"10"`.
Print the results of `==` and `===`.

### 8. Logical Check

Ask the user for their age. Print the results of:

* age >= 18 && age <= 30
* age < 18 || age > 65
* !(age === 20)

### 9. Build a Sentence

Create three variables: a name, a hobby, and a city.
Join them into a sentence using `+`.

### 10. Append Text

Start with `let message = "Today is";`
Append `" a great day"` using `+=` and print the result.

### 11. Multiline String

Create a multiline string with `\n` so it prints in three separate lines.

### 12. Index Practice

Create any string.
Print its second character, its fifth character, and its last character.

### 13. Replace a String

Create a string. Change its value by reassigning the variable, then print both the old and new values.

### 14. Counter with += and -=

Start with `let total = 0;`
Increase it by 5, then by 3, then decrease it by 2.
Print the final value.

### 15. Decimal Operations

Create two decimal numbers and print their product and division result.

### 16. Username Generator

Ask for a first name and last name.
Create a username from the first 2 letters of the first name and the last 3 letters of the last name.

### 17. Word Analyzer

Ask the user for a word.
Print the length, the first character, and the last character.

### 18. Parity Check in One Line

Ask for a number.
Print “even” if `number % 2 === 0`, otherwise print “odd”, using a single `console.log()`.

### 19. Small Calculator

Ask for two numbers and an operator (`+`, `-`, `*`, `/`).
Perform the correct calculation and print the result.

### 20. Info Card

Ask the user for their name, age, and hobby.
Print them in this format using `\n`:

```
Name: …
Age: …
Hobby: …
```

---

# Level 3 - Challenge Exercises

### 1. Smart Greeter

Ask the user for their name.
If the name has more than 8 characters, print `That’s a long name!`
Otherwise print `Nice name!`

### 2. Password Check

Ask the user for a password.
If length < 6 print `Too short`.
If length ≥ 6 and contains `!` print `Strong password`.
Otherwise print `Weak password`.

### 3. Temperature Judge

Ask the user for a temperature in Celsius.
Print whether it is below 0, between 0 and 30, or above 30.

### 4. Number Analyzer

Ask for a number.
Print whether it is even or odd, and whether it is positive, negative, or zero.

### 5. Random Facts

Ask the user for three pieces of information.
Combine them into one long sentence.

### 6. Advanced Calculator

Ask for two numbers and an operator (`+`, `-`, `*`, `/`, `%`, `**`).
Perform the operation and print the result.

### 7. Teen Range

Ask the user for an age.
Print whether the age is between 13 and 19.

### 8. Multiple Checks

Ask for a number.
Print if it is divisible by 2, divisible by 5, or divisible by both.

### 9. Compare Two Words

Ask for two words.
Print which one is longer and whether they start with the same character.

### 10. Character Explorer

Ask for a word.
If the length is odd, print the middle character.
If even, print the two middle characters.

### 11. Score Summary

Ask for five scores.
Print the average.
Print whether the average is above 70.

### 12. ID Generator

Ask for first name and last name.
Create an ID made from the first 3 letters of the first name, the length of the last name, and the last letter of the first name.

### 13. Simple Logic Tester

Create three boolean variables.
Print the results of:

* all three true
* at least one true
* exactly one true

### 14. Word Breakdown

Ask for a word.
Print each character on a new line using `\n`.

### 15. Greeting Selector

Ask the user if they prefer “formal” or “casual”.
If formal print `Good evening.`
If casual print `Hey there!`
Otherwise print `Hello.`

### 16. Type Switch

Ask for any input.
Print whether it can be converted to a valid number using `Number()`.
If it can, print the value doubled.

### 17. Budget Check

Ask for a budget and a product price.
Print whether the user can afford it.
If yes, print the remaining money.

### 18. Simple Report

Ask for a name, birth year, and favorite color.
Print a formatted report using `\n`.

### 19. Logical Puzzle

Ask for age.
Print the result of:
`(age > 10 && age < 20) || age === 30`

### 20. Word Shape

Ask for a word.
Print a new string made from the first letter, the last letter, and the length of the word.