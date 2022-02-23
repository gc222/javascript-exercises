const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
  // array.foreach(function(item, index) {expression})
  // you can utilise arrow function:
  // array.foreach(item => expression)
  // foreach(item, index) -> index doesn't need to be specified
  nums.forEach(item => sum += item);
  return sum;
};

const multiply = function(nums) {
  let res = 1;
  nums.forEach(item => res *= item);
  return res
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	// 3 * 2 * 1
  // base case: when a == 1 then return 1 
  // n * n-1 * n-1 ... 1
  // a * factorial(a - 1)

  if (a === 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
