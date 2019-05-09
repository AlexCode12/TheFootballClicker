/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");

let scoreText =document.createElement("p");
/* variabel för att spara bank */
let clickValue = 1; // vad är varje click värt
let bank = 0;
let pupCost1 = 10;
let pupCost2 = 15;
let pup1Clicks = 0;
let Powerval = 0;

/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += clickValue;
    gameButton.textContent = Math.floor(bank);
});
/* Första knappen och dess värden */
let powerUp = document.createElement("button");
powerUp.textContent = "THE FOOTBALL " + pupCost1;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost1) {
		clickValue *= 2;
		bank -= pupCost1;
        pupCost1 *= 3;
        pup1Clicks += 10;
        gameButton.textContent = bank; 
       bankElement.textContent = "You bought THE FOOTBALL!"
       powerUp.textContent = "THE FOOTBALL " + pupCost1;
    } else {
        bankElement.textContent = "You can NOT afford THE FOOTBALL!";
    }
    if (bank >= 1000000) {
        bankElement.textContent = "MARCHING ON TOGETHER";
    }
});
/* Andra knappen och dess värden */
let powerUrp = document.createElement("button");
powerUrp.textContent = "THE CLUB " + pupCost2;
powerUrp.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 *= 2;
        Powerval += 0.1;
        gameButton.textContent = bank;
        bankElement.textContent = "You bought THE TEAM!";
        powerUrp.textContent = "THE TEAM " + pupCost2;
    } else {
        bankElement.textContent = "You can NOT afford THE TEAM!";
    }
        if (bank >= 1000000) {
            bankElement.textContent = "LEEDS LEEDS LEEDS";
        }
});
/* Funktion för att få auto-clickern att fungera*/
function step() {
    bank += Powerval;
    gameButton.textContent = Math.floor(bank);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
powerUpsDiv.appendChild(powerUp);
powerUpsDiv.appendChild(powerUrp);
