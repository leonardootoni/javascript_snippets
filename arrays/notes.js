const notes = [
  { title: "My next trip", body: "I would like to go to Japan" },
  { title: "Habbits to go on", body: "Exercise a bit better" },
  { title: "Office modification", body: "Get a new seat" }
];

const sortNotes = function(notes) {
  notes.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

let position = notes.findIndex(function(element, index) {
  return element.title === "Habbits to go on";
});

console.log(position);

let seekData = function(array, elementTitle) {
  return array.find(function(element, index) {
    return element.title.toLowerCase() === elementTitle.toLowerCase();
  });
};

sortNotes(notes);
console.log(notes);
let data = seekData(notes, "Office modification");
console.log(data);
