let debounceFn = debounce((el) => console.log(el.target.value), 1000);
const inputEl = document.getElementById("username");
inputEl.addEventListener("input", debounceFn);

let myThrottle = throttle(() => console.log("demo"), 2000);
window.addEventListener("mousemove", myThrottle);

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return fn.apply(this, args);
  };
}
