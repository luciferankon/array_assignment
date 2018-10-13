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

exports.calculateSum = function(givenNumbers){
  let sum = 0;
  for(let number of givenNumbers){
    sum = sum + number;
  }
  return sum;
}

exports.reverseArray = function(array){
  return array.reverse();
}

