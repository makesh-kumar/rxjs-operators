import './style.css';

import {
  of,
  map,
  mapTo,
  Observable,
  forkJoin,
  merge,
  interval,
  from,
  fromEvent,
  fromEventPattern,
  range,
  timer,
  iif,
  groupBy,
  concat,
  race,
  combineLatest,
  catchError,
} from 'rxjs';
import {
  buffer,
  bufferCount,
  bufferTime,
  bufferWhen,
  count,
  debounce,
  debounceTime,
  defaultIfEmpty,
  delay,
  every,
  expand,
  find,
  findIndex,
  isEmpty,
  max,
  mergeMap,
  min,
  reduce,
  retry,
  switchMap,
  timeout,
  toArray,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

/** Creation operators
 * ajax, interval, of, from, fromEvent, fromEventPattern, range, throwErrro, timer, iif
 */

// let obs = ajax('https://jsonplaceholder.typicode.com/posts');

// let obs = interval(2000);

// let obs = of(1, 2, 3, 4);

// let obs = from(new Set().add(1));

// let obs = fromEvent(document, 'click');

// let obs = fromEventPattern(foo,removeClickHandler);

// let obs = range(10, 20);

// let obs = timer(1000);

// let obs = iif(() => false, of('True Case'), of('false Case'));

// let obs = throwError(new Error('error occurred'));

// obs.subscribe(
//   (d) => {
//     console.log(d);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/*********************************************** */

/** Mathematical operators
 * count, max, min, reduce,
 */

// let obs = of(2, 3, 4, 5, 6).pipe(
//   count((val) => {
//     return val % 2 === 0; //3
//   })
// );

// let obs = of(2, 3, 4, 5, 6).pipe(max());

// let obs = of(2, 3, 4, 5, 6).pipe(min());

// let obs = of(2, 3, 4, 5, 6).pipe(
//   reduce((a, b) => {
//     return a + b;
//   }, 10)
// );

// obs.subscribe((d) => {
//   console.log(d);
// });

/******************************************************* */

/**Transformation operator
 *
 * buffer, bufferCount, bufferTime, bufferToggle, bufferWhen,
 * expand, groupBy,
 * map, mapTo, switchMap,
 * window
 */

// let a = fromEvent(document, 'click');
// let obs = interval(1000).pipe(buffer(a));

// let obs = interval(1000).pipe(bufferCount(2));

// let obs = interval(1000).pipe(bufferTime(2000));

// let obs = interval(1000).pipe(bufferWhen(()=> {
//   return interval(2000)
// }))

// let obs = of(1, 2, 3, 4).pipe(
//   expand((d) => {
//     return of(d * 2);
//   })
// );

// let obj = [
//   { name: 'makesh', type: 'a' },
//   { name: 'kumar', type: 'b' },
//   { name: 'john', type: 'a' },
// ];
// let obs = from(obj).pipe(
//   groupBy((item) => item.type),
//   map((d) => {
//     return d;
//   })
// );

// let obs = of(1, 2, 3, 4).pipe(
//   map((d) => {
//     return d * 10;
//   })
// );

// let obs = of(1, 2, 3, 4).pipe(mapTo(8));

// let obs = of(1, 2, 3, 4, 5).pipe(
//   switchMap((d) => {
//     return ajax('https://jsonplaceholder.typicode.com/posts');
//   })
// );

// obs.subscribe((d) => {
//   console.log(d);
// });

/************************************************* */

/**
 * Join operators
 *
 * concat, forkJoin, merge, race
 */

// let obs1 = of(1, 2, 3, 4).pipe(delay(2000));
// let obs2 = of(5, 6, 7, 8);

// let obs = race(obs1, obs2);

// obs.subscribe((d) => {
//   console.log(d);
// });

/****************************************************************** */

/**
 * Filtering operator
 *
 * debounce, debounceTime,
 * distinct, elementAt,
 * filter, first,last,
 * ignoreElements, sample, skip, throttle
 */

// let obs = fromEvent(document, 'click').pipe(
//   debounce(() => {
//     return interval(2000);
//   })
// );

// obs.subscribe((d) => {
//   console.log(d);
// });

/*************************************************** */
/**
 * Utility operators
 *
 * tap, delay, delayWhen, timeout, toArray
 */

// let obs = of(1, 2, 3).pipe(delay(3000), timeout(1000));

// let obs = of(1, 2, 3).pipe(toArray());

// obs.subscribe((d) => {
//   console.log(d);
// });

/********************************************** */

/**
 * Conditional operator
 * defaultIfEmpty, every, find, findIndex, isEmpty
 */

// let obs = of().pipe(defaultIfEmpty('hey, no val found'));

// let obs = of(1, 2, 3).pipe(
//   every((d) => {
//     return d % 2 === 0;
//   })
// );

// let obs = of(1, 2, 3).pipe(
//   find((d) => {
//     return d % 2 === 0;
//   })
// );

// let obs = of(1, 2, 3).pipe(
//   findIndex((d) => {
//     return d % 2 === 0;
//   })
// );

// let obs = of(1, 2, 3).pipe(isEmpty());

// obs.subscribe((d) => {
//   console.log(d);
// });

/********************************************* */

/**
 * Error Handling
 *
 * catchError, retry
 */

let obs = ajax('localhostL: 8080').pipe(
  retry(6),
  catchError((e) => {
    return of(3);
  })
);

obs.subscribe(
  (d) => {
    console.log(d);
  },
  (e) => {
    console.log('error -> ', e);
  }
);
