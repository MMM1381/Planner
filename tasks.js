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
    return task
    }
    
function addTodo() {

    input.value = ''
}


// Initialize the view
for (const task of tasks) { 
    tasksList.append(renderListReadMode(task))
   }


// when typying enabel the ADD button after atleast three words are typed
input.addEventListener('input', () => btn.disabled  = input.value.length<3 )



// when enter is pressed an atleast three words are typed 
input.addEventListener('keydown', ({ key }) => { 
    if (key === 'Enter' && input.value.length >= 3) {
        addTodo()
    }
})

// when button clicked
btn.addEventListener('click', () => { 
    addTodo()
})
