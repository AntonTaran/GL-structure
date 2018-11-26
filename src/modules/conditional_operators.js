import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';

const conditionalOperators = {
  operators: {
    /*
     * interval
     * Emit given value if nothing is emitted before completion.
    * */
    defaultIfEmpty: {
      htmlControlElem: 'button',
      controlElemId: 'default-if-empty-btn',
      htmlContainer: document.querySelector('.conditional-operators__holder'),
      operator: 'defaultIfEmpty',
      runDemo() {
        rxjs.fromEvent(document.getElementById(this.controlElemId), 'click')
          .takeUntil(rxjs.interval(500))
          .defaultIfEmpty('no clicks')
          .subscribe(createSubscribe('defaultIfEmpty'));
      },
    },

    every: {
      htmlControlElem: 'button',
      controlElemId: 'default-if-empty-btn',
      htmlContainer: document.querySelector('.conditional-operators__holder'),
      operator: 'every',
      runDemo() {
        rxjs.from([1, 2, 3, 4])
          .every((x) => x < 5)
          .subscribe(createSubscribe('every'));
      },
    },

/*    sequenceEqual: {

    }*/
  }
};

export {conditionalOperators};