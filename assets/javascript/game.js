// equivalent to: window.onload = function () {
$(function () {
    var gamesStarted = false;
    var pendantNumbers = [];
    var currentTotalCounter = 0;
    var winsCounter = 0;
    // is made obsolete by retart and checkIfWon: var gamesWonElement = document.getElementById("wins");
    var lossCounter = 0;
    // is made obsolete by restart and checkIfWon: var gamesLossElement = document.getElementById("losses");
    
    // display the current Total
        // is made obsolete by restart: var currentTotalElement = document.getElementById("current-total");
    
    // the player will be shown a random number between 19-120 at the start of the game
        // is made obsolete by the jQuery function in restart: var chosenNumber = "";
        // is made obsolete by the jQuery function in restart: var chosenNumberElement = document.getElementById("chosen-number");

    //start button
        // equivalent to: document.getElementById("start").onclick = function () {
    $("#start").click(function(){
        if (gamesStarted == false) {
            gameStarted = true;
            // var gameNotStartedElement = document.getElementById("game-not-started");
            // gameNotStartedElement.style.display = "none";
            $("#game-not-started").hide();
            // var gameInProgress = document.getElementsByClassName("game-in-progress");
            // var i;
            // for (i = 0; i < gameInProgress.length; i++) {
                // gameInProgress[i].style.display = "block";
            // }
            $(".game-in-progress").show();
            restart ();
        };
    });

    function restart () {
        chosenNumber = Math.floor((Math.random() * 102) + 19 );
        // is equivalent to: chosenNumberElement.innerHTML = chosenNumber;
        $("#chosen-number").html(chosenNumber);
        
        // each pendant should have a random hidden value between 1 - 12
        pendantNumbers = [];
        var i; 
        for ( i = 0; i < 4; i++){
            pendantNumbers.push (Math.floor((Math.random() * 12) + 1 ));
        };  
        console.log("random pendant numbers are:" + pendantNumbers);
        // is equivalent to: gamesWonElement.innerHTML = winsCounter;
        $("#wins").html(winsCounter);
        // is equivalent to: gamesLossElement.innerHTML = lossCounter;
        $("#losses").html(lossCounter);
        currentTotalCounter = 0;
        // is equivalent to: currentTotalElement.innerHTML = currentTotalCounter;  
        $("#current-total").html(currentTotalCounter);  
    };

    // when the player clicks on a pendant, it will add a specific amount of points to the player's total score -- is there a way to loop this? 
    // is equivalent to: document.getElementById("pendant1").onclick = function() {
    $("#pendant1").click(function(){
        console.log("clicking the first pendant grabs this number:" + pendantNumbers[0]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[0];
        // is equivalent to: currentTotalElement.innerHTML = currentTotalCounter;
        $("#current-total").html(currentTotalCounter); 
        checkIfWon();
    });

    // is equivalent to: document.getElementById("pendant2").onclick = function() {
    $("#pendant2").click(function(){
        console.log("clicking the second pendant grabs this number:" + pendantNumbers[1]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[1];
        // is equivalent to: currentTotalElement.innerHTML = currentTotalCounter;
        $("#current-total").html(currentTotalCounter); 
        checkIfWon();
    });

    // is equivalent to: document.getElementById("pendant3").onclick = function() {
    $("#pendant3").click(function(){
        console.log("clicking the third pendant grabs this number:" + pendantNumbers[2]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[2];
        // is equivalent to: currentTotalElement.innerHTML = currentTotalCounter;
        $("#current-total").html(currentTotalCounter); 
        checkIfWon();
    });

    // is equivalent to: document.getElementById("pendant4").onclick = function() {
    $("#pendant4").click(function(){
        console.log("clicking the fourth pendant grabs this number:" + pendantNumbers[3]);
        currentTotalCounter = currentTotalCounter + pendantNumbers[3];
        // is equivalent to: currentTotalElement.innerHTML = currentTotalCounter;
        $("#current-total").html(currentTotalCounter); 
        checkIfWon();
    });

    // create a function that checks if the player wins -- if their total score matches the random number / the player loses if their score goes above the random number
    function checkIfWon () {
        if (chosenNumber === currentTotalCounter) {
            winsCounter ++;
            // gamesWonElement.innerHTML = winsCounter;
            $("#wins").html(winsCounter);
            // var youWonElement = document.getElementById("you-won");
            // youWonElement.style.display = "block";
            $("#you-won").show(); 
            $("#you-won").fadeOut(3000);
            restart ();
        } else if (currentTotalCounter > chosenNumber) {
            lossCounter ++;
            // gamesLossElement.innerHTML = lossCounter;
            $("#losses").html(lossCounter);
            // var youLostElement = document.getElementById("you-lost");
            // youLostElement.style.display = "block";
            $("#you-lost").show();
            $("#you-lost").fadeOut(3000);
            restart ();
        }
    }
});
