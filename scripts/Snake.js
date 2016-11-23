class Snake {
    constructor() {
        this.body = [{x: (300 / TILE_SIZE) / 2, y: 2}, {x: (300 / TILE_SIZE) / 2, y: 1}];
        this.angle = 0;
    }


    _popOldTail() {
        this.body.pop();
    }


    _spawnNewHead(head) {
        this.body.unshift(head);
    }


    _getHead() {
        return this.body[0];
    }

   turnLeft() {
       this.angle -= Math.PI/2;
   }


   turnRight() {
        this.angle += Math.PI/2;
   }


    forward() {
        const delta = {
            x: -MOVEMENT_SPEED * Math.sin(this.angle),
            y: MOVEMENT_SPEED * Math.cos(this.angle)
        };
        const head = this._getHead();
        const newHead = {x: head.x + delta.x, y: head.y + delta.y};

        if(this.isPointOnBody(newHead)){
            return false;
        }

             // Si newHead est en dehors de l’aire de jeu ou à l’intérieur
     // du corps du serpent, alors le serpent est mort. Retourner false.
      if (newHead.x > (300 / TILE_SIZE) || newHead.x < 0 || newHead.y > (300 / TILE_SIZE) || newHead.y < 0 ){
         
           return false;
      
    }

        this._spawnNewHead(newHead);
        this._popOldTail();
        return true;

        
    }


    

       
   grow() {
        this._spawnNewHead(this._getHead());
   }


   // Le point est-il sur la tête du serpent ? Renvoyer true ou false.
   // “point” à le format {x: _, y: _ }
   isPointOnHead(point) {
       var x1 = point.x;
       var x2 = this._getHead().x;
       var y1 = point.y;
       var y2 = this._getHead().y;

       
       if (Math.abs(x1 - x2) < 0.00001 && (Math.abs(y1 - y2) < 0.000001)){
            return true;

       }else{
           return false;
       }


   }


   // Le point est-t-il n'importe où sur le serpent (y compris la tête) ?  Renvoyer true ou false.
   // “point” à le format {x: _, y: _ }
   isPointOnBody(point) {
       
       var flag = false;
this.body.forEach((node) => {
    
       var x1 = point.x;
       var x2 = node.x;
       var y1 = point.y;
       var y2 = node.y;

       if (Math.abs(x1 - x2) < 0.00001 && (Math.abs(y1 - y2) < 0.000001)){
            flag =true;

       }
    });
       return flag;
   }


    renderTo(context) {
        context.save();
        context.fillStyle = `#ffffff`;
        this.body.forEach((node) => {
            context.fillRect(node.x * TILE_SIZE, node.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    });
        context.restore();
    }
}