const choice = document.querySelector('.tickets-choice')
const btPlusForm1 = document.querySelector('.bt-plus-form1')
const btMinusForm1 = document.querySelector('.bt-minus-form1')
const btPlusForm2 = document.querySelector('.bt-plus-form2')
const btMinusForm2 = document.querySelector('.bt-minus-form2')
const btMinus1 = document.querySelector('.bt-minus1')
const btPlus1 = document.querySelector('.bt-plus1')
const btMinus2 = document.querySelector('.bt-minus2')
const btPlus2 = document.querySelector('.bt-plus2')
const basicNum = document.querySelector('#basic')
const seniorNum = document.querySelector('#senior')
let count = choice.querySelector('input')
let btn = choice.querySelectorAll('button')
const permanent = document.querySelector('#permanent-exhibition')
const temporary = document.querySelector('#temporary-exhibition')
const combined = document.querySelector('#combined-admission')
const totalSum = document.querySelector('.total-sum-span')
const permanentLabel = document.querySelector('.permanent-label')
const temporaryLabel = document.querySelector('.temporary-label')
const combinedLabel = document.querySelector('.combined-label')
const resultBasic = document.querySelector('.num-basic')
const resultSenior = document.querySelector('.num-senior')
const resultBasicSum = document.querySelector('.result1')
const resultSeniorSum = document.querySelector('.result2')
const totalResult = document.querySelector('.total-result')
const numFormBasic = document.querySelector('#basic-form')
const numFormSenior = document.querySelector('#senior-form')
const seniorPrice = document.querySelector('.text-senior')
const basicPrice = document.querySelector('.text-basic')
const overviewType = document.querySelector('.overview-temporary')
const ticketsPic = document.querySelector('.tickets-wrap-img')
const select = document.querySelector('#tickets-type')
const timeInput = document.querySelector('#time-select')
const timeInputValue = document.querySelector('#time-tic')
const timeList = document.querySelectorAll('.time-item'),
  overviewTime = document.querySelector('.overview-time'),
  dateCheck = document.querySelector('.check-date'),
