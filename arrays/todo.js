const todos = [
  { text: "Order cat food", completed: false },
  { text: "Clean Kitchen", completed: false },
  { text: "Buy food", completed: false },
  { text: "Do work", completed: false },
  { text: "Exercise in the Gym", completed: false }
];

//1. Convert into a array of objects -> text:, completed:
//console.log(todos);
//2 . Create function to remove a todo by text value;
let updateTodo = function(todoText) {
  let todo = todos.find(function(element, index) {
    return todoText.toLowerCase() === element.text.toLowerCase();
  });

  todo.completed = !todo.completed;
};

let deleteCompletedTodos = function() {
  let elementsToDelete = todos.filter(function(element) {
    return element.completed;
  });
  elementsToDelete.forEach(function(element) {
    todos.find(function(todo, index) {
      if (todo != undefined && todo.text === element.text) {
        todos.splice(index, 1);
        console.log("Removed: ", element, "\n");
      }
    });
  });
};

let todosNotFinished = function() {
  return todos.filter(function(element, index) {
    return !element.completed;
  });
};

let sortTodos = function(todoList) {
  todoList.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (a.completed && !b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

updateTodo("buy food");
updateTodo("clean kitchen");
updateTodo("ORDER CAT FOOD");
sortTodos(todos);
console.log(todos);

//console.log("todos updated: \n", todos);
//console.log("Not finished:", todosNotFinished());
//deleteCompletedTodos();
//console.log("Todos after delete: \n", todos);
//deleteTodo(todos, "Buy Food") --> case insentive
//console.log(todos)
