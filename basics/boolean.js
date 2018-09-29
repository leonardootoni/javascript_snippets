let age = 5;
if (age <= 7) {
  console.log("is child, age: " + age);
} else if (age >= 65) {
  console.log("is senior, age: " + age);
} else {
  console.log("age: " + age);
}

let isChild = age <= 7;
let isSenior = age >= 65;
if (isChild) {
  console.log("It is a child. Apply a discount of 15%");
} else if (isSenior) {
  console.log("It is a Senior. Apply a discount of 20%");
}
