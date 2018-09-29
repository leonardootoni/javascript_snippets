"use strict";
/**
 * Defines generic functions to handle a todo list object, add, delete, persist, recover
 * and sort data from localstorage.
 *
 * Pure Vanilla js Todo List implementation
 * Author: Leonardo Otoni
 * Creation date: Aug-2018
 *
 * Dependencies: objects.js
 */

//Store a passed todoList into the localStorage
const persistTodoList = function(todoList) {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
};

//Recover the todoList from the localStorage
const recoverTodoList = function() {
  try {
    return JSON.parse(localStorage.getItem(TODO_LIST_KEY));
  } catch (error) {
    return [];
  }
};

//Manage the id primary and unique key for the object todoList using a static property
const generateUniqueId = function() {
  if (!generateUniqueId.counter) {
    generateUniqueId.counter = 0;
  }

  if (todoList.length > 0 && generateUniqueId.counter === 0) {
    todoList.forEach(function(todo) {
      //assign the higher id to counter
      generateUniqueId.counter =
        generateUniqueId.counter < todo.id ? todo.id : generateUniqueId.counter;
    });
  }

  return ++generateUniqueId.counter;
};

//Set the completed todo State (true | false) in the todoList[]
const setTodoCompleted = function(todoId, completed) {
  const todo = todoList.find(function(element) {
    return element.id === todoId;
  });

  if (todo) {
    todo.completed = completed;
    todo.dateUpdated = Date.now();
  }
};

const findIndexInTodoList = function(todoId) {
  //TodoId can be Zero
  if (todoId === undefined || isNaN(todoId)) {
    return -1;
  } else {
    return todoList.findIndex(function(element) {
      return element.id === todoId;
    });
  }
};

//Delete a todo object into todoList[] from a given todoId.
const deleteTodoFromList = function(todoId) {
  const todoIndex = findIndexInTodoList(todoId);
  if (todoIndex > -1) {
    //delete element from todoList[]
    todoList.splice(todoIndex, 1);
  }
};

//Update a todo object into todoList[] from a given todoId.
const updateTodoFromList = function(todoId, todoObj) {
  const todoIndex = findIndexInTodoList(todoId);
  if (todoIndex > -1) {
    //update element from todoList[]
    todoList[todoIndex] = todoObj;
  }
};

//Sort the todoList[] by the dateAdded property
const sortTodosByDateAdded = function(todoList) {
  let sortedList = [];
  sortedList = todoList.sort(function(a, b) {
    return b.dateAdded - a.dateAdded;
  });

  return sortedList;
};

//Sort tje todoList[] by the dateUpdated property
const sortTodosByDateUpdated = function(todoList) {
  let sortedList = [];
  sortedList = todoList.sort(function(a, b) {
    return b.dateUpdated - a.dateUpdated;
  });

  return sortedList;
};

//Sort the todoList[] object alphabetically
const sortTodosAlphabetically = function(todoList) {
  let sortedList = todoList.sort(function(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedList;
};

const filterTodos = function(filter) {
  const filteredData = todoList.filter(function(element) {
    return element.name.toLowerCase().includes(filter.toLowerCase());
  });

  return filteredData;
};
