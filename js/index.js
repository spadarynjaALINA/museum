/*const { chownSync } = require("fs")*/

const player = document.querySelector('.container-video')
const videos = player.querySelectorAll('.viewer')
const progress = player.querySelector('.progress')
const volumeRange = player.querySelector('.volume')
const ranges = player.querySelectorAll('.slider')
const btnNext = player.querySelector('.video-next')
const btnPrevious = player.querySelector('.video-prev')
const toggle = player.querySelectorAll('.toggle')
const btnPlay = player.querySelector('.play-pause')
const playCenter = player.querySelector('.play-pause-center')
const vol = player.querySelector('.mute')
const screen = player.querySelector('.full-screen')
const videoList = player.querySelector('.video-list')
const playList = document.querySelector('.play-list')
const sectionVideo = document.querySelector('.section-video')
let i = 0
let video = videos[0];
video.volume = 0.4
/*function togglePreviousHandler(){
 video.pause()
  if (i === 0) {
    i = 3;
 } else {
    i -= 1;
  }
  progress.style.transition ='0.9s'
  video = videos[i];
  console.log('video')
  videoList.style.transform = `translateX(-${i * 1440}px)`
    /* playList.style.transform = `translateX(-${i * 495}px)`*/
  /* video.addEventListener('timeupdate', handlerProgress);
   video.addEventListener('play', updateButton)
   video.addEventListener('pause', updateButton)
}*/

function togglePlay() {
 if (video.paused) {
    video.play();
  } else if (video.played) {
    video.pause();
  }
}

/*function toggleNextHandler () {
  video.pause()
  if (i === 3) {
    i = 0;
  } else {
    i += 1;
  }
   video= videos[i];
  videoList.style.transform = `translateX(-${i * 1440}px)`
  /* playList.style.transform = `translateX(-${i * 495}px)`*/
 /* video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate', handlerProgress)
}*/

function updateButton() {
  if (video.paused) {
    btnPlay.style.background = 'url(assets/svg/play.svg),no-repeat'
    playCenter.style.display = 'block'; 
  }
  else if (video.played) {
    btnPlay.style.background = 'url(assets/svg/pause.svg)'
    playCenter.style.display = 'none'; 
  } 
}

function changeVolume() {
  video.volume = volumeRange.value
  if (video.volume === 0) {
    vol.style.background = 'url(assets/svg/mute0.svg)'
  }
  else {
    vol.style.background = 'url(assets/svg/mute.svg)'
  }
}

function volumeButton() {
  video.volume = volumeRange.value
  if (video.volume === 0) {
    vol.style.background = 'url(assets/svg/mute.svg)'
    video.volume = 0.4
    volumeRange.value = 0.4
    volumeRange.style.background = `linear-gradient(to right, #710707 0%, #710707 40%,  #C4C4C4 40%,  #C4C4C4 100%)`
  } else {
    video.volume = 0
    volumeRange.value = 0
    volumeRange.style.background = ` #C4C4C4`
    volumeRange.style.transition = '0s'
    vol.style.background = 'url(assets/svg/mute0.svg),no-repeat'
  }
}

function handlerProgress() {
  let percent = (video.currentTime / video.duration) * 100
  progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%,  #C4C4C4 ${percent}%,  #C4C4C4 100%)`
  progress.value = percent
  console.log(percent)
}

progress.addEventListener('input', function() {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value+0.5}%, #C4C4C4 ${value +0.5}%, #C4C4C4 100%)`
 video.currentTime =video.duration/100 * value
})

volumeRange.addEventListener('input', function () {
  video.volume = volumeRange.value
  let value = this.value
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value*100}%,  #C4C4C4 ${value*100}%,  #C4C4C4 100%)`
})

function fullScreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen()
  }
  else {
    document.exitFullscreen()
  }
}

function timeScroll(e){
  let time = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = time;
}

function handlerUpdate() {
 progress.value = video.currentTime / video.duration *100;
}

