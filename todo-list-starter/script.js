// let todoTasksText = ["Walk Chilli", "Make Dinner"];
// let todoTasksStatus = [false, true];

// let completeButtonElement = document.createElement("input");
//     completeButtonElement.type = "button";
//     completeButtonElement.value = "Completed";
//     completeButtonElement.onclick = function () {
//         toggleComplete(index);
//     };
//     newTodoTaskElement.appendChild(completeButtonElement);
//     todoList.appendChild(newTodoTaskElement);




// function createNewTodoItemElement (task, index){
//     // let todoTasksText.forEach((task, index) => {
//     let newTodoTaskTextElement = document.createElement("p");
//     newTodoTaskTextElement.innerText = task;

//     if (todoTasksStatus[index] ==true) {
//         newTodoTaskTextElement.classList.add("complete");
//     }
//     let newTodoTaskElement =  document.createElement("li");
//     newTodoTaskElement.appendChild(newTodoTaskTextElement);
//     return newTodoTaskElement;
// }




    
// function addTask() {}

// function updateTodoList() {
//     let todoList =  document.getElementById("todo-list");
//     todoList.innerHTML = "";
//     todoTasksText.forEach((task, index) => {
//         let newTodoTaskElement = createNewTodoTaskElement(task, index);
//         todoList.appendChild(newTodoTaskElement);
//     });
// }

// // function createNewTodoItemElement(todoItem, index) {}

// function toggleComplete(index) {
//     if (todoTasksStatus[index] ==false) {
//         todoTasksStatus[index] = true;
//     } else {
//         todoTasksStatus[index] = false; 
//     }
//     console.log(todoTasksStatus);
// }


let todoTaskText = ["Walk Chilli", "Make Dinner", "Do Stuff"];
let todoTaskStatus = [false, true];
let todoTaskImportance = [false, true, true];

function addTask() {
  let newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTaskText.push(newTask.value);
    todoTaskStatus.push(false);
    todoTaskImportance.push(false);
    newTask.value = "";
    updateTodoList();
  }
}

function updateTodoList() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoTaskText.forEach((task, index) => {
    let newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  });
}

function createNewTodoItemElement(task, index) {
  let newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  if (todoTaskImportance[index] == true) {
    newTodoTaskTextElement.classList.add("important");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  let completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);

  let importantButtonElement = document.createElement("input");
  importantButtonElement.type = "button";
  importantButtonElement.value = "Important";
  importantButtonElement.onclick = function () {
    toggleImportant(index);
  };
  newTodoTaskElement.appendChild(importantButtonElement);


  return newTodoTaskElement;
}

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

function toggleImportant(index) {
    // If the to do is not complete
    if (todoTaskImportance[index] == false) {
      // Set the todo to complete
      todoTaskImportance[index] = true;
    } else {
      // Else the todo is already complete so set it to incomplete
      todoTaskImportance[index] = false;
    }
    updateTodoList();
  }

updateTodoList();
console.log(todoTaskText,todoTaskStatus,todoTaskImportance)