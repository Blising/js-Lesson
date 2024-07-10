let contaier = document.getElementById('container')
contaier.innerHTML = "<h1 > Soo happy  </h1>"+  "<button onclick=save()> Save </button>"



function save(){
    contaier.innerHTML  = "<h3> YOUR DATA SAVED </h3>"
    console.log("save")
}

