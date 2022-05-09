let userName = prompt("İsminizi Giriniz")

document.getElementById("myName").innerHTML = userName;

function showTime(){

    let date = new Date();
    let today= date.getDay();
    let gun;

    if (today==0){
        gun= "Pazar"
    }else if (today==1){
        gun= "Pazartesi"
    }else if (today==2){
        gun= "Salı"
    }else if (today==3){
        gun= "Çarşamba"
    }else if (today==4){
        gun= "Perşembe"
    }else if (today==5){
        gun= "Cuma"
    }else {
        gun= "Cumartesi"
    }

    let time = date.toLocaleString('tr-TR');
    return document.getElementById("myClock").innerHTML = `${time} ${gun}`;
}

showTime();
setInterval(showTime, 1000);