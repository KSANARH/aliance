const leftBt = document.querySelector('.scheme-work__left-btn')
const rightBt = document.querySelector('.scheme-work__right-btn')

const ItemsSl = document.querySelector('.scheme-work__steps')
const countItemsSl = document.querySelectorAll('.scheme-work__step').length

let activeIndexSl = 0;
let stepSchem = 100/countItemsSl;

leftBt.addEventListener('click', () => {
   changeSlideSchem('left')
  })

rightBt.addEventListener('click', () => {
   changeSlideSchem('right')
  });


 function changeSlideSchem(direction) {
     if ((direction === 'left') && !(leftBt.classList.contains('button_no-active'))){
      leftBt.classList.remove('button_no-active');
      rightBt.classList.remove('button_no-active');
      activeIndexSl--
      if (activeIndexSl === 0) {
         leftBt.classList.add('button_no-active');
      } 
     } else if((direction === 'right') && !(rightBt.classList.contains('button_no-active'))) {
      leftBt.classList.remove('button_no-active');
      rightBt.classList.remove('button_no-active');
      activeIndexSl++
      if (activeIndexSl*stepSchem >= 100-stepSchem)
      {
         rightBt.classList.add('button_no-active');
      }
     }
      ItemsSl.style.transform = `translate(-${(activeIndexSl) * stepSchem}%,0)`
   
 }