const request = require('request');
const { Observable, range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
 
Observable.create(function (observer) {
    request('https://api.darksky.net/forecast/4a6add7dfa5e5f659dba1a1523fe1022/56.565500,9.021940', function (error, response, body) {
      if (error) { observer.error(); }
      else { observer.next({response: response, body: body }); }

    })
  })
    .subscribe((res)=>{console.log(res);
  });
