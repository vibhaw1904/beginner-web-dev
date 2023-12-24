let button=document.querySelector("button");
let answer=document.querySelector("#answer");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
button.addEventListener("click",function(){
    let randomNo=getRandomInt(3);
    let answerTExt="";
    if(randomNo==0){
        answerTExt="Yes definitely";
    }
    else if(randomNo==1){
        answerTExt="No,certainly not";
    }
    else if(randomNo==2){
        answerTExt="Ask again later";
    }
    else {
        answerTExt="I really dont give a fuck";
    }
    answer.innerHTML=answerTExt; 
})