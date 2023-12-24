function GenerateOtp(){
    var didgits='0123456789';
    let otp='';
    for(let i=0;i<4;i++){
        otp+=[Math.floor(Math.random()*10)];
    }
    var span=document.querySelector('.card span');
    span.innerHTML=otp;
}