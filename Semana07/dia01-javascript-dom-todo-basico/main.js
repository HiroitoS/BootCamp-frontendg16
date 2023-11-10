const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event){
    //Se ejecutara cuando hagamos click en el boton "Añadir"
    console.log(taskInput.value)

    if(taskInput === ""){
        alert('El campo es requerido')
        return 
    }
    // const button = document.createElement('button')
    // button.textContent = 'Hola soy un boton'
    // document.body.appendChild(button)
    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)

    const span = document.createElement('span')
    span.textContent = taskInput.value
    li.appendChild(span)

    //Añadir un boton al li con el texto 'Borrar' y al hacer click en el boton que se elimine de la fila de la tarea
    const button = document.createElement('button')
    button.textContent = 'Borrar'
    li.appendChild(button)
    // li.textContent = taskInput.value
    taskList.appendChild(li)

    taskInput.value = ''
})

taskList.addEventListener('click' , function(event){
    const target = event.target

    if(target.tagName === 'INPUT' && target.typo === 'checkbox'){
        target.classList.toggle('completed')
    }
    if(target.tagName === 'BUTTON'){
        target.parentElement.remove()
    }
})
button.addEventListener('click', function(event){

})