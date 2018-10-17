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
assert.deepEqual(lib.reverse([]),[]);
// 1 element array should give back that element
assert.deepEqual(lib.reverse([2]),[2]);
// 2 element array should give back the reversed array
assert.deepEqual(lib.reverse([2,3]),[3,2]);

//tests for picking every 2nd element of array
//empty array should give me back 
assert.deepEqual(lib.pickEvenElements([]),[]);
//one element array should return me one element array
assert.deepEqual(lib.pickEvenElements([1]),[1]);
//two element array should give me odd position element back
assert.deepEqual(lib.pickEvenElements([1,2]),[1]);

//tests for reverse fibonacci
//0 should give me back an empty array
assert.deepEqual(lib.reverseFibonacci(0),[]);
//1 should give me back an array consisting only 0
assert.deepEqual(lib.reverseFibonacci(1),[0]);
//2 should give me back an array [1,0]
assert.deepEqual(lib.reverseFibonacci(2),[1,0]);

//tests for finding greatest number from a list
//empty list should give me undefined
assert.deepEqual(lib.findGreatestNumber([]),undefined);
//one element array should give me back that number only
assert.deepEqual(lib.findGreatestNumber([1]),1);
//two number array should give me back the largest number
assert.deepEqual(lib.findGreatestNumber([1,2]),2);

//tests for finding smallest number from a list
//empty list should give me undefined
assert.deepEqual(lib.findSmallestNumber([]),undefined);
//1 element array should give me back that element
assert.deepEqual(lib.findSmallestNumber([1]),1);
//2 element array should give me back smaller element
//assert.deepEqual(lib.findSmallestNumber([1,2]),1);

//test for average of a list
//empty array should give me 0
assert.deepEqual(lib.calculateAverage([]),0);
//one element array should return me that element
assert.deepEqual(lib.calculateAverage([1]),1);
//two element array should return the average
assert.deepEqual(lib.calculateAverage([1,2]),1.5);

//test for calculating lengths of elements
//empty array should give an array holding 0
//assert.deepEqual(lib.mapLength([]),[0]);
