/*
 * Subject: Callback pattern
 * Callback example with http request
 * get request to Darksky.net/api
 * 
 * Depencency: request (https://www.npmjs.com/package/request)
 * 'request' is a simple nodejs wrapper that makes it easy for 
 * you to send 'get' request over the network.
 * When nodejs api has handled the event, it will push the callback
 * to the event queue. Then when the callstack is empty it will 
 * send the callback to the call stack and the callstack will execute th
 * callback.
 */

console.log("Start of application");

// Const setup
const request = require('request');
const url = "https://api.darksky.net/forecast/4a6add7dfa5e5f659dba1a1523fe1022/56.565500,9.021940";

request.get(url, (err, result)=>{
    console.log(JSON.parse(result.body).currently);
})

console.log("End of application");