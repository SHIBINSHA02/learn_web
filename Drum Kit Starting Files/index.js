var audio = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

document.addEventListener("keydown", function() {
    var keyPressed = event.key.toLowerCase(); // Convert to lowercase aassafor case-insensitivity
    
    // Map keys to drum sounds
    var keyMappings = {
        'w': 0,  // Press '1' for the first drum sound
        'a': 1,  // Press '2' for the second drum sound
        's': 2,  // Press '3' for the third drum sound
        'd': 3,  // Press '4' for the fourth drum sound
        'j': 4,  // Press '5' for the fifth drum sound
        'k': 5,  // Press '6' for the sixth drum sound
        'l': 6   // Press '7' for the seventh drum sound
    };

    // Check if the pressed key is mapped to a drum sound
    if (keyMappings[keyPressed] !== undefined) {
        var index = keyMappings[keyPressed];
        var audioPlayer = new Audio(audio[index]);
        audioPlayer.play();
    }
});
