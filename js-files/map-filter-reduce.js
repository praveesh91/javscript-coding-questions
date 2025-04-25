Array.prototype.myMap = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("Callback is not a function");
  }
  let res = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
    res[i] = cb(array[i], i, array);
  }
  return res;
};

Array.prototype.myFilter = function (cb) {
  if (typeof cb !== "function") {
    throw new Error("Callback is not a function");
  }
  let res = [];
  let array = this;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      res.push(array[i]);
    }
  }
  return res;
};

Array.prototype.myReduce = function (cb, init) {
  if (typeof cb !== "function") {
    throw new Error("Callback is not a function");
  }
  let array = this;
  let accumulator = init !== undefined ? init : array[0];
  for (let i = init !== undefined ? 0 : 1; i < array.length; i++) {
    accumulator = cb(accumulator, array[i], i, array);
  }
  return accumulator;
};

console.log([1, 2, 3, 4, 5].myReduce((init, acc) => init + acc, 0));
