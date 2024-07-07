let isAlive = false;
let hasBlackJack = false;
let playerChips = 145;
let  playerEL = document.getElementById('player-el')


let cards = []
let buttonStart = document.getElementById('btnEl');
let btnAdd = document.getElementById('addCard')
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let live_el = document.getElementById('live-el');
let winner = 0;
let btnBuy = document.getElementById('buy-btn');
let userNick = document.getElementById('gameNick');
let idGamer = document.getElementById('idGamer');
let player = {
    name:"Kobi",
    chips: 1,
    id:12124415870 ,
    sayHello: function (){
        helloUSer.textContent  = "Hello" +player.name    }

}
let  helloUSer = document.getElementById('Hello-el')
let countlive = 2;



let sum = 0
let storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser) {
    document.getElementById('infoUser').textContent = "Email: " + storedUser.email + " Password: " + storedUser.password;
}
userNick.textContent = "Nick: " + " " + player.name
playerEL.textContent = "$: "+  player.chips

player.sayHello()

function startGame() {
    let first_card = getRandomCard()
    let second_card = getRandomCard()
    cards = [first_card,second_card]
    sum = first_card + second_card
    isAlive = true
    
    first_card = Math.floor(Math.random()*13) + 1 
    second_card =  Math.floor(Math.random()*13) + 1 
    renderGame();




}
function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    // let first_card = Math.floor(Math.random() * 10) + 1;
    // let second_card = Math.floor(Math.random() * 10) + 1;

    if (sum <= 20) {
        Swal.fire({
            title: 'You loose!',
            text: 'Try Again?.',
            imageUrl: 'https://st4.depositphotos.com/5777490/29768/v/450/depositphotos_297685432-stock-illustration-you-lose-casino-loss-slot.jpg', // URL вашого зображення
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'You Loose',

        })
        message = "Do you want to draw a new CARD?";
        buttonStart.textContent = 'START';
        live_el.textContent = "Tries left: " + countlive;
        btnAdd.style.display = 'block';
    } else if (sum === 21) {
        Swal.fire({
            title: 'Вітаємо!',
            text: 'Це ваш JavaScript-алерт.',
            imageUrl: 'https://t3.ftcdn.net/jpg/02/82/23/94/360_F_282239447_9JUkxLmUPzBvOrEAXVEx2GpNd1EkPOSO.jpg', // URL вашого зображення
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Custom image',
        });

        message = "You are WINNER !";
        buttonStart.textContent = "START";
        live_el.textContent = "Tries left" + countlive
        hasBlackJack = true
    } else {
        cardEl.textContent = 'CARDS: ' + cards[0] + cards[1]
        message = "GAME OVER";
        buttonStart.textContent = 'START';
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
function getRandomCard() {
    let cardsRundom = Math.floor(Math.random() * 13) + 1
    if(cardsRundom >10 ){
        return 10
    }else if(cardsRundom ===1){
        return 11
    }else{
        return cardsRundom;
    }
}
function newCard() {
    if(isAlive ===true && hasBlackJack ===false){

  

    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}



player.sayHello();



