// // SETTING THE STAGE
// let player = "Per"
// let opponent = "Nick"
// const game = "AmazingFighter"
// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`)

// } else {

//     console.log(`The winner is  ${opponent} ! ${ player} lost the game`)
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes


// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function getCourses(courses) {
//     for (let i = 0; i < courses.length; i++) {
      
//         console.log(courses[i])
       

//     }

// }
// getCourses(myCourses)
// myCredit= []
// localStorage.setItem("myCredit", "100");
// let uBtn  = document.getElementById("log-Btn")

// let point  = document.getElementById("point")
// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]
// uBtn.addEventListener('click',function(){
//     point.textContent = data[0].score + data[0].player 


// })

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)


// function generateSentence(desc, arr) {
// let baseString  = `The ${arr.length} ${desc} are`
// const lastIndex = arr.length -1
// for(let i= 0; i<arr.length; i++){
//     if(i===lastIndex){
//         baseString +=arr[i]
//     }else{
//         baseString +=arr[i]+", "
//     }
// }
// return baseString

// }
// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
// console.log(sentence)
const container = document.getElementById("container")
const containerCar = document.getElementById("containerCar")

const conteinerOther = document.getElementById("conteinerOther")
const createElBtn = document.getElementById("p-el")

const imgs = [
    "images/men.png",
    "images/hip2.png",
    "images/hip3.png"
]

const imgsCar = [
    "images/car.png",
    "images/car2.jpeg",
    "images/car3.jpeg"
]
const toghether = [
    "images/car.png",
    "images/hip1.png",
    "images/hip3.png"

]


function renderImages() {
    let imageDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imageDOM +=  `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imageDOM
}
function renderCar(){
     let imageDOM = ""
    for (let i = 0 ;i < imgsCar.length ; i++  ){
        imageDOM += `<img class="team-img" src="${imgsCar[i]}">`

    }
    containerCar.innerHTML = imageDOM
}

function renderCarWithHip(){
     let imageDOM = ""
for(let i = 0; i< toghether.length; i++){
    imageDOM+=   `<img class="team-img" src="${toghether[i]}">` 


}
conteinerOther.innerHTML = imageDOM


}

createElBtn.addEventListener('click',function(){
    const Luntik = {color:"Blue", numbers:"3950302", orders:"toys", isAlive:true} 
    let divEl = document.createElement('div')
    divEl.style.height = 200
    divEl.style.width = 300
    divEl.style.backgroundColor  ='red'
divEl.style.color  ='yellow'

    divEl.textContent = ` ${Luntik.color}.${Luntik.numbers}, ${Luntik.orders}, ${Luntik.isAlive}`
  document.body.appendChild(divEl)
  renderImages()
renderCar()
renderCarWithHip()
})

const totalPrice =" 420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy € ${Number( totalPrice).toFixed(1)}`

