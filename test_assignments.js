const assert = require("assert");
const lib = require("./source_code_of_assignments.js");
//test for the function which picks odd numbers from an array
assert.deepEqual(lib.pickOddNumbers("1"),[1]);
assert.deepEqual(lib.pickOddNumbers("12324"),[1,3]);
assert.deepEqual(lib.pickOddNumbers("12323423"),[1,3,3,3]);

//test for the function which picks even numbers from an array
assert.deepEqual(lib.pickEvenNumbers("1"),[]);
assert.deepEqual(lib.pickEvenNumbers("12324"),[2,2,4]);
assert.deepEqual(lib.pickEvenNumbers("12323423"),[2,2,4,2]);
