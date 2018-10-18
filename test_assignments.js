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
assert.deepEqual(lib.mapLength([]),[0]);
//one string array should give me back the length of that element in an array
assert.deepEqual(lib.mapLength(["ankon"]),[5]);
//2 elements should give me back an array of the length of those elements
assert.deepEqual(lib.mapLength(["ankon","dheeraj"]),[5,7]);

//test for counting odd numbers
//an empty array should give me back 0
assert.deepEqual(lib.countOddNumbers([]),0);
//an array holding one odd number should return me 1
assert.deepEqual(lib.countOddNumbers([1]),1);
//an array holding one even number should return me 0
assert.deepEqual(lib.countOddNumbers([2]),0);
//an array holding one odd and one even number should return me 1
assert.deepEqual(lib.countOddNumbers([1,2]),1);


//test for counting even numbers
//an empty array should give me back 0
assert.deepEqual(lib.countEvenNumbers([]),0);
//an array holding one odd number should return me 0
assert.deepEqual(lib.countEvenNumbers([1]),0);
//an array holding one even number should return me 1
assert.deepEqual(lib.countEvenNumbers([2]),1);
//an array holding one odd and one even number should return me 1
assert.deepEqual(lib.countEvenNumbers([1,2]),1);

//tests for counting number above a threshold
//empty array and a threshold 0 should give me back 0
assert.deepEqual(lib.countNumbersAbove([],0),0);
//1 element array and a threshold 0 should give me back 0
assert.deepEqual(lib.countNumbersAbove([1],0),1);
//2 element array one above and one below that threshold should give me 1
assert.deepEqual(lib.countNumbersAbove([0,2],1),1);

//tests for counting numbers below threshold
//empty array and a threshold 0 should give me back 0
assert.deepEqual(lib.countNumbersBelow([],0),0);
//1 element array and a threshold 0 should give me back 0
assert.deepEqual(lib.countNumbersBelow([1],0),0);
//2 element array one above and one below that threshold should give me 1
assert.deepEqual(lib.countNumbersBelow([0,2],1),1);

//tests for finding the index of a number
//element which is not present should give me back -1
assert.deepEqual(lib.indexOf(1,[2]),'is not found');
//element which is present should give me back the index of that item
assert.deepEqual(lib.indexOf(1,[1]),"is found at 0");
//one duplicate element array should give me back the first index
assert.deepEqual(lib.indexOf(2,[2,2]),"is found at 0");

//tests for extracting the digits of a number
//one digit number will give me back that number
assert.deepEqual(lib.extractDigits(1),["1"]);
//two digit number should give me back two elements in the array
assert.deepEqual(lib.extractDigits(12),["1","2"]);

//tests for finding unique elements of an array
//empty array should give me back that array
assert.deepEqual(lib.pickUnique([]),[]);
//one element array should give me back that array
assert.deepEqual(lib.pickUnique([1]),[1]);
//one duplicate element should give me back unique one
assert.deepEqual(lib.pickUnique([1,1]),[1]);
//one duplicate and one unique element should give me back two unique elements
assert.deepEqual(lib.pickUnique([1,1,2]),[1,2]);

//test for finding union of two arrays
//two empty array should return me one empty array
assert.deepEqual(lib.findUnion([],[]),[]);
//two arrays holding different element should return me array of two elements
assert.deepEqual(lib.findUnion([1],[2]),[1,2]);
//two arrays holding same element should return me array of only one elemenet
assert.deepEqual(lib.findUnion([1],[1]),[1]);
