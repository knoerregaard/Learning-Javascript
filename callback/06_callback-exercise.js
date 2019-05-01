/*
 * Subject: Callback pattern
 * Explore the callback pattern
 * 
 * 1. define two functions
 *    a) a function that can sum two numbers together, but 
 *       wrapped up in a setTimeout() to simulate a two second delay
 *    b) a function that calls the first functions and writes 
 *       the sum when ready.
 * 2. test your work
 */

function sum(a, b){
    return a+b;
}
console.log(sum(3,2));