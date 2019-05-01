/*
 * Subject: Promise 
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * A promise is a proxy for a value not necessarily known when 
 * the promise is created.
 * The promise takes and executor as argument. The Executor is a function
 * that is passed with the arguments resolve and reject. 
 * The executor either calls the resolve or reject function.
 * 
 * different states of a promise
 * - Pending
 * - fulfilled
 * - rejected
 */
var handleStuff = (numb) => new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(1+1 == numb){
            resolve("Its perfekt")
        }else{
            reject("It is not whats expected")
        }
    }, 2000);
});

handleStuff(2)
    .then(function (value) {
        console.log(value)
    })
    .then(
        console.log("in between")
    )
    .catch((reason)=>
        console.log(reason)
    );