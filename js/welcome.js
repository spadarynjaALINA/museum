const welcomeSlider = document.querySelector('.welcome-slider')
const slides = document.querySelectorAll('.slide')
const slideCount = welcomeSlider.querySelectorAll('.slide').length
const firstSlide = slides[0]
const lastSlide =slides[slides.length-1]
const firstClone =document.querySelector('.first-clone')
const lastClone = document.querySelector('.last-clone')
const welcomePagination = document.querySelector('.welcome-pagination')
const paginationNum = document.querySelector('.pag-num')
const paginationCarousel = document.querySelector('.pagination-carousel')
const paginationArrows = document.querySelector('.pagination-arrows')
const btnPrevWelcome = document.querySelector('.pagination-btn-prev')
const btnNextWelcome = document.querySelector('.pagination-btn-next')
const slideWrap = document.querySelector('.slide-wrap')
const radioSlides = document.getElementsByName('slides')
const radioLabel = document.querySelectorAll('.radio-label')
let activeSlide = 0

for (let i = 0; i < radioLabel.length; i++){
 slideWrap.style.transition = '.5s'
 radioLabel[i].addEventListener('click', () => {
  activeSlide = i + 1
  slideWrap.style.transform = `translateX(-${(activeSlide) * 1000}px)`
  slideNum()
 })
}
if (radioSlides[3].checked === true) {
activeSlide = 3
 slideWrap.style.transform = `translateX(-${(activeSlide) * 1000}px)`
 console.log('activeSlide')
}
btnPrevWelcome.addEventListener('click', () => {
move('prev')
})

btnNextWelcome.addEventListener('click', () => {
move('next')
})

const width = welcomeSlider.offsetWidth
function move(direc) {

 if (direc === 'next') {
 /* slides[6].classList.remove('inactive')*/
 
  slideWrap.style.transition = '.5s'
  activeSlide >= 6 ? false : activeSlide++
  slideWrap.style.transform = `translateX(-${(activeSlide) * 1000}px)`
 radioCheck()
  jump()
  slideNum()
  
}

 if (direc === 'prev') {
 slideWrap.style.transition = '.5s'
activeSlide <= 0 ? false : activeSlide--
  slideWrap.style.transform = `translateX(-${(activeSlide) * 1000}px)`
  jump()
  radioCheck()
  slideNum()
 }
 
}

let radioCheck  = function () {
   if (activeSlide === 6) {
   radioSlides[0].checked = true
  }
  else if (activeSlide === 0) {
   radioSlides[4].checked = true
  }
  else {
    radioSlides[activeSlide - 1].checked = true
  }
}

let  slideNum = function () {
   if (activeSlide === 6) {
   paginationNum.innerHTML = '01'
  }
  else if (activeSlide === 0) {
    paginationNum.innerHTML = '05'
  }
  else {
    paginationNum.innerHTML = `0${activeSlide}`
  }
}
let jump = function() {
 slideWrap.addEventListener('transitionend', function () {
  activeSlide === 6 ? activeSlide = 1 : activeSlide
    activeSlide === 0 ? activeSlide = 5 : activeSlide

  slideWrap.style.transition = 'none'
   slideWrap.style.transform = `translateX(-${(activeSlide) * 1000}px)`
 })
}