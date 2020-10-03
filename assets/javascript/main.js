// This function hides the meditation page content on loading the landing page.
function hideFunction() {
	document.getElementById("meditatePage").style.display = "none";
}

// Global variables.
let time = 0;
let season = "none";
let timeButtons = document.getElementsByClassName("time-select");
let seasonButtons = document.getElementsByClassName("season-select");
let time_limit = 20;
let timePassed = 0;
let timeLeft = time_limit;
let timerInterval = null;
const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");
const twoMins = document.getElementById("two");
const fiveMins = document.getElementById("five");
const tenMins = document.getElementById("ten");
const twentyMins = document.getElementById("twenty");
const thirtyMins = document.getElementById("thirty");
const sixtyMins = document.getElementById("sixty");
const springButton = document.getElementById("spring");
const summerButton = document.getElementById("summer");
const autumnButton = document.getElementById("autumn");
const winterButton = document.getElementById("winter");
const meditateButton = document.getElementById("meditate");

// Global event listeners.
twoMins.addEventListener("click", function () {
	setTime(2, this);
});

fiveMins.addEventListener("click", function () {
	setTime(5, this);
});

tenMins.addEventListener("click", function () {
	setTime(10, this);
});

twentyMins.addEventListener("click", function () {
	setTime(20, this);
});

thirtyMins.addEventListener("click", function () {
	setTime(30, this);
});

sixtyMins.addEventListener("click", function () {
	setTime(60, this);
});

springButton.addEventListener("click", function () {
	setSeason('spring', this);
});

summerButton.addEventListener("click", function () {
	setSeason('summer', this);
});

autumnButton.addEventListener("click", function () {
	setSeason('autumn', this);
});

winterButton.addEventListener("click", function () {
	setSeason('winter', this);
});

meditateButton.addEventListener("click", function () {
	startMeditation();
});

resetButton.addEventListener("click", function () {
	reset();
});

// This function allows the user to see which time button has been selected and allows only one button to be selected at any time.
function setTime(t, elem) {
	let arrayLength = timeButtons.length;
	for (let i = 0; i < arrayLength; i++) {
		timeButtons[i].style.backgroundColor = "#CD853F";
	}
	time = t;
	elem.style.backgroundColor = "#D2B48C";
}

// This function allows the user to see which season button has been selected and allows only one button to be selected at any time.
function setSeason(s, elem) {
	let arrayLength = seasonButtons.length;
	for (let i = 0; i < arrayLength; i++) {
		seasonButtons[i].style.backgroundColor = "#CD853F";
	}
	season = s;
	elem.style.backgroundColor = "#D2B48C";
}

/**
 * This function is called when the user clicks the GO button, 
 * it formats the time selected, displays an error modal if the selections are incorrect,
 * hides all of the content on the landing page,
 * loads the background image and audio associated with the users season selection,
 * pauses the audio when the page loads
 * and also loads the bleep audio which is played when the timer gets to zero.
 */

function startMeditation() {

	document.getElementById('base-timer-label').innerHTML = formatTime(60 * time);

	if (time == 0 || season == "none") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please Choose a Time and a Season to Enter SerenAppy',
		});
	}
	else {
		document.getElementById("hideMe").style.display = "none";
		document.getElementById("hideFooter").style.display = "none";
		document.getElementById("meditatePage").style.display = "block";
		document.getElementById("meditatePage").style.visibility = "visible";
		document.getElementById("change-image").setAttribute("src", "assets/images/season_images/" + season + ".jpg");
		document.getElementById("changeAudio").setAttribute("src", "assets/audio/" + season + ".mp3");
		document.getElementById("myAudio").load();
		document.getElementById("myAudio").pause();
		document.getElementById("myBleep").load();
	}
	document.getElementById("hideMe");
}

/**
 * This function is called when the timer reaches zero, it stops the interval from executing every second,
 * pauses the season audio, resets the timer back to the start
 * and plays the bleep audio so the user knows the session has finished.
 */

function onTimesUp() {
	clearInterval(timerInterval);
	myAudio.pause();
	myBleep.play();
	reset();
}

// This function stops the interval from executing every second and pauses the timer.
function pauseTimer() {
	clearInterval(timerInterval);
}

/**
 * This button controls the play and pause of the season audio,
 * if the audio is paused the button text displays play and by clicking 
 * the button it plays the audio and if the audio is playing the
 * button text displays pause and will pause the audio when clicked.
 * It also starts and pauses the countdown timer in tandem with the audio. 
 */
playButton.addEventListener("click", play);

function play() {
	if (myAudio.paused) {
		myAudio.play();
		startTimer();
		playButton.innerHTML = "Pause";
	}
	else {
		myAudio.pause();
		pauseTimer();
		playButton.innerHTML = "Play";
	}
}

/**
 * This function sets the interval to execute every second so that 
 * the timer operates like a digital watch, adds one second on to the time passed,
 * calculates the time left, formats the time left and displays it and calls the onTimesUp
 * function when the timer reaches zero.
 */
function startTimer() {
	timerInterval = setInterval(() => {
		timePassed = timePassed += 1;
		timeLeft = time * 60 - timePassed;
		document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);

		if (timeLeft === 0) {
			onTimesUp();
		}
	}, 1000);
}

/**
 * This function pauses the audio, stops the interval from executing every second,
 * sets the play/pause button to pause and displays the button text as play and
 * calculates the original time selected by the user and displays it on the timer.
 */
function reset() {
	myAudio.pause();
	pauseTimer();
	playButton.innerHTML = "Play";
	timeLeft = time * 60;
	timePassed = 0;
	document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
}

// This function calls the emailjs authentication key to send the contact form email.
(function () {
	emailjs.init("user_O4YLRRligVe2xWuztVfBA");
})();