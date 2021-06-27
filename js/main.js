function openMenu(){
  document.querySelector('#menu-opener').classList.add('hidden');
  document.querySelector('#menu-closer').classList.remove('hidden');

  document.querySelector('#mobile-nav').classList.add('active');
  document.querySelector('#content').classList.add('hidden');
}

function closeMenu(){
  document.querySelector('#menu-opener').classList.remove('hidden');
  document.querySelector('#menu-closer').classList.add('hidden');

  document.querySelector('#mobile-nav').classList.remove('active');
  document.querySelector('#content').classList.remove('hidden');
}