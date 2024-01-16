const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((product, current) => product*current);
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
  let result=1;
  for (i = 1; i <= num; i++){result*=i}
	return result;
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
