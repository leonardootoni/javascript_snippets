window.addEventListener("storage", e => {
  if (e.key === DATA) {
    todos = JSON.parse(e.newValue);
    listTodos(todos, filterParam);
  }
});

let todos = getSavedNotes();

const SORT_BY_EDITED = "byEdited";
const SORT_BY_CREATED = "byCreated";
const SORT_BY_ALPHABETICAL = "alphabetical";
const filterParam = {
  text: "",
  sortBy: SORT_BY_EDITED
};

document.querySelector("#input").addEventListener("input", event => {
  filterParam.text = event.target.value;
  listTodos(todos, filterParam);
});

document.querySelector("#filter-by").addEventListener("change", event => {
  filterParam.sortBy = event.target.value;
  listTodos(todos, filterParam);
});

document.querySelector("#add-todo").addEventListener("click", () => {
  addTodoElement(document.querySelector("#input").value);
  document.querySelector("#input").value = "";
});

document.querySelector("#clear-todo").addEventListener("click", () => {
  document.querySelector("#input").value = "";
  listTodos(todos, null);
});

document.querySelector("#create-note").addEventListener("click", () => {
  addTodoElement("Unnamed note");
});

//show initial todo List
listTodos(todos, filterParam);
