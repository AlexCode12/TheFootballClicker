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
let refClock = 0;

/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += 1;
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "THE FOOTBALL " + pupCost1;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost1) {
        bank = bank - pupCost1;
        pupCost1 = pupCost1 * 2;
        bank = bank * 2;
        gameButton.textContent = bank;
        powerUp.textContent = "The power of Greyskull! " + pupCost1;
        bankElement.textContent = "Du köpte powerup!";
    } else
        bankElement.textContent = "Du har inte råd med powerup!";
});
powerUpsDiv.appendChild(powerUp);

/* skapa ett powerup-element */
let powerUrp = document.createElement("button");
powerUrp.textContent = "THE TEAM " + pupCost2;
powerUrp.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 = pupCost2 * 3;
        bank = bank * 2;
        gameButton.textContent = bank;
        powerUrp.textContent = "PowerURP! " + pupCost;
        bankElement.textContent = "Du köpte powerurp!";
    } else
        bankElement.textContent = "Du har inte råd med powerurp!";
});
powerUpsDiv.appendChild(powerUrp);