## Pendant Collector Game

Using jQuery, this game draws a random number that the player has to match. 

To match this random number, the player is given 4 pendants. Each pendant is assigned a random value. The value is hidden from the player, but that value is added to the total after every click of the pendant. Based on what is added, the player can calculate the value of the pendant to try and match the random number that was drawn. If the player adds too much to the value and surpasses the random number, the player loses. If the player matches the random number exactly, the player wins. Win or lose, the game resets and a new random word is drawn and each pendant is assigned new hidden values.

### jQuery

I first coded this game to work entirely in vanilla javascript to ensure I understood vanilla javascript. Then I went through and commented out each javascript function and replaced it with a jQuery function. If I removed all of my comments, the amount of code needed to create this game was _much_ smaller than what was needed in vanilla javascript. I kept some of my console.logs in the js code for better understanding of whether the code worked as it should. 

I used random functions, timed hides, timed shows, on click events, off click events, timed fade outs, slide toggles, for loops, DOM manipulations.

### BootStrap

I then styled it mostly with BootStrap CSS, reused old styling I had created for my Portfolio, and added some custom styling just for this game. 

### Linked to in my BootStrap Portfolio 
https://hetty-chin.github.io/Bootstrap-Portfolio/portfolio.html

**I also had a lot of fun playing around with PhotoShop to tweak the images of the pendants. I know the instructions called for crystals but somehow adding a personal touch by adding my heart pendants made it so much more enjoyable :)
