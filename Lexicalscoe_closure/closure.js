function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

console.log(multiply(1)(2)(3));

function met(y) {
  let x = y;
  return function () {
    z = x + 1;
    return z;
  };
}

const y1 = met(4);
console.log(y1);
console.log(y1(3));
console.log(y1(3));

function met(x) {
  let y = x;
  return function () {
    y = y + 1;
    return y;
  };
}

const y = met(10);
console.log(y());
console.log(y());
