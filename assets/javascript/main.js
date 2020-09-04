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



function setTime(t, elem) {
    var arrayLength = timeButtons.length;
    for (var i = 0; i < arrayLength; i++) {
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
    for (var i = 0; i < arrayLength; i++) {
    console.log(seasonButtons[i]);
    seasonButtons[i].style.backgroundColor="#CD853F";
    };
    season = s;
    elem.style.backgroundColor="#D2B48C";
    console.log(season);
};


function startMeditation() {

    document.getElementById('base-timer-label').innerHTML = formatTime(60 * time)

    console.log(time + season);
    if (time ==0 || season =="none") {    
        time = 0;
        season = "none";
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
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/" + season + ".mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();
    }
    document.getElementById("hideMe")
}


playButton.addEventListener("click", play);
function play() {
    if (myAudio.paused) {
    myAudio.play();
    startTimer();
    playButton.innerHTML = "Pause";
  } else {
    myAudio.pause();
    playButton.innerHTML = "Play";
  }
};



function onTimesUp() {
  clearInterval(timerInterval);
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


function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes < 10) {
      minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
