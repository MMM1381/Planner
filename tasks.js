// State of the app
const tasks = ['Walk the dog', 'Water the plants', 'Sand the chairs']


// HTML element references
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const tasksList = document.getElementById('tasksList')

// tasks.forEach(task => {
//     tasksList.innerHTML += `<li> ${task} </li>`;
// });

// Functions


function renderListReadMode(task) {
    tasksList.innerHTML += `<li> ${task} </li>`;
    }
    
function addTodo() {
// TODO: implement me!
}


// Initialize the view
for (const task of tasks) { 
    console.log(task)
    tasksList.append(renderListReadMode(task))
   }

input.addEventListener('input', () => { 
    btn.disabled = input.value.length < 3
    })

input.addEventListener('keydown', ({ key }) => { 
if (key === 'Enter' && input.value.length >= 3) {
addTodo()
}
})
btn.addEventListener('click', () => { 
addTodo()
})
