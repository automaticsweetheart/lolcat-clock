var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var updateClock = function()
{
	var message = 				document.getElementById("timeEvent");
	var lolcat = document.getElementById("lolcat");
	var messageText;
	var image = "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/funny-cats-catnip-32-59412c2b1c09a__605.jpg";

if (time == partyTime){
	image = "http://www.yourfamilypets.com/wp-content/uploads/2016/07/Cat-party.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "http://monorailcat.com/wp-content/uploads/2014/10/funny-liquid-cats-21.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "http://1.bp.blogspot.com/-vDjQIK19xCE/UpaXshUJAvI/AAAAAAAAAwM/ykfIA__umk0/s1600/funny-cats-788.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeUpTime) {
	image = "https://4.bp.blogspot.com/-ObjHb6myqyI/WcK7DDZ-cQI/AAAAAAABz5c/Tizb9ubLcCk6-hAwRWbc1iheZyR1KL4GACLcBGAs/s1600/funny-cat-277-07.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
	messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;
showCurrentTime();
};

var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
//party event button
var partyEvent = function() {

   if (partyTime === false) {
      partyTime = true;
      time = partyTime;
	   partyTimeButton.innerText = "PARTY TIME";
	   partyTimeButton.style.backgroundColor = "#222";
     }
   else {
      partyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "PARTY OVER";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
	};
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
	};
var napEvent = function () {
	napTime = napTimeSelector.value;
	};
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
