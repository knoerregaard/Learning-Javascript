/*
 * Subject: Callback pattern
 * An event is only asynchronous if the event is send to the nodejs api
 * The callback is passed as an argument.
 * The slow function executes the callback at the end of the procedure 
 * with data as a result.
 */

let question = "What is your name";

MySlowNamer(question, (name) => {
    console.log(name);
});

function MySlowNamer(question, callback) {
    setTimeout(() => {
        //This setTimeout simulates a network call
        callback("Klaus");
    }, 2000);

    callback("We are waiting for the result")
}
