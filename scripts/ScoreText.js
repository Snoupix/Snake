class ScoreText {
   constructor() {
       this.pos = {x: 10, y: 30};
       this.score = 0;
   }

   inc() {
       this.score++;
   }


   getScore() {
       return this.score;
   }


   // Dessiner le texte du score à la position this.pos.
   renderTo(context) {
        context.save();
        context.font = "24px Calibri";
        context.fillStyle = "white";
        context.fillText(this.score, this.pos.x, this.pos.y);
        context.restore();
   }
}