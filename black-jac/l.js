function onSave() {
    let firstNameUser = document.getElementById('firstName-el').value;
    let lastNameUser = document.getElementById('lastName-el').value;
    let emailUser = document.getElementById('email-el').value;
    let passwordUser = document.getElementById('password-el').value;
    let infoUser = document.getElementById("infoUser")
    let user = {
        name: firstNameUser,
        lastName: lastNameUser,
        email: emailUser,
        password: passwordUser
    };
    infoUser.textContent = user.email +" " +user.password

    console.log(user);
}
let btnSave = document.getElementById("btnSave")
function onStart(){
    btnSave.addEventListener(()=>{

    })

}