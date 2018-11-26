import * as rxjs from 'rxjs';

import {createSubscribe} from '../app';

const combinationOperators = {
  operators: {
    merge: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.combination-operators__holder'),
      runDemo() {
        /*
        * @Note
        * 1 - 1 способ
        *  s1$.merge(s2$).subscribe(createSubscribe('merge'));
        * */

        /*
        * @Note
        * 2 - й способ
        * rxjs.merge(s1$, s2$).subscribe(createSubscribe('merge'));
        * */

        const s1$ = rxjs.interval(1000).map(x => 'Stream 1: ' + x);
        const s2$ = rxjs.interval(500).map(x => 'Stream 2: ' + x);

        rxjs
          .merge(s1$, s2$)
          .take(12)
          .subscribe(
            createSubscribe('merge')
          );
      },
    },
    mergeAll: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.combination-operators__holder'),
      runDemo() {
        rxjs.range(1, 3)
          .map(x => rxjs.range(1, 3))
          .mergeAll()
          .subscribe(
            createSubscribe('mergeAll')
          );
      }
    },
    /*
    * @Note
    * Отличие от merge в том, что concat сохраняет последовательность. Merge собирает как прийдется, асинхронно.
    * */
    concat: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.combination-operators__holder'),
      runDemo() {
        const s1$ = rxjs.from([1, 2, 3]);
        const s2$ = rxjs.from([4, 5, 6]);

        rxjs.concat(s1$, s2$)
          .subscribe(
            createSubscribe('concat')
          );
      }

    },
    concatAll: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.combination-operators__holder'),
      runDemo() {
        rxjs.range(1, 3)
          .map(x => rxjs.range(x, 3))
          .concatAll()
          .subscribe(
            createSubscribe('concatAll')
          );
      }
    },
    zip: {
      htmlControlElem: 'button',
      htmlContainer: document.querySelector('.combination-operators__holder'),
      runDemo() {
        const data = {
          firstEl: 'Hello',
          secondEl: 'World'

        };
        const s1$ = rxjs.of(data.firstEl);
        const s2$ = rxjs.of(...[data.secondEl]);

        rxjs.zip(s1$, s2$)
          .subscribe((x) => {
            console.log(x);
//            createSubscribe('zip');
          });

      }
    },
  }
};

function foo(x, y, z) {
//  console.log(arguments);
}

let arr = [1, 2, 3, 5];

foo(...arr);

export {combinationOperators};