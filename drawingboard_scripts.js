// console.log('babba booie')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var color = "#000000";
var thickness = 10;
var colorPicker = document.getElementById('color-picker');
var thicknessPicker = document.getElementById('thickness');
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;
// document.getElementById('canvas-img') = dataURL;


colorPicker.addEventListener('change', function(event){
	// console.log(event);
	color = colorPicker.value
	// color = event.target.value
	// console.log(color);
});
thicknessPicker.addEventListener('change', function(event){
	thickness = thicknessPicker.value;
	// console.log(thickness);
});

canvas.addEventListener('mousedown', function(event){
	mouseDown = true;
	// console.log(event);
});

canvas.addEventListener('mouseup', function(event){
	mouseDown = false;
	lastMousePosition = null;
});

canvas.addEventListener('mousemove', function(event){
	if(mouseDown){
		// console.log("User has pressed the mouse down and is moving!");
		if (lastMousePosition == null) {
			lastMousePosition = {
				x: event.offsetX,
				y: event.offsetY,
			}
		}

		mousePosition.x = event.offsetX;
		mousePosition.y = event.offsetY;

		context.strokeStyle = color;
		// context.lineJoin = 'round';
		context.lineCap = "round";
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x,lastMousePosition.y);
		context.lineTo(mousePosition.x,mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y,
		}
	}

});

// clears screen
function Erase() {
	context.clearRect(0,0,750,500);
};

// opens new window with canvas to be saveable as png
function Picture(){
	var img = canvas.toDataURL("image/png");
	window.open(img);
}

//timer that counts up to 60 seconds then resets ... should probably work on that
function Timer(id, starttime){
	this.id = id;
	this.starttime = starttime;
	var clock = document.getElementById(id);
	this.secondsSpan = clock.querySelector('.seconds');
	this.seconds = 0;
	
	this.getTimePast = function(){
		var t = Date.parse(new Date()) - Date.parse(this.starttime);
		if ((t % 1000) == 0){
			this.seconds++;
		}
	};

	this.updateTimer = function(){
		this.getTimePast();
		this.secondsSpan.innerHTML = this.seconds;
		// console.log(this.seconds)
	};
}

var startTime = new Date();
// console.log(startTime)

var countUp = new Timer('ticking-clock', startTime);
setInterval(
	function(){
		countUp.updateTimer();
		}, 1000
);
// console.dir(canvas)
