function countDown(counter) {
  console.log(counter);
  return counter==1 ? console.log(0) : countDown(counter-1);
}

module.exports = countDown;
