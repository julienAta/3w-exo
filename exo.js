// Exo 1
// Recreate forEach

function myMap(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
}
// example
var numbers = [1, 2, 3, 4];
var doubled = myMap(numbers, function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

// Exo 2
// Recreate filter

function myFilter(arr, func) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
// example
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = myFilter(numbers, function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Exo 3
// Recreate reduce

function myReduce(arr, func, initialValue) {
  var accumulator = initialValue !== undefined ? initialValue : 0;
  for (var i = 0; i < arr.length; i++) {
    accumulator = func(accumulator, arr[i]);
  }
  return accumulator;
}
// Example
var numbers = [1, 2, 3, 4];
var sum = myReduce(
  numbers,
  function (accumulator, num) {
    return accumulator + num;
  },
  0
);

console.log(sum); // 10