video.ontimeupdate = handlerProgress

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
btnPlay.addEventListener('click', togglePlay)
playCenter.addEventListener('click', togglePlay)
progress.addEventListener('click' ,handlerUpdate)
ranges.forEach(ran => ran.addEventListener('mousemove', handlerProgress))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () =>mousedown = false)
vol.addEventListener('click', volumeButton)
volumeRange.addEventListener('change', changeVolume)
volumeRange.addEventListener('mousedown', () => {
  volumeRange.addEventListener('mousemove', changeVolume);
});
/*btnNext.addEventListener('click', toggleNextHandler)
btnPrevious.addEventListener('click' ,togglePreviousHandler)*/
screen.addEventListener('click', fullScreen)
sectionVideo.addEventListener('keydown', keyToggle)
function keyToggle(key) {
  if (key.code === 'Space' || key.code === 'Enter') {
    key.preventDefault()
    togglePlay();
  }
  if (key.code === 'KeyM') volumeButton()
  if (key.code === 'KeyF') {
    
    fullScreen()
  } 
  if (key.code === 'Period') {
    if (video.playbackRate < 5 && video.playbackRate >= 1) video.playbackRate++
    if (video.playbackRate < 1) video.playbackRate += 0.25;
  }
  if (key.code === 'Comma') {
    if (video.playbackRate <= 1 && video.playbackRate > 0.25) video.playbackRate -= 0.25;
    if (video.playbackRate > 1) video.playbackRate--
  }
  if (key.code === 'ArrowRight') {
    video.currentTime += 0,5;
  }
  if (key.code === 'ArrowLeft') {
    video.currentTime -= 0,5;
  }
}
document.addEventListener('wheel', function (event) {
  event = event || window.event;
  var y = event.deltaY || event.detail || event.wheelDelta, val = 0.1, min = 0, max = 0;
  if (y > 0) {
    video.currentTime -= 0,5
  }
  if (y < 0) {
    video.currentTime += 0,5
  }
})
 
var players = [];

function onYouTubeIframeAPIReady() {

var predefined_players = document.querySelector("iframe-wrap")[0].getElementsByTagName('iframe');

for(let i = 0; i < predefined_players.length; i++){
predefined_players[i].id = "player" + i;
  players[i] = new YT.Player("player" + i, {
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});
}
}

function onPlayerStateChange(event) {
    var link = event.target.a.id;
    var newstate = event.data;
if (newstate == YT.PlayerState.PLAYING) {
players.forEach(function(item, i) {
    if (item.a.id != link) item.pauseVideo();
});
}
}



let  btnForm = document.querySelectorAll('.btn-form')
btnForm.forEach(item => {

  item.addEventListener('click', function (a) {
    let x = a.clientX
    let y = a.clientY

    const buttonTop = a.target.offsetTop
    const buttonLeft = a.target.offsetLeft

    const xInside = (x - buttonLeft -350)
    const yInside = (y - buttonTop-30)

    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    ripple.style.top = yInside + 'px'
    ripple.style.left = xInside + 'px'

    this.appendChild(ripple)

    setTimeout(() => ripple.remove(), 500)
  })
})

let menuLink = document.querySelectorAll('.header-link')
let menuToggle = document.querySelector('input')
let welcome = document.querySelector('.welcome-title')
let hamburger = document.querySelector('.btn-menu')
let menu = document.querySelector('.nav-list')

menuLink.forEach(element => {element.addEventListener
  ('click', () => {

     const mediaQuery = window.matchMedia('(max-width: 1024px)')
if (mediaQuery.matches) {
  menuToggle.checked = false
  toggleM()
 }
})
});
let toggleM = () => {
  menu.classList.toggle('active-menu')

  if (menu.classList.contains('active-menu')){
    welcome.classList.add('inactive')
  } else {
     welcome.classList.remove('inactive')
  }
  
 
}
hamburger.addEventListener('click', e => {
  e.stopPropagation()
  toggleM()
  
})
document.addEventListener('click', e => {
   e.stopPropagation()
  let target = e.target
  let itsMenu = target == menu || menu.contains(target)
  let itsHamburger = target == menuToggle
  let ifActive = menu.classList.contains('active-menu')
  if (!itsMenu && !itsHamburger && ifActive) {
    toggleM()
    menuToggle.checked = false
  
  }

  
})

