const toDoForm=document.getElementById("todo-form"); // toDoForm 이라는 변수는 html 문서에서 todo-form의 id 값에 해당하는 정보를 js에서 동작하도록 가져와서 사용하도록 선언한 변수.
const toDoInput = toDoForm.querySelector("input"); // 해당 변수는 toDoForm이라는 태그 안에 있는 값이기 때문에 다음과 같이 toDoForm.~ 라고 작성.
const toDoList=document.getElementById("todo-list");// toDoForm과 마찬가지로 html 문서에 있는 todo-list의 아이디 값에 해당하는 태그를 찾아 js에서 동작하도록 선언한 변수.

let toDos =[];
const TODOS_KEY="todos"; 

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); // 그냥 localStroage의 todos 라는 로컬 저장소를 만들고 그 안에 값을 넣어주는 역할을 하는 함수 .

}


function deleteToDo(event){
    const li = event.target.parentElement; // event.target => 선택된 객체의 대한 정보 그 각 버튼에 대한 property를 찾아서 각각의 객체가 가지고 있는 위치를 찾아낼 수 있고 그것을 다음과 같이 명시하여 각 li에 추가된 객체를 삭제할 수 있는 함수.
    console.log(li.id);
    li.remove();
}



function paintToDo(newTodo){
 const li=document.createElement("li"); //js 내에서 html 태그를 만들어 줄 때 createElement라는 값을 주어서 만들고 픈 태그의 종류를 선언하고 생성해준다. 
 li.id = newTodo.id; //위에서 만들어준 태그의 id 값을 부여하는데, 해당 id값은 newTodo.id 와 같다. => 이말은 즉슨, painToDo 함수에서 받는 값이 newTodo 가 결론적으로 받게 되는 값의id 값이 곧 li의 id 값이 된다는 의미.
 const span=document.createElement("span"); // 마찬가지로 js내에서 html 태그 생성.
 span.innerText=newTodo.text; // span 태그 내에 innerText의 형태로 text 값을 받는다는 의미.
 const button = document.createElement("button");  // 위와 마찬가지.
 button.innerText="✂"; // 버튼 태그의 inner text은 해당 스트링 형태의 아이콘을 넣어줌.
 button.addEventListener("click",deleteToDo); // 버튼을 눌렀을 때 어떠한 이벤트가 발생해야 됨. 그렇기 eventListner를 주어서 해당 버튼을 눌렀을 때, deleteToDo 함수가 동작하도록.
 li.appendChild(span); // li의 자식은 span
 li.appendChild(button); // "" 은 button
 toDoList.appendChild(li); // toDoList의 자식은 li
}
function handleToDoSubmit(event){
    event.preventDefault(); // input 형식은 enter 눌렀을때 새로고침 되는데 이를 방지하기 위해서 preventDefault 값을 설정.
    const newTodo = toDoInput.value; // newTodo라는 변수에 toDoInput의 value 값을 저장하고 그 값을 다시 비워주기 위해서 다음과 같이 설정.
    toDoInput.value="";
    const newTodoObj={ // newTodoObj 라는 newTodoObj 설정. id값을 Date.now라는 매소드를 사용해주었는데, 이는 랜덤한 id 값을 임의로 지정하여 특정 객체를 삭제할때 보다 용이하게 하기 위해서 다음과 같이 설정.
        text:newTodo, 
        id:Date.now(),
    };
    toDos.push(newTodoObj); // toDos라는 사용자가 입력한 toDos 값을 하나 입력할 때마다  위에 선언한 newTodoObj객체 값을 push 해줌. 
    paintToDo(newTodoObj); // 해당 함수에 newTodoObj 객체 형식을 다시 넣어줌. 
    saveToDos(); // ToDos를 localStorage에 저장해주는 함수를 호출하여 해당 newTodo가 생성될때마다 local에 저장함. 

}
toDoForm.addEventListener("submit",handleToDoSubmit); // toDoForm에 대한 이벤트리스너 => hanldeToDoSubmit 함수를 호출 

/*function sayHello(item){
    console.log("this is the turn of", item);
} */ //  51 Line 과 같은 역할 51 Line 과 같이 바꾸어 줄 시, 함수를 따로 만들지 않고 더 짧은 코드를 사용해  줄 수 있다.  

const savedToDos = localStorage.getItem(TODOS_KEY); //로컬 저장소에서 todos 값을 getItem으로 가져옴. 
console.log(savedToDos);

if(savedToDos!==null) {
    const parsedToDos = JSON.parse(savedToDos); // savedToDos 값을 json 형식 => {name: "~", id:"~"} 으로 변환 해줘 이때 local에 저장되어 있는 형태를 각각
    console.log(parsedToDos);
    toDos=parsedToDos;
     parsedToDos.forEach(paintToDo);
}

