/*
 * Subject : Promises
 * Dependency : request
 * 
 * How to we use a promise when calling a service over the network?
 * 
 */
console.log("Start of application");

const request = require('request');
const url = "https://api.darksky.net/forecast/4a6add7dfa5e5f659dba1a1523fe1022/56.565500,9.021940";

// Callback example (from earlier)
// request.get(url, (err, result)=>{
//     console.log(JSON.parse(result.body).currently);
// })

console.log("End of application");

//Promise based example
let myPromise = new Promise((resolve, reject)=>{
    let result = request.get(url);
    resolve(result);
    reject("No data available");
})

myPromise
    .then((result=>{
        console.log(result)
    }))
    .catch((rejection)=>{
        console.log(rejection)
    })