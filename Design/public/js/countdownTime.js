$(document).ready(function(){
  function getTimeRemaining(endtime) {
  	var t = Date.parse(endtime) - Date.parse(new Date());
  	var seconds = Math.floor((t / 1000) % 60);
  	var minutes = Math.floor((t / 1000 / 60) % 60);
  	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  	var days = Math.floor(t / (1000 * 60 * 60 * 24));
  	return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
  	};
}

	function initializeClock(id, endtime) {
	  	var clock = document.getElementById(id);
	   	var daysSpan = clock.querySelector('.days');
	  	var hoursSpan = clock.querySelector('.hours');
	  	var minutesSpan = clock.querySelector('.minutes');
	  	var secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
		    var t = getTimeRemaining(endtime);
		    daysSpan.innerHTML = t.days;
		    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		    if (t.total <= 0) {
		      clearInterval(timeinterval);
		    }
        	if((t.hours == 0.0 )&&(t.minutes ==0)&&(t.seconds == 0)){
            window.location.assign('result_exam.html');
        	}
		}

		  	updateClock();
		  	var timeinterval = setInterval(updateClock, 1000);
		}

		var deadline = new Date(Date.parse(new Date()) + 5  * 1000);
		initializeClock('clockdiv', deadline);
	});