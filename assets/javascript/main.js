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


function hideFunction() {
    document.getElementById("springPage").style.display="none";
    document.getElementById("summerPage").style.display="none";
    document.getElementById("autumnPage").style.display="none";
    document.getElementById("winterPage").style.display="none";
}


let time = 0;
let season = "none";
let timeButtons = document.getElementsByClassName("time-select");
let seasonButtons = document.getElementsByClassName("season-select");
let myvideo = document.getElementsByClassName("myVideo");
let myaudio = document.getElementsByClassName("myAudio");


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
    if (time !=0 && season !="none") {    
        time = 0;
        season = "none";
   

    if (season="spring") {
        document.getElementById("hideMe", "hideFooter").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("springPage").style.display="block";
    } else if
        (season="summer") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("summerPage").style.display="block";
    } else if 
        (season="autumn") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("autumnPage").style.display="block";
    } else if 
        (season="winter") {
        document.getElementById("hideMe").style.display="none";
        document.getElementById("hideFooter").style.display="none";
        document.getElementById("winterPage").style.display="block";
    };
    
    } else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Choose a Time and a Season to Enter SerenAppy',
        });
    };
};


myvideo.onplay = function() {
    myaudio.play();
};

myvideo.onpause = function() {
    myaudio.pause();
};


