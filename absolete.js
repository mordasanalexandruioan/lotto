let cont = document.querySelector('.numbers-box');
let win = document.querySelector('.win');
let rewrite = document.querySelector('.rewrite');
let intro = document.querySelector('.intro');

let proba = [1, 2, 3, 4, 5, 6];

let numbers = prompt("Enter the numbers:");

let x = lottoNumbers();

numbers = stringToArray(numbers);



let numerePrinse = isWin(numbers, x);
let but = document.querySelector('#buton');
if (verifyNumbers(numbers) !== -1) {
    rewrite.innerHTML = displayRewrite();
} else if ((numbers.length) === 6) {
    intro.innerHTML = displayIntro();

    but.addEventListener('click', () => {
        console.log(numerePrinse);
        if (numerePrinse.length > 0) {
            cont.innerHTML = displayNumbersBox(x);
            win.innerHTML = displayWin(numerePrinse);
        } else {

            win.innerHTML = displayLose();
        }
    })
}