overviewDate = document.querySelector('.overview-day')
let sel = select.selected
console.log(dateCheck , dateCheck.value)
function time(elem) {
overviewTime.innerHTML = elem.value
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = [ "January","February", "March","April", "May", "June","July","August","September","October", "November", "December",]

  
function date(elem) {
  let ticketDate = new Date(elem.value);
  let Day = ticketDate.getDay();
  let Month = ticketDate.getMonth();
  let day = ticketDate.getDate();

  overviewDate.innerHTML = ` ${days[Day]}, ${months[Month]} ${day}`
}
basicNum.value = sessionStorage.getItem('value')
seniorNum.value = sessionStorage.getItem('value1')
if (sessionStorage.getItem('check1') === 'true') {
  permanent.checked = true;
}
if (sessionStorage.getItem('check2') === 'true') {
  temporary.checked = true;
}
if (sessionStorage.getItem('check3') === 'true') {
  combined.checked = true;
}
if (sessionStorage.getItem('sel1') === 'true') {
  select[1].selected = true
}

if (sessionStorage.getItem('sel2') === 'true') {
  select[2].selected = true
}

if (sessionStorage.getItem('sel3') === 'true') {
  select[3].selected = true
}


let calculateTickets = function () {
 let permanentSum = (basicNum.value * 20 + seniorNum.value * 10) * (permanent.checked ? 1 : 0)
 
 let temporarySum = (basicNum.value * 25 + seniorNum.value * 12.5) * (temporary.checked ? 1 : 0)
 
 let combinedSum = (basicNum.value * 40 + seniorNum.value * 20) * (combined.checked ? 1 : 0)

 resultSeniorSum.innerHTML = `${seniorNum.value * 20 * (permanent.checked? 1 : 0) + seniorNum.value * 25 * (temporary.checked? 1 : 0) + seniorNum.value * 40 * (combined.checked? 1 : 0)}  &euro;`

 seniorPrice.innerHTML = `Senior (${10 * (permanent.checked ? 1 : 0) + 12.5 * (temporary.checked ? 1 : 0) + 20 * (combined.checked ? 1 : 0)} &euro;)`
 
 basicPrice.innerHTML = `Basic (${20 *(permanent.checked ? 1 : 0) + 25 * (temporary.checked ? 1 : 0) + 40 * (combined.checked ? 1 : 0)} &euro;)`

 totalSum.innerHTML = `${permanentSum + temporarySum + combinedSum}`
 totalResult.innerHTML = `${totalSum.innerHTML}  &euro;`
 resultBasic.innerHTML = basicNum.value
 resultSenior.innerHTML = seniorNum.value
 numFormBasic.value = basicNum.value
 numFormSenior.value = seniorNum.value
 overviewType.innerHTML = `${temporary.checked ? "Temporary exhibition" :permanent.checked ? "Permanent exhibition" :"Combined Admission"}`

 
 sessionStorage.setItem('value', basicNum.value)
 sessionStorage.setItem('value1', seniorNum.value)
 sessionStorage.setItem('check1', permanent.checked)
 sessionStorage.setItem('check2', temporary.checked)
 sessionStorage.setItem('check3', combined.checked)
 sessionStorage.setItem('sel1', select[1].selected)
 sessionStorage.setItem('sel2', select[2].selected)
 sessionStorage.setItem('sel3', select[3].selected)
}


permanentLabel.addEventListener('click', function () {
 if (!permanent.checked) {
   permanent.checked = true
   select[1].selected = true
}
 calculateTickets()
})

temporary.addEventListener('click', function () {
  
 if (!temporary.checked) {
   temporary.checked = true
   
   
}
 calculateTickets()
})

combined.addEventListener('click', function () {
 if (!combined.checked) {
   combined.checked = true
    select[3].selected = true
}

 calculateTickets()
})
let f = function () {
  
  if (select[3].selected) {
    combined.checked = true
  }

   
  if (select[2].selected) {
    temporary.checked = true
  }
if (temporary.checked) {
    select[2].selected = true
    
  }
   
  if (select[1].selected) {
    permanent.checked = true
  }
  if (permanent.checked) {
    select[1].selected = true
    
  }
  if (combined.checked) {
    select[3].selected = true
    
  }
  calculateTickets()
}
select.addEventListener('onchange',f)
btMinus1.addEventListener('click', function () {
 console.log('click')
 if (basicNum.value > 0) {
  basicNum.value--
 }
 calculateTickets()
})

btPlus1.addEventListener('click', function () {
 console.log('click')
 if (basicNum.value < 20) {
  basicNum.value++
 }
 calculateTickets()
})

btMinus2.addEventListener('click', function () {
 console.log('click')
 if (seniorNum.value > 0) {
  seniorNum.value--
 }
 calculateTickets()
})

btPlus2.addEventListener('click', function () {
 console.log('click')
 if (seniorNum.value < 20) {
  seniorNum.value++
 }
 calculateTickets()
})

btMinusForm1.addEventListener('click', function () {
 console.log('click2')
 if (basicNum.value > 0) {
  basicNum.value--
 }
 calculateTickets()
})
btPlusForm1.addEventListener('click', function () {
 console.log('click2')
 if (basicNum.value < 20) {
  basicNum.value++
 }
 calculateTickets()
})

btMinusForm2.addEventListener('click', function () {
 console.log('click')
 if (seniorNum.value > 0) {
  seniorNum.value--
 }
 calculateTickets()
})

btPlusForm2.addEventListener('click', function () {
 console.log('click')
 if (seniorNum.value < 20) {
  seniorNum.value++
 }
 calculateTickets()
})


btn.forEach(element => {element.addEventListener
 ('click', () => {

   
  console.log(basicNum.value)
})
});
calculateTickets()
 i = 1;
let j = 0
 
    
let pic = function () {
  if (i === 6) {
    i = 1
    //j++
  }
ticketsPic.style.backgroundImage = `url(assets/img/welcome-slider/${i}.jpg)`
  ticketsPic.style.transition = "1s"
  /*if (j >= 7) {
    clearInterval(interval)
  }
    else {*/
    i++
 //   }
}
  
pic()
let interval =setInterval(pic,4000)

  console.log('tickets')

/*btnPlus.addEventListener
 ('click', () => {
 console.log('menuLink')

})

console.log(count.value)*/
