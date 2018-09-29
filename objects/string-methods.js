let name = "Leonardo";

//Length property
console.log(name.length);

//convert to upper case
name = name.toUpperCase();
console.log(name);

//convert to lower case
name = name.toLowerCase();
console.log(name);

// includes method
let password = "abc123password098";
console.log(password.includes("password"));

//isValidPassword
// return true wether length is longer than 8 and if does not contains the word "password"
let isValidPassword = function(passwd) {
  return passwd.length > 8 && !passwd.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%ˆ&"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
