var audio = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

function playDrumSound(index) {
    var audioPlayer = new Audio(audio[index]);
    audioPlayer.play();
}

// Click Event Listener
document.addEventListener("click", function(event) {
    var targetElement = event.target;
    if (targetElement.classList.contains("drum")) {
        var index = Array.from(document.querySelectorAll(".drum")).indexOf(targetElement);
        playDrumSound(index);
    }
});

// Keydown Event Listener
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();

    var keyMappings = {
        'w': 0, 'a': 1, 's': 2, 'd': 3, 'j': 4, 'k': 5, 'l': 6
    };

    if (keyMappings[keyPressed] !== undefined) {
        playDrumSound(keyMappings[keyPressed]);
    }
});
