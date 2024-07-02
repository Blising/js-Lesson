let isAlive = true;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let live_el = document.getElementById('live-el');
let winner = 0;
let btnBuy = document.getElementById('buy-btn');

let countlive = 2;


function startGame() {


    let first_card = Math.floor(Math.random() * 10) + 1;
    let second_card = Math.floor(Math.random() * 10) + 1;

    // let first_card = 10;
    // let second_card = 11;
    let sum = first_card + second_card;
    let buttonStart = document.getElementById('btnEl');

    if (sum <= 20) {
        Swal.fire({
            title: 'You loose!',
            text: 'Try Again?.',
            imageUrl: 'https://st4.depositphotos.com/5777490/29768/v/450/depositphotos_297685432-stock-illustration-you-lose-casino-loss-slot.jpg', // URL вашого зображення
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'You Loose',

        })

        cardEl.textContent = 'CARDS: ' + first_card + " " + second_card;
        message = "Do you want to draw a new CARD?";
        buttonStart.textContent = 'AGAIN';

        live_el.textContent = "Tries left: " + countlive;


    } else if (sum === 21) {
        Swal.fire({
            title: 'Вітаємо!',
            text: 'Це ваш JavaScript-алерт.',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/82/23/94/360_F_282239447_9JUkxLmUPzBvOrEAXVEx2GpNd1EkPOSO.jpg', // URL вашого зображення
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
        });
        cardEl.textContent = 'CARDS: ' + first_card + " " + second_card;
        message = "You are WINNER, You've got Blackjack!";
        hasBlackJack = true;
        buttonStart.textContent = "AGAIN?";
        live_el.textContent = "Tries left" + countlive
        console.log(++winner);




    } else {
        cardEl.textContent = 'CARDS: ' + first_card + " " + second_card;
        message = "GAME OVER";
        buttonStart.textContent = 'AGAIN';
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    live_el.textContent = "Tries left" + countlive
    --countlive
    if (countlive === 0) {
        btnBuy.style.display = 'block';
        live_el.textContent = "Tries left  0"
        btnEl.style.display = 'none';
        btnBuy.addEventListener('click', addTries);
    } else {
        btnBuy.style.display = 'none';
    }

}




function addTries() {
    countlive = 3;
    live_el.textContent = "Tries left: " + countlive;
    btnBuy.style.display = 'none';
    btnEl.style.display = 'block';
    btnBuy.removeEventListener('click', addTries); // Вилучаємо обробник після використання
}

function reset() {
    sumEl.textContent = "Want to play a round?";
    cardEl.textContent = "картки:";
    messageEl.textContent = "Want to play a round?";
    isAlive = true;
    hasBlackJack = false;
    live_el.textContent = " Tries left 2 ";
    countlive = 2;
    btnBuy.style.display = 'none';
    btnEl.style.display = 'block';

}
