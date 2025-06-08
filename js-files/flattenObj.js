const nestedObj = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345,
    },
  },
  active: true,
};

console.log(flattenObj(nestedObj));

function flattenObj(obj, path = "", result = {}) {
  for (const [key, val] of Object.entries(obj)) {
    const keyName = path ? `${path}.${key}` : key;
    if (val && typeof val === "object") {
      flattenObj(val, keyName, result);
    } else {
      result[keyName] = val;
    }
  }
  return result;
}
