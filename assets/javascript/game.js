window.onload = function () {
    var gamesStarted = false;
    // global variables
    var pendants = [pendant1, pendant2, pendant3, pendant4];
    var pendantNumbers = [];
    var currentTotalCounter = 0;
    var winsCounter = 0;
    var gamesWonElement = document.getElementById("wins");
    gamesWonElement.innerHTML = winsCounter;

    var lossCounter = 0;
    var gamesLossElement = document.getElementById("losses");
    gamesLossElement.innerHTML = lossCounter;

    // display the current Total
    var currentTotalElement = document.getElementById("current-total");
    currentTotalElement.innerHTML = currentTotalCounter;

    // the player will be shown a random number between 19-120 at the start of the game
    var chosenNumber = Math.floor((Math.random() * 102) + 19 );
    var chosenNumberElement = document.getElementById("chosen-number");
    chosenNumberElement.innerHTML = chosenNumber;

    // each pendant should have a random hidden value between 1 - 12
    var i; 
    for ( i = 0; i < pendants.length; i++){
        pendantNumbers.push (Math.floor((Math.random() * 12) + 1 ));
    }

console.log("globally accessible random pendant numbers are:" + pendantNumbers);

    // when the player clicks on a pendant, it will add a specific amount of points to the player's total score -- is there a way to loop this?
    document.getElementById("pendant1").onclick = function() {addPendant1Number()};
    function addPendant1Number() {
        console.log("clicking the first pendant grabs this number:" + pendantNumbers[0]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[0];
        currentTotalElement.innerHTML = currentTotalCounter;
        checkIfWon()
    }

    document.getElementById("pendant2").onclick = function() {addPendant2Number()};
    function addPendant2Number() {
        console.log("clicking the second pendant grabs this number:" + pendantNumbers[1]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[1];
        currentTotalElement.innerHTML = currentTotalCounter;
        checkIfWon()
    }

    document.getElementById("pendant3").onclick = function() {addPendant3Number()};
    function addPendant3Number() {
        console.log("clicking the third pendant grabs this number:" + pendantNumbers[2]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[2];
        currentTotalElement.innerHTML = currentTotalCounter;
        checkIfWon()
    }

    document.getElementById("pendant4").onclick = function() {addPendant4Number()};
    function addPendant4Number() {
        console.log("clicking the fourth pendant grabs this number:" + pendantNumbers[3]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[3];
        currentTotalElement.innerHTML = currentTotalCounter;
        checkIfWon()

    }

    // create a function that checks if the player wins -- if their total score matches the random number / the player loses if their score goes above the random number
    function checkIfWon () {
        if (chosenNumber === currentTotalCounter) {
            winsCounter ++;
            gamesWonElement.innerHTML = winsCounter;
            // maybe add a won alert?
            restart ()
        } else {
            if (currentTotalCounter > chosenNumber) {
                lossCounter ++;
                gamesLossElement.innerHTML = lossCounter;
                // maybe add a loss alert?
                restart ()
            }
        }
    }
    
    // the game restarts whenever the player wins or loses and the player should see a new random number, all pendants will have new hidden values, and the user's score will reset to 0 !!!

    // i need to create a function called reset but i need to figure out how to call this reset whent he game begins as well. Should I display instructions and a button that says start game that is what calls the reset? AND THEN also use that same reset for when someone wins or losses?

    //start button
    document.getElementById("start").onclick = function () {
        if (gamesStarted == false) {
            gameStarted = true;
            var gameNotStartedElement = document.getElementById("game-not-started");
            gameNotStartedElement.style.display = "none";
            var gameInProgress = document.getElementsByClassName("game-in-progress");
            var i;
            for (i = 0; i < gameInProgress.length; i++) {
                gameInProgress[i].style.display = "block";
            }
        }
    };
};
