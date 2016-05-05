//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so user can manage daily tasks

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName('button')[0]; //first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New task list item
var createNewTaskElement = function(taskString) {
  //Create list item 
  var listItem = document.createElement('li');
    
  //input (checkbox)
  var checkbox = document.createElement('input'); //type=checkbox
  //label
  var label = document.createElement('label');
  //input (text)
  var editInput = document.createElement('input');//type=text
  //button.edit
  var editButton = document.createElement('button');
  //button.delete
  var deleteButton = document.createElement('button');
  
  //each elements needs modifying
  
  checkbox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  //each element needs appending
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

//Add a new task
var addTask = function(){
  console.log("add task...");
  //Create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  
  //Append listItem to incompleteTasksHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  
  taskInput.value = "";
}
  
//Edit existing task
var editTask = function(){
  console.log("edit task...");
  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');
  
  var containsClass = listItem.classList.contains('editMode');
  
  //If the class of the parent is .editmode:
  if(containsClass){
    //Switch from .editmode
    //label text become the input value
    label.innerText = editInput.value;
  } else {
    //Switch to .editmode
    //Input value bacames the label text
    editInput.value = label.innerText;
  }
  //toggle .editmode on the list item
  listItem.classList.toggle('editMode');
}

//Delete tasks
var deleteTask = function(){
  console.log("delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove the parent list item from the <ul>
  ul.removeChild(listItem);
}

//Mark task as complete
var taskCompleted = function() {
  console.log("completed task...");
  //Append the list item to #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("incomplete task...");
  //append the list item to #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler){
  console.log("bind tasks event handler...");
  //select it's children
  var checkbox = taskListItem.querySelector('input[type=checkbox]');
  var editButtton = taskListItem.querySelector('button.edit');
  var deletButtton = taskListItem.querySelector('button.delete');
  
  //bind editTask to edit button
  editButtton.onclick = editTask;
  //bind deleteTask to delete button
  deletButtton.onclick = deleteTask;
  //bind checkboxEventHandler to the checkbox
  checkbox.onchange = checkboxEventHandler;
}

var ajaxRequest = function() {
  console.log('AJAX request...');
}

//Set the click handler to the addTask function
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

//Cycle over the incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  //bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
//Cycle over the completedTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}










