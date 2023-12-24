var correctName = "vibhaw";
var correctPassword = "kittu"


function returnInfo() {
    var nameVar = document.getElementById("name").value;
    var namePass = document.getElementById("passform").value;
    if (nameVar == correctName && namePass == correctPassword) {
        document.body.style.backgroundColor = "green";
        alert("Access granted!! Welcome");
    } else {
        document.body.style.backgroundColor = "red";
        alert("Access denied!!");
    }
}