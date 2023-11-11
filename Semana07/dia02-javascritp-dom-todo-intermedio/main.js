// console.log("hola javascript")

const  tasks = [] // Aqui almacenaremos las tareas

const taskInput=document.querySelector('.task__input')//Es la representación de un input desde javascript
const taskList=document.querySelector('.task__list')
console.log(taskInput, taskList)

taskInput.addEventListener('keypress', function(event){
    // console.log(event.key)
    if(event.key === 'Enter'){
        
        // console.log("agregando una nueva tarea")
        const input = event.target
        const value = input.value
        

        const newTask = {
            title: value,
            done: false 
        }

        // console.log(newTask)
        // console.log(tasks)

        tasks.push(newTask)

        // console.log(tasks)
        taskInput.value = ''
        renderTasks()
        
    }
})


function checkTask(event, currentIndex){
    console.log('La tarea seleccionada tiene el indice', currentIndex)
  // TODO: Hacer que el todo se tache usando solo Javascript (10 minutos)
  const checkboxSelected = event.target
  const liParent = checkboxSelected.parentElement
  liParent.classList.toggle('isChecked')

  const taskSelected = tasks[currentIndex]
  taskSelected.done = !taskSelected.done

  console.log(tasks)
}

function removeTask(event, currentIndex){
    console.log('Eliminando', currentIndex)
    event.target.parentElement.remove()

    const newTasks = tasks.filter((tesk, index)=> index !== currentIndex)
}

function renderTasks(){
    // console.log("dibujando las tareas....")
    let list = ''
    tasks.forEach(function(task, index){
        // console.log(task, index)
        // list = list + task.title
        list = list + `
            <li id="item">
                <input type="checkbox" 
                onchange = "checkTask(event, ${index})">
                <span>${task.title}</span>
                <button onclick="removeTask(event, ${index})">Borrar</button>
            </li>
    `
    
    })

    taskList.innerHTML = list
} 