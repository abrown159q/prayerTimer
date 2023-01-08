
//Time variables
var timeInSeconds = 59;

function getTimeInMinutes() {
	return Math.floor(timeInSeconds / 60) + 1;
	
}
//Start button on title screen
const startButton = document.getElementById('startButton');
const titlePanel = document.getElementById("titlePanel");

startButton.addEventListener("click", hideTitlePanel);
function hideTitlePanel() {
	titlePanel.style.display = 'none';
}


//View minutes button toggle
const minuteButton = document.getElementById('minuteButton');
minuteButton.addEventListener("click",showMinutes);
var showMinutesPressed = false;
function showMinutes() {
	if(!showMinutesPressed)
	{
		createMinutesLabel();
	}
	else
	{
		minuteButton.innerHTML = "Show minutes";
	}
	showMinutesPressed = !showMinutesPressed;
}
function createMinutesLabel(){
			//TODO Make this look nicer
		minuteButton.innerHTML = "Hide &nbsp&nbsp&nbsp&nbsp&nbsp" + getTimeInMinutes() 
		+ "&nbsp&nbsp&nbsp from view";
}


var slider = document.getElementById("minuteSlider");
slider.oninput = function() {
	timeInSeconds = this.value * 60;
	if(showMinutesPressed)
		createMinutesLabel();
}
