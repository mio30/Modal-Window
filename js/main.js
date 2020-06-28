'use strict';

{
  const open = document.getElementById('open');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  const submit = document.getElementById('submit');

  open.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('modal');
  });

  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('modal');
  });

  submit.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('modal');
  });
}
