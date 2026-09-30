let count = 1;
function saveTodos() {
    let all = document.querySelectorAll(".todo");

    let tasks = [];

    for (let i = 0; i < all.length; i++) {
        tasks.push(all[i].children[2].textContent);
    }

    localStorage.setItem("todos", JSON.stringify(tasks));
}

function addTop(){

createTask("top");

}

function addBottom(){

createTask("bottom");

}

function createTask(position){

let task=document.querySelector("#task").value;

if(task==""){

alert("Enter Task");

return;

}

let todo=document.createElement("div");

todo.className="todo";



let number=document.createElement("span");

number.textContent=count+".";

let check=document.createElement("input");

check.type="checkbox";

let text=document.createElement("span");

text.textContent=task;
check.onchange=function(){

if(check.checked){

text.classList.add("completed");

}

else{

text.classList.remove("completed");

}

};
let edit=document.createElement("button");

edit.textContent="Edit";

edit.onclick=function(){

let newTask=prompt("Edit Task",text.textContent);

if(newTask!=""){

text.textContent=newTask;

}

};
let del=document.createElement("button");

del.textContent="Delete";

del.onclick=function(){

todo.remove();

updateNumber();

};

let topBtn=document.createElement("button");

topBtn.textContent="Move Top";

topBtn.onclick=function(){

let list=document.querySelector("#todoList");

list.insertBefore(todo,list.firstChild);

updateNumber();

};

let bottomBtn=document.createElement("button");

bottomBtn.textContent="Move Bottom";

bottomBtn.onclick=function(){

document.querySelector("#todoList").appendChild(todo);

updateNumber();

};
todo.appendChild(number);

todo.appendChild(check);

todo.appendChild(text);

todo.appendChild(edit);

todo.appendChild(del);

todo.appendChild(topBtn);

todo.appendChild(bottomBtn);

let list=document.querySelector("#todoList");

if(position=="top"){

list.insertBefore(todo,list.firstChild);

}

else{

list.appendChild(todo);

}

let total=list.children.length;

if(position=="top"){

document.querySelector("#message").textContent="Task added at position 1";

}

else{

document.querySelector("#message").textContent="Task added at position "+total;

}

document.querySelector("#task").value="";

updateNumber();

}

function updateNumber(){

let all=document.querySelectorAll(".todo");

for(let i=0;i<all.length;i++){

all[i].children[0].textContent=(i+1)+".";

}

}