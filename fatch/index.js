import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://projectmain-48085-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")


const booksEl = document.getElementById("books")


onValue(booksInDB, function(snapshot) {
  let booksArray = Object.values(snapshot.val())
  clearBooksListEl()
  // Challenge: Write a for loop where you console log each book.
  for (let i = 0; i < booksArray.length; i++) {
      let currentBook = booksArray[i]

   
      appendBookToBooksListEl(currentBook)
      // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging
  }
})


function clearBooksListEl() {
  booksEl.innerHTML = ""
}
function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}