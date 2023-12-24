var availblecar = ['bmw', 'ferrari', 'tata', "hyundai", "skoda_laura"]
var car = '';
for (i = 0; i < availblecar.length; i++) {
    car += availblecar[i] + "<br>";


}
document.getElementById('carmodel').innerHTML = car;