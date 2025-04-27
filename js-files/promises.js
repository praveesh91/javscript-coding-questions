const samplePromise = new myPromise((resolve, reject) =>
  setTimeout(() => resolve("Resolved"), 2000)
);

samplePromise.then((data) => console.log(data));

function myPromise(executor) {
  let onResolve;

  function resolve(value) {
    onResolve(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };

  executor(resolve);
}
