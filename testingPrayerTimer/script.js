

const startButton = document.getElementById('startButton');

startButton.addEventListener("click", hideTitlePanel);

function hideTitlePanel() {
	document.getElementById("titlePanel").style.display = 'none';
}