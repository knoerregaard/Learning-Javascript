/*
 * Subject: Callback pattern
 * We will start by looking at a non asyncronous example
 * 
 * All of the below functions are pushed and poped to the call stack in a
 * synchronous matter. 
 */

console.log("Start of program");

let x,y = 2;

console.log(x+y);

console.log("End of program");