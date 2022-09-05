
const explorePic = document.querySelector('.explore-pic')
const afterWrap = document.querySelector('.before-wrap')
const changeLine = document.querySelector('.change-line')
const beforeImage = explorePic.querySelector('.before');
const containerExplore = document.querySelector('.container-explore')
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
	let width = explorePic.offsetWidth;
 afterWrap.style.width = '450px';
 changeLine.style.left = '450px';
 
});

containerExplore.addEventListener('mousedown', () => {
 isActive = true;
 
});

document.addEventListener('mouseup', () => {
	isActive = false;
});

const beforeAfterSlider = (x) => {
 
	let shift = Math.max(0, Math.min(x, explorePic.offsetWidth));
	afterWrap.style.width = `${shift}px`;
	changeLine.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
	e.stopPropagation();
	e.preventDefault();
	return false;
};

containerExplore.addEventListener('mousemove', (e) => {
	if (!isActive) {
		return;
	}
	document.addEventListener('mousemove', (e) => {
		e.preventDefault(); 
	})

	let x = e.pageX;
	x -= explorePic.getBoundingClientRect().left;
 beforeAfterSlider(x);
  e.preventDefault(); 
	pauseEvents(e);
});
console.log(containerExplore.onmouseenter )
