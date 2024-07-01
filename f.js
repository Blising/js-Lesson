let num1 = 0;
let num2 = 0;

let sumEl = document.getElementById('home');

let sumGues = document.getElementById('gues');


function plusone() {

    sumEl.textContent = num1 += 1

}



function plustwo() {
    sumEl.textContent = num1 += 2


}

function plustree() {
    sumEl.textContent = num1 += 3


}





function plusoneGues() {


    sumGues.textContent = num2 += 1
}
function pluswtwoGues() {


    sumGues.textContent = num2 += 2
}
function plustreeGues() {


    sumGues.textContent = num2 += 3
}

function reset() {
    sumEl.textContent = num1 = 0;


}
function resetGues() {
    sumGues.textContent = num2 = 0;


}