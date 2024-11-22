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

    const li = document.createElement('li'); 
    const span = document.createElement('span'); 
    const button = document.createElement('button'); 


    span.textContent = task
    span.addEventListener('dblclick', () => { 

        const idx = tasks.indexOf(task);
        tasksList.replaceChild( 
            renderListEditMode(task),
            tasksList.childNodes[idx]
            )
    })

    li.append(span)

    button.innerHTML = '&#10004;'
    button.style.margin='20px'

    button.addEventListener('click', () => { 
        const idx = tasks.indexOf(task)
        removeTodo(idx)
    })


    li.append(button)
    return li
}

function renderListEditMode(task) {

    const li = document.createElement('li') 
    const input = document.createElement('input') 
    const cancelBtn = document.createElement('button') 
    const saveBtn = document.createElement('button') 


    input.type = 'text'
    input.value = task
    li.append(input)


    saveBtn.textContent = 'Save'
    saveBtn.addEventListener('click', () => { 
        const idx = tasks.indexOf(task)
        updateTodo(idx, input.value)
    })
    li.append(saveBtn)
    
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', () => { 
    const idx = tasks.indexOf(task)
        tasksList.replaceChild( 
        renderListReadMode(task), tasksList.childNodes[idx] )
    })
    li.append(cancelBtn)
    return li
   }

function addTodo() {
    
    input.value = ''
}

function updateTodo(index, description) {
    // TODO: implement me!
    }

    
function removeTodo(index) {
    // TODO: implement me!
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
