function closure() {
  let num = 0;
  return function (added) {
    return (num += added);
  };
}

let add = closure();
console.log(add(2));
console.log(add(4));
console.log(add(7));
