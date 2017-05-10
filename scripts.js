// console.log("meh")

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var gradient = context.createLinearGradient(0,0,250,500);
// var gradient = context.createRadialGradient(0,0,250,500,500,250)
context.strokeStyle = gradient;
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5", "orange");
gradient.addColorStop("1", "cyan");
// context.lineWidth = 5;
// context.moveTo(100,100);
// context.lineTo(200,200);
// context.lineTo(300,100);
// context.lineTo(100,200);
// context.lineTo(300,150);
// context.lineTo(100,100);
// context.stroke();

// context.beginPath();
// context.fillStyle = gradient;
// context.arc(250,100,50,0,1.5*Math.PI);
// context.fill();
// context.stroke();


var x = 200;
var y = 200;
var r = 50;
var xDirection = 1;
var yDirection = 1;
var xSpeed = 5;
var ySpeed = 3;
var numberOfClicks = 0;





function drawBall(){
	context.fillStyle = gradient;
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI);
	context.shadowBlur =20;
	context.shadowColor = "black";
	// context.arc(ballx2,bally2,ballr2,0,2*Math.PI);
	context.clearRect(0,0,500,500);
	context.fill();	

	x += xSpeed * xDirection;
	y += ySpeed * yDirection;

	if ((y >= 500 - r) || (y <= 0 + r)){
		yDirection = -yDirection;
	}
	if ((x >= 500 - r) || (x <= 0 +r)){
		xDirection = -xDirection;
	}

	if (r < 5) {
		r = 1;
	}



}


var ball = setInterval(drawBall, 30);

var ballClick = canvas.addEventListener('click', function(event){
	if ((event.x <= x + r) && (event.x >= x - r) && (event.y <= y + r) && (event.y >= y - r)){
		numberOfClicks++;
		document.getElementById('number').innerHTML = String(numberOfClicks)
		xDirection = -xDirection;
		yDirection = -yDirection;
		r -= 5;
}
});	


// function secondBall(){
// 	context.fillStyle = gradient;
// 	context.beginPath();
// 	context.arc(ballx2,bally2,ballr2,0,2*Math.PI);
// 	context.clearRect(0,0,500,500);
// 	context.fill();	
// 	ballx2 += 2 * ballxDirection2;
// 	bally2 += 5 * ballyDirection2;
// 	if ((bally2 >= 500 - ballr2) || (bally2 <= 0 + ballr2)){
// 		yDirection2 = -yDirection2;
// 	}
// 	if ((ballx2 >= 500 - ballr2) || ballx2 <= 0 + ballr2){
// 		ballxDirection2 = -ballxDirection2;
// 	}

// }

// var newBall = setInterval(secondBall, 20);





// if ((barClick == x) || (barClick == y)){

// }

