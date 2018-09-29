let add = function(a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

//tip calculator
let totalBill = function(bill, tip = 0.2) {
  let tipPercent = tip * 100;
  let tipValue = bill * tip;
  let message = `A ${tipPercent}% on $${bill} would be ${tipValue}`;
  return message;
};

console.log(totalBill(100, 0.18));

//template string
let name = "Leo";
let message = `Hey, my name is ${name}!!!`;
console.log(message);
