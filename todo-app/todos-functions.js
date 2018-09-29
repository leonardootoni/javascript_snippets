//Default key to access the todos data into the localStorage
const DATA_KEY = "DATA_KEY";

//Get the todo list from the localStorage
const getSavedTodos = () => {
  const todoData = localStorage.getItem(DATA_KEY);
  try {
    return todoData ? JSON.parse(todoData) : [];
  } catch (error) {
    return [];
  }
};

//Add a todo into an array and then, call save to local storage
const addTodo = todoName => {
  const newTodo = { id: uuidv4(), text: "", completed: false };
  newTodo.text = todoName;
  todos.push(newTodo);
  saveTodos();
};

//Save the todos[] state into the localStorage
const saveTodos = () => {
  localStorage.setItem(DATA_KEY, JSON.stringify(todos));
};

//Remove from the DOM all todo elements marked as .todo-item
const removeTodos = () => {
  const todoList = document.querySelectorAll(".todo-item");
  todoList.forEach(element => element.remove());
};

//Remove an specific todo on the list
const removeTodo = todoId => {
  if (!todoId || todoId.trim() === "") {
    return;
  }

  const todoIndex = todos.findIndex(element => element.id === todoId);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    saveTodos();
    renderTodos();
  }
};

//Update the todo completed status, then save it in the local storage and re-render the list
const updateTodoStatus = elementId => {
  index = todos.findIndex(element => element.id === elementId);

  if (index > -1) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
  }
};

let generateSummaryDOM = numberOfElements => {
  const summaryText = `You have ${numberOfElements} todos left:`;

  let summary = document.createElement("p");
  let summaryTitle = document.querySelector(".todo-item-summary");
  if (summaryTitle) {
    summaryTitle.remove();
  }

  summary.setAttribute("class", "todo-item-summary");
  summary.innerText = summaryText;
  document.querySelector("#todo-list").appendChild(summary);
};

//Create a list of <p> todos DOM Elements
const generateTodoDOM = todosElements => {
  const domElements = [];

  //create the DOM elements <div> + <span> + <button>
  todosElements.forEach(element => {
    const domDiv = document.createElement("div");
    domDiv.setAttribute("class", "todo-item");

    const domCheckbox = document.createElement("input");
    domCheckbox.setAttribute("type", "checkbox");
    domCheckbox.checked = element.completed;
    domCheckbox.addEventListener("click", event => {
      checked = event.target.checked;
      updateTodoStatus(element.id);
    });

    const domSpan = document.createElement("span");
    domSpan.innerText = element.text;

    const domButton = document.createElement("button");
    domButton.textContent = "x";
    domButton.setAttribute("onclick", `removeTodo(\"${element.id}\")`);

    domDiv.appendChild(domCheckbox);
    domDiv.appendChild(domSpan);
    domDiv.appendChild(domButton);
    domElements.push(domDiv);
  });

  return domElements;
};

//Render all todos available
let renderTodos = todoName => {
  let todosToShow = [];
  if (hideCompleted) {
    //apply todo filter
    todosToShow = todos.filter(element => !element.completed);
  } else {
    todosToShow = todos;
  }

  if (todoName) {
    todosToShow = todosToShow.filter(element =>
      element.text.toLowerCase().includes(todoName.toLowerCase())
    );
  }

  //create <p> elements representing all todos to show
  let todosPElements = generateTodoDOM(todosToShow);
  removeTodos();
  generateSummaryDOM(todosPElements.length);

  // append all todos wrapped in <p> elements into a #todo-list element
  todosPElements.forEach(pElement => document.querySelector("#todo-list").appendChild(pElement));
};
