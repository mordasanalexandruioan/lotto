//Etapa1:numeerele de la user
// let numbers = prompt("Enter the numbers:");
// numbers = stringToArray(numbers);




//Generez 6 numere
let cont = document.querySelector('.numbers-box');
let generate = lottoNumbers();

//conditii de existenta
let rewrite = document.querySelector('.rewrite');
let intro = document.querySelector('.intro');
intro.innerHTML = displayIntro();


//verificare castig
let proba = [1, 2, 3, 4, 5, 6];
let but = document.querySelector('#buton');
let win = document.querySelector('.win');
let afterclick = document.querySelector('.intro');

but.addEventListener('click', () => {
    let numbers = prompt("Enter the numbers:");
    numbers = stringToArray(numbers);
    let numerePrinse = isWin(numbers, generate);
    console.log(numerePrinse);
    afterclick.innerHTML = displayAfterClick();
    if (verifyNumbers(numbers) == false || verify49(numbers) == false || verifyLength(numbers) == false) {
        rewrite.innerHTML = displayRewrite();
    } else if (numerePrinse.length > 0) {
        cont.innerHTML = displayNumbersBox(generate);
        win.innerHTML = displayWin(numerePrinse);
    } else {
        win.innerHTML = displayLose();
    }
})