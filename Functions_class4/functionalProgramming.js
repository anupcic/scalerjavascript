//ex 1

let arr = [1, 2, 3, 4, 5];

function sum(arr1) {
  let sum = 0;
  //   for (let i = 0; i < arr1.length; i++) {
  //     sum += arr1[i];
  //   }
  //declarative
  arr1.forEach(function (item, idx) {
    sum += item;
  });
  return sum;
}
console.log(sum(arr));

//ex 2 double the value

function double(arr1) {
  //   arr1.forEach(function (item, idx) {
  //     arr1[idx] = item * 2;
  //   });
  //   return arr1;
  const result = arr1.map(function (item, idx) {
    return item * 2;
  });
  return result;
}
console.log(double(arr));
//ex 3
let arr2 = ["dave", "Vishal", "Anup", "Sarkar", "Tan"];
function uppercase(arr) {
  const output = arr.map(function (val, idx) {
    return val.toUpperCase();
  });
  return output;
}
console.log(uppercase(arr2));

//ex 4
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

function filterEvenNumber(arr) {
  const result = [];
  const filter = arr.map(function (val, idx) {
    if (val % 2 == 0) {
      result.push(val);
    }
  });
  return result;
}
console.log(filterEvenNumber(arr3));

//ex4

//alternative filter the array

function filterEvenNumber1(arr) {
  const result = arr.filter(function (item, idx) {
    return item % 2 == 0;
  });
  return result;
}
console.log(filterEvenNumber1(arr3));
//ex 5
//get positive numbers

let arr4 = [-1, -2, -3, 4, -5, 6, 7, -8];
function getPositiveNumbers(arr) {
  const result = arr.filter(function (val, idx) {
    return val >= 0;
  });
  return result;
}
console.log(getPositiveNumbers(arr4));

//ex6
let arr5 = [{ amount: 100 }, { amount: 200 }, { amount: 500 }, { amount: 700 }];

function accountSummary(arr) {
  let total = 0;
  arr.forEach(function (val, idx) {
    total += val.amount;
  });
  return total;
}
console.log(accountSummary(arr5));

function accountSummaryreduce(arr) {
  return arr.reduce(function (acc, item, idx) {
    acc += item.amount;
    return acc;
  }, 0);
}
console.log(accountSummaryreduce(arr5));

//ex make CHIRAG combine
const letters = ["C", "H", "I", "R", "A", "G"];
function combineLetters(arr) {
  const result = arr.reduce(function (acc, val, idx) {
    acc += val;
    return acc;
  }, "");
  return result;
}
console.log(combineLetters(letters));
