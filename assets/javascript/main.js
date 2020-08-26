function hideFunction() {
    document.getElementById("meditatePage").style.display="none";
}


let time = 0;
let season = "none";
let timeButtons = document.getElementsByClassName("time-select");
let seasonButtons = document.getElementsByClassName("season-select");



function setTime(t, elem) {
    var arrayLength = timeButtons.length;
    for (var i = 0; i < arrayLength; i++) {
    console.log(timeButtons[i]);
    timeButtons[i].style.backgroundColor="#CD853F";
    };
    time = t;
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
    console.log(time + season);
    if (time ==0 && season =="none") {    
        time = 0;
        season = "none";
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });

    } else if (season=="spring") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("changeVideo").setAttribute("src", "assets/video/spring.mp4");
        document.getElementById("myVideo").load();
        document.getElementById("myVideo").play();
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/spring.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").play();

    } else if (season=="summer") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("changeVideo").setAttribute("src", "assets/video/summer.mp4");
        document.getElementById("myVideo").load();
        document.getElementById("myVideo").play();
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/summer.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").play();
    
    } else if (season=="autumn") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("changeVideo").setAttribute("src", "assets/video/autumn.mp4");
        document.getElementById("myVideo").load();
        document.getElementById("myVideo").play();
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/autumn.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").play();
    
    } else if (season=="winter") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("changeVideo").setAttribute("src", "assets/video/winter.mp4");
        document.getElementById("myVideo").load();
        document.getElementById("myVideo").play();
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/winter.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").play();

    } else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });
    }
}



const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

startTimer();
function onTimesUp() {
  clearInterval(timerInterval);
}



function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
	
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  } else {
		document
			.getElementById("base-timer-path-remaining")
			.classList.add(info.color);
	}
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document.getElementById("base-timer-path-remaining")
  .setAttribute("stroke-dasharray", circleDasharray);
}


let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");


function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

