setInterval(() => {
    full= new Date;
    hour_time=full.getHours();
    minute_time=full.getMinutes();
    second_time=full.getSeconds();
    console.log(hour_time);
    console.log(minute_time);
    console.log(second_time);
    hr_degree = ((hour_time*60)+minute_time)/2;
    mi_degree = ((minute_time*60)+second_time)/10;
    se_degree=second_time*6;
    document.getElementById("hour").innerHTML=hour_time;
    document.getElementById("minute").innerHTML=minute_time;
    document.getElementById("second").innerHTML=second_time;
    hr_hand=document.querySelector(".hour_hand");
    mi_hand=document.querySelector(".minute_hand");
    se_hand=document.querySelector(".second_hand");
    se_hand.style.transform=`rotate(${se_degree}deg)` ;
    mi_hand.style.transform=`rotate(${mi_degree}deg)` ;
    hr_hand.style.transform=`rotate(${hr_degree}deg)` ;
    // hr_hand.style.transform="rotate(20deg) ";
    // mi_hand.style.transform="rotate(70deg) ";

},1000)
