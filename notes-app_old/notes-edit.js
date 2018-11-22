window.addEventListener("storage", e => {
  if (e.key === DATA) {
    todos = JSON.parse(e.newValue);

    note = todos.find(note => note.id === noteId);

    if (!note) {
      location.assign("index.html");
    }

    document.querySelector("#title-input").value = note.text;
    document.querySelector("#id-note-body").value = note.notes;
    document.querySelector("#date-update").textContent = `Last edited: ${generateLastEdited(
      note.updatedAt
    )}`;
  }
});

let todos = getSavedNotes();
const noteId = location.hash.substring(1);
let note = todos.find(note => note.id === noteId);

if (!note) {
  location.assign("index.html");
}

document.querySelector("#title-input").value = note.text;
document.querySelector("#id-note-body").value = note.notes;
document.querySelector("#date-update").textContent = `Last edited: ${generateLastEdited(
  note.updatedAt
)}`;

document.querySelector("#update-button").addEventListener("click", () => {
  const noteTitle = document.querySelector("#title-input").value;
  const description = document.querySelector("#id-note-body").value;

  updateTodo(note.id, noteTitle, description);
  redirectToMainPage();
});

document.querySelector("#delete-button").addEventListener("click", () => {
  if (window.confirm("Are you sure to delete this data?")) {
    deleteTodoById(noteId);
    redirectToMainPage();
  }
});

//redirect to the Main Page
const redirectToMainPage = () => {
  location.assign("index.html");
};
