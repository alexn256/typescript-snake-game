import {Engine} from "./engine";
import {Snake} from "./snake";
import {Berry} from "./berry";
import {canvas, context} from "./app";
import {Score} from "./score";


export class Game {

    public snake: Snake;

    private score: Score;
    private berry: Berry;

    constructor() {
        this.score = new Score();
        this.snake = new Snake(this.score);
        this.berry = new Berry(50, 50);
        new Engine(this.update.bind(this), this.draw.bind(this));
    }

    update() {
        this.snake.update(this.berry);
    }

    draw() {
        context.fillStyle = '#283747';
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.snake.draw();
        this.berry.draw();
    }

}