var hour = new Date().getHours();

// morning 4am 11am
// afternoon 12pm-6pm
// var hour = 6

if (hour >= 4 && hour <= 10) {
    document.getElementById("morning").innerHTML = "Good morning";
    document.body.style.backgroundColor = "#f5b342";
    document.getElementById("morning1").src = "morning.jpg";
} else if (hour >= 11 && hour <= 15) {
    document.getElementById("morning").innerHTML = "Good afternoon";
    document.body.style.backgroundColor = "#f5d142";
    document.getElementById("morning1").src = "afternoon2.jpg";
} else if (hour >= 16 && hour <= 19) {
    document.getElementById("morning").innerHTML = "Good evening";
    document.body.style.backgroundColor = "#4299f5";
    document.getElementById("morning1").src = "evining.jpg";
} else {
    document.getElementById("morning").innerHTML = "Good night";
    document.body.style.backgroundColor = "#1b1c1f";
    document.getElementById("morning1").src = "night.jpg";
}