import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';
import {deepFreeze} from '../helpers/immutable';

rxjs.interval(500)
  .bufferTime(2000)
  .take(4)
  .subscribe(
//    createSubscribe('bufferTime')
  );

let arr = [
  {name: 'one'},
  {name: 'two'},
  {name: 'three'},
  {name: 'four'},
  ];

rxjs.range(0, 40)
  .bufferCount(5)
  .subscribe(
//    createSubscribe('bufferCount')
  );

rxjs.interval(1000)
  .buffer(rxjs.fromEvent(document, 'click'))
  .map(x => x.length)
  .subscribe(
//    createSubscribe('Количество секунд между кликами')
  );

