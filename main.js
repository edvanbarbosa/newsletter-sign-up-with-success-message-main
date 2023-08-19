const getElement = (e)=> document.querySelector(e)

const button = document.querySelectorAll('button')
const input = getElement('#email')
const spanEmail = getElement('span.email')
const sucessSection = getElement('section.sucess-container')
const signUpSection = getElement('section.signUp')
const notificInvalidEmail = getElement('p.notificInvalidEmail')


const sendEmail = ()=>{
    signUpSection.style.display = 'none'
    sucessSection.style.display = 'flex'
    spanEmail.innerText = input.value
    
}

const returnSignUp = ()=>{
    input.value = ''
    notificInvalidEmail.style.display = 'none'
    input.classList.remove('wrongEmail')
    signUpSection.style.display = 'flex'
    sucessSection.style.display = 'none'  
}

const IfWrongEmail = ()=>{
    notificInvalidEmail.style.display = 'flex'
    input.classList.add('wrongEmail')

}

const verification = ()=>{
    const email = input.value
    const emailRegex = /@\S+\.\S+/
    console.log(emailRegex.test(email))

        if(emailRegex.test(email)){
            input.classList.remove('wrongEmail')
            sendEmail()
        }else{
            IfWrongEmail()
        }
    
}

const controlButtons =  ()=>{
    
    const buttonSign = button[0]
    const buttonSucess = button[1]

    buttonSign.addEventListener('click', verification)
    buttonSucess.addEventListener('click', returnSignUp)
}

controlButtons()