const form = document.getElementById('form');
const input = document.querySelectorAll('input');
const interests = document.getElementById ('interbutton');
const nameRegEx = /^[a-z]{2,}( [a-z]+)*?( [a-z]{2,}){1,}$/i;
const emailRegex = /^\w+@\w+?\.[a-zA-Z]{2,3}$/;

// Validation variables 

let nameValid = true;
let emailValid = true;
let messageValid = true;
let interValid = true;

