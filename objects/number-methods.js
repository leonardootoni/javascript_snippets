let num = 103.946;
console.log(num.toFixed(2));

let guessNum = function(num) {
  let min = 1;
  let max = 5;
  let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNum === num;
};

console.log(guessNum(5));
console.log(guessNum(2));
console.log(guessNum(1));
