const square = num => num * num;

const squareLong = num => {
  return num * num;
};

console.log(square(4));

const people = [
  {
    name: "Leo",
    age: 40
  },
  {
    name: "Silvan",
    age: 22
  },
  {
    name: "Andy",
    age: 28
  }
];

const people30Less = people.filter(person => person.age < 30);
console.log(people30Less);

const people22 = people.filter(person => person.age === 22);
console.log(people22);
