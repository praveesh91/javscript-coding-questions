Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context = context || globalThis; // default to global object if context is null/undefined
  const fnSymbol = Symbol(); // to avoid name collisions
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args); // spread the arguments
  delete context[fnSymbol]; // clean up
  return result;
};

Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context = context || globalThis; // Default to global object if context is null/undefined
  const fnSymbol = Symbol(); // Create a unique property to avoid conflicts
  context[fnSymbol] = this; // Temporarily assign the function

  const result = Array.isArray(args)
    ? context[fnSymbol](...args) // Spread the arguments if array
    : context[fnSymbol](); // Or call without arguments

  delete context[fnSymbol]; // Clean up
  return result;
};

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context.fn = this;
  return function (...extraArgs) {
    return context.fn(args, ...extraArgs);
  };
};

let obj = { name: "John Doe" };
function sayName(age) {
  return `My name is ${this.name} and I am ${age} old`;
}
let bound = sayName.myBind(obj, 23);
sayName.myCall(obj, 23);
