const isOdd = function(number){
  return number % 2 != 0;
}
const isEven = function(number){
  return number % 2 == 0;
}
const pickOddNumbers = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if(isOdd(number)){
      oddNumbers.push(+number);
    }
  }
  return oddNumbers;
}

exports.pickOddNumbers = pickOddNumbers;

const pickEvenNumbers = function(numbers){
  let evenNumbers = [];
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers.push(+number);
    }
  }
  return evenNumbers;
}

exports.pickEvenNumbers = pickEvenNumbers;

const calculateSum = function(numbers){
  let sum = 0;
  for(let number of numbers){
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

exports.pickEvenElements = function(elements){
  let pickedElements = [];
  for(index in elements){
    if(index%2==0){
      pickedElements.push(elements[index]);
    }
  }
  return pickedElements;
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

const isEmpty = function(source){
  return source.length==0;
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

exports.calculateAverage = function(numbers){
  let sum = calculateSum(numbers);
  let noOfNumbers = numbers.length;
  if(isEmpty(numbers)){
    return 0;
  }
  return sum/noOfNumbers;
}

exports.calculateSum = calculateSum;

exports.mapLength = function(givenStrings){
  let lengthArray = [];
  if(isEmpty(givenStrings)){
    lengthArray.push(0);
  }
  for(let string of givenStrings){
    lengthArray.push(string.length);
  }
  return lengthArray;
}

exports.countOddNumbers = function(numbers){
  let oddNumbers = pickOddNumbers(numbers);
  return oddNumbers.length;
}

exports.countEvenNumbers = function(numbers){
  let evenNumbers = pickEvenNumbers(numbers);
  return evenNumbers.length;
}

exports.countNumbersAbove = function(numbers,threshold){
  let numbersAbove = 0;
  for(number of numbers){
    if(number>threshold){
      numbersAbove = numbersAbove + 1;
    }
  }
  return numbersAbove;
}

exports.countNumbersBelow = function(numbers,threshold){
  let numbersBelow = 0;
  for(number of numbers){
    if(number<threshold){
      numbersBelow = numbersBelow + 1;
    }
  }
  return numbersBelow;
}

const findElement = function(element,source){
  let result = {};
  result.message = "is not found";
  result.index = "";
  for( let index in source){
    if(source[index] == element){
      result.message = "is found at ";
      result.index = index;
      return result;
    }
  }
  return result;
}

const indexOf = function(element,source){
  let result = findElement(element,source);
  return result.message+result.index;
}

exports.indexOf = indexOf;

exports.extractDigits = function(number){
  let stringNumber = number.toString();
  let result = [];
  for(let index=0; index<stringNumber.length; index++){
    result.push(stringNumber[index]);
  }
  return result;
}

exports.pickUnique = function(numbers){
  let result = [];
  for(let number of numbers){
    if(indexOf(number,result)=="is not found"){
      result.push(number);
    }
  }
  return result;
}

exports.findUnion = function(first,second){
  let result = first;
  for(let number of second){
    if(indexOf(number,result)=="is not found"){
      result.push(number);
    }
  }
  return result;
}

exports.findIntersection = function(first,second){
  let result = [];
  for(let number of second){
    if(indexOf(number,first)!="is not found"){
      result.push(number);
    }
  }
  return result;
}



