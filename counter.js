const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");


// console.log(hh.innerHTML.length);
// console.log(typeof start.innerHTML);

let timer=0;
start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
let cl;
function startTimer(){
    cl=setInterval(changes,1000);
}
function changes(){
    timer+=1;
    let aux=timer;
    let sec=aux%60;
    ss.innerHTML= ("0"+sec).length==2 ? ("0"+sec): sec;
    aux=Math.floor(aux/60);
    let min= aux%60;
    mm.innerHTML= ("0"+min).length==2 ? ("0"+min+" :"): min+" :";
    aux=Math.floor(aux/60);
    hh.innerHTML= ("0"+aux).length==2 ? ("0"+aux+" :"): aux+" :";
}

function pauseTimer(){
    clearInterval(cl);
}

function resetTimer(){
    ss.innerHTML= "00";
    mm.innerHTML= "00 :";
    hh.innerHTML= "00 :";
}