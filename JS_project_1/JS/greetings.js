const loginForm = document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault(); // 이벤트가 원래 하는 기능을 멈춤, 브라우저의 기본 동작을 막아주는 역할 Form 형식은 submit 될때 새로고침됨. 이것을 막아주는 역할.
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username=loginInput.value;// input에 입력하는 값을 username으로 저장.
    localStorage.setItem(USERNAME_KEY,username); // localStorage는 웹 내부에 존재하는 소규모 DB.  setItem,getItem,removeItem을 활용하여 내부 DB를 접근하고 수정 가능 함.
    paintGreetings();
 
}

function paintGreetings()
{
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}



const saveUsername= localStorage.getItem(USERNAME_KEY); //localStorage 내부에서 USERNAME을 가져오는 것.
console.log(saveUsername);

// localStorage에 값이 저장되어 있는지 없는지를 검사하는 조건식 데이터가 저장되어 있고 없음에 따라 client에게 보여지는 view 형식이 다름 .
if(saveUsername===null){ 
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    //show the greetings
    paintGreetings();
   
}