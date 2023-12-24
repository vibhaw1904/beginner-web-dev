const houre1 = document.getElementById("hour");
const minte1 = document.getElementById("Minutes");
const sece1 = document.getElementById("seconds");
const ampme1 = document.getElementById("ampm");

function getTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    houre1.innerText = h;
    minte1.innerText = m;
    sece1.innerText = s;
    ampme1.innerText = ampm;
    setTimeout(() => {
        getTime()
    }, 1000)
}
getTime();