const canvas = document.querySelector('#jsCanvas');

let painting = false;

function onMouseMove(event) {
	const x = event.offsetX;
	const y = event.offsetY;
	// console.log(x, y);
}

function stopPainting() {
	painting = false;
}

function onMouseDown(event) {
	painting = true;
	// console.log(event);
	// console.log(painting);
}

function onMouseUp(event) {
	painting = false;
	// console.log(event);
	// console.log(painting);
}

if (canvas) {
	canvas.addEventListener('mousemove', onMouseMove);
	canvas.addEventListener('mousedown', onMouseDown);
	canvas.addEventListener('mouseup', onMouseUp);
	canvas.addEventListener('mouseleave', stopPainting);
}

// function init() {}
// init();

// offset X , offset Y = canvas 내의 좌표
