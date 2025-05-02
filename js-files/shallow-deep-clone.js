const objOne = {
  name: "John",
  address: {
    state: "Newyork",
  },
};

// const objTwo = { ...objOne };
const objTwo = { ...objOne, address: { ...objOne.address } };
const objThree = Object.assign({}, objOne);

objTwo.name = "Jane";
objTwo.address.state = "London";
objThree.name = "Jack";
objThree.address.state = "Bankok";

// console.log({ objOne });
// console.log({ objTwo });
// console.log({ objThree });

function deepClone(obj) {
  if (obj === undefined || typeof obj !== "object") {
    return obj;
  }
  var clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

const cloned = deepClone(objOne);
cloned.name = "Mumbai";
console.log({ cloned });
console.log({ objOne });
