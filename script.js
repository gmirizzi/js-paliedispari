document.querySelector('input:last-of-type').addEventListener('click', function(){
    const word = document.getElementById("word").value;
    
    if (palindroma(word,word.length)){
        document.querySelector('div').innerHTML="La parola è palindroma"
    } else {
        document.querySelector('div').innerHTML="La parola non è palindroma"
    }
}
)

function palindroma(string, length){
    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j >= 0; j--) {
            if (string.charAt(i)==string.charAt(j)) {
                return true;
            } else {
                return false;
            }                   
        }       
    }
}