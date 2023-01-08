
//Time variables
var timeInSeconds = 59;

function getTimeInMinutes() {
	return Math.floor(timeInSeconds / 60) + 1;
}

function decreaseTime() {
	timeInSeconds = timeInSeconds - 1;
}


//Panels
const titlePanel = document.getElementById("titlePanel");
const startPanel = document.getElementById("runPanel");



//******************************************************
//Start button on title screen
const startButton = document.getElementById('startButton');
startButton.addEventListener("click", startButtonCommands);
function startButtonCommands() {
	hideTitlePanel();
	showRunPanel();
	startTimer();
}

function hideTitlePanel() {
	titlePanel.style.display = 'none';
}

function showRunPanel() {
	runPanel.style.display = 'block';
}
let countdownInterval = null;
function startTimer() {
	 countdownInterval = setInterval(countdownTimer, 1000);
}

function countdownTimer() {
	document.getElementById("currentMinutesLabel").innerHTML = timeInSeconds; //getTimeInMinutes();
	// document.getElementById("currentMinutesLabel").innerHTML = getTimeInMinutes();
	//timeInSeconds = timeInSeconds - 1;
	decreaseTime();
}
//********************************************************


//********************************************************
//Pause / continue button behavior
const pauseContinueButton = document.getElementById('pauseContinueButton');
pauseContinueButton.addEventListener("click", pauseContinueButtonCommands);
var onPauseContinueButton = true;
function pauseContinueButtonCommands() {
	if(onPauseContinueButton)
	{	
		clearInterval(countdownInterval);
		pauseContinueButton.innerHTML = "Continue";
	}
	else
	{
		countdownInterval = setInterval(countdownTimer, 1000);
		pauseContinueButton.innerHTML = "Pause";
	}
	onPauseContinueButton = !onPauseContinueButton;

}


//********************************************************


//********************************************************
//View minutes button toggling to display minutes selected
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
//********************************************************



//********************************************************
//Dynamic range slider action
var slider = document.getElementById("minuteSlider");
slider.oninput = function() {
	timeInSeconds = this.value * 60;
	if(showMinutesPressed)
		createMinutesLabel();
}
//********************************************************


//