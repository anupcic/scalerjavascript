var z = [1, 2];
function total(arr) {
  return arr[0] + arr[1];
}
z[0] = 10;
console.log(total(z));

//ex 3

var x = 1,
  y = 2;
function sum(a, b) {
  a = 10;
  return a + b;
}

console.log(sum(x, y));
console.log(x, y);
//ex 4

var z = [1, 2];
function total(arr) {
  arr[0] = 10;
  return arr[0] + arr[1];
}
console.log(total(z));
console.log(z);
//ex 6 impure functiom

let count = 0;
function counter() {
  count++;
  return count;
}
console.log(counter());
console.log(counter());

// ex 7
console.log("ex-7");
function compute(fn, a, b) {
  return fn(a, b);
}
function sum(x, y) {
  return x + y;
}
function subtract(x, y) {
  return y - x;
}

console.log(compute(sum, 1, 2));
console.log(compute(subtract, 1, 2));

// ex 8
console.log("ex-7");
function x(a) {
  return function (b) {
    return a + b;
  };
}
