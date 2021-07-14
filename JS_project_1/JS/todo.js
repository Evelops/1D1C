const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

function deleteToDo(event){
    const li = event.target.parentElement; // event.target => 선택된 객체의 대한 정보 그 각 버튼에 대한 property를 찾아서 각각의 객체가 가지고 있는 위치를 찾아낼 수 있고 그것을 다음과 같이 명시하여 각 li에 추가된 객체를 삭제할 수 있는 함수.
    li.remove();
}



function paintToDo(newTodo){
 const li=document.createElement("li");
 const span=document.createElement("span");
 span.innerText=newTodo;
 const button = document.createElement("button"); 
 button.innerText="✂";
 button.addEventListener("click",deleteToDo);
 li.appendChild(span);
 li.appendChild(button);
 toDoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault(); // input 형식은 enter 눌렀을때 새로고침 되는데 이를 방지하기 위해서 preventDefault 값을 설정.
    const newTodo = toDoInput.value; // newTodo라는 값에 toDoInput의 value 값을 저장하고 그 값을 다시 비워주기 위해서 다음과 같이 설정.
    toDoInput.value="";
    paintToDo(newTodo);

}
toDoForm.addEventListener("submit",handleToDoSubmit);

