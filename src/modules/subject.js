import * as rxjs from 'rxjs';
import {Subject} from 'rxjs';

const subject  = new Subject();


subject.subscribe({
  some() {
    console.log('aaaa');
  },
  next(value) {
//    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  /*complete() {
    console.log('Complete');
  },*/
});
subject.next(1);
subject.subscribe((x) => {
//  console.log(x);
});

//subject.next(1);


