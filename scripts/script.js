var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonTextContent = this.textContent;
        switchDrums(buttonTextContent);
        buttonAnimation(buttonTextContent);
    })
}

document.addEventListener("keydown", function(event) {
    switchDrums(event.code.slice(3, event.code.length).toLowerCase());
    buttonAnimation(event.code.slice(3, event.code.length).toLowerCase());
})

function switchDrums(switcher){
    switch (switcher) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            break;
    }
}

function buttonAnimation (keyPressed) {
    document.querySelector("." + keyPressed).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + keyPressed).classList.remove("pressed");
    }, 100)
}