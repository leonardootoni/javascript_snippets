//function - input, code, output

let greetUser = function() {
  console.log("Hello user");
};

greetUser();
let convertFahrenheitToCelcius = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

console.log(convertFahrenheitToCelcius(32));
console.log(convertFahrenheitToCelcius(68));
