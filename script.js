document.querySelector('input:last-of-type').addEventListener('click', function () {
    const word = document.getElementById("word").value.toLowerCase();
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

    if (check == false) {
        document.querySelector('div').innerHTML = "La parola non è palindroma"
    } else {
        document.querySelector('div').innerHTML = "La parola è palindroma"
    }
}
)
