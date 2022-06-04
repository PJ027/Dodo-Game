class Obstacle {
	constructor(x, y, width, height, speed, type){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.type = type;
		this.frameX = 0;
		this.frameY = 0;
		//move randomly 
		this.randomise = Math.floor(Math.random()* 30 + 30);
		//pick random car
		this.carType = Math.floor(Math.random()* numberOfCars);


	}
		draw(){
			/*if(this.type === 'car'){
				if(frame % this.randomise === 0){
					if(this.frameX >= 1) this.frameX =0;
					else this.frameX++;
				} 
				*/
				if(this.type === 'car'){
				//ctx3.fillRect(this.x, this.y, this. width, this.height);
				ctx3.drawImage(car, this.frameX*this.width, this.carType*this.height, grid*2, grid, this.x, this.y, this.width, this.height);
				}
			}

	update(){
		this.x += this.speed * gameSpeed;
		if(this.speed >0){
		
			if(this.x > canvas.width + this.width){
				this.x = 0 - this.width;
			}
		}
		else {
				this.frameX = 1;
			//if car completely disappeared
			if(this.x < 0 -this.width ){
				this.x = canvas.width + this.width;
			}
		}
	}
}
 function initObstacles(){
 	for( let i=0; i<2; i++){
 		let x = i*350;
 		//size(length bw cars, height of car, x-axis(position of car), size of car length, size of car width, speed of car  )
 		carsArray.push(new Obstacle(x, canvas.height - grid*2 - 25, grid*2, grid, 1,'car'));

 	}
 	for( let i=0; i<2; i++){
 		let x = i*300;
 		//size
 		carsArray.push(new Obstacle(x, canvas.height - grid*3 - 30, grid*2, grid, -1,'car'));

 	}
 	for( let i=0; i<2; i++){
 		let x = i*350;
 		//size
 		carsArray.push(new Obstacle(x, canvas.height - grid*4 - 40, grid*2, grid, 1,'car'));

 	}
 	
 	for( let i=0; i<2; i++){
 		let x = i*300;
 		//size
 		carsArray.push(new Obstacle(x, canvas.height - grid*5 - 48, grid*2, grid, -1,'car'));

 	}
 	

 }
 initObstacles();

 function handleObstacles(){
 	for(let i =0; i<carsArray.length; i++){
 		carsArray[i].update();
 		carsArray[i].draw();

 	}
 	//collision of dodo
 	for(let i =0; i < carsArray.length; i++){
 		if(collision(dodo, carsArray[i])){
 			ctx4.drawImage(collisions, 0, 100, 100, 100, dodo.x, dodo.y, 150 , 150);
 			scoreSound.volume = 0.5;
     		scoreSound.play();
 			resetGame();
 		}
 	}


 }