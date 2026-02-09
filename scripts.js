const userTask = prompt("Enter task 1 title: ");
const invalidStatus =
  "Invalid status. Please enter 'todo', 'doing', or 'done'.";
const tasktStatusPrompt = prompt("please enter task status: ");

if (userTask.length > 1) {
  if (
    tasktStatusPrompt !== "todo" &&
    tasktStatusPrompt !== "doing" &&
    tasktStatusPrompt !== "done"
  ) {
    prompt(invalidStatus);
  } else if (tasktStatusPrompt === "todo" || tasktStatusPrompt === "doing") {
    prompt("No tasks completed, let's get to work!");
  } else if (tasktStatusPrompt === "done") {
    prompt("Title: " + userTask + "Status: done");
  }
}
