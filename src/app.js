import * as rxjs from 'rxjs';
import 'rxjs/add/operator/take';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import './styles/normalize.css';
import './styles/main.css';

function createSubscribe(name) {
  return {
    next(x) {console.log(name, ': ', x)},
    error(err) {console.log(name, ': ', err)},
    complete() {console.log(name, ': ', 'Completed')},
  }
}

// OF
function of() {
  rxjs.of(5, '9', 4, [1, 2, 4])
    .subscribe(createSubscribe('of'));
}
//of();

// INTERVAL
function interval() {
  rxjs.interval(500)
    .take(15)
    .subscribe(createSubscribe('interval'));
}
//interval();

// TIMER
function timer() {
  rxjs.timer(4000, 500)
    .take(5)
    .subscribe(createSubscribe('timer'));
}
//timer();

// RANGE
function range() {
  rxjs.range(5, 4)
    .subscribe(createSubscribe('range'));
}
//range();

// FROM
const set = new Set([1, 2, 3, '4', '5', {id: 6}]);
const map = new Map([[1, 2], [3, '4'], ['5', {id: 6}]]);

function from() {
  rxjs.from(map)
    .subscribe(createSubscribe('from'));
}
//from();

function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise');
    }, ms)
  })
}

// FROM_PROMISE

const promise$ = rxjs.Observable.fromPromise(delay(4000));

promise$.subscribe((data) => {
//  console.log(data);
});

export {createSubscribe};
