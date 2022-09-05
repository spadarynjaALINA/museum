
const changeLine = document.querySelector('.slider-range')

const containerExplore = document.querySelector('.container-explore')

changeLine.addEventListener('input',(e)=>{
	containerExplore.style.setProperty('--position',`${e.target.value}%`)
})
