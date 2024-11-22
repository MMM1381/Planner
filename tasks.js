// State of the app
const tasks = ['Walk the dog', 'Water the plants', 'Sand the chairs']


// HTML element references
const newTask = document.getElementById('newTask')
const btn = document.getElementById('btn')
const tasksList = document.getElementById('tasksList')

tasks.forEach(task => {
    console.log(task)
    tasksList.innerHTML += "<li> ${task} </li>";
});