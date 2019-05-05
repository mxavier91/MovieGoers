// Get Modal Element
var modal = document.getElementById('simpleModal');

// Get open modal button
var signUp = document.getElementById('signUpBtn');
var logIn = document.getElementById('logInBtn');

// Get close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// To target the body
var body = document.getElementsByTagName('body')[0]


// Listen for Open Click
signUp.addEventListener('click', openModal);
logIn.addEventListener('click', openModal)

// Listen for Closed Click
closeBtn.addEventListener('click', closeModal);

// Listen for Outside Click
window.addEventListener('click', clickOutside);

// Function to Open Modal
function openModal() {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
}

// Functin to Close Modal
function closeModal() {
  modal.style.display = 'none'
  body.style.overflow = 'auto'
}

// Function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none'
    body.style.overflow = 'auto'
  }
}