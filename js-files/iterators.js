// Arrays, strings, maps, sets are already iterable, but if you have to iterate through an object we need an iterator
// It is done by creating a [Symbol.iterator] function which will return a next method which inturn returns an object {done:<bool>, value?:<any>}

const sampleObj = {
  name: "john Doe",
  age: 33,
};

sampleObj[Symbol.iterator] = function () {
  let properties = Object.keys(sampleObj);
  let count = 0;
  let isDone = false;

  let nextFn = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return { done: isDone, value: this[properties[count++]] };
  };
  return { next: nextFn };
};

for (let val of sampleObj) {
  console.log(val);
}
