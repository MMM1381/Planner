// State of the app (loaded from localStorage)
let tasks;
try {
    const data = localStorage.getItem('tasks');
    tasks = data ? JSON.parse(data) : []; // Parse only if data exists
} catch (error) {
    console.error("Failed to parse tasks from localStorage:", error);
    tasks = []; // Default to an empty array on error
}


// HTML element references
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const tasksList = document.getElementById('tasksList');

// Functions

function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const input = document.createElement('input');
    const saveBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    // Read Mode Elements
    span.textContent = task;
    span.style.display = 'inline';
    span.addEventListener('dblclick', () => {
        toggleEditMode(true);
    });

    deleteBtn.innerHTML = '&#10004;';
    deleteBtn.style.margin = '20px';
    deleteBtn.addEventListener('click', () => {
        removeTask(li);
    });

    // Edit Mode Elements
    input.type = 'text';
    input.value = task;
    input.style.display = 'none';

    saveBtn.textContent = 'Save';
    saveBtn.style.display = 'none';
    saveBtn.addEventListener('click', () => {
        if (input.value.trim().length > 0) {
            updateTask(li, input.value);
            toggleEditMode(false);
        }
    });

    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.display = 'none';
    cancelBtn.addEventListener('click', () => {
        toggleEditMode(false);
    });

    // Add all elements to the list item
    li.append(span, input, saveBtn, cancelBtn, deleteBtn);

    // Helper function to toggle between read and edit modes
    function toggleEditMode(isEditing) {
        span.style.display = isEditing ? 'none' : 'inline';
        input.style.display = isEditing ? 'inline' : 'none';
        saveBtn.style.display = isEditing ? 'inline' : 'none';
        cancelBtn.style.display = isEditing ? 'inline' : 'none';
    }

    return li;
}

function addTask() {
    const description = input.value.trim();
    if (description.length > 0) {
        const taskItem = renderTask(description);
        tasks.push(description);
        tasksList.append(taskItem);
        saveTasksToLocalStorage(); // Save to localStorage
        input.value = '';
        btn.disabled = true;
    }
}

function removeTask(taskElement) {
    const index = Array.from(tasksList.children).indexOf(taskElement);
    if (index > -1) {
        tasks.splice(index, 1);
        taskElement.remove();
        saveTasksToLocalStorage(); // Save to localStorage
    }
}

function updateTask(taskElement, newDescription) {
    const index = Array.from(tasksList.children).indexOf(taskElement);
    if (index > -1) {
        tasks[index] = newDescription;
        const span = taskElement.querySelector('span');
        span.textContent = newDescription;
        saveTasksToLocalStorage(); // Save to localStorage
    }
}

// Initialize the view
function loadTasks() {
    tasks.forEach((task) => {
        tasksList.append(renderTask(task));
    });
}

// Enable the Add button when at least three characters are typed
input.addEventListener('input', () => {
    btn.disabled = input.value.trim().length < 3;
});

// Add task on Enter key press
input.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter' && input.value.trim().length >= 3) {
        addTask();
    }
});

// Add task on button click
btn.addEventListener('click', addTask);

// Load tasks from localStorage
loadTasks();
