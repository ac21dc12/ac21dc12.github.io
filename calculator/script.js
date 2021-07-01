const  input1 = document.querySelector('#input1');
const  input2 = document.querySelector('#input2');

const  additioninput1 = document.getElementbyId('addition');
const  subtractioninput1 = document.querySelector('#subtraction');
const  multiplicationinput1 = document.querySelector('#multiplication');
const  divisioninput1 = document.querySelector('#division');

const output = document.querySelector('#output');

additioninput1.addEventListener('click', e => {
  alert('clicked!')
  output.innerHTML = input1.value + input2.value

})

subtractionInput.addEventListener('click', e => {

})

multiplicationInput.addEventListener('click', e => {

})

divisionInput.addEventListener('click', e => {

})
