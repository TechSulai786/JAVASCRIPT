let input = document.getElementById('input')

let btn = document.getElementById('add')

let todolist =document.getElementById('todoList')

let todos=[];

btn.addEventListener('click',()=>{
    todos.push(input.value)
    addtdl(input.value)
    input.value='';
})

function addtdl(todo){
let para = document.createElement('p')
para.innerHTML = todo;
todolist.appendChild(para)
para.addEventListener('click',()=>{
para.style.textDecoration = 'line-through'
remove(todo)

})
para.addEventListener('dblclick',()=>{
    todolist.removeChild(para)
    remove(todo)
})

}

function remove(todo){
let index = todos.indexOf(tdl)
if(index > 1){
    todos.splice(index,1)
}
}
