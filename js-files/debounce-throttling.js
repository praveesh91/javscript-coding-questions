let debounceFn = debounce((el) => console.log(el.target.value), 1000);
const inputEl = document.getElementById("username");
inputEl.addEventListener("input", debounceFn);

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    let context = this;
    console.log(this);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(context, args), delay);
  };
}
