"use strict";
/**
 * Defines objects and constants necessary to handle a todo list
 *
 * Pure Vanilla js Todo List implementation
 * Author: Leonardo Otoni
 * Creation date: Aug-2018
 *
 * Dependencies: none.
 */

//Datastructure to store all todos
let todoList = [];

//Constants that reffers to todoObject properties
const BY_DATE_ADDED = "BY_DATE_ADDED";
const BY_DATE_UPDATED = "BY_DATE_UPDATED";
const ALPHABETICALLY = "ALPHABETICALLY";

//Todo object structure. It may be instatiated for any todo in the datasctructure
const todoObject = {
  id: "",
  name: "",
  notes: "",
  dateAdded: "",
  dateUpdated: "",
  completed: false
};

//General constants
const URL_TODO_ID_PARAM = "todoid";
//Default key used to store and recover a todo list from the localstorage
const TODO_LIST_KEY = "TODO_LIST_KEY";
