const samplePromise = new myPromise((resolve, reject) =>
  setTimeout(() => resolve("Resolved"), 2000)
);

samplePromise
  .then((data) => console.log(data))
  .catch((data) => console.log(data));

function myPromise(executor) {
  let onResolve, onReject;

  function resolve(value) {
    onResolve(value);
  }
  function reject() {
    onReject(value);
  }

  this.then = function (callback) {
    onResolve = callback;
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    return this;
  };
  executor(resolve, reject);
}
