//set time declaration var
var divdays;
var divhours;
var divminutes;
var divseconds;

//set time declaration var
var days;
var hours;
var minutes;
var seconds;
var idtimeSeconds;
var idtimeMinutes;
var idtimeHours;
var idtimeDays;

//set time declaration var
var setDays    ="03";
var setHours   ="00";
var setMinutes ="00";
var setSeconds ="00";
var swicht;

function setUpChrono(){
    divdays = document.getElementById("days");
    days = document.createTextNode(setDays);
    divdays.appendChild(days);

    divhours = document.getElementById("hours");
    hours = document.createTextNode(setHours);
    divhours.appendChild(hours);

    divminutes = document.getElementById("minutes");
    minutes = document.createTextNode(setMinutes);
    divminutes.appendChild(minutes);

    divseconds = document.getElementById("seconds");
    seconds = document.createTextNode(setSeconds);
    divseconds.appendChild(seconds);
    swicht=true;
    delaySeconds(swicht);
}

function delaySeconds(swicht){
    var aux;
    if (swicht == true){
        idtimeSeconds=setTimeout(remNodeSecond,1000);
    }
    else{
        setSeconds-=1;
        if(setSeconds<0){
           setSeconds=59;
           remNodeMinute();
        }
        if(setSeconds<10){
            aux="0";
        }
        else{
            aux="";
        }
        createNodeSecond(aux);
    }
}

function remNodeSecond(){
    seconds.parentNode.removeChild(seconds);
    swicht=false;
    delaySeconds(swicht);
}

function createNodeSecond(aux){
    if (setMinutes >=0 && setHours >=0 && setDays>=0){
        seconds = document.createTextNode(aux+setSeconds);
        divseconds.appendChild(seconds);
        swicht=true;
        delaySeconds(swicht);
    }
    else{
        clearTimeout(idtimeSeconds);
    }
}

function delayMinutes(swicht){
    var aux;
    if (swicht == true){
        idtimeMinutes=setTimeout(remNodeMinute,1000);
    }
    else{
        setMinutes-=1;
        if(setMinutes<0){
           setMinutes=59;
           remNodeHour();
        }
        if(setMinutes<10){
            aux="0";
        }
        else{
            aux="";
        }
        createNodeMinute(aux);
    }
}

function remNodeMinute(){
    minutes.parentNode.removeChild(minutes);
    swicht=false;
    delayMinutes(swicht);
}

function createNodeMinute(aux){
    if (setMinutes>=0 && setHours >0){
        minutes = document.createTextNode(aux+setMinutes);
        divminutes.appendChild(minutes);
        swicht=true;
    }
    else{
        clearTimeout(idtimeMinutes);
    }
}

function delayHours(){
    var aux;
    if (swicht == true){
        idtimeHours=setTimeout(remNodeHour,1000);
    }
    else{
        setHours-=1;
        if(setHours<0){
           setHours=23;
           remNodeDays();
        }
        if(setHours<10){
            aux="0";
        }
        else{
            aux="";
        }
        createNodeHours(aux);
    }
}

function remNodeHour(){
    hours.parentNode.removeChild(hours);
    swicht=false;
    delayHours(swicht);
}

function createNodeHours(aux){
    if (setHours>=0){
        hours = document.createTextNode(aux+setHours);
        divhours.appendChild(hours);
    }
    else{
        clearTimeout(idtimeHours);
    }
}

function delayDays(){
    var aux;
    if (swicht == true){
        idtimeDays=setTimeout(remNodeDays,1000);
    }
    else{
        setDays-=1;
        if(setDays<0){
           clearTimeout(idtimeDays);
        }
        if(setDays<10){
            aux="0"
        }
        else{
            aux="";
        }
        createNodeDays(aux);
    }
}

function createNodeDays(aux){
    days = document.createTextNode(aux+setDays);
    divdays.appendChild(days);
    swicht=true;
}

function remNodeDays(){
    days.parentNode.removeChild(days);
    swicht=false;
    delayDays(swicht);
}

setUpChrono();