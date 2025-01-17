/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;
console.log(a);
// this is undefined because it's null , ( contains no value )

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);
// this function return undefined after run because there is no return statement in the function.

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

// this function also does not have a return statement in it , thats why it return undefined

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);

// this array contains only elements for the indecies 0,1,2 , but the value of the index 3 is not yet defined, null. that's why it returns undefined.
