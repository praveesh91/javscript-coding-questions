function* generatorFunction() {
  console.log("First");
  yield 1;
  console.log("Second");
  yield 2;
}

const genFn = generatorFunction();
console.log(genFn.next());
console.log(genFn.next());
console.log(genFn.next());

for (let item of genFn) {
  console.log(item);
}

const sampleObj = {
  name: "john Doe",
  age: 33,
};

sampleObj[Symbol.iterator] = function* () {
  let properties = Object.keys(sampleObj);
  let count = 0;
  let isDone = false;
  for (let index = 0; index < properties.length; index++) {
    yield this[properties[index]];
  }
};

for (let val of sampleObj) {
  console.log(val);
}
