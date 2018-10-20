const isOdd = function(number){
  return number % 2 != 0;
}
const isEven = function(number){
  return number % 2 == 0;
}
const pickOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

exports.pickOddNumbers = pickOddNumbers;

const pickEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

exports.pickEvenNumbers = pickEvenNumbers;

const add = function(first,second){
  return first+second;
}

const calculateSum = function(numbers){
  return numbers.reduce(add,0);
}

exports.reverse = function(source){
  return source.reverse();
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

exports.findDifference = function(first,second){
  let result = [];
  for(let number of first){
    if(indexOf(number,second)=="is not found"){
      result.push(number);
    }
  }
  return result;
}

exports.isSubset = function(sourceArray,arrayToCheck){
  for(let elements of arrayToCheck){
    if(indexOf(elements,sourceArray)=="is not found"){
      return false;
    }
  }
  return true;
}

const getShorterLength = function(first,second){
  if(first.length>second.length){
    return second.length;
  }
  return first.length;
}

exports.zip = function(first,second){
  let length = getShorterLength(first,second);
  let result = [];
  for(let index=0; index<length; index++){
    let indexArray = [];
    indexArray.push(first[index],second[index]);
    result.push(indexArray);
  }
  return result;
}

exports.rotateSource = function(source,pivotPoint){
  let result = [];
  for(let index=0; index<pivotPoint; index++){
    result[source.length-pivotPoint] = source[index];
  }
  for(let index=pivotPoint; index<source.length; index++){
    result[index-pivotPoint] = source[index];
  }
  return result;
}

exports.partition = function(source,threshold){
  let result = [[],[]];
  for(let value of source){
    let quotient = Math.floor(value/threshold);
    let index = Math.ceil(quotient/(quotient+1));
    result[index].push(value);
  }
  return result;
}

exports.isAscending = function(source){
  for(let index=1; index<source.length; index++){
    if(source[index]<source[index-1]){
      return false;
    }
  }
  return true;
}

exports.isDescending = function(source){
  for(let index=1; index<source.length; index++){
    if(source[index]>source[index-1]){
      return false;
    }
  }
  return true;
}
