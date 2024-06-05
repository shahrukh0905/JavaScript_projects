
if(typeof document !== 'undefined'){

    const clock = document.getElementById('clock');

    setInterval(function (){
        let time = new Date();
        let currTime = time.toLocaleTimeString();
        clock.innerHTML = currTime;
    },1000);
    
}









