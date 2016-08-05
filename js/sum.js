function sum() {
  return Array.prototype.slice.call(arguments).reduce(function(a, b) { return a + b });
}


module.exports = sum;
