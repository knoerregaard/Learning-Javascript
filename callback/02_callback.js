/*
 * Subject: Callback pattern
 * Callback explained with setTimeout()
 * setTimeout() is a node implementation - not a a javascript implementation.
 * setTimeout() is implemented in c++
 * setTimeout() - an event is registered in nodeJS api. 
 * The API will deliver a task to the operation system. When event is complete the callback is begin executed.
 * The callback queue will take the callback.
 * The event loop will wait for the call stack to empty. When empty
 * the function from the callback queue will be added to the call stack.
 * When the callback function is in the call stack it will run.
 */
console.log("Starting app");

setTimeout(() => {
    console.log("2 seconds timer");
}, 2000);

setTimeout(() => {
    console.log("0 senconds timer");
}, 0);

console.log("End");
