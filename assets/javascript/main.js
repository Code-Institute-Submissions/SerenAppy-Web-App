const audio = document.querySelector(".audio");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound-picker button");
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
const timeSelect = $("button.time-select");
const seasonSelect = $("button.season-select");
let fakeDuration = 600;








$(document).ready(function() {
    console.log("ready");

    timeSelect.forEach(option => {
        option.addEventListener("click", function() {
            fakeDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
                fakeDuration % 60
            )}`;
         });
    });

    seasonSelect.forEach(option => {
        option.addEventListener("click", function() {
            fakeDuration = this.getAttribute("data-sound");
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
                fakeDuration % 60
            )}`;
         });
    });

    $(function() {
        $("button").on("click", function() {
            $(this).css('background-color', 'black');
        });
    });

});







