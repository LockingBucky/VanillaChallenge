const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDolist = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text + " "; //newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.fontSize = "25px";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);  // li 태그 안에 자식을 span 태그로 하게끔 한다
    li.appendChild(button);
    toDolist.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//function sayHello (item) {
//    console.log("this is the turn of ", item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
 // parsedToDos.forEach(item) => console.log("this is the turn of ", item)); 
 // 그리고 if문에 대입하면 현재랑 같은 function역할함. parsedToDos.forEach(sayHello);
}

// const arr = ["banana", "tomato", "cake"];
// function sexyFilter(item) {
//   return item !== "banana";
// }

// arr.filter(sexyFilter); // tomato,cake