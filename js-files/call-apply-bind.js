Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context["fn"] = this;
  return context.fn(args);
};

Function.prototype.myApply = function (context, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "is not callable");
  }
  context["fn"] = this;
  return context.fn(...args);
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
