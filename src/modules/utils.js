import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';

rxjs.of()
  .defaultIfEmpty('I am empty stream') // утилита задает дефолтное значение, если стрм из пустого значения
  .subscribe(
//    createSubscribe('of')
  );

// every
rxjs.from([1, 2, 3, 4])
  .every(x => x % 2 === 0) // false
  .subscribe(
//    createSubscribe('every')
  );

// do
function doOperator() {
  rxjs.from([1, 2, 3, 4])
  .do(x => console.log('Before:', x)) // [1, 2, 3, 4]
  .map(x => x * x)
  .do(x => console.log('After:', x)) // [1, 4, 9, 16]
  .subscribe(
    createSubscribe('do')
  );
}

//doOperator();

//delay
function delayOperator() {
  rxjs.from([1, 2, 3, 4])
    .map(x => x * x)
    .delay(2000)
    .subscribe(
    createSubscribe('delay')
    );
}
//delayOperator();

//let
function letOperator() {
  rxjs.range(1, 3)
    .map(x => x + 1)
    .let(observer => observer.map(x => x * x))
    .subscribe(
      createSubscribe('let')
    );
}
//letOperator();

