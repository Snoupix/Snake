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


    forward() {
        const delta = {
            x: -MOVEMENT_SPEED * Math.sin(this.angle),
            y: MOVEMENT_SPEED * Math.cos(this.angle)
        };
        const head = this._getHead();
        const newHead = {x: head.x + delta.x, y: head.y + delta.y};


        this._spawnNewHead(newHead);
        this._popOldTail();
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