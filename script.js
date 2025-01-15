'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const classObject =[
    {
        Name:"Nさん",
        answer:{
            answer1:"好きな寿司:中とろ",
            answer2:"趣味：サッカー",
            answer3:"出身：愛知県"
        },
        imagSrc:"Nさん.jpg"
    },
    {
        Name:"Bさん",
        answer:{
            answer1:"好きな寿司:いくら",
            answer2:"趣味：音楽鑑賞",
            answer3:"出身：ドイツ"
        },
        imagSrc:"Bさん.jpg"
    },
    {
        Name:"Jさん",
        answer:{
            answer1:"好きな寿司ネタ1位:サーモン",
            answer2:"趣味：映画鑑賞",
            answer3:"出身：アメリカ"
        },
        imagSrc:"Jさん.jpg"
    },
    
]

const questionArray = [
    "誰が好きな寿司ネタでしょうか。",
    "誰の趣味でしょうか。",
    "誰の出身地でしょうか。"
]
// 問題文をランダムに選択
let questionNumber = Math.floor(Math.random() * questionArray.length);

function choiceQuestion(){
    let questionText = questionArray[questionNumber];
    let questionElement = document.getElementById("question");
    questionElement.innerText = questionText; }

// 解答の人をランダムに選択
let num = Math.floor(Math.random() * classObject.length);

function changeText(array){
    let subObject = {} ;
    let subSubObject = {};    
    let newArray = [];
    subObject = array[num];
    subSubObject = subObject.answer;
    for (const key in subSubObject){
        newArray.push(subSubObject[key]);
    }
    let profileElement = document.getElementById("profile");
    profileElement.innerText = newArray[questionNumber]; }

// カウントダウン関数
function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        countDown.innerText = counter;
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            countDown.innerText = "終了";
            let answer =document.getElementById("answer");
            answer.style.display = "block";
            let finishImage = document.getElementById("finishImage");
            finishImage.src = classObject[num].imagSrc;
            finishImage.style.display = "block";
            let human =document.getElementById("human");
            human.innerText = classObject[num].Name;
            human.style.display = "block";
        }
    }, 1000);
}

// クリックで3個の関数を動かす関数
function handleClick(array, time){
    choiceQuestion()
    changeText(classObject);
    startCountdown(1);
}

const countDown = document.getElementById("start"); countDown.addEventListener("click", handleClick);

