'use strict';

const open = document.getElementById('open')
const close = document.getElementById('close')
const mask = document.getElementById('mask')
const menu = document.getElementById('menu')

function classChange() {
  open.classList.toggle('hidden');
  close.classList.toggle('hidden');
  mask.classList.toggle('hidden');
  menu.classList.toggle('hidden');
}

open.addEventListener('click', () => {
  classChange()
})

close.addEventListener('click', () => {
  classChange()
})
