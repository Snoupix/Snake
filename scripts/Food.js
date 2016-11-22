class Food {
   constructor() {
       this.pos = {x: (300 / TILE_SIZE) / 2, y: (300 / TILE_SIZE) / 2};
   }


   // Changer la position de la pomme sur une nouvelle case libre
   respawn(snake) {
        var RandX = Math.floor(Math.random()*(300/TILE_SIZE));
        var RandY = Math.floor(Math.random()*(300/TILE_SIZE));

        this.pos.x = RandX;
        this.pos.x = RandY;
   }


   // Dessiner la nourriture (un carré jaune) sur le canvas
   renderTo(context) {
        context.save();
        context.fillStyle = `#ffff00`;
        context.fillRect(this.pos.x * TILE_SIZE, this.pos.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        context.restore();
   }
}