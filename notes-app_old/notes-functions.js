// Read existing notes from local storage
const DATA = "DATA"; //storage's key

const getSavedNotes = () => {
  try {
    return JSON.parse(localStorage.getItem(DATA)) !== null
      ? JSON.parse(localStorage.getItem(DATA))
      : [];
  } catch (error) {
    return [];
  }
};

//Save all todos into localStorage space
const saveNotes = todos => {
  localStorage.setItem(DATA, JSON.stringify(todos));
};

//generate the DOM structure for a todo
const generateTodoDOM = (todo, index) => {
  const domDiv = document.createElement("div");

  const domA = document.createElement("a");
  domA.setAttribute("href", `edit.html#${todo.id}`);

  const domSpan = document.createElement("span");
  domSpan.textContent = todo.text;

  const domCheckbox = document.createElement("input");
  domCheckbox.setAttribute("type", "checkbox");

  const domButton = document.createElement("button");
  domButton.setAttribute("onclick", 'removeTodoElement("' + todo.id + '");');
  domButton.innerHTML = "x";

  domDiv.appendChild(domCheckbox);
  domA.appendChild(domSpan);
  domDiv.appendChild(domA);
  domDiv.appendChild(domButton);

  return domDiv;
};

//Add a todo element into the array object
const addTodoElement = todoName => {
  if (todoName) {
    let todo = {
      id: uuidv4(),
      text: todoName,
      notes: "",
      createAt: moment().valueOf(),
      updatedAt: moment().valueOf(),
      completed: false
    };
    todos.push(todo);
    saveNotes(todos);
    listTodos(todos, null);
  } else {
    alert("Inform a valid value stupid!");
  }
};

//List all todos according to the filter passed
const listTodos = (todos, todoFilter) => {
  if (todoFilter && todoFilter.text) {
    todos = todos.filter(element =>
      element.text.toLowerCase().includes(todoFilter.text.toLowerCase())
    );
  }

  todos = sortTodos(todos, todoFilter);

  document.querySelector("#todo-list").innerHTML = "";
  document.querySelector("#summary").innerHTML = `There are ${todos.length} to do:`;

  todos.forEach((element, index) =>
    document.querySelector("#todo-list").appendChild(generateTodoDOM(element, index))
  );
};

//Remove a todo from the Todo list
const removeTodoElement = elementId => {
  if (!elementId) {
    return;
  }
  if (window.confirm("Are you sure to delete this data?")) {
    deleteTodoById(elementId);
    listTodos(todos);
  }
};

//Delete a todo from the todos[] and persist the updated object
const deleteTodoById = elementId => {
  if (!elementId) {
    return;
  }

  const index = todos.findIndex(todo => todo.id === elementId);
  if (index > -1) {
    todos.splice(index, 1);
    saveNotes(todos);
  }
};

//Update a todo, changing the note title and the note info
const updateTodo = (todoId, todoTitle, todoNote) => {
  if (!todoId) {
    return;
  }

  const todoIndex = todos.findIndex(todo => todo.id === todoId);
  if (todoIndex > -1) {
    todos[todoIndex].text = todoTitle;
    todos[todoIndex].notes = todoNote;
    todos[todoIndex].updatedAt = moment().valueOf();
    saveNotes(todos);
  }
};

//Generate the last edited message
const generateLastEdited = timestamp => moment(moment(timestamp)).fromNow();

//Sort an Array object according to the sort criteria
const sortTodos = (todos, filterParam) => {
  if (!filterParam) {
    return todos;
  }

  switch (filterParam.sortBy) {
    case SORT_BY_EDITED:
      todos = todos.sort((a, b) => b.updatedAt - a.updatedAt);
      break;
    case SORT_BY_CREATED:
      todos = todos.sort((a, b) => b.createAt - a.createAt);
      break;
    default:
      //SORT_BY_ALPHABETICAL:
      todos = todos.sort((a, b) => {
        if (a.text.toLowerCase() < b.text.toLowerCase()) {
          return -1;
        } else if (a.text.toLowerCase() > b.text.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      });
  }
  return todos;
};
