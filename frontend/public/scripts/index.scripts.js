const loginBtn = document.querySelector("#loginBtn")
const loginForm = document.querySelector('.loginForm')
const signupForm = document.querySelector('.signupForm')
const signupBtn = document.querySelector("#signupBtn")
const brandLogo = document.querySelector("#brandLogo")

formsShowing = false
let loginFormShowing = false
let signupFormShowing = false
//Checar se outros dois estão desativados => Desativar os que não => Ativar
//Para tratar do clique no botão de login:
const loginClicked = () => {
    [brandLogo, signupForm].map( item => {
        if(!item.classList.contains('hidden')){
            if(item==signupForm) signupFormShowing = !signupFormShowing
            item.classList.add('hidden')
        }
    })
    loginForm.classList.toggle('hidden')
    loginFormShowing = !loginFormShowing
    if(loginFormShowing) document.getElementById('loginEmail').focus()
    console.log('loginFormShowing: ', loginFormShowing)
    if(!loginFormShowing && !signupFormShowing ) brandLogo.classList.remove('hidden')
}

const signupClicked = () => {
    [brandLogo, loginForm].map( item => {
        if(!item.classList.contains('hidden')){
            if(item==loginForm) loginFormShowing = !loginFormShowing
            item.classList.add('hidden')
        }
    })
    signupForm.classList.toggle('hidden')
    signupFormShowing = !signupFormShowing
    if(signupFormShowing) document.getElementById('signupName').focus()
    console.log('signupFormShowing: ', signupFormShowing)
    if(!loginFormShowing && !signupFormShowing ) brandLogo.classList.remove('hidden')
}

function checkLogo(){
    if(loginClicked() == true || signupClicked() == true){
        formsShowing=true
    }else{
        formsShowing=false
    }

    if(formsShowing){
        brandLogo.classList.add('hidden')
    }else{
        brandLogo.classList.remove('hidden')
    }
}

loginBtn.addEventListener("click", loginClicked)
signupBtn.addEventListener("click", signupClicked)

