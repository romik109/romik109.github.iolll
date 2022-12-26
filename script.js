let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

// Короткий цикл дизъюнкции для Nan
function checkCorrect_work () {if ( isNaN(minValue)  || isNaN(maxValue)) {
    minValue = 0 ;
    maxValue = 100;
} else {
    minValue = minValue ;
    maxValue = maxValue ;
// Зададим границы мин макс значений for minValue and maxValue
    -1000>minValue ?  minValue = -999 : minValue = minValue ;
minValue>1000 ? minValue=999   :   minValue = minValue ;

-1000>maxValue ?  maxValue = -999 : maxValue = maxValue ;
maxValue>1000 ? maxValue=999   :   maxValue = maxValue ;
}
}

checkCorrect_work ()

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;




document.getElementById('btnRetry').addEventListener('click',reset);
 function reset () {
    minValue = 0 ;
    maxValue = 0 ;
    orderNumber = 0; 
    answerNumber = 0; 
    checkInput()
}

function checkInput () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    checkCorrect_work ()
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    checkCorrect_work ()
    startGame ()
}


function startGame () {
    gameRun = true;
}

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        console.log('maxValue='+ maxValue)
        console.log('minValue='+ minValue)
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Хм.. кажется, вы загадали неправильное число...\n\u{1F914}` :
                `К сожалению, не получилось, попробуйте еще разок\n\u{1F92F}`;
                `Удача отвернулась от меня, но я не сдамся в следующей попытке &#129299;`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber ;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Быть может это число ${answerNumber}?\n\u{1F60E}` :
                `Я думаю, что это число ${answerNumber}` ;
                `Кажется , загаданное тобой число  ${answerNumber}` ;
            answerField.innerText = answerPhrase ;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        console.log('maxValue='+ maxValue)
        console.log('minValue='+ minValue)
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Хм.. кажется, вы загадали неправильное число...\n\u{1F914}` :
                `К сожалению, не получилось, попробуйте еще разок\n\u{1F92F}`;
                `Удача отвернулась от меня, но я не сдамся в следующей попытке &#129299;`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Быть может это число ${answerNumber}?\n\u{1F60E}` :
                `Я думаю, что это число ${answerNumber}` ;
                `Кажется , загаданное тобой число  ${answerNumber}` ;
            answerField.innerText = answerPhrase ;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        const answerPhrase = (phraseRandom === 1) ?
            `Кто сомневался\n\u{1F60E}` :
            `Вы великолепны\n\u{1F973}` ;
            `Ты прав\n\u{1F389} ` ;
        answerField.innerText = answerPhrase;

        gameRun = false;
    }
})

