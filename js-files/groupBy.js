const data = [
  { category: "fruit", name: "apple" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "banana" },
];

function myGroupBy(data, key) {
  return data.reduce((acc, curr) => {
    const groupKey = curr[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(curr);
    return acc;
  }, {});
}

const res = myGroupBy(data, "category");
console.log(res);
