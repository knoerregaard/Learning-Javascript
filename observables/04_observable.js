
const request = require('request');
const { subject, from, Observable, range } = require('rxjs');
const { map, filter, mergeMap  } = require('rxjs/operators');

let arr = [1, 2, 3, 4, 5]


var source = from(arr);
source.subscribe(val => console.log(val));
arr.push(10);
source.next(23)