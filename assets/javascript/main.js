function hideFunction() {
    document.getElementById("meditatePage").style.display="none";
}


let time = 0;
let season = "none";
let timeButtons = document.getElementsByClassName("time-select");
let seasonButtons = document.getElementsByClassName("season-select");
let time_limit = 20;
let timePassed = 0;
let timeLeft = time_limit;
let timerInterval = null;
let playButton = document.getElementById("play");
let btn = document.getElementsByClassName("myBtn");
let resetButton = document.getElementById("reset");
let twoMins = document.getElementById("two");
let fiveMins = document.getElementById("five");
let tenMins = document.getElementById("ten");
let twentyMins = document.getElementById("twenty");
let thirtyMins = document.getElementById("thirty");
let sixtyMins = document.getElementById("sixty");
let springButton = document.getElementById("spring");
let summerButton = document.getElementById("summer");
let autumnButton = document.getElementById("autumn");
let winterButton = document.getElementById("winter");
let meditateButton = document.getElementById("meditate");


twoMins.addEventListener("click", function() {
    setTime(2, this);
})

fiveMins.addEventListener("click", function() {
    setTime(5, this);
})

tenMins.addEventListener("click", function() {
    setTime(10, this);
})

twentyMins.addEventListener("click", function() {
    setTime(20, this);
})

thirtyMins.addEventListener("click", function() {
    setTime(30, this);
})

sixtyMins.addEventListener("click", function() {
    setTime(60, this);
})


springButton.addEventListener("click", function() {
    setSeason('spring', this);
})

summerButton.addEventListener("click", function() {
    setSeason('summer', this);
})

autumnButton.addEventListener("click", function() {
    setSeason('autumn', this);
})

winterButton.addEventListener("click", function() {
    setSeason('winter', this);
})


function setTime(t, elem) {
    var arrayLength = timeButtons.length;
    for (let i = 0; i < arrayLength; i++) {
    console.log(timeButtons[i]);
    timeButtons[i].style.backgroundColor="#CD853F";
    };
    time = t;
    console.log(`Time: ${time}`)
    elem.style.backgroundColor="#D2B48C";
    console.log(time);
};


function setSeason(s, elem) {
    var arrayLength = seasonButtons.length;
    for (let i = 0; i < arrayLength; i++) {
    console.log(seasonButtons[i]);
    seasonButtons[i].style.backgroundColor="#CD853F";
    };
    season = s;
    elem.style.backgroundColor="#D2B48C";
    console.log(season);
};


meditateButton.addEventListener("click", function() {
    startMeditation();
})

function startMeditation() {

    document.getElementById('base-timer-label').innerHTML = formatTime(60 * time)

    console.log(time + season);
    if (time ==0 || season =="none") {    
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });
    } else {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("change-image").setAttribute("src", "assets/images/season_images/" + season + ".jpg");
        document.getElementById("changeAudio").setAttribute("src", "assets/audio/" + season + ".mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();
        document.getElementById("myBleep").load();
    }
    document.getElementById("hideMe")
}


function onTimesUp() {
  clearInterval(timerInterval);
  myAudio.pause();
  myBleep.play();
  reset();
}

function pauseTimer() {
    clearInterval(timerInterval);
}



playButton.addEventListener("click", play);
function play() {
    if (myAudio.paused) {
    myAudio.play();
    startTimer();
    playButton.innerHTML = "Pause";
  } else {
    myAudio.pause();
    pauseTimer();
    playButton.innerHTML = "Play";
  }
}


function startTimer(){
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = time * 60 - timePassed;
        console.log(timeLeft);
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    
        if (timeLeft === 0) {
        onTimesUp();
        }
    }, 1000);
}



resetButton.addEventListener("click", function() {
    reset();
})



function reset() {
    console.log("it works");
    myAudio.pause();
    pauseTimer();
    playButton.innerHTML = "Play";
    timeLeft = time * 60;
    timePassed = 0;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
}