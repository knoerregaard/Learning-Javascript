/*
 * Subject : Observables
 * Source  :  http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
 * Dependency : rxjs
 * 
 * 'range' is and Observable. On Observables you can subscribe. 
 */

const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
range(1, 200).pipe(
  filter(x => x % 2 === 1),     //filter is reducing
  map(x => x + x)               //map i adding
).subscribe(x => console.log(x));
