const arr = [1, 2, [3, 4, [5, 6]]];
console.log("flat", arr.flat());
console.log(flattenArr(arr));

function flattenArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flatten = flattenArr(arr[i]);
      for (let j = 0; j < flatten.length; j++) {
        res.push(flatten[j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
