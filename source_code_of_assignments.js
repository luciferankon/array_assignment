const isOdd = function(number){
  return number % 2 != 0;
}
const isEven = function(number){
  return number % 2 == 0;
}
exports.pickOddNumbers = function(givenNumbers){
  let oddNumbers = [];
  for(let number of givenNumbers){
    if(isOdd(number)){
      oddNumbers.push(+number);
    }
  }
  return oddNumbers;
}

exports.pickEvenNumbers = function(givenNumbers){
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

exports.reverse = function(source){
  let length = source.length;
  let result =[];
  for(let index=0; index< length; index++){
    result[length-index-1] = source[index];
}
  return result;
}

exports.selectEvenElements = function(elements){
  let selectedElements = [];
  for(index in elements){
    if(index%2==0){
      selectedElements.push(elements[index]);
    }
  }
  return selectedElements;
}

exports.reverseFibonacci = function(limit) {
  let fibonacciSeries = [];
  let oldValue = 0;
  let newValue = 1;
  for(let count=0; count<limit; count++){
    let currentValue = oldValue;
    fibonacciSeries[limit-count-1]=currentValue;
    oldValue = newValue;
    newValue = currentValue + newValue;
  }
  return fibonacciSeries;
}

const compareNumbers = function(firstNumber,secondNumber){
  if(firstNumber>secondNumber){
    return firstNumber;
  }
  return secondNumber;
}

const isEmpty = function(array){
  return array.length==0;
}
exports.findGreatestNumber = function(numbers){
  if(isEmpty(numbers)){
    return;
  }
  let greatestNumber = numbers[0];
  for(number of numbers){
    greatestNumber = compareNumbers(greatestNumber,number);
    }
  return greatestNumber;
}

exports.findSmallestNumber = function(numbers){
  if(isEmpty(numbers)){
    return;
  }
  let smallestNumber = numbers[0];
  for(number of numbers){
    smallestNumber = compareNumbers(smallestNumber,number);
    }
  return smallestNumber;
}

exports.calculateAverage = function(givenNumbers){
  let sum = calculateSum(givenNumbers);
  let noOfNumbers = givenNumbers.length;
  if(isEmpty(givenNumbers)){
    return 0;
  }
  return sum/noOfNumbers;
}

exports.calculateSum = calculateSum;

//exports.mapLength = function(givenStrings){
//  let lengthArray = [];
//  if(isEmpty(givenStrings)){
//    lengthArray.push(0);
//  }
//  for(let string of givenStrings){
//    lengthArray.push(string.length);
//  }
//  return lengthArray;
//}
