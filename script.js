let timer=document.getElementById("StopWatch") ;
let LapBox = document.getElementById("LapBox") ;

let sec=0;
let min=0;
let hr= 0;
let StopTime=true ;
const TimerCycle = () =>{


if(StopTime==false){



sec=parseInt(sec) ;
min=parseInt(min) ;
hr=parseInt(hr) ;

    sec=sec+1 ;
    if(sec==60){
        min=min+1 ;
        sec= 0 ; 
    }
    if(min==60){
        hr=hr+1 ; 
        min=0;
        sec=0 ;

    }
    /*
    if(hr==1){
        sec=0 ; 
        min=0;
    }
    */
   if(sec<=10 || sec==0) {
    sec= '0' + sec ;
   }
   if(min<=10 || min==0) {
    min= '0' + min ;
   }
   if(hr<=10 || hr==0) {
    hr= '0' + hr ;
   }

   timer.innerHTML = hr +":"+min +':'+sec ;
   setTimeout(TimerCycle,1000) ;


}
}

function StartTimer() {
    if(StopTime==true) {
        StopTime=false ;
        TimerCycle() ;
    }
}


function LapTimer() {
    let lap  = document.createElement('h1') ;
    lap.innerHTML=hr+':'+min+':'+sec ;
    LapBox.appendChild(lap) ;

}

function StopTimer(){
    if(StopTime==false){
        StopTime=true ;
        clearInterval() ;
    }
}

function ResetTimer() {
    timer.innerHTML='00:00:00' ;
    StopTime=true;
    hr=0 ;
    min=0;
    sec=0;

    while(LapBox.firstChild){
        LapBox.removeChild(LapBox.firstChild) ;
        
    }
}