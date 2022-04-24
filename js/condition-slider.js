const leftB = document.querySelector('.section-1__left-btn')
const rightB = document.querySelector('.section-1__right-btn')

const Items = document.querySelector('.conditions')
const countItems = document.querySelectorAll('.conditions__item').length

let activeIndex = 0;
let stepCond = 100/countItems;

leftB.addEventListener('click', () => {
   changeSlideCond('left')
  })

rightB.addEventListener('click', () => {
   changeSlideCond('right')
  });


 function changeSlideCond(direction) {
     if ((direction === 'left') && !(leftB.classList.contains('btn-n'))){
      leftB.classList.remove('btn-n');
      rightB.classList.remove('btn-n');
      activeIndex--
      if (activeIndex === 0) {
         leftB.classList.add('btn-n');
      } 
     } else if((direction === 'right') && !(rightB.classList.contains('btn-n'))) {
      leftB.classList.remove('btn-n');
      rightB.classList.remove('btn-n');
      activeIndex++
      if (activeIndex*stepCond >= 100-stepCond)
      {
         rightB.classList.add('btn-n');
      }
     }
      Items.style.transform = `translate(-${(activeIndex) * stepCond}%,0)`
   
 }