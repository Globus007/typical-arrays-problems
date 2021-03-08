
exports.min = function min (array) {
  return (array && array.length) ? array.sort((a, b) => a-b).shift() : 0;
}

exports.max = function max (array) {
  return (array && array.length) ? array.sort((a, b) => a-b).pop() : 0;
}

exports.avg = function avg (array) {
  return (array && array.length) ? array.reduce((avg, val) => avg + val) / array.length : 0;
}
