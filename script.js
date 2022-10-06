const form  = document.getElementById('form');
const username = document.getElementById('username') ;
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const errorMsg = {
    'username': 'Please enter Username',
    'email':'Please enter a valid Email Id',
    'password':'Please enter Password',
    'confirmpassword':'Enter your password again'
}
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
const checkRequired=(inputArr)=>{
    inputArr.forEach((input)=>{
    const errorMessage  = errorMsg[input.id];
        if(input.value.trim() === ''){
            showError(input,errorMessage)
        }
    })
}
const isValidEmail=(email)=>{
 const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 return emailRegEx.test(String(email).toLowerCase())
}
form.addEventListener('click',(e)=>{
    e.preventDefault();
console.log('form submit cicked');
checkRequired([username,email,password,confirmpassword])

})