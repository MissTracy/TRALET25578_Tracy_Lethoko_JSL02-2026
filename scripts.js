const userTask = prompt("Enter task 1 title: ");
const userTaskDesc = prompt("Enter task description: ");

const invalidStatus =
  "Invalid status. Please enter 'todo', 'doing', or 'done'.";
const tasktStatusPrompt = prompt(
  "please enter task status: ",
).toLocaleLowerCase();

if (userTask.length && userTaskDesc.length > 1) {
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
