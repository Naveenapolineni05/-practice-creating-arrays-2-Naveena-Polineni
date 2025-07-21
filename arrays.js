//Task 1: Initialize the Array
// Create an array with a size of seven and fill it with "Hello"
let greetings = new Array(7).fill("Hello");

console.log("Task 1 Result:");
console.log(greetings); // Output: ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

//Task 2: Update the Array
// Fill part of the array with "Hi" from index 2 to 4 (not including index 5)
greetings.fill("Hi", 2, 5);

console.log("Task 2 Result:");
console.log(greetings); 
// Output: ["Hello", "Hello", "Hi", "Hi", "Hi", "Hello", "Hello"]

 //Task 3: Populate the Array with a for Loop
 // Create a new array of size 5
let numbers = new Array(5);

// Use a for loop to populate index * 10
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i * 10;
}

console.log("Task 3 Result:");
console.log(numbers); 
// Output: [0, 10, 20, 30, 40]

