const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");


function paintToDo(newTodo){
 const li=document.createElement("li");
 const span=document.createElement("span");
 li.appendChild(span);
 span.innerText=newTodo;
 toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault(); // input 형식은 enter 눌렀을때 새로고침 되는데 이를 방지하기 위해서 preventDefault 값을 설정.
    const newTodo = toDoInput.value; // newTodo라는 값에 toDoInput의 value 값을 저장하고 그 값을 다시 비워주기 위해서 다음과 같이 설정.
    toDoInput.value="";
    paintToDo(newTodo);

}
toDoForm.addEventListener("submit",handleToDoSubmit);

