var correctName = "vibhaw";
var correctPass = 1234;
var correctBalance = 1000;
var newBalance = correctBalance - amountAttempt;


function withdraw() {
    var nameattempt = document.getElementById('name').value;
    var passAttempt = document.getElementById('pass').value;
    var amountAttempt = document.getElementById('amount').value;

    if (nameattempt != correctName) {
        document.getElementById('bl').innerHTML = "incorrect name!Try again";
    } else if (passAttempt != correctPass) {
        document.getElementById('bl').innerHTML = "incorrect Password!Try again";

    } else if (amountAttempt > correctBalance) {
        document.getElementById('bl').innerHTML = "insuffcient balance!";

    } else {
        document.getElementById('bl').innerHTML = "succesfully withdrawl! ramaining balance is " + newBalance;

    }

}