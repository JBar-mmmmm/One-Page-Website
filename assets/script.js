// Fade
let sections = {
    two: document.querySelector("#intro"),
    three: document.querySelector("#childrenMain"),
    four: document.querySelector("#childrenSub"),
    five: document.querySelector("#adultMain"),
    six: document.querySelector("#adultSub")
}
let threeSubSection = document.querySelector("#threeSubSection")

let sectionsPos = {
    two: sections.two.getBoundingClientRect(),
    three: sections.three.getBoundingClientRect(),
    four: sections.four.getBoundingClientRect(),
    five: sections.five.getBoundingClientRect(),
    six: sections.six.getBoundingClientRect()
}

let sectionsInitialY = {
    two: sectionsPos.two.top,
    three: sectionsPos.three.top,
    four: sectionsPos.four.top,
    five: sectionsPos.five.top,
    six: sectionsPos.six.top
}


window.addEventListener("scroll", function(){
    sectionsPos = {
        two: sections.two.getBoundingClientRect(),
        three: sections.three.getBoundingClientRect(),
        four: sections.four.getBoundingClientRect(),
        five: sections.five.getBoundingClientRect(),
        six: sections.six.getBoundingClientRect()
    }

    if(sectionsPos.two.top > 0){
        sections.two.style.opacity = 1 - 2 * (sectionsPos.two.top / sectionsInitialY.two);
    }
    if(sectionsPos.three.top > 0){
        sections.three.style.opacity = 1 - 4 * (sectionsPos.three.top / sectionsInitialY.three);
        threeSubSection.style.opacity = 1 - 12 * (sectionsPos.three.top / sectionsInitialY.three);
    }
    if(sectionsPos.four.top > 0){
        sections.four.style.opacity = 1 - 8 * (sectionsPos.four.top / sectionsInitialY.four);
    }
    if(sectionsPos.five.top > 0){
        sections.five.style.opacity = 1 - 16 * (sectionsPos.five.top / sectionsInitialY.five);
    }
    if(sectionsPos.six.top > 0){
        sections.six.style.opacity = 1 - 25 * (sectionsPos.six.top / sectionsInitialY.six);
    }
})


//Colour
let colourTarget = document.querySelector("#colour");
let colours = ["#DDD", '#9400D3', '#4B0082', '#00F', '#0F0', '#FF0', '#FF7F00', '#F00'];
let coloursSelector = 0;
let c = 0;

function colourRandomiser() {
    if(c < 1) {
        coloursSelector = Math.floor(Math.random() * colours.length);
        c = 1;
        colourTarget.style.color = colours[coloursSelector];
        setInterval(function(){c = 0;}, 500);
    }
}

window.addEventListener("mousemove", colourRandomiser);


//Text Replace
let clickCount = 0;
textTarget = [
    "null",
    document.querySelector("#click1").innerHTML,
    document.querySelector("#click2").innerHTML,
    document.querySelector("#click3").innerHTML,
    document.querySelector("#click4").innerHTML,
    document.querySelector("#click5").innerHTML,
    document.querySelector("#click6").innerHTML,
    document.querySelector("#click7").innerHTML,
    document.querySelector("#click8").innerHTML,
    document.querySelector("#click9").innerHTML,
    document.querySelector("#click10").innerHTML,
    document.querySelector("#click11").innerHTML
]
document.querySelector("#click1").innerHTML = "Click"; //Editing html here so all the content is in the html file & to display all the info incase the js doesn't work
document.querySelector("#click2").innerHTML = "Click";
document.querySelector("#click3").innerHTML = "Click";
document.querySelector("#click4").innerHTML = "Click";
document.querySelector("#click5").innerHTML = "Click";
document.querySelector("#click6").innerHTML = "Click";
document.querySelector("#click7").innerHTML = "Click";
document.querySelector("#click8").innerHTML = "Click";
document.querySelector("#click9").innerHTML = "Click";
document.querySelector("#click10").innerHTML = "Click";
document.querySelector("#click11").innerHTML = "Click";

function textReplaceOnClick() {
    clickCount = clickCount + 1;
    document.querySelector("#click" + clickCount).innerHTML = textTarget[clickCount];
}

window.addEventListener("click", textReplaceOnClick);