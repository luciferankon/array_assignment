const isOdd = function(number){
  return number % 2 != 0;
}
const isEven = function(number){
  return number % 2 == 0;
}
const pickOddNumbers = function(givenNumbers){
  let oddNumbers = [];
  for(let number of givenNumbers){
    if(isOdd(number)){
      oddNumbers.push(+number);
    }
  }
  return oddNumbers;
}

const pickEvenNumbers = function(givenNumbers){
  let evenNumbers = [];
  for(let number of givenNumbers){
    if(isEven(number)){
      evenNumbers.push(+number);
    }
  }
  return evenNumbers;
}

const calculateSum = function(givenNumbers){
  let sum = 0;
  for(let number of givenNumbers){
    sum = sum + number;
  }
  return sum;
}

const reverseArray = function(array){
  let reversedArray = [];
  for(let index=0; index<array.length; index++){
    reversedArray[array.length-index-1]=array[index];
  }
  return reversedArray;
}


exports.pickOddNumbers = pickOddNumbers;
exports.pickEvenNumbers = pickEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverseArray = reverseArray;
