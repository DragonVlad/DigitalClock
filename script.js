let date = new Date();

let currentHours = date.getHours(),
    currentMinutes = date.getMinutes(),
    currentSeconds = date.getSeconds();
    
let hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds');
    
hours.innerText = (currentHours < 10) ? '0' + currentHours : currentHours;
minutes.innerText = (currentMinutes < 10) ? '0' + currentMinutes : currentMinutes;
seconds.innerText = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds;

setInterval(function (){
	let date = new Date();
	
	currentSeconds = date.getSeconds();
	seconds.innerText = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds;
	
	currentMinutes = date.getMinutes();
	minutes.innerText = (currentMinutes < 10) ? '0' + currentMinutes : currentMinutes;
	
	currentHours = date.getHours();
	hours.innerText = (currentHours < 10) ? '0' + currentHours : currentHours;
}, 1000);