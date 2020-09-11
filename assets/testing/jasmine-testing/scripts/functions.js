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