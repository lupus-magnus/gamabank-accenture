const loginBtn = document.querySelector("#loginBtn")
const loginForm = document.querySelector('.loginForm')
const signupBtn = document.querySelector("#signupBtn")
const brandLogo = document.querySelector("#brandLogo")


//Para tratar do clique no botão de login:
const loginClicked = () => {
    loginForm.classList.toggle('hidden')
    brandLogo.classList.toggle('animateOut')
    //setTimeout(() => brandLogo.classList.toggle('hidden'), 1000) //brandLogo.classList.toggle('hidden')
    
}
loginBtn.addEventListener("click", loginClicked)

