let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    let randomIndex = Math.floor(Math.random() * fighters.length)
    console.log(fighters[randomIndex])
    let secondIndex = Math.floor(Math.random() * fighters.length)
    console.log(fighters[secondIndex])
    stageEl.textContent = `${fighters[randomIndex] } VS ${fighters[secondIndex]}`
    // let firstIndex = Math.floor(Math.random() *fighters.length) 
    // let secondIndex 
    // do{
    //     secondIndex = Math.floor(Math.random() * fighters.length) 

    // }while(secondIndex === firstIndex)
    //     let firstFighter = fighters[firstIndex]
    //     let secondFighter = fighters[secondIndex]
    //     stageEl.textContent = `${firstFighter} vs ${secondFighter}`
 
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
