if (document.querySelector(".button-back")) {
	document.querySelector(".button-back").addEventListener("click", function(event){
		event.preventDefault();
		console.log("eventFired");
		history.back();
	});
}

var chartsBack = document.querySelectorAll(".chart #chart-back");
var chartsForward = document.querySelectorAll(".chart #chart-forward");

for (var chart of chartsBack) {
	chart.addEventListener("click", function(event){
		event.preventDefault();
		var img = event.path[1].querySelector("img");

		if (img.src.indexOf("chart-1.1.png") != -1) {
			img.src = "img/chart-1.png";
		} else if (img.src.indexOf("chart-1.2.png") != -1) {
			img.src = "img/chart-1.1.png";
		}
	});
}
for (var chart of chartsForward) {
	chart.addEventListener("click", function(event){
		event.preventDefault();
		var img = event.path[1].querySelector("img");

		if (img.src.indexOf("chart-1.png") != -1) {
			img.src = "img/chart-1.1.png";
		} else if (img.src.indexOf("chart-1.1.png") != -1) {
			img.src = "img/chart-1.2.png";
		}
	});
}
