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
        imgSrc:"Nさん.jpg"
    },
    {
        Name:"Bさん",
        answer:{
            answer1:"好きな寿司:いくら",
            answer2:"趣味：音楽鑑賞",
            answer3:"出身：ドイツ"
        },
        imgSrc:"Bさん.jpg"
    },
    {
        Name:"Jさん",
        answer:{
            answer1:"好きな寿司ネタ1位:サーモン",
            answer2:"趣味：映画鑑賞",
            answer3:"出身：アメリカ"
        },
        imgSrc:"Jさん.jpg"
    },
    {
        Name:"Dさん",
        answer:{
            answer1:"好きな寿司ネタ1位:たまご",
            answer2:"趣味：”読書",
            answer3:"出身：宮城"
        },
        imgSrc:"Dさん.jpg"
    }
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
    questionElement.innerText = questionText; 
}


// 解答の人をランダムに選択
let targetNum = Math.floor(Math.random() * classObject.length);

function changeText(array){
    let subObject = {} ;
    let subSubObject = {};    
    let newArray = [];
    subObject = array[targetNum];
    subSubObject = subObject.answer;
    for (const key in subSubObject){
        newArray.push(subSubObject[key]);
    }
    let profileElement = document.getElementById("profile");
    profileElement.innerText = newArray[questionNumber];
}


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
            finishImage.src = classObject[targetNum].imgSrc;
            finishImage.style.display = "block";
            let human =document.getElementById("human");
            human.innerText = classObject[targetNum].Name;
            human.style.display = "block";
        }
    }, 1000);
}

// 選択肢をランダムに選ぶ
function getRandomElements(array, num) {
    let tmpArray = [];
    tmpArray.push(classObject[targetNum]);
    while (tmpArray.length < num) {
      let randomnum = Math.floor(Math.random() * array.length);
      if (randomnum != num){
        let randomElement = array[randomnum];
        if (!tmpArray.includes(randomElement)){
            tmpArray.push(randomElement);
        }
      } 
    }
    // 選択肢の配列をランダムに並び替える
    function shuffleArray(array){
        for (let i = (array.length - 1); i > 0; i--){
            let j = Math.floor(Math.random() * (i +1) );    
            
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
        return array;
    }

    let result = shuffleArray(tmpArray);
    
    let selectorA = document.getElementById("selectorA");
    selectorA.innerText = result[0].Name;
    let selectorImageA = document.getElementById("imgA");
    selectorImageA.src = result[0].imgSrc;
    selectorImageA.style.display = "block";

    let selectorB = document.getElementById("selectorB");
    selectorB.innerText = result[1].Name;
    let selectorImageB = document.getElementById("imgB");
    selectorImageB.src = result[1].imgSrc;
    selectorImageB.style.display = "block";

    let selectorC = document.getElementById("selectorC");
    selectorC.innerText = result[2].Name;
    let selectorImageC = document.getElementById("imgC");
    selectorImageC.src = result[2].imgSrc;
    selectorImageC.style.display = "block";

}

// クリックで3個の関数を動かす関数
function handleClick(array, time){
    choiceQuestion()
    changeText(classObject);
    startCountdown(3);
    getRandomElements(classObject, 3);
}

const countDown = document.getElementById("start");
countDown.addEventListener("click", handleClick);

