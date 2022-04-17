let header_burger = document.querySelector('.header__burger');
let menu_burger = document.querySelector('.menu-burger');
let header = document.querySelector('.header');
let back = document.querySelector('body');
let menu_list = document.querySelector('.header__menu');

let menu__item = document.querySelectorAll('.header__menu a');
 
header_burger.onclick = function(){
   menu_burger.classList.toggle('active');
   header.classList.toggle('active');
   menu_list.classList.toggle('active');
   back.classList.toggle('lock');
};

[].forEach.call(menu__item, function(el) {
  el.onclick = function(e) {
   menu_burger.classList.remove('active');
   header.classList.remove('active');
   menu_list.classList.remove('active');
   back.classList.remove('lock');
  }
});