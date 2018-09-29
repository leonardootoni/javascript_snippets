let myBook = {
  title: "1984",
  author: "Leonardo Otoni",
  country: "Candada",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples Histoy",
  author: "Howard Zimn",
  country: "USA",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);

let fahrenheitObj = {
  temperature: 74
};

let getTemperatures = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit.temperature,
    kelvin: ((fahrenheit.temperature + 459.67) * 5) / 9,
    celcius: ((fahrenheit.temperature - 32) * 5) / 9
  };
};

let data = getTemperatures(fahrenheitObj);
console.log(
  `Fahrenheit: ${data.fahrenheit} - Kelvin: ${data.kelvin} - Celcius: ${
    data.celcius
  }`
);
