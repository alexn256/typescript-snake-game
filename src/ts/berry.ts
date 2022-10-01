import {canvas, context, cell} from "./app";

export class Berry {

    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    randomPosition() {
        this.x = random(0, canvas.width / cell) * cell;
        this.y = random(0, canvas.height / cell) * cell;
    }

    draw() {
        context.beginPath();
        context.fillStyle = "#1ABC9C";
        context.fillRect(this.x, this.y, cell, cell);
        context.fill();
    }
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}