/*  AUTHOR: Nicolas Sims
 *  VERSION: 2.4.7
 *  CREATED: 1/25/2017
 *  PURPOSE: Create a dice roller
 */

'use strict';

class main {
    constructor() {
        setupGame.setOpeningWords();
        writeStory.writeNewStory();
    }
}

class setupGame {
    static setOpeningWords() {
        document.getElementById("title").innerHTML = "> Begin 2.0";
        document.getElementById("text").innerHTML = "> You feel uneasy, as though your entire existence has been set " +
            "up merely to teach a class of schoolchildren how to program.<br>" +
            "> You ignore these feelings, as they are, of course, preposterous.";
        document.getElementById("input").style.display = "none";
        document.getElementById("button").innerHTML = "> Begin";
    }
}

class writeStory {
    static writeNewStory() {
        let state = 0;
        document.getElementById("button").addEventListener("click", () => {
            if (state == 0) {
                document.getElementById("text").innerHTML = "> You get your head back into the game, and realize " +
                    "that the opposition is about to kick the football away from you.<br>" +
                    "> This is problematic, of course, because you are tyring to score in the opponent's goal, as a " +
                    "sportslad is wont to do.<br>" +
                    "> You have a matter of seconds to shoot before you fail entirely.<br>" +
                    "> Your adventure begins now!";
                state++;
            } else if (state == 1) {
                document.getElementById("text").innerHTML = "> How do you want to shoot?<br>" +
                    "> You can try to shoot through the goalie's feet, but if he just closes his legs, he might " +
                    "block it.<br>" +
                    "> You can try to double back, lure the defenders and goalie out, then rush around the goalie " +
                    "and shoot, but it's possible the goalie won't fall for that.<br>" +
                    "> Finally, you can attempt to kick the ball as hard as you can right now. If you do that, you " +
                    "won't have to deal with the defender rushing at you, but the goalie's expecting you to do " +
                    "that.<br>" +
                    "> So, what do you do?<br>" +
                    "> 1 = Shoot through his feet.<br>" +
                    "> 2 = Double back and shoot.<br>" +
                    "> 3 = Just kick it hard!<br>";
                    document.getElementById("input").style.display = "block";
                    state++;
            } else if (state == 2 && document.getElementById("input").value == 1 || state == 2 && document.getElementById("input").value == 2 || state == 2 && document.getElementById("input").value == 3) {
                document.getElementById("input").style.display = "none";
                let shootValue = Math.floor((Math.random() * 10) + 1);
                if (shootValue == 1) {
                    document.getElementById("text").innerHTML = "> GOAL!<br>" +
                        "> THE CROWD GOES WILD! SO DOES THE NARRATOR!<br>" +
                        "> YOU SUCCEED ENTIRELY! NOTHING BAD CAN EVER HAPPEN TO YOU FROM NOW ON IT!<br>" +
                        "> YOU DID IT! YOU NOW DID DONE DO THE THING!<br>" +
                        "> SPOOOOOOOOORTS!!!<br>";
                } else if (shootValue == 2 || shootValue == 3) {
                    document.getElementById("text").innerHTML = "> YOU SHOOT! AND...<br>" +
                        "> The goalie headbutts the ball halfway up the field.<br>" +
                        "> You suddenly notice the goalie is the size of a large gorilla, and about twice as buff.<br>" +
                        "> The player you had presumed was a defender rushes past you and dribbles the ball into your " +
                        "goal, meters away.<br>" +
                        "> You fall to your knees and weep. Though you do not know it yet, this event has caused you" +
                        "to lose the championship, and two years later, develop a raging drug habit you will die to.<br>" +
                        "> Sorry.";
                } else if (shootValue == 4) {
                    document.getElementById("text").innerHTML = "> YOU SHOOT! AND...<br>" +
                        "> The ball goes out of bounds.<br>" +
                        "> The defender rushing at you breathes a sigh of relief and runs up to the ball to do the " +
                        "throw-in.<br>" +
                        "> You shrug. You'll get it next time, you think.<br>" +
                        "> Of course, whether you actually do is up to somebody else, cause you cannot pay me to " +
                        "write more scenarios for a /football/ text adventure.<br>";
                } else if (shootValue >= 5 || shootValue <= 10) {
                    document.getElementById("text").innerHTML = "> YOU SHOOT! AND...<br>" +
                        "> The goalie catches the ball.<br>" +
                        "> He dropkicks it and the ball goes sailing out of the stadium, causing a significant " +
                        "amount of property damage to the car of a visiting noble.<br>" +
                        "> You don't learn this until later, though, and the ball is thrown back into the middle of " +
                        "the field.<br>" +
                        "> And the game continues.<br>";
                    state = 0;
                    return main.constructor();
                }
            }
        }, false);
    }
}

window.onload = function() {
    new main();
};