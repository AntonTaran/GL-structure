import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';


const filterOperators = {
  operators: {
    distinct: {
      htmlControlElem: 'input',
      controlElemId: 'debounce-input',
      htmlContainer: document.querySelector('.filter-operators__holder'),
      runDemo() {
        if (document.getElementById(this.controlElemId)) {

          rxjs.fromEvent(document.getElementById(this.controlElemId), 'keyup')
            .map(e => e.target.value)
            .distinct() // предотвращает срабатывание на передвижение курсора
            .debounceTime(500)
            .subscribe(createSubscribe('debounceTime'));
        } else {
          console.log('input is not defined');
        }
      },
    },
    distinctUntilChanged: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.filter-operators__holder'),
      runDemo() {
        rxjs.from([1, 2, 3, 4, 4, 4, 2, 5]) // [1, 2, 3, 4, 2, 5]
          .distinctUntilChanged() // выводит только уникальне значения (не повторяющиеся подряд)
          .subscribe(createSubscribe('distinctUntilChanged'));
      },
    },
  }
};

export {filterOperators};