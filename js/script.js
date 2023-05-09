let counter = 0;
let result = document.querySelector(".result");
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let random = document.querySelector(".random");

decrease.onclick = () => {
	counter--
	result.innerHTML = counter
}

increase.onclick = () => {
	counter++
	result.innerHTML = counter
}

reset.onclick = () => {
	counter = 0
	result.innerHTML = counter
}

random.onclick = () => {
	counter = Math.round(Math.random() * 200 - 100)
	result.innerHTML = counter
}





