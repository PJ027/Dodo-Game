	class Dodo{
		constructor(){
			this.spriteWidth =48;
			this.spriteHeight=65;
			this.width = this.spriteWidth;
			this.height= this.spriteHeight;
			this.x = canvas.width/2 - this.width/2;
			this.y = canvas.height - this.height - 20;
			this.moving = false;
			this.frameX = 0;
			this.frameY = 0;
			}
		update(){
	//console.log('update');
			if (keys[38]){
				if(this.moving === false){
					this.y -= grid;
					this.moving = true;
					this.frameX = 2;
					this.frameY = 0;
				}
			}
			
			if (keys[40]){ //down
				if(this.moving === false){
					if(this.moving === false && this.y < canvas.height - this.height*2){
						this.y += grid;					
						this.moving = true;
						this.frameY = 2;
						}
				}
			}
			
			
			if (keys[37]){ //left
				if(this.moving === false){
					if(this.moving === false && this.x > this.width){
						this.x -= grid;					
						this.moving = true;
						this.frameY = 3;
						}
				}
			}
			if (keys[39]){ //right
				if(this.moving === false){
					if(this.moving === false && this.x < canvas.width - this.width*2) {
						this.x += grid;					
						this.moving = true;
						this.frameY = 1;
						}
				}
			}
			if(this.y < 0) scored();
		
		}

		draw(){	
			//ctx3.fillRect(this.x, this.y+15, this.width-5, this.height-15);
			ctx3.drawImage(dodoSprite, this.frameX*this.spriteWidth, this.frameY*this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);

		}
		walk(){
			if(this.moving === false) this.frameX = 1;
			else if (this.frameX === 1) this.frameX = 0;
			//console.log('walk');
			
		}

}
const dodo = new Dodo();