// main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
  databaseURL: "https://projectmain-48085-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)

const flouwersINDb = ref(database, "flouwers")
console.log(app)
const btnAdd = document.getElementById('add-button')
const inputF = document.getElementById('input-field')
const shoppingListEl = document.getElementById('shopping-list')
let product = []

btnAdd.addEventListener('click', function () {
  let inputValue = inputF.value
  push(flouwersINDb, inputValue)
  clearInputFieldEl()
appendItemToShoppingListEl(inputValue)

})

function clearInputFieldEl() {
  inputF.value = ""
}

function appendItemToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}
// Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>
