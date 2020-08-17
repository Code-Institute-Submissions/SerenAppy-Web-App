/*const audio = document.querySelector(".audio");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound-picker button");
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
const timeSelect = $("button.time-select");
const seasonSelect = $("button.season-select");
let fakeDuration = 600;*/

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
    if (time !=0 && season !="none") {    
        time = 0;
        season = "none";

    var element = document.getElementById("test1");
    element.classList.add("hideMe");

    var element = document.getElementById("test2");
    element.classList.remove("hideMe");


} else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });
    };
};


