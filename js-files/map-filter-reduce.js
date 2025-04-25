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

console.log([1, 2, 3, 4, 5].myMap((el) => el * 2));
