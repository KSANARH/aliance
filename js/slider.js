let sliderItem = document.querySelectorAll('.slider__item')
const leftBtn = document.querySelector('.slider__button-1')
const rightBtn = document.querySelector('.slider__button-2')

const slidesCount = sliderItem.length
const sliderItems = document.querySelector('.slider__items')

let activeSlideIndex = 0;

leftBtn.addEventListener('click', () => {
   changeSlide('left')
  })

rightBtn.addEventListener('click', () => {
   changeSlide('right')
  });


 function changeSlide(direction) {
     if ((direction === 'left') && !(leftBtn.classList.contains('button_no-active'))){
      leftBtn.classList.remove('button_no-active');
      rightBtn.classList.remove('button_no-active');
      activeSlideIndex--
      if (activeSlideIndex === 0) {
         leftBtn.classList.add('button_no-active');
      } 
     } else if((direction === 'right') && !(rightBtn.classList.contains('button_no-active'))) {
      leftBtn.classList.remove('button_no-active');
      rightBtn.classList.remove('button_no-active');
      activeSlideIndex++
      if (activeSlideIndex === (slidesCount-2))
      {
         rightBtn.classList.add('button_no-active');
      }
     }

     if( window.innerWidth >= 801 ){
      sliderItems.style.transform = `translate(-${(activeSlideIndex) * 51}%,0)`
   } else {
      sliderItems.style.transform = `translate(-${(activeSlideIndex) * 100}%,0)`
   } 
     

 }