write function countDown.
function expects number and logs values one by one till zero.
Note: function should use recursion and ternary operator.
Note: function’s second line should be started with return keyword.
Invocation example:
countDown(3); // 3 2 1 0

write function sum.
function expects arbitrary number of digit arguments and returns compound value of them.
Note: function should use reduce method of Array.prototype.
Note: function’s code should be started with return keyword.
Invocation example:
sum(1, 2,); // 3
sum(1, 2, 3); // 6

write function reduce.
method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
Invocation example:
var lib = {a: ‘abba’, b: ‘baba’};
var add = function(a, b) { return a + b; };
reduce(lib, add); // ‘abbababa’
