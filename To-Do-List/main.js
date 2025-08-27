// const taskInput = document.getElementById("taskInput")as HTMLInputElement;
// const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
// const taskList = document.getElementById("taskList")as HTMLUListElement;
// const clearBtn = document.getElementById("ClearBtn")as HTMLButtonElement;
// interface Task{
//     text:string;
//     completed:boolean;
// };
// //  load task on local storage
// window.onload = loadTasks;
// addBtn.addEventListener("click",addTask);
// taskInput.addEventListener("keypress",function(e){
// if (e.key == "Enter"){
//     addTask() };
// });
// // clear all task button
// clearBtn.addEventListener("click",clearAllTasks);
// function addTask(){
//     const taskText = taskInput.value.trim();
//     if (taskText === "")return;
//     const task = {text:taskText, completed:false};
//     saveTaskToStorage(task);
//     renderTask(task);
//     taskInput.value == "";
// };
// // Render tasks
// function renderTask(task){
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.textContent = task.text;
//   span.style.cursor = "pointer";
//   if (task.completed){
//     li.classList.add("completed")
//   };
// //   toggle button
//   span.addEventListener("click", () => {li.classList.toggle("completed")
//   updateTaskStatus(task.text, li.classList.contains("completed"))
// })
// // delete button
//  const delBtn = document.createElement("Button");
//  delBtn.textContent = "Delete";
//  delBtn.onclick =()=>{
//   li.remove();
//   deleteTaskFromStorage(task.text);
//   toggleClearAllBtn();
//  }
//  li.appendChild(span)
//  li.appendChild(delBtn)
//  taskList.appendChild(li)
// }
// // save tasks to local storage
// function saveTaskToStorage(task){
//   let tasks :Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
//   tasks.push(task);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };
// // update tasks
// function updateTaskStatus(taskText, completed){
//   let tasks :Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
//   tasks = tasks.map(t => {
//     if(t.text === taskText){
//         t.completed = completed;
//     }
//         return t;
//     })
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// };
// // loadtasks in local storage
// function loadTasks(){
//       let tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
//       tasks.forEach(task => renderTask(task));
//       toggleClearAllBtn();
// };
// // delete task from list
// function deleteTaskFromStorage(taskText){
//     let tasks:Task[] = JSON.parse(localStorage.getItem("tasks")||"[]");
//     tasks = tasks.filter(t => t.text !== taskText);
//     localStorage.setItem("tasks",JSON.stringify(tasks));
// };
// function clearAllTasks(){
//     taskList.innerHTML ="";
//     localStorage.removeItem("tasks");
//     toggleClearAllBtn();
// };
// function toggleClearAllBtn(){
//     let tasks:Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
//     clearBtn.disabled = tasks.length === 0;
// };
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("ClearBtn");
// Load tasks on window load
window.onload = loadTasks;
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter")
        addTask();
});
clearBtn.addEventListener("click", clearAllTasks);
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "")
        return;
    const task = { text: taskText, completed: false };
    saveTaskToStorage(task);
    renderTask(task);
    taskInput.value = "";
    toggleClearAllBtn();
}
// Render single task
function renderTask(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.cursor = "pointer";
    if (task.completed)
        li.classList.add("completed");
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTaskStatus(task.text, li.classList.contains("completed"));
    });
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
        li.remove();
        deleteTaskFromStorage(task.text);
        toggleClearAllBtn();
    };
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
}
// Save task
function saveTaskToStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Update task
function updateTaskStatus(taskText, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.map((t) => {
        if (t.text === taskText)
            t.completed = completed;
        return t;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Load all tasks
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => renderTask(task)); // ✅ corrected
    toggleClearAllBtn();
}
// Delete task
function deleteTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks = tasks.filter((t) => t.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Clear all tasks
function clearAllTasks() {
    taskList.innerHTML = "";
    localStorage.removeItem("tasks");
    toggleClearAllBtn();
}
// Toggle Clear Button
function toggleClearAllBtn() {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    clearBtn.disabled = tasks.length === 0;
}
