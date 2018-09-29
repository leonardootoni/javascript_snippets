let myBook = {
  title: "1984",
  author: "Leonardo Otoni",
  country: "Candada"
};

console.log(`${myBook.title} by ${myBook.author} - ${myBook.country}`);
myBook.country = "Brazil";
console.log(`${myBook.title} by ${myBook.author} - ${myBook.country}`);

let myData = {
  name: "Leonardo",
  age: 40,
  location: "Canada - Toronto"
};

console.log(`${myData.name}, ${myData.location}, ${myData.age}`);
myData.age += 1;
console.log(`${myData.name}, ${myData.location}, ${myData.age}`);
