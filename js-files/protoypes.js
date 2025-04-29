function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  return `Animal name is ${this.name} `;
};
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Animal.prototype;

let tiger = new Animal("Tiger", 23);
let dog = new Dog("dog", "husky");

console.log(tiger.sayName());
console.log(dog.sayName());
console.log(dog);
