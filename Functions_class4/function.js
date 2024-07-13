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