let settings = document.querySelector('.setting')
let sun = document.querySelector('.change-sun')
let moon = document.querySelector('.change-moon')
let theme = document.querySelector('.change-theme')
let contacts = document.querySelector('.section-contacts')
let tickets = document.querySelector('.section-tickets')
let visiting = document.querySelector('.section-visiting')

let ticketsForm = document.querySelector('.booking-tickets')
let overlow = document.querySelector('.overlow-wrap')
let close = document.querySelector('#btn-tickets')

overlow.addEventListener('click', () => {
  close.checked = false
})
settings.addEventListener('click', () => {
  console.log('theme')
  if (theme.classList.contains('out')) {
    theme.classList.remove('out')
    settings.classList.add('border')
  } else {
    theme.classList.add('out')
    settings.classList.remove('border')
  }
})

moon.addEventListener('click', () => {
  tickets.classList.add('dark-theme')
  contacts.classList.add('dark-theme')
  sectionVideo.classList.add('dark-theme')
  visiting.classList.add('dark-theme')
ticketsForm.classList.add('dark-theme')
})
sun.addEventListener('click', () => {
  tickets.classList.remove('dark-theme')
  contacts.classList.remove('dark-theme')
  sectionVideo.classList.remove('dark-theme')
  visiting.classList.remove('dark-theme')
  ticketsForm.classList.remove('dark-theme')

})
/*if (theme.classList.contains('out')) {
  settings.classList.add('border')
  
}*/


$(document).ready(function () {
    $(".play-list").slick({
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        appendArrows: $(".video-slider-btn"),
        appendDots: $(".video-slider-pagination"),
      asNavFor: ".video-list",
          infinity: true,
    });
});

$(document).ready(function () {
  $(".video-list").slick({
        infinite: true,
      dots: false,
      arrow:false,
        centerMode: true,
        slidesToShow: 1,
        fade:true,
        asNavFor: $(".play-list"),
    draggable: false,
       /* useTransform: true,*/
        
    });
});
let slickPrev = document.querySelector('.slick-prev')
slickPrev.innerHTML =''

$(document).ready(function(){
  $('.play-list').slick();
})

mapboxgl.accessToken = 'pk.eyJ1Ijoic3BhZGFyeW5qYWFsaW5hIiwiYSI6ImNrdW41eHIxbjAxaXIycG1kNjBqYTM5dHIifQ.0977cUzwT1MEIdQSHLPhcw';
var map = new mapboxgl.Map({
container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
zoom: 15.68,
  center: [2.3364, 48.86091]
});
map.addControl(new mapboxgl.NavigationControl());
map.boxZoom.enable();
const marker = new mapboxgl.Marker({
color: "#171717",
})
.setLngLat([2.3364, 48.86091])
  .addTo(map);

  const marker1 = new mapboxgl.Marker({
color: "#757575",
})
.setLngLat([2.3397, 48.8607])
  .addTo(map);

  const marker2 = new mapboxgl.Marker({
color: "#757575",
})
.setLngLat([2.3333, 48.8602])
  .addTo(map);

  const marker3 = new mapboxgl.Marker({
color: "#757575",
})
.setLngLat([2.3330, 48.8619])
  .addTo(map);

  const marker4 = new mapboxgl.Marker({
color: "#757575",
})
.setLngLat([2.3365, 48.8625])
.addTo(map);

let pageUp = document.querySelector('.page-up')
document.addEventListener('scroll', function () {
  if (scrollY < document.documentElement.clientHeight - 300) {
       pageUp.style.top = "150%"
      }
      else {
        pageUp.style.top = "90%"
      }
      

});
console.log('не все успела, доделываю.Спасибо <3')
console.log('доп функционал - это кнопка вверх с анимацией взята из переключателя слайдев видео')
console.log('меню настроек выезжает и трансформируется(на белом фоне). настройки пока в процессе как отдельный функционал будут')
console.log('настроена темная тема, в ней затемнены светлые секции. темные секции прежние и светлая тема -тема оригинальная')
console.log('в секции тикетс картинка обновляется каждые несколько секунд')
    console.log('в перспективе добавление смены языка в меню настроек и чтонть еще')