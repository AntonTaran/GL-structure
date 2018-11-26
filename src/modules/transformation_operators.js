import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';

const transformationOperators = {
  operators: {
    map: {
      htmlControlElem: 'input',
      controlElemId: 'map-input',
      htmlContainer: document.querySelector('.transformation-operators__holder'),
      runDemo() {
        if (document.getElementById(this.controlElemId)) {
          rxjs.fromEvent(document.getElementById(this.controlElemId), 'keyup')
            .pluck('target', 'value')
            .map(x => {
              return x.toUpperCase();
            })
            .subscribe(createSubscribe('map'));
        }
      }
    }
  }
};

export {transformationOperators};