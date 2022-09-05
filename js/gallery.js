const pictureInnerContainer = document.querySelector('.picture-inner-container');


let array = ['assets/img/gallery/gallery1.jpg', 'assets/img/gallery/gallery2.jpg', 'assets/img/gallery/gallery3.jpg', 'assets/img/gallery/gallery4.jpg', 'assets/img/gallery/gallery5.jpg', 'assets/img/gallery/gallery6.jpg', 'assets/img/gallery/gallery7.jpg', 'assets/img/gallery/gallery8.jpg', 'assets/img/gallery/gallery9.jpg', 'assets/img/gallery/gallery10.jpg', 'assets/img/gallery/gallery11.jpg', 'assets/img/gallery/gallery12.jpg', 'assets/img/gallery/gallery13.jpg', 'assets/img/gallery/gallery14.jpg', 'assets/img/gallery/gallery15.jpg']

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
let fragment = new DocumentFragment();
 for (let i = 0; i < array.length; i++){
 let img = document.createElement('img');
   img.classList.add('item')
   
   img.src = array[i];
   img.alt = `gallery${i + 1}`
fragment.append(img);
 
 }
return fragment
}
pictureInnerContainer.append(shuffle(array))


document.addEventListener('DOMContentLoaded', () => {
    animItems.forEach(element => {
element.classList.add('active')
      console.log('add')
})
});


const animItems = document.querySelectorAll('.item')
const pictureContainer = document.querySelector('.picture-container')
if (animItems.length >= 0) {
  console.log('gallery')
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll(a) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      itemHeight = animItem.offsetHeight;
      const itemOffset = offset(animItem).top;

      const animStart = 4;
      let animPoint = window.innerHeight - itemHeight / animStart
      if (itemHeight > window.innerHeight) {
        animPoint = window.innerHeight - window.innerHeight / animStart
      }
      if ((scrollY > itemOffset - animPoint) && scrollY < (itemOffset + itemHeight * 10)) {
              
        animItem.classList.add('active')
      } else {
        animItem.classList.remove('active')
      }


    }
  }
 
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    
  }

  
}
