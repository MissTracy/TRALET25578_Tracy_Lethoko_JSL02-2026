
//variables for user/task1 input

const userTask = prompt("Enter task 1 title: ");
const userTaskDesc = prompt("Enter task description: ");
const invalidStatus =
  "Invalid status. Please enter 'todo', 'doing', or 'done'.";
let tasktStatusPrompt = prompt(
  "please enter task status: 'todo', 'doing', or 'done'.",
).toLocaleLowerCase();

//loop for task1

while (userTask.length && userTaskDesc.length > 1) {
  if (
    tasktStatusPrompt !== "todo" &&
    tasktStatusPrompt !== "doing" &&
    tasktStatusPrompt !== "done"
  ) {
    prompt(invalidStatus);
  } else if (tasktStatusPrompt === "todo" || tasktStatusPrompt === "doing") {
    console.log("No tasks completed, let's get to work!");
  } else if (tasktStatusPrompt === "done") {
    console.log("Title: " + userTask + ", status: done");
  }
}

//variables for user/task2 input

const userTask2 = prompt("Enter task 2 title: ");
const userTaskDesc2 = prompt("Enter task 2 description: ");
let tasktStatusPrompt2 = prompt(
  "please enter task 2 status: 'todo', 'doing', or 'done'.",
).toLocaleLowerCase();

//loop for task2

while (userTask2.length && userTaskDesc2.length > 1) {
  if (
    tasktStatusPrompt2 !== "todo" &&
    tasktStatusPrompt2 !== "doing" &&
    tasktStatusPrompt2 !== "done"
  ) {
    prompt(invalidStatus);
  } else if (tasktStatusPrompt2 === "todo" || tasktStatusPrompt2 === "doing") {
    console.log("No tasks completed, let's get to work!");
  } else if (tasktStatusPrompt2 === "done") {
    console.log("Title: " + userTask2 + ", status: done");
  }
}
