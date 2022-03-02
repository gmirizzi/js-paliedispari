//FUNCTIONS
function isPalindroma(word){
    let check = true;
    let i = 0;
    let j = word.length - 1;
    while (i < word.length && j >= 0) {
        if (word.charAt(i) != word.charAt(j)) {
            check = false;
        }
        i++;
        j--;
    }
    return check;
}

function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

//PALINDROMA
document.querySelector('#palindroma input:last-of-type').addEventListener('click', function () {
    const word = document.getElementById("word").value.toLowerCase();
    
    if (isPalindroma(word)) {
        document.querySelector('#palindroma div').innerHTML = "La parola è palindroma"
    } else {
        document.querySelector('#palindroma div').innerHTML = "La parola non è palindroma"
    }
}
)

//PARI E DISPARI
document.getElementById('btn').addEventListener("click", function () {
    const userNum = parseInt(document.getElementById('num').value);
    if (userNum < 1 || userNum > 5) {        
        alert('Devi inserire un numero tra 1 e 5!');
    } else {
        const cpuNum = randomNumber(1, 5);
        document.getElementById('cpu').innerHTML = "CPU butta "+cpuNum;
        const somma = userNum + cpuNum;
        if ((isEven(somma) && document.querySelector('select').value == 'pari') || (!isEven(somma) && document.querySelector('select').value == 'dispari')) {
            document.getElementById('risultato').innerHTML = 'YOU WIN!';
        } else {
            document.getElementById('risultato').innerHTML = 'CPU wins :(';
        }
    }
})



