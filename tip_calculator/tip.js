 function calculateTip() {
    var totalamoount = document.getElementById('billamount').value;
    var qualityofService = document.getElementById('service').value;
    var numOfPeople = document.getElementById('numpeople').value;
    if (totalamoount === "") {
        alert('please enter the total amount:')
    } else if (numOfPeople === "") {
        alert("enter the number  of people:")
    } else {
        var tipPerPerson = (totalamoount * qualityofService) / numOfPeople;
        tipPerPerson = Math.round(tipPerPerson);
        document.getElementById('result').innerHTML = 'Tip amount: <br>' + 'rs' + tipPerPerson + '<br> per person'
    }

}