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
