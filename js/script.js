let show = false
let viewSlider = 1

const menu = document.getElementById('nav_list');
const slider1 = document.getElementById('slider_1');
const slider2 = document.getElementById('slider_2');
const slider3 = document.getElementById('slider_3');

const showMenu = () =>{
	if (!show) {
		menu.style.left = "0"
		show = !show
	} else{
		menu.style.left = "-100vw"
		show = !show
	}
}

const sliderMove = async () =>{
	console.log("asd");
	if (viewSlider === 1) {
		slider1.style.left = "100vw"
		await setTimeout(function() {
			slider1.style.zIndex = "-300"
			slider1.style.left   = "-200vw"
		}, 1500);
		await setTimeout(function() {
			slider2.style.zIndex = "50"
		}, 50);
		await setTimeout(function() {
			slider2.style.left = "0"
		}, 100);
		viewSlider = 2
	}
	else if (viewSlider === 2) {
		slider2.style.left = "100vw"
		await setTimeout(function() {
			slider2.style.zIndex = "-300"
			slider2.style.left   = "-100vw"
		}, 1500);
		await setTimeout(function() {
			slider3.style.zIndex = "50"
		}, 50);
		await setTimeout(function() {
			slider3.style.left = "0"
		}, 100);
		viewSlider = 3
	}
	else if (viewSlider === 3) {
		slider3.style.left = "100vw"
		await setTimeout(function() {
			slider3.style.zIndex = "-300"
			slider3.style.left   = "-100vw"
		}, 1500);
		await setTimeout(function() {
			slider1.style.zIndex = "50"
		}, 1);
		await setTimeout(function() {
			slider1.style.left = "0"
		}, 100);
		viewSlider = 1
	}
}