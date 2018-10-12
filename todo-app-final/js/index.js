"use strict";
/**
 * Add eventListeners and specific page behaviours to handle a Todo list.
 *
 * Pure Vanilla js Todo List implementation
 * Author: Leonardo Otoni
 * Creation date: Aug-2018
 *
 * Dependencies: objects.js / functions.js
 */

//Event Listeners section
window.addEventListener("load", function() {
  todoList = recoverTodoList();
  displayTodos();
  document.querySelector("#todoName").focus();
});

document.querySelector("#addButton").addEventListener("click", function(evt) {
  addTodo();
});

document.querySelector("#clearButton").addEventListener("click", function(evt) {
  document.querySelector("#todoName").value = "";
  displayTodos();
});

document.querySelector("#sortSelect").addEventListener("change", function(evt) {
  displayTodos();
});

document.querySelector("#todoName").addEventListener("keyup", function(evt) {
  const fieldText = evt.target.value;

  if (fieldText.trim() === "") {
    displayTodos();
  } else {
    const filteredTodos = filterTodos(fieldText);
    displayTodos(filteredTodos);
  }
});

////

///Create a new Todo object and call save and list methods
const addTodo = function() {
  const todoNameField = document.querySelector("#todoName").value;
  if (!todoNameField) {
    return;
  } else {
    const newTodoObj = Object.create(todoObject);
    newTodoObj.id = generateUniqueId();
    newTodoObj.name = todoNameField;
    newTodoObj.dateAdded = Date.now();
    newTodoObj.dateUpdated = Date.now();
    newTodoObj.completed = false;

    todoList.push(newTodoObj);
    persistTodoList(todoList);
    displayTodos();

    document.querySelector("#todoName").value = "";
  }
};

//print all todo elements from the todoList[] object putting then into the <div>
//if list is provided, will use a filtered list, otherwise the complete todoList[]
const displayTodos = function(list) {
  if (!list) {
    list = sortDataSet(todoList); //Global todoList[]
  } else {
    list = sortDataSet(list);
  }

  displayUpdatedSummary(list.length);

  const divList = document.querySelector("#todoList");
  divList.innerHTML = "";

  list.forEach(function(todo) {
    const divDomId = `div-todo-${todo.id}`;
    const spanDomId = `span-todo-${todo.id}`;

    //Define a div wrapper
    const div = document.createElement("div");
    div.setAttribute("id", `${divDomId}`);

    //Define a checkbox
    const anchor = document.createElement("a");
    anchor.setAttribute("href", `html/edit.html?${URL_TODO_ID_PARAM}=${todo.id}`);

    //Define a span text
    const span = document.createElement("span");
    span.setAttribute("id", spanDomId);
    span.innerText = todo.name;

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", `ck-${todo.id}`);
    if (todo.completed) {
      checkBox.setAttribute("checked", "");
      span.classList.add("todo-completed");
    }

    checkBox.addEventListener("click", function(event) {
      const span = document.querySelector(`#${spanDomId}`);

      if (event.target.checked) {
        span.classList.add("todo-completed");
      } else {
        span.classList.remove("todo-completed");
      }

      // update the Todo State
      setTodoCompleted(todo.id, event.target.checked);

      //save todoList
      persistTodoList(todoList);
    });

    //Define the removal button
    const removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.addEventListener("click", function(event) {
      deleteTodoFromList(todo.id);
      persistTodoList(todoList);
      document.querySelector(`#${divDomId}`).remove();
      displayUpdatedSummary(todoList.length);
    });

    anchor.appendChild(span);

    div.appendChild(checkBox);
    div.appendChild(anchor);
    div.appendChild(removeButton);
    div.classList.add("list-item")
    divList.appendChild(div);
  });
};

//Print the todo summary on the screen
const displayUpdatedSummary = function(todoLengthList) {
  if (!todoLengthList) {
    todoLengthList = 0;
  }

  const summaryText = `[ There are ${todoLengthList} elements ]`;
  const spanSummary = document.createElement("span");
  spanSummary.textContent = summaryText;

  let d = document.querySelector("#summary");
  d.innerHTML = "";
  d.classList.add("empty-message");
  d.appendChild(spanSummary);
};

//Sort method orchestrator
const sortDataSet = function(todoList) {
  switch (document.querySelector("#sortSelect").value) {
    case BY_DATE_ADDED:
      return sortTodosByDateAdded(todoList);
    case BY_DATE_UPDATED:
      return sortTodosByDateUpdated(todoList);
    default:
      return sortTodosAlphabetically(todoList);
  }
};
