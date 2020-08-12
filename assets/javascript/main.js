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


function setTime(t) {
    time = t;
    console.log(time);
    };


function setSeason(s) {
    season = s;
    console.log(season);
    };


function startMeditation() {
    if (time !=0 && season !="none") {    
        time = 0;
        season = "none";
    }
    else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Pick A Time Selection And A Season Selection To Create Calm',
        });
    };
};












