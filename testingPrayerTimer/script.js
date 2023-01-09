
//Time variables
var timeInSeconds = 60;

function getTimeInMinutes() {
	if( timeInSeconds%60 == 0)
		return Math.floor(timeInSeconds / 60);
	else
		return Math.floor(timeInSeconds / 60) + 1;
}

function setTimeInSeconds(value) {
	timeInSeconds = value;
}

function decreaseTime() {
	timeInSeconds = timeInSeconds - 1;
}

function checkTimerDoneBehavior() {
	if(timeInSeconds <=0)
	{	
		pauseTimer();
		var myYellow = "#f3ff0f";
		//document.body.style.backgroundColor = "#f3ff0f";
		document.body.style.backgroundColor = myYellow;
	}
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

function pauseTimer() {
		clearInterval(countdownInterval);
}

function countdownTimer() {
	decreaseTime();
	checkTimerDoneBehavior();
	// document.getElementById("currentMinutesLabel").innerHTML = timeInSeconds; //getTimeInMinutes();
	document.getElementById("currentMinutesLabel").innerHTML = getTimeInMinutes();

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
		pauseTimer();
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
//Show hide current Minutes button behavior
const showHideCurrentMinutesButton = document.getElementById('showHideCurrentMinutesButton');
showHideCurrentMinutesButton.addEventListener("click", showHideCurrentMinutesButtonCommands);
var onShowHideButton = true;
function showHideCurrentMinutesButtonCommands() {
	if(onShowHideButton)
	{	
		document.getElementById("currentMinutesLabel").style.visibility = 'visible';
		showHideCurrentMinutesButton.innerHTML = "Hide current minutes remaining";
	}
	else
	{
		document.getElementById("currentMinutesLabel").style.visibility = 'hidden';
		showHideCurrentMinutesButton.innerHTML = "Show current minutes remaining";
	}
	onShowHideButton = !onShowHideButton;

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
	if(this.value > 0)
		setTimeInSeconds(this.value * 60);
	else
		setTimeInSeconds(5);
	if(showMinutesPressed)
		createMinutesLabel();
}
//********************************************************


//