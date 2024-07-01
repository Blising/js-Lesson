// let first_card =Math.floor(Math.random() * 10) + 1;
// let second_card = 10;

let isAlive = true;
let message = ""
let messageEl = document.getElementById("message-el")
let sumelement = document.getElementById('sum-el')

let cardEl = document.getElementById('card-el')
sumelement.textContent = ' '


function startGame() {
    let first_card = Math.floor(Math.random() * 10) + 1;
    let second_card = Math.floor(Math.random() * 10) + 1;


    // let first_card = 10;
    // let second_card = 11;
    sumelement = first_card + second_card;
    let buttonStart = document.getElementById('btnEl')
    if (sumelement <= 20) {
        cardEl.textContent = 'Cards :' + first_card + " " + second_card
        message = "Do you want to draw a new card?"
        buttonStart.textContent = 'Try again'




    } else if (sumelement === 21) {
        cardEl.textContent = 'Cards :' + first_card + " " + second_card
        message = "You Winner You've got Blackjack!"
        hasBlackJack = true
        buttonStart.textContent = "  once else?"



    } else {
        cardEl.textContent = 'Cards :' + first_card + " " + second_card
        message = "You're out of the game!"
        buttonStart.textContent = 'Try again'
        isAlive = false


    }
    messageEl.textContent = message

}
function reset() {
    sumelement.textContent = "Want to play a round?"
    cardEl.textContent = "картки:"
    messageEl.textContent = "Want to play a round?"


}