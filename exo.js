function myMap(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = func(arr[i]);
    newArr.push(result);
  }
  return newArr;
}
