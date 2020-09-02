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
        document.getElementById("change-image").setAttribute("src", "assets/images/season_images/spring.jpg");
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/spring.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();

    } else if (season=="summer") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("change-image").setAttribute("src", "assets/images/season_images/summer.jpg");
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/summer.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();
    
    } else if (season=="autumn") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("change-image").setAttribute("src", "assets/images/season_images/autumn.jpg");
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/autumn.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();
    
    } else if (season=="winter") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("meditatePage").style.display="block";
        document.getElementById("meditatePage").style.visibility="visible";
        document.getElementById("change-image").setAttribute("src", "assets/images/season_images/winter.jpg");
        document.getElementById("changeAudio").setAttribute("src", "assets/sounds/winter.mp3");
        document.getElementById("myAudio").load();
        document.getElementById("myAudio").pause();

    } else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });
    }
}


playButton.addEventListener("click", play);
function play() {
    if (myAudio.paused) {
    myAudio.play();
    playButton.innerHTML = "Pause";
  } else {
    myAudio.pause();
    playButton.innerHTML = "Play";
  }
}


startTimer();
function onTimesUp() {
  clearInterval(timerInterval);
}



function startTimer(){
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = time_limit - timePassed;
    console.log(timeLeft);
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
   
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




// let video = document.getElementById("myVideo");
// let btn = document.getElementById("myBtn");


// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }

