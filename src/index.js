const menu = document.querySelector('#menu');
const links = document.querySelector('.links');
menu.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    links.classList.remove('open');
  } else {
    menu.classList.add('open');
    links.classList.add('open');
  }
});
