const request = require('request');
const { from, Observable, range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
let arr = [1, 2, 3, 4, 5]
let arraySource = from(arr);
//output: 1,2,3,4,5

let subscribe = arraySource.subscribe(val => console.log(val));

setTimeout(() => {
    arr.push(7);
},2000);