document.getElementById('myDiv').style.background = 'lightblue';
console.group("Exercise 1:");
let paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
	console.log(paragraphs[i].innerText);
}
console.groupEnd();

document.getElementById("textInput").addEventListener("keyup", function (event) {
	document.getElementById("textDisplay").innerHTML = event.target.value;
})