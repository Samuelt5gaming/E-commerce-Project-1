const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');
const btnTxt = document.getElementById('btnTxt');
const chekbox = document.getElementById('huamnCheck');
const message = document.getElementById('message');


btnTxt.addEventListener('click', function() {
  if (firstname.value === ''){
    message.textContent = 'First name is required';
    message.style.color = 'red';
    return;
  }
  if (lastname.value === ''){
    message.textContent = 'Last name is required';
    message.style.color = 'red';
    return;
  }
  if (email.value === ''){
    message.textContent = 'Email is required';
    message.style.color = 'red';
    return;
  }
  if (password1.value === ''){
    message.textContent = 'Password is required';
    message.style.color = 'red';
    return;
  }
  if (password2.value === ''){
    message.textContent = ' Password is required';
    message.style.color = 'red';
    return;
  }
  if (password1.value !== password2.value){
    message.textContent = 'Passwords do not match';
    message.style.color = 'red';
    return;
  }
  

  message.textContent = 'Registration successful!';
  message.style.color = 'green';
}); 