var value = 0;
var colorArray = ["#ebdb34", "#ebc934", "#ebb134", "#eb9334"]

function addOne() {
    value += 1;
    document.getElementById('num').innerHTML = value;
    document.body.style.backgroundColor = colorArray[value - 1];

}

function minusOne() {
    value = value - 1;
    document.getElementById('num').innerHTML = value;
    document.body.style.backgroundColor = colorArray[value - 1]
}
// function backgroundColor(){
//     document.body.style.back
// }