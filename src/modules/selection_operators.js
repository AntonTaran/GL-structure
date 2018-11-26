import * as rxjs from 'rxjs';
import { first, last, find, take, findIndex, skip } from 'rxjs/Rx';

import {createSubscribe} from '../app';

const selectionOperators = {
  operators: {
    skipWhile: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.selection-operators__holder'),
      runDemo() {
        rxjs.interval(500)
          .skipWhile(x => {
            return x < 5
          })
          .takeWhile(x => x < 13)
          .subscribe(createSubscribe('skipWhile'));
      },
    }
  }
};

export {selectionOperators};