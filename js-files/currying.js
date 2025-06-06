function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return sum(a + b);
  };
}

// console.log(sum(1)(2)(3)(4)(5)());

function curry(func) {
  return function curried(...args) {
    console.log({ args }, func.length);

    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
  };
}

const sumCurry = (a, b, c) => a + b + c;

const curriedSum = curry(sumCurry);
console.log(curriedSum(1)(2)(3));
