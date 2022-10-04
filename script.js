document.title = "Ayushi"
const form  = document.getElementById('form');
const username = document.getElementById('username') ;
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('Cpassword');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
const isValidEmail=(email)=>{
 const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 return emailRegEx.test(String(email).toLowerCase())
}
form.addEventListener('click',(e)=>{
    e.preventDefault();
console.log('form submit cicked');
if(username.value ==='') showError(username,"Please enter a username");
if(email.value ==='') showError(email,"Please enter a email");
else if(!isValidEmail(email.value)){
    showError(email,"Enter a valid email");
}
if(password.value ==='') showError(password,"Please enter a password");
if(Cpassword.value ==='') showError(Cpassword,"Enter your password again");

})