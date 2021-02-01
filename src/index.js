exports.min = function min (array) {
  let result = 0;
  if (array && array.length) {
    result = Math.min(...array);
  }
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (array && array.length) {
    result = Math.max(...array);
  }
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (array && array.length) {
    result = array.reduce((sum, element) => sum + element) / array.length;
  }
  return result;
}
