import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';

const creationObservables = {
  operators: {
    from: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.creation-observables__holder'),
      operator: 'from',
      runDemo() {
        rxjs.from([1, 2, 3, 4])
          .subscribe(createSubscribe('from'));
      },
    },

    /*
     * interval
     * Creates an Observable that emits sequential numbers every specified interval of time.
    * */
    interval: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.creation-observables__holder'),
      operator: 'interval',
      runDemo() {
        rxjs.interval(1000)
        /*
         * take
         * Emits only the first count values emitted by the source Observable.
        * */
          .take(4)
          .subscribe(createSubscribe('interval'));
      },
    },

    /*
     * of
     * Converts the arguments to an observable sequence.
    * */
    of: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.creation-observables__holder'),
      operator: 'of',
      runDemo() {
        rxjs.of(1, 2, 3 ,4)
          .subscribe(createSubscribe('of'));
      },
    },

    /*
     * timer
     * Creates an Observable that starts emitting after an dueTime and emits ever
     * increasing numbers after each period of time thereafter.
    * */
    timer: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.creation-observables__holder'),
      runDemo() {
        rxjs.timer(1000, 500)
          .take(4)
          .subscribe(createSubscribe('timer'));
      },
    },
  }
};

export {creationObservables};