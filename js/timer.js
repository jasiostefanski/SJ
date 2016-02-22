			var counter = 0
			var timer;
			function countUP () {
			 	counter = counter + 1;
			 	if(counter > 60){
			 	counter= 0;
			 	}		 
			 	document.getElementById("timer_container").innerHTML = counter;
			 }
