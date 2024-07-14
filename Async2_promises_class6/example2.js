const { reject } = require("async");
const { log } = require("console");
const { resolve } = require("path");

const boardPromise = new Promise(function (resolve, reject) {
  const passingScore = 95;
  const studentScore = 97;
  if (studentScore >= passingScore) {
    resolve("Yes, Completed");
  } else {
    reject("not Completed");
  }
});
boardPromise
  .then(function (data) {
    console.log("Sucess: ", data);
    return data;
  })
  .then(function (data) {
    console.log(data.toUpperCase());
  })
  .catch(function (err) {
    console.log(err);
  });

const boardPromise1 = new Promise(function (resolve, reject) {
  const passingScore = 95;
  const studentScore = 97;
  setTimeout(function () {
    if (studentScore >= passingScore) {
      resolve("1Yes, Completed");
    } else {
      reject("2 not Completed");
    }
  }, 5000);
});
boardPromise1()
  .then(function (data) {
    console.log("Sucess: ", data);
    return data;
  })
  .then(function (data) {
    console.log(data.toUpperCase());
  })
  .catch(function (err) {
    console.log(err);
  });

const fetchToDoById = function (id) {
  return new Promise(function (resolve, response) {
    setTimeout(function () {
      data.filter(function (val, idx) {
        return data.id == id;
      });
    }, 10000);
  });
};
