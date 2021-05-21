function randomNumbers() {
    return Math.floor(Math.random() * 49 + 1);
}

function lottoNumbers() {

    let vec = [];
    let contor = 0;
    while (contor != 6) {
        let number = randomNumbers();
        if (vec.includes(number) == false) {
            vec.push(number);
            contor++;
        }
    }

    return vec;
}

function displayNumbersBox(x) {

    let text = ``;
    for (let i = 0; i < x.length; i++) {
        text += `
        <div class="random-numbers">
        <p>${x[i]}</p>
         </div>
        `
    }
    return text;

}

function isWin(numbers, given) {

    let numbersGuessed = [];
    for (let i = 0; i < numbers.length; i++) {
        if (given.includes(numbers[i])) {
            numbersGuessed.push(numbers[i]);
        }
    }
    return numbersGuessed;
}



function displayWin(numbers) {
    let text = ``;
    for (let i = 0; i < numbers.length; i++) {
        text += `
        <div class="guessedNmb">
            <p>${numbers[i]}</p>
        </div>
        `
    }
    text += `<h3>You won ${calculateAmount(numbers)} Rons</h3>`
    return text;
}

function displayIntro() {
    let text = `
    <h1>Welcome!</h1>
            <h2>Try your luck!</h2>
            <div class="play-button">
                <p id="buton">Click here</p>
            </div>
    `;
    return text;
}

function displayAfterClick() {
    let text = ``;
    return text;
}

function displayLose() {
    let text = `
    <div class="lose">
            <img src="gif/giphy.gif">
            <p>Bad luck..</p>
        </div>
    `
    return text;
}

function displayRewrite() {
    let text = `
    <h2>!Rewrite the numbers, 6/49 - only from 1 to 49 (refresh the page)!</h2>
    `;
    return text;
}


function verifyNumbers(numbers) {
    let f = [];
    for (let i = 1; i < 49; i++) {
        f[i] = 0;
    }

    f.fill(0);
    for (let i = 0; i < numbers.length; i++) {

        f[numbers[i]]++;
    }
    for (let i = 1; i < f.length; i++) {
        if (f[i] > 1) {
            return false;
        }
    }

    return true;
}

function verify49(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 1 || numbers[i] > 49) {
            return false;
        }
    }
    return true;
}

function verifyLength(numbers) {
    return numbers.length > 5 && numbers.length <= 6;
}


function calculateAmount(numbers) {
    let winCount = numbers.length;
    if (winCount === 1) {
        return 10 + (Math.floor(Math.random() * 6 + 1));
    } else if (winCount === 2) {
        return 15 + (Math.floor(Math.random() * 10 + 1));
    } else if (winCount === 3) {
        return 38 + (Math.floor(Math.random() * 15 + 1));
    } else if (winCount === 4) {
        return 120 + (Math.floor(Math.random() * 25 + 1));
    } else if (winCount === 5) {
        return 4948 + (Math.floor(Math.random() * 200 + 1));
    } else if (winCount === 6) {
        return 21759 + (Math.floor(Math.random() * 1000 + 1));
    }
}



function stringToArray(numbers) {
    return numbers.split(",").map(e => +e);
}