//Etapa1:numeerele de la user
let numbers = prompt("Enter the numbers:");
numbers = stringToArray(numbers);




//Generez 6 numere
let cont = document.querySelector('.numbers-box');
let generate = lottoNumbers();

//conditii de existenta
let rewrite = document.querySelector('.rewrite');
let intro = document.querySelector('.intro');

if (verifyNumbers(numbers) == false || verify49(numbers) == false || verifyLength(numbers) == false) {
    rewrite.innerHTML = displayRewrite();
} else {
    intro.innerHTML = displayIntro();
}

//verificare castig
let proba = [1, 2, 3, 4, 5, 6];
let numerePrinse = isWin(numbers, generate);
let but = document.querySelector('#buton');
let win = document.querySelector('.win');
let afterclick = document.querySelector('.intro');

but.addEventListener('click', () => {
    console.log(numerePrinse);
    if (numerePrinse.length > 0) {
        cont.innerHTML = displayNumbersBox(generate);
        win.innerHTML = displayWin(numerePrinse);
        afterclick.innerHTML = displayAfterClick();
    } else {
        afterclick.innerHTML = displayAfterClick();
        win.innerHTML = displayLose();
    }
})