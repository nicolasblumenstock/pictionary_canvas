// console.log("meh")

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

var gradient = context.createLinearGradient(0,0,250,500);
context.strokeStyle = gradient;
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.70", "orange");
gradient.addColorStop("1", "cyan");



// var x = 400;
// var y = 250;
var r = 50;
// var xDirection = 1;
// var yDirection = 1;
// var xSpeed = 5;
// var ySpeed = 3;
var numberOfClicks = 0;

function ballProject(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.xSpeed = Math.ceil(Math.random() * 10);
	this.ySpeed = Math.ceil(Math.random() * 10);
	this.xDirection = 1;
	this.yDirection = 1;

}




var balls = [
	{
		x: 400,
		y: 250,
		xDirection: 1,
		yDirection: 1,
		xSpeed: Math.ceil(Math.random() * 10),
		ySpeed: Math.ceil(Math.random() * 10)
	}
]
function drawBall(array){
	context.beginPath();
	for (i = 0; i < array.length; i++){	
		context.fillStyle = gradient;
		context.arc(array[i].x, array[i].y, r, 0, 2*Math.PI);
		context.shadowBlur =20;
		context.shadowColor = "black";
		// context.arc(ballx2,bally2,ballr2,0,2*Math.PI);
		context.clearRect(0,0,750,500);
		context.closePath();
		context.fill();		

		array[i].x += array[i].xSpeed * array[i].xDirection;
		array[i].y += array[i].ySpeed * array[i].yDirection;	

		if ((array[i].y >= 500 - r) || (array[i].y <= 0 + r)){
			array[i].yDirection = -array[i].yDirection;
		}
		if ((array[i].x >= 750 - r) || (array[i].x <= 0 + r)){
			array[i].xDirection = -array[i].xDirection;
		}	

		if (r < 5) {
			r = 1;
		}

	}

}

// function newBall(array){
// 	array.push({
// 		x: 400,
// 		y: 250,
// 		xDirection: 1,
// 		yDirection: 1,
// 		xSpeed: Math.ceil(Math.random() * 10),
// 		ySpeed: Math.ceil(Math.random() * 10)
// 	});
// }
function newBall(array,x,y,r){
	array.push(new ballProject(x,y,r));
	console.log(array)
}

var ball = setInterval(drawBall, 30, balls);


canvas.addEventListener('click', function(event){
	for (i = 0; i < balls.length; i++){
		if ((event.offsetX <= balls[i].x + r) && (event.offsetX >= balls[i].x - r) && (event.offsetY <= balls[i].y + r) && (event.offsetY >= balls[i].y - r)){
			numberOfClicks++;
			var oldR = r
			document.getElementById('number').innerHTML = String(numberOfClicks)
			balls[i].xDirection = -balls[i].xDirection;
			balls[i].yDirection = -balls[i].yDirection;
			r -= 5;
			newBall(balls,(event.offsetX + oldR),(event.offsetY + oldR),r);
			newBall(balls,(event.offsetX - oldR),(event.offsetY - oldR),r);
		}
	}

});	

function Timer(id, starttime){
	this.id = id;
	this.starttime = starttime;
	var clock = document.getElementById(id);
	this.secondsSpan = clock.querySelector('.seconds');
	
	this.getTimePast = function(){
		var t = Date.parse(new Date()) - Date.parse(this.starttime);
		this.seconds = Math.floor((t / 1000) % 60);
		// console.log(this.seconds);
	};

	this.updateTimer = function(){
		this.getTimePast();
		this.secondsSpan.innerHTML = this.seconds;
		// console.log(this.seconds)
	};
}

var startTime = new Date();
console.log(startTime)

var countUp = new Timer('ticking-clock', startTime);
setInterval(
	function(){
		countUp.updateTimer();
		}, 1000
);
