let btn = document.querySelector('.night-mode-btn');
let body = document.querySelector('body');

btn.addEventListener('click', nightMode);

function nightMode() {
  if (body.classList.contains('night') && (btn.innerHTML = 'Включить ночной режим')) {
    body.classList.remove('night');
  } else {
    body.classList.add('night');
    btn.innerHTML = 'Выключить ночной режим';
  }
}
