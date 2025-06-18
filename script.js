//your JS code here. If required.
const btn = document.querySelector("#incrementBtn");
const p = document.querySelector("#counter");
function eventHandler(){
	let val = p.innerText;
	alert(val);
	p.innerText = parseInt(val) + 1;
}
btn.addEventListener('click',eventHandler);