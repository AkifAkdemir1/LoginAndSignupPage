const form = document.getElementById(`form`)
const firstname_input = document.getElementById(`firstname-input`)
const email_input = document.getElementById(`email-input`)
const password_input = document.getElementById(`password-input`)
const repeat_password_input = document.getElementById(`repeat-password-input`)
const error_message = document.getElementById(`error-message`)

form.addEventListener(`submit`, (e) =>  {
    let errors = []

    if(firstname_input){
        errors = getSignUpFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value) 
    } 
    else{
        errors = getLoginFormErros(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getSignUpFormErrors(firstname,email,password,_repeatPassword){
    let errors = []

    if (firstname === `` || firstname == null){
        errors.push(`First Name is required!!`)
        firstname_input.parentElement.classList.add(`incorrect`)
    }
    if (email === `` || email == null){
        errors.push(`Email is required!!`)
        email_input.parentElement.classList.add(`incorrect`)
    }
    if (password === `` || password == null){
        errors.push(`Password is required!!`)
        password_input.parentElement.classList.add(`incorrect`)
    }
    if(password.length < 8){
        errors.push(`Password must have at least 8 characters.`)
        password_input.parentElement.classList.add(`incorrect`)
    }
    if(password !== repeatedPassword){
        errors.push(`Password doesn't match repeated password.`)
        password_input.parentElement.classList.add(`incorrect`)
        repeat_password_input.parentElement.classList.add(`incorrect`)
        
    }
    return errors;
}   

const allInputs = [firstname_input,email_input,password_input,repeat_password_input]

allInputs.forEach(input => {
    input.addEventListener(`input`,() =>{
        if(input.parentElement.classList.contains(`incorrect`)){
            input.parentElement.classList.remove(`incorrect`)
            error_message.innerText=``
        }
    }
    )
})

