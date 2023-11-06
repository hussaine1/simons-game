let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

// this function generates a random number 
function nextSequence() {
    // Math.random() will generate a random number from 0-0.999 (never reaching 1)
    // Math.floor() will round down to the nearest int
    // so if i did Math.floor(Math.random()*3) then range of values I can get is 0, 1, 2
    // but need 0, 1, 2, 3. therefore do *4 
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

// this statement stores the randomly selected colour from the buttonColours array
let randomChosenColour = buttonColours[nextSequence()];

// this stores the randomly selected colours 
gamePattern.push(randomChosenColour);
