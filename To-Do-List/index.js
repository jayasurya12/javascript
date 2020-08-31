const addtodo =document.getElementById("todo");
const todoList =document.getElementById('Todolist');
addtodo.addEventListener('keypress',(e)=>{
    if(e.code ==="Enter" && e.target.value !=="")
    {
        let todo =e.target.value;
        let todoItem = document.createElement('li');
        let ides=new Date().getTime();
        todoItem.innerHTML =`
            <input id="${ides}" type="checkbox"/>
            <label for="${ides}">${todo}</label>
        `;
        todoList.appendChild(todoItem);
        addtodo.value="";
    };
});
todoList.addEventListener('click',(e) =>{
    if(e.target.checked){
        e.target.parentElement.classList.add('completed');
    }
    else{
        e.target.parentElement.classList.remove('completed');
    }
});
