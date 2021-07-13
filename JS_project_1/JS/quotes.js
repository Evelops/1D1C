const quotes = [
    {
        qutoe: "나 자신에 대한 자신감을 잃으면온 세상이 나의 적이 된다.",
        author:"랄프 왈도 에머슨",

    },
    {
        qutoe:"항상 바보면 바보다. 비가 내리고 바람이 불어야만 바보가 된다.",
        author:"바보 속담.",
    },
    {
        qutoe:"항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"몰라싀 속담.",
    },
    {
        qutoe:"항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"아빠 속담.",
    },
    {
        qutoe:"된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"엄마 속담.",
    },
    {
        qutoe:"항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"연주 속담.",
    },
    {
        qutoe:"항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"엄승열 속담.",
    },
    {
        qutoe:"항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
        author:"스페인 속담.",
        

    },
    {
        qutoe:"인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데.",
        author:"루이스 E. 분.",
        

    },
    {
        qutoe:" 오늘은 당신의 남은 인생 중,첫 번째 날이다.",
        author:"영화 아메리카 뷰티.",
        

    },
    {
        qutoe:" 인생은 곱셈이다.어떤 기회가 와도 내가 제로면 아무런 의미가 없다",
        author:"나카무라 미츠루.",
        

    },

];


const quote = document.querySelector("#quote span:first-child");
const author =document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.qutoe;
author.innerText=todaysQuote.author;