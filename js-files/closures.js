function closure() {
  let num = 0;
  return function (added) {
    return (num += added);
  };
}

let add = closure();
console.log(add(2));
console.log(add(4));
console.log(add(7));

function expensive(num1, num2) {
  for (let index = 0; index < 1000000000; index++) {}
  return num1 * num2;
}

function memoize(fn) {
  let res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn(...args);
      console.log(res);
    } else {
      return res[argsCache];
    }
  };
}
console.time("without cache");
expensive(2, 2);
console.timeEnd("without cache");

console.time("without cache");
expensive(2, 2);
console.timeEnd("without cache");

let memoized = memoize(expensive);
console.time("with cache first call");
memoized(2, 2);
console.timeEnd("with cache first call");

console.time("with cache second call");
memoized(2, 2);
console.timeEnd("with cache second call");
