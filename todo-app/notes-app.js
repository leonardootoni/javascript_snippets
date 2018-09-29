const todos = getSavedTodos();
// const todos = [
//   { text: "Order cat food", completed: true },
//   { text: "Clean Kitchen", completed: true },
//   { text: "Buy food", completed: true },
//   { text: "Do work", completed: true },
//   { text: "Exercise in the Gym", completed: false }
// ];

let hideCompleted = false;

document.querySelector("#todo-name").addEventListener("input", event => {
  let todoName = event.target.value;
  renderTodos(todoName);
});

document.querySelector("#todoForm").addEventListener("submit", event => {
  event.preventDefault(); //block the form to submit
  let todoName = event.target.elements.todoName.value.trim();
  if (!todoName) {
    return;
  }

  addTodo(todoName);
  event.target.elements.todoName.value = "";
  renderTodos();
});

document.querySelector("#chk").addEventListener("click", event => {
  hideCompleted = event.target.checked;
  renderTodos();
});

document.querySelector("#filter-by").addEventListener("change", event => {
  console.log(event.target.value);
});

renderTodos();
