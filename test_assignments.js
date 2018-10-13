const assert = require("assert");
const lib = require("./source_code_of_assignments.js");
//test for the function which picks odd numbers from an array
// a odd number that should give me back that number in an array
assert.deepEqual(lib.pickOddNumbers("1"),[1]);
// a 5 numbers that should give me back odd numbers from that
assert.deepEqual(lib.pickOddNumbers("12324"),[1,3]);
// many numbers that should give me back the odd numbers
assert.deepEqual(lib.pickOddNumbers("12323423"),[1,3,3,3]);

//test for the function which picks even numbers from an array
// one odd number that should give me back an empty array
assert.deepEqual(lib.pickEvenNumbers("1"),[]);
//  5 numbers that should give me back even numbers only
assert.deepEqual(lib.pickEvenNumbers("12324"),[2,2,4]);
// many numbers that should give me back the even numbers
assert.deepEqual(lib.pickEvenNumbers("12323423"),[2,2,4,2]);

//tests for the functiom which adds all the numbers of list
// one empty list should give me back nothing
assert.deepEqual(lib.calculateSum([]),0);
// 1 element array should give me back that element
assert.deepEqual(lib.calculateSum([1]),1);
// 2 element array should give me back the sum of them
assert.deepEqual(lib.calculateSum([1,2]),3);
//tests for reversing an array
// empty array should give me back an empty array
assert.deepEqual(lib.reverseArray([]),[]);
// 1 element array should give back that element
assert.deepEqual(lib.reverseArray([2]),[2]);
// 2 element array should give back the reversed array
assert.deepEqual(lib.reverseArray([2,3]),[3,2]);

