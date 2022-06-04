function animate(){
	ctx3.clearRect(0, 0, canvas.width, canvas.height);
	ctx2.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
	dodo.draw();
	dodo.update();	
	handleScoreBoard();
	handleObstacles();
	frame++;
	requestAnimationFrame(animate);

}
animate();
	
//event handling
window.addEventListener("keydown" , function(e){
	keys =[];
	keys[e.keyCode] = true;
	if(keys[37] || keys[38] || keys[39] || keys[40] ){
		dodo.walk();
		movingSound.play();
		movingSound.volume = 0.5;

	}

});
window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
	dodo.moving = false;
});

function scored(){
	score ++;
	gameSpeed += 0.05;
	dodo.x = canvas.width/2 - dodo.width/2;
	dodo.y = canvas.height - dodo.height - 10;
}

function handleScoreBoard(){
	//ctx4.fillStyle = 'black';
	ctx4.StrokeStyle = 'black';
	ctx4.font = '30px Serif';
	ctx4.strokeText('Score', 100, 25);
	ctx4.fillText(score, 115, 75);
}
 
function collision(first, second){
	return ! ( first.x > second.x + second.width ||
			first.x + first.width < second.x ||
			first.y > second.y + second.height ||
			first.y + first.height < second.y);

}
//when dodo die
function resetGame(){
	dodo.x = canvas.width/2 - dodo.width/2;
	dodo.y = canvas.height - dodo.height - 10;
	score = 0;
	

}

