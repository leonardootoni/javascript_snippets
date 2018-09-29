"use strict";
/**
 * Add eventListeners and specific page behaviours to edit an specific todo.
 *
 * Pure Vanilla js Todo List implementation
 * Author: Leonardo Otoni
 * Creation date: Aug-2018
 *
 * Dependencies: objects.js / functions.js
 */

//General constans and variables
const ERROR_MESSAGE_INVALID_ID = "Invalid parameter. The operation failed.";
const ERROR_MESSAGE_EMPTY_NAME = "A todo name must be provided.";
const ERROR_MESSAGE_EMPTY_NOTES = "A todo note must be provided.";
const CONFIRM_DELETE_MESSAGE = "The data will be delete permanently. \nAre you sure to proceed?";

const INDEX_HTML = "../index.html";
const SUCCESS_EDIT_MSG = "The Todo activity was successfull updated";
let todoObj = "";

//Form fields reference
const nameField = document.querySelector("#name");
const notesField = document.querySelector("#notes");
const dateAddedField = document.querySelector("#date-added");
const dateUpdatedField = document.querySelector("#date-updated");
const completedField = document.querySelector("#completed");

///Event Listeners

//from the todoid URL parameter, recover and provides the todo to edition
window.addEventListener("load", function(event) {
  recoverTodoData();
});

//Default event listeners
document.querySelector("#edit-form").addEventListener("submit", function(event) {
  //block the defaul behaviour to submit the form. The action will be performed by updateButton
  event.preventDefault();
});

document.querySelector("#update-button").addEventListener("click", function(event) {
  if (validateForm()) {
    updatedTodoList();
    persistTodoList(todoList);
    alert(SUCCESS_EDIT_MSG);
    location.assign(INDEX_HTML);
  }
});

document.querySelector("#cancel-button").addEventListener("click", function(event) {
  location.assign(INDEX_HTML);
});

document.querySelector("#delete-button").addEventListener("click", function(event) {
  if (confirm(CONFIRM_DELETE_MESSAGE)) {
    deleteTodoFromList(todoObj.id);
    persistTodoList(todoList);
    location.assign(INDEX_HTML);
  }
});

///

//read the url param to recover the todoId and prepare the form with data
const recoverTodoData = function() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const todoid = params.get(`${URL_TODO_ID_PARAM}`);

  if (isNaN(todoid)) {
    //Zero is a valid todoid
    abortOperation();
  }

  todoList = recoverTodoList(); //Load the todoList from the storage
  todoObj = todoList.find(function(element) {
    return element.id === Number(todoid);
  });

  if (!todoObj) {
    abortOperarion();
  } else {
    setDataOnForm();
  }
};

//Abort the edit operation and redirect the user to the initial page
const abortOperarion = function() {
  alert(ERROR_MESSAGE_INVALID_ID);
  location.assign(INDEX_HTML);
};

const setDataOnForm = function() {
  nameField.value = todoObj.name;
  notesField.value = !todoObj.notes ? "" : todoObj.notes;
  dateAddedField.value = new Date(todoObj.dateAdded).toLocaleString();
  dateUpdatedField.value = new Date(todoObj.dateUpdated).toLocaleString();
  completedField.checked = todoObj.completed;
};

//default form validation
const validateForm = function() {
  let isValid = false;

  if (nameField.value.trim() === "") {
    alert(ERROR_MESSAGE_EMPTY_NAME);
  } else if (notesField.value.trim() === "") {
    alert(ERROR_MESSAGE_EMPTY_NOTES);
  } else {
    isValid = true;
  }
  return isValid;
};

//Get the form data, build a new todo obj and update the todoList
const updatedTodoList = function() {
  todoObj.name = nameField.value;
  todoObj.notes = notesField.value;
  todoObj.dateAdded = Date.parse(dateAddedField.value);
  todoObj.dateUpdated = Date.now();
  todoObj.completed = completedField.checked;

  //invokes the generic update method
  updateTodoFromList(todoObj.id, todoObj);
};
