//Set Variables
const button = document.querySelector('button');

// Set the functions
function tenMinBreak(){
        alert('take a ten minute break');
}
function labTime(){
        alert('Is it time for lab yet?');
}
function lunchTime(){
        alert("It's time for lunch!");
}
function daysOver(){
        alert('Go Home!');
}


// Add Event Listeners
button.addEventListener('click', ()=>{
        // set the timer for ten minute breaks
        setInterval(tenMinBreak,3.6e+6);
        console.log('ten minute timer set');
        // set lab timer for 3 hours from start of class
        setInterval(labTime,1.08e+7);
        console.log('lab time timer set');
        // set lunch timer 4 hours from start
        setInterval(lunchTime,1.44e+7);
        console.log('lunch timer set');
        // set end of day timer
        // Write an if statement that sets it for 8 hours on friday and 9 hours every other day
        let d = new Date();
        let day = d.getDay();
        if(day === 5){
                setInterval(daysOver,2.88e+7);
                alert('HAVE A GREAT WEEKEND!!');
                console.log('today is friday');
        }else{
                setInterval(daysOver,3.24e+7);
                console.log('today is NOT friday');
        }
});

