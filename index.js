const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const hourText = document.getElementsByClassName("hour-text")[0];
const minuteText = document.getElementsByClassName("minute-text")[0];
const secondText = document.getElementsByClassName("second-text")[0];

setInterval(()=>{
    const time = new Date();
    const secs = time.getSeconds();
    const mins = time.getMinutes();
    const hrs = time.getHours();
    let hrsAngle = hrs;
    if(hrs >= 12) hrsAngle -= 12;
    hourHand.style.transform = `rotate(${-90 + hrsAngle*360/12 + mins*30/60}deg)`;
    hourText.style.transform = `rotate(${-1*(-90 + hrsAngle*360/12 + mins*30/60)}deg)`;
    hourText.innerText = hrs;
    minuteHand.style.transform = `rotate(${-90 + mins*6}deg)`;
    minuteText.style.transform = `rotate(${-1*(-90 + mins*6)}deg)`;
    minuteText.innerText = mins;
    secondHand.style.transform = `rotate(${-90 + secs*6}deg)`;
    secondText.style.transform = `rotate(${-1*(-90 + secs*6)}deg)`;
    secondText.innerText = secs;
},1000)
