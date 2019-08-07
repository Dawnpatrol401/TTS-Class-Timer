let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds){
        //first clear any existing timers so that you cant have a bunch running at once.
        clearInterval(countdown);
        
        const now = Date.now();//gets current timestamp in milliseconds
        const then = now + seconds *1000; //adds the number of milliseconds that you want to count
        displayTimeLeft(seconds);
        displayEndTime(then);
countdown = setInterval(()=>{
                const secondsLeft = Math.round((then - Date.now()) / 1000);
                //this will stop the countdown at zero.
                if(secondsLeft < 0){
                        clearInterval(countdown);
                        return;
                }
                //display the time that is left
                displayTimeLeft(secondsLeft);

        },1000);
}

function displayTimeLeft(seconds){
        const minutes = Math.floor(seconds / 60);
        const remainderSeconds = seconds % 60;
        const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        document.title = display;//this displays the timer in the browser tab.
        timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        
}

function startTimer(){
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
