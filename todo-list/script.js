const input_bar = document.querySelector('#input_bar');
const submit_btn = document.querySelector('#submit_btn');
const color_toggle = document.querySelector('#color_toggle');

submit_btn.addEventListener('click', e => {
if (input_bar.value == '') {
    return;
}

const entry = document.createElement('div');
entry.classList.add('entry');

const entry_text = document.createElement('p');
entry_text.classList.add('entry_text');
entry_text.innerHTML = input_bar.value;

entry.appendChild(entry_text);

//Delete the div when we click on it


entry.addEventListener('click', e => {
  e.target.remove();
})

document.querySelector('#events').appendChild(entry)

input_bar.value = ''


})

color_toggle.addEventListener('click', e => {
  document.querySelector('body').classList.toggle('dark');
})
