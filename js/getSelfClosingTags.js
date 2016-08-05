function reduce(obj, func) {
  return Object.keys(obj).map(function(key){ return obj[key];}).reduce(func);
}

module.exports = reduce;
