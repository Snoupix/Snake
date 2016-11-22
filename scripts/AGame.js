class AGame {
    constructor() {
        const canvas = document.getElementById("canvas");
        this.height = canvas.height;
        this.width = canvas.width;
        this.context = canvas.getContext("2d");
        this.keysDown = [];
        this.keysUp = [];


        this.awake();
        this.updateInterval = setInterval(this._update.bind(this), 1000 / UPDATE_SPEED);
        this._draw();


        document.onkeydown = (e) => {
            this.keysDown.push(e.keyCode);
        };
        document.onkeyup = (e) => {
            this.keysUp.push(e.keyCode);
        };
    }


    keyDown(keyCode) {}
    keyUp(keyCode) {}
    update() {}
    draw() {}
    destroy() {
        clearInterval(this.updateInterval);
        this.onDestroy();
    }


    _update() {
        if (this.keysDown.length) {
            this.keysDown.forEach(this.keyDown.bind(this));
            this.keysDown = [];
        }
        if (this.keysUp.length) {
            this.keysUp.forEach(this.keyUp.bind(this));
            this.keysUp = [];
        }


        this.update();
    }


    _draw() {
        this.draw();
        requestAnimationFrame(this._draw.bind(this));
    }
}