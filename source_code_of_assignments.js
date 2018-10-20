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

exports.calculateSum = calculateSum;

exports.reverse = function(source){
  return source.slice().reverse();
}

const isIndexEven = function(element,index){
  return index%2==0;
}

exports.pickAlternateElements = function(elements){
  return elements.filter(isIndexEven);
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

const findMax = function(first,second){
  return Math.max(first,second);
}

const findMin = function(first,second){
  return Math.min(first,second);
}

exports.findGreatestNumber = function(numbers){
  return numbers.reduce(findMax);
}

exports.findSmallestNumber = function(numbers){
  return numbers.reduce(findMin);
}

const isEmpty = function(a){
  if(a.length==0)
    return true;
  return false;
}

exports.calculateAverage = function(numbers){
  let sum = calculateSum(numbers);
  let noOfNumbers = numbers.length;
  return sum/noOfNumbers;
}

const calculateLength = function(element){
  return element.length;
}

exports.mapLength = function(givenStrings){
  return givenStrings.map(calculateLength);
}

exports.countOddNumbers = function(numbers){
  let oddNumbers = pickOddNumbers(numbers);
  return oddNumbers.length;
}

exports.countEvenNumbers = function(numbers){
  let evenNumbers = pickEvenNumbers(numbers);
  return evenNumbers.length;
}

const isNumberAbove = function(number,threshold){
  return number>threshold;
}

const isAboveNumberGenerator = function(threshold){
  return function(number){
    return isNumberAbove(number,threshold);
  }
}

exports.countNumbersAbove = function(numbers,threshold){
  let isAboveThreshold = isAboveNumberGenerator(threshold);
  return numbers.filter(isAboveThreshold).length;
}

const isNumberBelow = function(number,threshold){
  return number<threshold;
}
const isBelowNumberGenerator = function(threshold){
  return function(number){
    return isNumberBelow(number,threshold);
  }
}

exports.countNumbersBelow = function(numbers,threshold){
  let isBelowThreshold = isBelowNumberGenerator(threshold);
  return numbers.filter(isBelowThreshold).length;
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

const findIndex = function(element,source){
  return source.indexOf(element);
}

exports.findIndex = findIndex;

const indxOf = function(element,source){
  let result = findElement(element,source);
  return result.message+result.index;
}

exports.indxOf = indxOf;

exports.extractDigits = function(number){
  return number.toString().split("");
}

exports.pickUnique = function(numbers){
  let result = [];
  for(let number of numbers){
    if(indxOf(number,result)=="is not found"){
      result.push(number);
    }
  }
  return result;
}

exports.findUnion = function(first,second){
  return first.concat(
    second.filter(function(element){
    return !first.includes(element);
  }));
}

exports.findIntersection = function(first,second){
  return second.filter(function(element){
    return first.includes(element);});
}

exports.findDifference = function(first,second){
  return first.filter(function(element){
    return !second.includes(element);});
}

exports.isSubset = function(sourceArray,arrayToCheck){
  return arrayToCheck.every(function(element){
    return sourceArray.includes(element);});
}

exports.zip = function(first,second){
  let shorterLength = Math.min(first.length,second.length);
  let result = [];
  for(let index=0; index<shorterLength; index++){
    let indexArray = [];
    indexArray.push(first[index],second[index]);
    result.push(indexArray);
  }
  return result;
}

exports.rotateSource = function(source,pivotPoint){
  let result = [];
  let length = source.length;
  return source.map(function(element,index){
    let rotatedIndex = (index + pivotPoint) % length;
    return source[rotatedIndex];});
}

exports.partition = function(source,threshold){
  let result = [[],[]];
  result[0] = source.filter(function(element){
    return element<threshold;
  });
  result[1] = source.filter(function(element){
    return element>threshold;
  });
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
