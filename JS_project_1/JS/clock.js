const clock = document.querySelector("h2#clock");

function getClock(){
    const date= new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes= String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds }`; 
  


}

getClock();
setInterval(getClock, 1000); // 5000= 5s 로 5s 뒤에 sayhello 함수를 호출 하는 함수 
0