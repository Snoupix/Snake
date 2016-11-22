class SnakeGame extends AGame {
    awake() {
        this._hideStartMenu();
        this._showCanvas();


        this.snake = new Snake();
        this.food = new Food();
    }


    _showStartMenu() {
        const startMenu = document.getElementById("startMenu");
        startMenu.style.display = "block";
    }


    _hideStartMenu() {
        const startMenu = document.getElementById("startMenu");
        startMenu.style.display = "none";
    }


    _showCanvas() {
        const canvas = document.getElementById("canvas");
        canvas.style.opacity = "1";
    }


    _hideCanvas() {
        const canvas = document.getElementById("canvas");
        canvas.style.opacity = "0";
    }


   keyDown(keyCode) {
       if(keyCode === 37){this.snake.turnLeft()}
       if(keyCode === 39){this.snake.turnRight()}
   }


   update() {

      if(!this.snake.forward()){
          console.log("fsdfsfs");
          this.destroy();
      }


       // Faire grandir le serpent et bouger la pomme
       if (this.snake.isPointOnHead(this.food.pos)) {
           this.snake.grow();
           this.food.respawn(this.snake);


   }
}

 // Masquer le canvas et afficher le menu
   onDestroy() {
         this._hideCanvas();
         this._showStartMenu();
   }

    draw() {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.snake.renderTo(this.context);
        this.food.renderTo(this.context);
    }
}