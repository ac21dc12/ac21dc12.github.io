const  input1 = document.querySelector('#input1');
const  input2 = document.querySelector('#input2');

const  additioninput1 = document.getElementById('addition');
const  subtractioninput1 = document.querySelector('#subtraction');
const  multiplicationinput1 = document.querySelector('#multiplication');
const  divisioninput1 = document.querySelector('#division');

const output = document.querySelector('#output');

additioninput1.addEventListener('click', e => {
  output.innerHTML = parseInt(input1.value) + parseInt(input2.value)

})

subtractioninput1.addEventListener('click', e => {
  output.innerHTML = parseInt(input1.value) - parseInt(input2.value)
})

multiplicationinput1.addEventListener('click', e => {
  output.innerHTML = parseInt(input1.value) * parseInt(input2.value)
})

divisioninput1.addEventListener('click', e => {
  output.innerHTML = parseInt(input1.value) / parseInt(input2.value)
})
