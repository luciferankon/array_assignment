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


exports.pickOddNumbers=pickOddNumbers;
exports.pickEvenNumbers=pickEvenNumbers;
