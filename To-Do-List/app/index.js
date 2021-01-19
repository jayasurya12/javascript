// const inputText=document.getElementById('inputBox');
// const input=document.getElementById('toDo');

// inputText.addEventListener('keypress',(e)=>{
//     if(e.code ==='Enter' && e.target.value !== ''){
//        let todo=inputText.value;
//        let todoItem=document.createElement('li');

//         todoItem.innerHTML=` 
//         <input id='1'type='checkbox' />
//          <label for='1'>${todo}</label>`;
//         todoItem.setAttribute('class','new');
//         input.append(todoItem);

//         inputText.value='';
//     }
    
// });

// input.addEventListener('click',(e) =>{
//     if(e.target.checked){
//         e.target.parentElement.classList.add('complete');
//     }
//     else{
//         e.target.parentElement.classList.remove('complete');
//     }
// })          


// const textValue=document.getElementById('textBox');

// const button=document.getElementById('But');

// const divId=document.getElementById('divId');
// var typeArr=[];

// function handleClicker(){
//     this.classList.toggle('super');
// }

// function local(){
//     localStorage.setItem('task',typeArr);
// }

// function main(){
    
//     var create=document.createElement('div');
//     create.innerText=textValue.value;
//     create.setAttribute('class','new');
//     create.addEventListener('click',handleClicker);
//     divId.append(create);
//     textValue.value='';
// }
// function happy(){

//     if((textValue.value).length === 0) return;
//     typeArr.push(textValue.value);
//     local();
//     main()
//     console.log(typeArr)
// }

// function key(e){

//     if(e.keyCode===13 && e.target.value !=='') main()
// }

// button.addEventListener('click',happy);
// textValue.addEventListener('keyup',key);

const inputBox=document.getElementById('textBox');

const buttonClick=document.getElementById('But');

const divContainer=document.getElementById('divId');
const newArr=[];

function eventClick(){
    this.classList.toggle('super');
}

function doubbleClik(){
    this.remove();  
}
function main(inputBoxValue){
    const createDiv=document.createElement('div');

    createDiv.innerText=inputBoxValue;
    createDiv.setAttribute('class','task');

    createDiv.classList.toggle('new');
    createDiv.addEventListener('click',eventClick);
    createDiv.addEventListener('dblclick',doubbleClik);

    divContainer.append(createDiv);

    inputBox.value='';
}

function getitem(){
    let tasks=localStorage.getItem('Task');
    if(!tasks){
        return;
    }
    tasks=JSON.parse(tasks);
    for(index in tasks){
        main(tasks[index]);
    }
}
getitem();

function loc(){
    localStorage.setItem('Task',JSON.stringify(newArr));
}

function addevent(){
    const inputBoxValue=inputBox.value;
    if(inputBoxValue.length === 0) return;
    newArr.push(inputBoxValue);
    
    loc();
    main(inputBoxValue);
}

function key(e){
    if(e.keyCode===13 && e.target.value !=='') buttonEvent();
}

function buttonEvent(){
    if(inputBox.value.length === 0) return;   
    addevent();
}

inputBox.addEventListener('keypress',key);
buttonClick.addEventListener('click',buttonEvent);

