$(document).on("keypress", function () {
    // $("#level-title").text("Level 0");
    let buttonColours = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userClickedPattern = [];
    let level = -1;

    // this function generates a random number 
    function nextSequence() {
        // Math.random() will generate a random number from 0-0.999 (never reaching 1)
        // Math.floor() will round down to the nearest int
        // so if i did Math.floor(Math.random()*3) then range of values I can get is 0, 1, 2
        // but need 0, 1, 2, 3. therefore do *4 
        let randomNumber = Math.floor(Math.random() * 4);
        // this statement stores the randomly selected colour from the buttonColours array
        let randomChosenColour =buttonColours[randomNumber];
        // this stores the randomly selected colours 
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level ++;
        $("#level-title").text("Level "+level);
        // console.log("test");
    }

    nextSequence();

    function playSound(name) {
        
        document.getElementById(name+"Sound").play();
    }

    function animatePress(currentColour) {
        $("."+currentColour).addClass("pressed");
        setTimeout(function(){
            $("."+currentColour).removeClass("pressed");
        }, 100);
    }

    $(".btn").on("click", function() {
        let userChosenColour = $(this).attr('id');
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        // console.log(userClickedPattern);
    });

    // due to new chrome update you cant just play sounds 
    // chrome is more strict
    // either you can autoplay sounds muted
    // or the sound required the user to interact with the site first, e.g. pressing a button
});

